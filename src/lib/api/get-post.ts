import { process } from '$lib/utils/markdown';

export function getPost(slug: string) {
  const { metadata, content } = process(`src/content/posts/${slug}.md`);

  return JSON.stringify({ metadata, content });
}
