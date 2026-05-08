import { api } from "@/lib/axios";

/**
 * Login with email and password.
 */
export async function login(email: string, password: string) {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
}

/**
 * Register a new user account.
 */
export async function register(data: {
  name: string;
  email: string;
  password: string;
}) {
  const response = await api.post("/auth/register", data);
  return response.data;
}
