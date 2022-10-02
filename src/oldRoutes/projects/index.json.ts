import { getProjects } from '$lib/api/get-projects';

export function get() {
  return { body: getProjects() };
}
