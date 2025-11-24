import type { Metadata } from 'next';
import './globals.css';
import { Source_Sans_3, Work_Sans } from 'next/font/google';
import { siteContent } from '@/content/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackgroundEffect } from '@/components/layout/BackgroundEffect';

const body = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500'],
});

const heading = Work_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '700'],
});

const baseUrl =
  typeof process.env.NEXT_PUBLIC_SITE_URL === 'string' &&
  process.env.NEXT_PUBLIC_SITE_URL.length > 0
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : new URL('https://nomologi.com');

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  metadataBase: baseUrl,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    url: baseUrl,
    siteName: siteContent.brand.name,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${body.variable} ${heading.variable}`}
    >
      <body className="min-h-screen text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: siteContent.brand.name,
              url: baseUrl.toString(),
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: siteContent.meta.title,
              url: baseUrl.toString(),
            }),
          }}
        />
        <BackgroundEffect />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
