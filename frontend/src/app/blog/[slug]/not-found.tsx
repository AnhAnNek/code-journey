import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogNotFound() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-20 text-center">
      <h1 className="text-4xl font-bold">Post Not Found</h1>
      <p className="max-w-md text-muted-foreground">
        The blog post you are looking for does not exist or may have been
        removed.
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>
    </div>
  );
}
