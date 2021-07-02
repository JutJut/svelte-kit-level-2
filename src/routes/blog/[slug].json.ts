import { process } from '$lib/utils/markdown';

export function get({ params }) {
  const { slug } = params;

  const { metadata, content } = process(`src/content/posts/${slug}.md`);
  const body = JSON.stringify({ metadata, content });

  return { body };
}
