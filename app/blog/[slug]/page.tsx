import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { MDXContent } from '@/components/mdx-content';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function getRelatedPosts(currentSlug: string, currentTags: string[] = []) {
  return allPosts
    .filter((p) => p.published && p.slug !== currentSlug)
    .map((p) => ({
      ...p,
      relevance: p.tags
        ? p.tags.filter((t) => currentTags.includes(t)).length
        : 0,
    }))
    .sort((a, b) => b.relevance - a.relevance || new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
}

export async function generateStaticParams() {
  return allPosts
    .filter((post) => post.published)
    .map((post) => ({
      slug: post.slug,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Matthew Aberham`,
    description: post.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug && p.published);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.tags || []);

  return (
    <div className="mx-auto max-w-(--breakpoint-md) px-5 py-20 sm:px-10 md:px-20">
      <Link
        href="/blog"
        className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="mb-3 text-3xl font-bold">{post.title}</h1>
          <div className="flex flex-row items-center gap-3">
            <time
              dateTime={post.date}
              className="text-muted-foreground text-sm"
            >
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-muted text-muted-foreground rounded-md px-1.5 py-0.5 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <div className="mx-auto max-w-2xl">
          <MDXContent code={post.body.code} />
        </div>
      </article>

      {/* Author Footer */}
      <footer className="border-border mt-16 border-t pt-8">
        <div className="flex items-start gap-4">
          <div>
            <p className="text-sm font-semibold">Matthew Aberham</p>
            <p className="text-muted-foreground mt-1 text-sm">
              Solutions Architect and Full-Stack Engineer at Perficient.
              Writing about AI developer tooling, infrastructure, and
              security.
            </p>
          </div>
        </div>
      </footer>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-6 text-xl font-semibold">Read More</h2>
          <div className="flex flex-col gap-4">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group border-border hover:border-muted-foreground/30 rounded-lg border p-4 transition-colors"
              >
                <p className="group-hover:text-accent-pop text-sm font-medium transition-colors">
                  {related.title}
                </p>
                <p className="text-muted-foreground mt-1 line-clamp-2 text-sm">
                  {related.description}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <time
                    dateTime={related.date}
                    className="text-muted-foreground text-xs"
                  >
                    {new Date(related.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                  {related.tags && related.tags.length > 0 && (
                    <div className="flex gap-1.5">
                      {related.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-muted text-muted-foreground rounded-md px-1.5 py-0.5 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
