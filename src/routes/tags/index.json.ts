import { getTags } from '$lib/api/get-tags';

export function get() {
  return { body: getTags() };
}
