import { getProjects } from '../../../lib/api/get-projects';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  return { projects: await getProjects() };
}
