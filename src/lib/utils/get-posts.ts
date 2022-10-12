import dayjs from 'dayjs';

export async function getPosts() {
  const posts = await import.meta.glob('../../content/posts/*');

  const postArr: any = [];

  for (const path in posts) {
    const { metadata } = await posts[path]();
    const slug = path.split('/').pop()?.slice(0, -3);
    postArr.push({ slug, metadata });
  }

  return postArr
    .filter((post) => post.metadata?.published)
    .sort(
      (a, b) =>
        (dayjs(b.metadata.date, 'MMM D, YYYY') as any) -
        (dayjs(a.metadata.date, 'MMM D, YYYY') as any)
    );
}
