import { getPost } from '$lib/api/get-post';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const { slug } = params;

  // TODO: consider checking for published flag

  return { post: await getPost(slug) };
}
