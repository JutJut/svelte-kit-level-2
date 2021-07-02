import { process } from '$lib/utils/markdown';
import dayjs from 'dayjs';
import fs from 'fs';

export function getPosts() {
  let posts = fs
    .readdirSync(`src/content/posts`)
    .filter((fileName) => /.+\.md$/.test(fileName))
    .map((fileName) => {
      const { metadata } = process(`src/content/posts/${fileName}`);
      return {
        metadata,
        slug: fileName.slice(0, -3),
      };
    })
    .filter((post) => post.metadata.published)
    .sort(
      (a, b) =>
        (dayjs(b.metadata.date, 'MMM D, YYYY') as any) -
        (dayjs(a.metadata.date, 'MMM D, YYYY') as any)
    );
  return JSON.stringify(posts);
}
