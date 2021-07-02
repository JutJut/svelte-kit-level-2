import { getPosts } from '$lib/api/get-posts';

export function get() {
  return { body: getPosts() };
}
