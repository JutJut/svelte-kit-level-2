import { getPosts } from './get-posts';

export async function getTags() {
  const posts = await getPosts();

  return posts
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
}
