'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/blog', label: 'Blog', icon: '📝' },
    { href: '/admin', label: 'Admin', icon: '⚙️' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r">
        <div className="px-4 py-5 text-xl font-bold border-b">
          🧑‍💻 My Dev Blog
        </div>

        <nav className="flex flex-col">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors
                  ${
                    active
                      ? 'bg-black text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main area */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="h-14 bg-white border-b flex items-center px-6">
          <h2 className="text-lg font-semibold">
            Welcome to My Developer Journey
          </h2>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="rounded bg-white p-6 shadow-sm">{children}</div>
        </main>
      </div>
    </div>
  );
}
