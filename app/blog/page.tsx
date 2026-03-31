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
    <div className="mx-auto max-w-(--breakpoint-md) px-5 py-20 text-sm sm:px-10 md:px-20">
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
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group"
              >
                <p className="group-hover:text-accent-pop text-sm font-medium transition-colors">
                  {post.title}
                </p>
                <p className="text-muted-foreground mt-1 line-clamp-2 text-sm">
                  {post.description}
                </p>
                <div className="mt-2 flex items-center gap-2">
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
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-1.5">
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
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
