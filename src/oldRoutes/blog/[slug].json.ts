import { getPost } from '$lib/api/get-post';

export function get({ params }) {
  return { body: getPost(params.slug) };
}
