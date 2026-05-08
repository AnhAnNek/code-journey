import { api } from "@/lib/axios";

/**
 * Fetch all posts.
 */
export async function getPosts() {
  const response = await api.get("/posts");
  return response.data;
}

/**
 * Fetch a single post by slug.
 */
export async function getPostBySlug(slug: string) {
  const response = await api.get(`/posts/${slug}`);
  return response.data;
}

/**
 * Create a new post.
 */
export async function createPost(data: { title: string; content: string }) {
  const response = await api.post("/posts", data);
  return response.data;
}
