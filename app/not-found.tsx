import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Matthew Aberham | 404',
  openGraph: {
    images: [
      {
        url: `/api/opengraph?title=${encodeURIComponent('404 - Not Found')}`,
        alt: 'Matthew Aberham',
      },
    ],
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2">
      <p>Whoops! Could not find the page you were looking for.</p>
      <Link
        href="/"
        className="decoration-foreground/30 underline underline-offset-2 transition-all hover:opacity-70"
      >
        Go back home
      </Link>
    </div>
  );
}
