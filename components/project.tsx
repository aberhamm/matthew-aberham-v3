import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ProjectProps {
  name: string;
  description: string | ReactNode;
  href?: string;
  slug?: string;
}

export default function Project({
  name,
  description,
  href,
  slug,
}: ProjectProps) {
  const LinkComponent = href ? (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative shrink-0 pr-3 font-medium transition-colors after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-[calc(100%-12px)] after:origin-bottom-right after:scale-x-0 after:bg-current after:transition-transform after:duration-150 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
    >
      {name}
      <ArrowUpRight className="stroke-muted-foreground absolute top-0 ml-[1px] inline-block h-4 w-4 shrink-0" />
    </Link>
  ) : slug ? (
    <Link
      href={`/projects/${slug}`}
      className="relative shrink-0 pr-3 font-medium transition-colors after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-[calc(100%-12px)] after:origin-bottom-right after:scale-x-0 after:bg-current after:transition-transform after:duration-150 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
    >
      {name}
    </Link>
  ) : (
    <span className="shrink-0 font-medium">{name}</span>
  );

  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex flex-row items-center gap-2">{LinkComponent}</div>
      <p className="text-secondary-foreground">{description}</p>
    </div>
  );
}
