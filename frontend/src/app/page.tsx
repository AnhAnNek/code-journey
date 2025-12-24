export default function HomePage() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">
        Hi, Van An, I’m building{" "}
        <span className="text-blue-600">Code Journey</span> 👋
      </h2>

      <p className="text-lg text-gray-700">
        This is my personal tech blog where I share my journey in software
        engineering, backend development, and real-world coding experiences.
      </p>

      <ul className="list-disc list-inside text-gray-700">
        <li>Java & Spring Boot</li>
        <li>React & Next.js</li>
        <li>System Design & Clean Code</li>
        <li>Learning notes & interview prep</li>
      </ul>

      <a
        href="/blog"
        className="inline-block rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        Read the blog →
      </a>
    </section>
  );
}
