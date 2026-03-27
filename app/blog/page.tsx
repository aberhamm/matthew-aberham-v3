import { getPosts } from '@/lib/content';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Matthew Aberham',
  description: 'Thoughts on software engineering, architecture, and technology.',
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="mb-10 text-3xl font-bold">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet. Check back soon.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-row items-baseline gap-4"
            >
              <time
                dateTime={post.date}
                className="text-muted-foreground w-16 shrink-0 text-sm"
              >
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
              <Link
                href={`/blog/${post.slug}`}
                className="relative font-medium transition-colors after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-accent-pop after:transition-transform after:duration-150 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:text-accent-pop hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                {post.title}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
