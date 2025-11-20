import type { Metadata } from 'next';
import './globals.css';
import { Source_Sans_3 } from 'next/font/google';
import { siteContent } from '@/content/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const sans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '600', '700'],
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
    <html lang="en" suppressHydrationWarning className={sans.variable}>
      <body className="min-h-screen text-foreground">
        <div className="relative flex min-h-screen flex-col">
          <Header />

          <main className="flex-1 z-50 mb-64 lg:mb-48">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
