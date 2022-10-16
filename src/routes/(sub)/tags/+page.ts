import { getTags } from '../../../lib/api/get-tags';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  return { tags: await getTags() };
}
