import { getPosts } from '../../../lib/api/get-posts';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  return { posts: await getPosts() };
}
