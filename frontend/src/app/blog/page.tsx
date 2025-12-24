type Post = {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
};

const mockPosts: Post[] = [
  {
    id: 1,
    title: "How I design OTP service in Spring Boot",
    excerpt: "A clean and scalable approach for OTP generation and validation.",
    slug: "otp-service-spring-boot",
  },
  {
    id: 2,
    title: "Spring Boot vs Spring MVC",
    excerpt: "Understanding the real difference with practical examples.",
    slug: "spring-boot-vs-spring-mvc",
  },
];

export default function BlogPage() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold">Blog</h2>

      <div className="space-y-6">
        {mockPosts.map((post) => (
          <article
            key={post.id}
            className="rounded border bg-white p-5 hover:shadow"
          >
            <h3 className="text-xl font-semibold">
              <a href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </a>
            </h3>

            <p className="mt-2 text-gray-600">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
