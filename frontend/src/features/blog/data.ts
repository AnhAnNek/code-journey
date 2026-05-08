import type { BlogPost } from '@/features/blog/types';

/**
 * Mock blog data for Phase 1 MVP.
 * Will be replaced with API calls in a future phase.
 */
export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    slug: 'understanding-react-server-components',
    title: 'Understanding React Server Components',
    description:
      'A deep dive into how React Server Components work in Next.js App Router and why they change the way we think about data fetching.',
    publishDate: '2026-03-28',
    tags: ['React', 'Next.js', 'Server Components'],
    readingTime: '8 min read',
    content: `React Server Components (RSC) represent a fundamental shift in how we build React applications. Unlike traditional client components that run in the browser, server components execute on the server and send only the rendered output to the client.

In Next.js App Router, every component is a server component by default. This means you can directly fetch data, access backend resources, and keep sensitive logic on the server without shipping extra JavaScript to the client.

One of the biggest advantages is performance. Because server components do not include their JavaScript in the client bundle, your application ships less code to the browser. This results in faster initial page loads and better Core Web Vitals scores.

To use client-side interactivity, you opt in by adding the 'use client' directive at the top of a file. This tells Next.js to include that component in the client bundle. The key is to push client directives as far down the component tree as possible.

Server components can import and render client components, but not the other way around. This creates a clear boundary between server and client code that helps you reason about where your code executes.

Data fetching in server components is straightforward. You can use async/await directly in the component body, fetch from APIs, query databases, or read from the file system. There is no need for useEffect or client-side data fetching libraries for initial page data.

Understanding this model is essential for any developer working with Next.js App Router. It changes how you structure components, manage state, and think about the boundary between server and client.`,
  },
  {
    slug: 'clean-architecture-spring-boot',
    title: 'Clean Architecture with Spring Boot',
    description:
      'How to structure a Spring Boot application using Clean Architecture principles for maintainability and testability.',
    publishDate: '2026-03-20',
    tags: ['Java', 'Spring Boot', 'Architecture'],
    readingTime: '12 min read',
    content: `Clean Architecture, popularized by Robert C. Martin, is a software design philosophy that separates concerns into distinct layers. When applied to Spring Boot, it creates applications that are easy to test, maintain, and evolve over time.

The core idea is the Dependency Rule: source code dependencies must point inward toward higher-level policies. Your business logic should not depend on frameworks, databases, or external services. Instead, those outer layers depend on the inner layers through interfaces.

In a Spring Boot context, the typical layers are: Entities (domain models), Use Cases (application services), Interface Adapters (controllers, repositories), and Frameworks (Spring Boot itself, database drivers, HTTP clients).

The domain layer contains your business entities and rules. These are plain Java objects with no Spring annotations. They represent the core concepts of your application and contain business validation logic.

Use cases orchestrate the flow of data between entities and define application-specific business rules. Each use case class has a single responsibility and is injected with repository interfaces, not concrete implementations.

The adapter layer translates between the format used by use cases and the format needed by external systems. REST controllers convert HTTP requests to use case inputs. Repository implementations convert database results to domain entities.

Spring Boot sits in the outermost layer. It provides dependency injection, auto-configuration, and web server infrastructure. The key insight is that removing Spring Boot should not require changing your business logic.

Testing becomes straightforward with this approach. You can unit test domain logic without Spring. You can test use cases with mock repositories. Integration tests verify the adapters work correctly with real infrastructure.

This architecture requires more upfront effort but pays dividends as the application grows. Changes to the database, API format, or framework version affect only the outer layers, leaving business logic untouched.`,
  },
  {
    slug: 'tailwind-css-best-practices',
    title: 'Tailwind CSS Best Practices for Large Projects',
    description:
      'Practical patterns and conventions for scaling Tailwind CSS in production applications without creating a maintenance nightmare.',
    publishDate: '2026-03-15',
    tags: ['CSS', 'Tailwind', 'Frontend'],
    readingTime: '6 min read',
    content: `Tailwind CSS is incredibly productive for building UIs, but without discipline it can lead to hard-to-maintain templates full of long class strings. Here are practical patterns that keep Tailwind projects clean as they scale.

First, extract components aggressively. When you find yourself repeating the same combination of utility classes, create a reusable component. In React, this means creating a component file. In server-rendered apps, this means using partials or includes.

Use a consistent ordering convention for utility classes. A common approach is: layout, sizing, spacing, typography, colors, effects. Tools like the Tailwind Prettier plugin can automate this sorting for you.

Leverage the design token system. Define your color palette, spacing scale, and typography in the Tailwind configuration. Avoid using arbitrary values like w-[347px] unless absolutely necessary. Consistent tokens create visual harmony.

For dark mode, use the class strategy with next-themes in Next.js projects. This gives you full control over when dark mode activates and allows users to choose their preference. Define both light and dark variants using CSS custom properties.

Component libraries like shadcn/ui provide well-designed, accessible components that use Tailwind internally. They give you a head start on common UI patterns while remaining fully customizable since the code lives in your project.

Keep responsive design systematic. Use mobile-first breakpoints and test at each breakpoint during development. Create layout components that handle responsive behavior so page components remain clean.

Finally, use Tailwind Merge and clsx for dynamic class composition. The cn() utility function combines both tools and is essential for components that accept className as a prop. It prevents class conflicts and allows overrides.`,
  },
  {
    slug: 'docker-for-developers',
    title: 'Docker Fundamentals for Web Developers',
    description:
      'Everything you need to know about Docker to containerize your web applications and set up reliable development environments.',
    publishDate: '2026-03-10',
    tags: ['Docker', 'DevOps', 'Backend'],
    readingTime: '10 min read',
    content: `Docker has become an essential tool for web developers. It solves the "works on my machine" problem by packaging your application with its exact dependencies into a portable container.

A Docker image is a read-only template that contains your application code, runtime, libraries, and system tools. You define it with a Dockerfile, which is a series of instructions that build the image layer by layer.

For a typical Node.js application, your Dockerfile starts with a base image like node:20-alpine, copies your package files, runs npm install, copies your source code, and sets the start command. Each instruction creates a new layer that Docker caches for faster rebuilds.

Multi-stage builds are essential for production images. You use one stage to build your application and a separate, minimal stage to run it. This keeps your production image small by excluding build tools and devDependencies.

Docker Compose simplifies multi-container setups. A docker-compose.yml file defines your application, database, cache, and other services. Running docker compose up starts everything with the correct networking and environment variables.

Volumes allow you to persist data and share files between your host machine and containers. For development, you mount your source code as a volume so changes are reflected immediately without rebuilding the image.

Environment variables configure your application per environment. Docker supports .env files, command-line variables, and secrets management. Never hardcode configuration values in your Dockerfile or application code.

Health checks tell Docker whether your container is functioning correctly. Define a health check command that verifies your application can serve requests. Docker uses this to restart unhealthy containers and route traffic appropriately.

Understanding Docker fundamentals makes you more effective in modern development teams. Most CI/CD pipelines, cloud platforms, and orchestration tools assume containerized applications.`,
  },
  {
    slug: 'typescript-advanced-patterns',
    title: 'Advanced TypeScript Patterns You Should Know',
    description:
      'Practical TypeScript patterns including discriminated unions, template literal types, and conditional types that improve code safety.',
    publishDate: '2026-03-05',
    tags: ['TypeScript', 'Frontend', 'Patterns'],
    readingTime: '7 min read',
    content: `TypeScript offers powerful type system features beyond basic annotations. Mastering these patterns helps you write safer code and catch more bugs at compile time rather than runtime.

Discriminated unions are one of the most useful patterns. By adding a literal type property to each variant of a union, TypeScript can narrow the type in switch statements and if blocks. This is perfect for modeling states like loading, success, and error.

Template literal types let you create string types from combinations. You can define types like event names, CSS class patterns, or API endpoint paths that TypeScript validates at compile time. Combined with mapped types, they enable powerful type transformations.

Conditional types use the extends keyword to create types that depend on other types. The syntax Type extends Condition ? TrueType : FalseType mirrors a ternary expression. This is the foundation for utility types like Extract, Exclude, and ReturnType.

The infer keyword works within conditional types to extract and name parts of a type. You can infer function parameter types, return types, array element types, and promise resolved types. This is essential for building generic utility types.

Generic constraints with extends ensure that type parameters meet certain requirements. Instead of accepting any type, you can require that a generic type has specific properties, extends a base type, or satisfies an interface.

Branded types add compile-time safety to primitive values. By intersecting a primitive with a unique symbol type, you can create distinct types for concepts like UserId, EmailAddress, or Currency that prevent accidental mixing.

The satisfies operator validates that a value matches a type without widening it. This is useful when you want TypeScript to check your object against an interface while preserving the literal types of its properties for autocompletion.

These patterns have real-world applications in API response handling, state management, form validation, and component props. Start with discriminated unions and gradually incorporate more advanced patterns as your comfort grows.`,
  },
];

/**
 * Get all blog posts, sorted by publish date (newest first).
 */
export function getAllPosts(): BlogPost[] {
  return [...MOCK_BLOG_POSTS].sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

/**
 * Get a single blog post by slug.
 * Returns undefined if not found.
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return MOCK_BLOG_POSTS.find((post) => post.slug === slug);
}
