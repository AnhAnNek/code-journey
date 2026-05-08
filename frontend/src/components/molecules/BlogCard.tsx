import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  tags: string[];
  readingTime: string;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function BlogCard({
  slug,
  title,
  description,
  publishDate,
  tags,
  readingTime,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <Card className="h-full transition-all duration-200 group-hover:shadow-lg group-hover:border-primary/20">
        <CardHeader className="space-y-2">
          <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(publishDate)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {readingTime}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
