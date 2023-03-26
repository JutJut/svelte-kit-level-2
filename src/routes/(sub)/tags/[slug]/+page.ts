import { getPosts } from '$lib/api/get-posts';
import { getTags } from '$lib/api/get-tags';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const { slug } = params;
  const tags = await getTags();
  const posts = (await getPosts()).filter((post) =>
    post.tags.map((tag) => tag.toLowerCase()).includes(slug)
  );

  return { ...tags[slug.charAt(0).toUpperCase()][slug], posts };
}
