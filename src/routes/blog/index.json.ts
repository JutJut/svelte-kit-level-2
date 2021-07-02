import { process } from '$lib/utils/markdown';
import dayjs from 'dayjs';
import fs from 'fs';

export function get() {
  let posts = fs
    .readdirSync(`src/content/posts`)
    .filter((fileName) => /.+\.md$/.test(fileName))
    .map((fileName) => {
      const { metadata } = process(`src/content/posts/${fileName}`);
      return {
        metadata,
        slug: fileName.slice(0, -3),
      };
    });
  posts.sort(
    (a, b) =>
      (dayjs(a.metadata.date, 'MMM D, YYYY') as any) -
      (dayjs(b.metadata.date, 'MMM D, YYYY') as any)
  );
  let body = JSON.stringify(posts);

  return {
    body,
  };
}
