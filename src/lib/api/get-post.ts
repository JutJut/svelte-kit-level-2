export async function getPost(slug: string) {
  try {
    const { default: content, metadata } = await import(`../../../src/content/posts/${slug}.md`);

    return { content, ...metadata };
  } catch (error) {
    console.log(`Error importing blog post content for ${slug}: ${error}`);
  }
}
