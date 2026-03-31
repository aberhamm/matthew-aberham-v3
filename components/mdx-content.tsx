'use client';

import { useMDXComponent } from 'next-contentlayer2/hooks';
import { type ReactNode, useState } from 'react';

interface MDXContentProps {
  code: string;
}

interface ComponentProps {
  children?: ReactNode;
}

function MdxImage({ alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className="relative mt-6 block aspect-video w-full overflow-hidden rounded-md border">
      {!loaded && (
        <span className="bg-muted absolute inset-0 animate-shimmer" />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </span>
  );
}

const components = {
  h1: ({ children, ...props }: ComponentProps) => (
    <h1
      className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: ComponentProps) => (
    <h2
      className="border-b-border mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: ComponentProps) => (
    <h3
      className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: ComponentProps) => (
    <h4
      className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({ children, ...props }: ComponentProps) => (
    <h5
      className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight"
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({ children, ...props }: ComponentProps) => (
    <h6
      className="mt-8 scroll-m-20 text-base font-semibold tracking-tight"
      {...props}
    >
      {children}
    </h6>
  ),
  a: ({ children, ...props }: ComponentProps) => (
    <a
      className="text-primary font-medium underline underline-offset-4"
      {...props}
    >
      {children}
    </a>
  ),
  p: ({ children, ...props }: ComponentProps) => (
    <p className="leading-relaxed [&:not(:first-child)]:mt-6" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: ComponentProps) => (
    <ul className="my-6 ml-6 list-disc" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: ComponentProps) => (
    <ol className="my-6 ml-6 list-decimal" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: ComponentProps) => (
    <li className="mt-2" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: ComponentProps) => (
    <blockquote
      className="border-border mt-6 border-l-2 pl-6 italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
  img: MdxImage,
  hr: ({ ...props }) => (
    <hr className="border-border my-4 md:my-8" {...props} />
  ),
  pre: ({ children, ...props }: ComponentProps) => (
    <pre
      className="mt-6 mb-4 overflow-x-auto rounded-lg border py-4 text-sm [&>code]:grid [&>code]:bg-transparent [&>code]:p-0 [&>code]:border-0"
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ children, ...props }: ComponentProps) => (
    <code
      className="bg-muted relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm"
      {...props}
    >
      {children}
    </code>
  ),
  table: ({ children, ...props }: ComponentProps) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full border-collapse text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: ComponentProps) => (
    <thead className="border-b" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: ComponentProps) => (
    <tbody className="divide-y" {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }: ComponentProps) => (
    <tr className="hover:bg-muted/50 border-b transition-colors" {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }: ComponentProps) => (
    <th className="px-4 py-4 text-left align-middle font-medium" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: ComponentProps) => (
    <td className="px-4 py-4 align-middle" {...props}>
      {children}
    </td>
  ),
};

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
