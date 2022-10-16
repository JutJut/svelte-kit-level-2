import { getTags } from '$lib/api/get-tags';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const { slug } = params;
  const tags = await getTags();

  return tags[slug.charAt(0).toUpperCase()][slug];
}
