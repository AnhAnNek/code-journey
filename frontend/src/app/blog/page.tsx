import type { Metadata } from 'next';
import { getAllPosts } from '@/features/blog/data';
import { BlogCard } from '@/components/molecules/BlogCard';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articles about Java, Spring Boot, Next.js, and real-world software engineering practices.',
  openGraph: {
    title: 'Blog | Code Journey',
    description:
      'Articles about Java, Spring Boot, Next.js, and real-world software engineering practices.',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="space-y-8">
      {/* Page header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="text-muted-foreground">
          Thoughts on software engineering, architecture, and the tools I use
          every day.
        </p>
      </div>

      {/* Post grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            description={post.description}
            publishDate={post.publishDate}
            tags={post.tags}
            readingTime={post.readingTime}
          />
        ))}
      </div>
    </section>
  );
}
