import { process } from '$lib/utils/markdown';
import fs from 'fs';

export function getTags() {
  const tags = fs
    .readdirSync(`src/content/posts`)
    .filter((fileName) => /.+\.md$/.test(fileName))
    .map((fileName) => {
      const { metadata } = process(`src/content/posts/${fileName}`);
      return {
        metadata,
      };
    })
    .filter((post) => post.metadata.published)
    .map((post) => post.metadata.tags)
    .flatMap((x) => x)
    .reduce((acc, tag) => {
      const tags = { ...acc };
      const key = tag.toLowerCase();
      const letter = tag.charAt(0);
      const count = acc[letter] && acc[letter][key] ? acc[letter][key].count + 1 : 1;
      tags[letter] = { ...acc[letter], [key]: { count, label: tag } };
      return tags;
    }, {});

  return JSON.stringify(tags);
}
