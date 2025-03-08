import { ArrowUpRight } from 'lucide-react';

export default function Social({ name, url }: { name: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground group bg-secondary hover:bg-primary hover:text-primary-foreground relative flex shrink-0 gap-[1px] rounded-full px-2.5 py-1 text-sm transition-colors"
    >
      {name}
      <div className="relative h-4 w-4 overflow-hidden">
        <div className="absolute transition-transform group-hover:translate-x-3 group-hover:-translate-y-4">
          <ArrowUpRight className="stroke-muted-foreground h-4 w-4" />
          <ArrowUpRight className="h-4 w-4 -translate-x-3" />
        </div>
      </div>
    </a>
  );
}
