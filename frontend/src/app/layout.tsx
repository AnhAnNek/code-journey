import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Geist } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/atoms/ThemeProvider';
import { ThemeToggle } from '@/components/atoms/ThemeToggle';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: 'Code Journey',
    template: '%s | Code Journey',
  },
  description:
    'Personal blog about software engineering — Java, Spring Boot, Next.js, and real-world development practices.',
  openGraph: {
    title: 'Code Journey',
    description:
      'Personal blog about software engineering — Java, Spring Boot, Next.js, and real-world development practices.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Code Journey',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn('font-sans', geist.variable)}>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
              <div className="flex items-center gap-6">
                <Link href="/" className="text-lg font-bold">
                  Code Journey
                </Link>
                <Link
                  href="/blog"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </div>
              <ThemeToggle />
            </nav>
          </header>

          <main className="mx-auto max-w-5xl px-6 py-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
