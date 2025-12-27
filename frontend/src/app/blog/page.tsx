const posts = [
  {
    title: 'Understanding React Server Components',
    slug: 'react-server-components',
    summary: 'How RSC works in Next.js App Router',
  },
  {
    title: 'Next.js 13 Routing Explained',
    slug: 'nextjs-routing',
    summary: 'Layouts, pages, and nested routing',
  },
];

export default function BlogPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">📚 Blog</h1>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="rounded border bg-white p-4 hover:shadow"
          >
            <a href={`/blog/${post.slug}`}>
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.summary}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
