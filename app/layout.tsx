import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';
import './globals.css';
import { GlobalStateProvider } from './providers/GlobalStateProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const nhass = localFont({
  src: [
    {
      path: '../public/fonts/NeueHaasDisplay-Roman.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueHaasDisplay-Medium.woff',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-nhass',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Matthew Aberham',
  description: 'Solutions Architect and Full-Stack Engineer.',
  metadataBase: new URL('https://www.matthewaberham.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.matthewaberham.com',
    title: 'Matthew Aberham',
    description: 'Solutions Architect and Full-Stack Engineer.',
    siteName: 'Matthew Aberham',
    images: [
      {
        url: '/api/opengraph',
        width: 1200,
        height: 630,
        alt: 'Matthew Aberham',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matthew Aberham',
    description: 'Solutions Architect and Full-Stack Engineer.',
    images: ['/api/opengraph'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body
        className={`${nhass.className} ${nhass.variable} ${geistSans.variable} ${geistMono.variable}`}
        style={{ fontFamily: 'var(--font-nhass), system-ui, sans-serif' }}
      >
        <GlobalStateProvider initialState={{}}>{children}</GlobalStateProvider>
        {process.env.NODE_ENV === 'production' && (
          <Script
            defer
            src="/a/script.js"
            data-website-id="9bba632e-b581-48c2-b61a-11bd59b9f079"
          />
        )}
      </body>
    </html>
  );
}
