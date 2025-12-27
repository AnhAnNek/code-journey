import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-20">
      {/* Hero Section */}
      <section className="space-y-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900">👋 Hi, I'm An</h1>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I'm a Web Developer passionate about building scalable backends and
          beautiful frontends. I write about <strong>Java</strong>,{' '}
          <strong>Spring Boot</strong>, <strong>Next.js</strong>, and real-world{' '}
          <strong>software engineering</strong> practices.
        </p>
        <a
          href="/blog"
          className="inline-block rounded bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
        >
          📚 Read My Blog
        </a>
      </section>

      {/* About Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-gray-900">About Me</h2>
        <p className="text-gray-700 text-base">
          With a strong foundation in backend development and a deep
          appreciation for great UI/UX, I love solving real-world problems
          through code. I'm especially interested in clean architecture,
          developer experience, and performance optimization.
        </p>
      </section>

      {/* Tech Stack Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900">🛠 Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          {[
            'Java',
            'Spring Boot',
            'Next.js',
            'React',
            'Tailwind CSS',
            'PostgreSQL',
            'Docker',
            'Git',
            'REST APIs',
          ].map((tech) => (
            <div
              key={tech}
              className="bg-gray-100 rounded px-4 py-3 font-medium text-gray-800"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900">📬 Contact Me</h2>
        <p className="text-gray-700">
          Whether you want to collaborate, have a question, or just want to say
          hi — my inbox is open!
        </p>
        <div className="flex space-x-4">
          <a
            href="mailto:an@example.com"
            className="flex items-center space-x-2 text-gray-800 hover:text-black transition"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-800 hover:text-black transition"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-800 hover:text-black transition"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-100 p-4">
          <form className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
            {/* Title */}
            <div className="text-center space-y-1">
              <h2 className="text-3xl font-bold text-gray-800">
                Create Account
              </h2>
              <p className="text-gray-500 text-sm">
                Join us and enjoy a beautiful experience ✨
              </p>
            </div>

            {/* Name */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 
                       focus:outline-none focus:ring-2 focus:ring-pink-400
                       transition"
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200
                       focus:outline-none focus:ring-2 focus:ring-pink-400
                       transition"
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-200
                       focus:outline-none focus:ring-2 focus:ring-pink-400
                       transition"
              />
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-pink-500 focus:ring-pink-400"
                />
                Remember me
              </label>
              <a href="#" className="text-pink-500 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r
                     from-pink-500 to-purple-500 text-white font-semibold
                     hover:opacity-90 transition shadow-lg"
            >
              Sign Up
            </button>

            {/* Footer */}
            <p className="text-center text-sm text-gray-500">
              Already have an account?{' '}
              <a href="#" className="text-pink-500 font-medium hover:underline">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
