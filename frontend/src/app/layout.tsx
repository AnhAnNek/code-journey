import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code Journey",
  description:
    "A developer blog about software engineering, backend, and fullstack journey",
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
          <div className="mx-auto max-w-5xl px-4 py-4 flex justify-between">
            <h1 className="font-bold text-lg">Code Journey</h1>
            <nav className="space-x-4 text-sm">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
              <a href="/admin" className="hover:underline">
                Admin
              </a>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>

        <footer className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-4 text-sm text-gray-500">
            © {new Date().getFullYear()} Code Journey
          </div>
        </footer>
      </body>
    </html>
  );
}
