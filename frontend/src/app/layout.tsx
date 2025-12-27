import './globals.css';

export const metadata = {
  title: 'Code Journey',
  description: 'Personal blog about software engineering',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <nav className="mx-auto max-w-5xl px-6 py-4 flex gap-6">
            <a href="/" className="font-bold">
              Code Journey
            </a>
            <a href="/blog" className="text-gray-600 hover:text-black">
              Blog
            </a>
            <a href="/about" className="text-gray-600 hover:text-black">
              About
            </a>
          </nav>
        </header>

        <main className="mx-auto max-w-5xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
