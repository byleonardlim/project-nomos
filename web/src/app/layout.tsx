import type { Metadata } from 'next';
import './globals.css';
import { Commissioner, Noto_Sans_Mono } from 'next/font/google';
import { siteContent } from '@/content/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider';

const body = Noto_Sans_Mono({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '700'],
});

const heading = Commissioner({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
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
        <SmoothScrollProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
