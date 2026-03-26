import { ArrowUpRight } from 'lucide-react';

export default function Social({ name, url }: { name: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent-pop group relative font-mono text-sm transition-colors hover:opacity-70 after:absolute after:bottom-[1px] after:left-0 after:h-[1px] after:w-full after:bg-accent-pop after:transition-transform"
    >
      {name}
      <ArrowUpRight className="ml-0.5 inline-block h-3.5 w-3.5 stroke-current" />
    </a>
  );
}
