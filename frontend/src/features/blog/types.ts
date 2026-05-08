/**
 * Blog feature type definitions.
 */

export interface BlogPost {
  /** URL-friendly unique identifier */
  slug: string;
  /** Post title */
  title: string;
  /** Short summary shown in cards and meta descriptions */
  description: string;
  /** ISO date string of publication */
  publishDate: string;
  /** Categorization tags */
  tags: string[];
  /** Estimated reading time (e.g. "5 min read") */
  readingTime: string;
  /** Optional cover image URL */
  coverImage?: string;
  /** Full article content (plain text paragraphs) */
  content: string;
}
