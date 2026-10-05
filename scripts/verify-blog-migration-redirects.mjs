import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contractPath = path.join(repoRoot, 'content/blog-migration-redirects.json');
const contract = JSON.parse(await readFile(contractPath, 'utf8'));
const sourceFlagIndex = process.argv.indexOf('--source-manifest');
const sourceManifestPath = sourceFlagIndex === -1 ? null : process.argv[sourceFlagIndex + 1];

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

invariant(contract.schemaVersion === 1, 'schemaVersion must be 1');
invariant(contract.canonicalOrigin === 'https://matthew.systems', 'canonicalOrigin is invalid');
invariant(Array.isArray(contract.redirects), 'redirects must be an array');
invariant(contract.redirects.length === 38, `expected 38 redirects, got ${contract.redirects.length}`);
invariant(
  sha256(JSON.stringify(contract.redirects)) === contract.redirectsSha256,
  'redirectsSha256 does not match the canonical redirect array',
);

const sources = new Set();
const destinations = new Set();
for (const redirect of contract.redirects) {
  invariant(Object.keys(redirect).join(',') === 'source,destination,permanent', `unexpected shape for ${redirect.source}`);
  invariant(/^\/blog\/[a-z0-9-]+$/.test(redirect.source), `invalid or wildcard source: ${redirect.source}`);
  invariant(!sources.has(redirect.source), `duplicate source: ${redirect.source}`);
  invariant(!destinations.has(redirect.destination), `duplicate destination: ${redirect.destination}`);
  invariant(redirect.permanent === true, `redirect is not permanent: ${redirect.source}`);
  invariant(
    redirect.destination === `https://matthew.systems/en/insights/${redirect.source.slice('/blog/'.length)}`,
    `source and destination slugs differ: ${redirect.source}`,
  );
  sources.add(redirect.source);
  destinations.add(redirect.destination);
}

const excludedSlug = 'eu-ai-sovereignty-infrastructure-not-models';
invariant(!sources.has(`/blog/${excludedSlug}`), 'new-site-only slug appears in redirect sources');
invariant(!destinations.has(`https://matthew.systems/en/insights/${excludedSlug}`), 'new-site-only slug appears in redirect destinations');

if (sourceFlagIndex !== -1) {
  invariant(sourceManifestPath, '--source-manifest requires a path');
  const sourceBytes = await readFile(path.resolve(sourceManifestPath));
  invariant(sha256(sourceBytes) === contract.generatedFrom.sourceManifestSha256, 'source manifest checksum does not match provenance');
  const manifest = JSON.parse(sourceBytes);
  const expected = manifest.posts
    .flatMap((post) => post.legacyPaths
      .filter((entry) => entry.disposition === 'permanent-redirect')
      .map((entry) => ({
        source: entry.path,
        destination: new URL(entry.destination, manifest.canonicalOrigin).href.replace(/\/$/, ''),
        permanent: true,
      })))
    .sort((left, right) => left.source.localeCompare(right.source));
  invariant(JSON.stringify(expected) === JSON.stringify(contract.redirects), 'redirect contract differs from source manifest');
}

console.log(`PASS: ${contract.redirects.length} exact blog redirects verified${sourceManifestPath ? ' against source manifest' : ''}.`);
