import { getTags } from '$lib/api/get-tags';

export function get({ params }) {
  const { slug } = params;
  const tags = JSON.parse(getTags());

  const body = tags[slug.charAt(0).toUpperCase()][slug];

  // TODO: get related posts here too
  return { body: JSON.stringify(body) };
}
