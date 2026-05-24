import { getPosts } from '@/lib/content';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Matthew Aberham',
  description:
    'Writing about AI tooling, infrastructure, and the security gaps nobody is talking about.',
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="mx-auto max-w-(--breakpoint-lg) px-5 py-20 text-sm sm:px-10 md:px-20">
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="mb-2 text-3xl font-bold">Blog</h1>
      <p className="text-muted-foreground mb-10 text-sm">
        Writing about AI tooling, infrastructure, and the security gaps nobody
        is talking about.
      </p>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet. Check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-2"
              >
                <p className="group-hover:text-accent-pop font-medium transition-colors">
                  {post.title}
                </p>
                <p className="text-muted-foreground line-clamp-3 text-sm">
                  {post.description}
                </p>
                <time
                  dateTime={post.date}
                  className="text-muted-foreground text-xs"
                >
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
