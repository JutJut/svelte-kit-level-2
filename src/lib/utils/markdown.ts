export async function getSectionsContent(section) {
  try {
    const { default: body, metadata } = await import(`../../../src/content/sections/${section}.md`);

    // TODO: Test below code esp. line 7-9
    // export async function load({ params }){
    //   const post = await import(`../${params.slug}.md`)
    //   const { title, date } = post.metadata
    //   const content = post.default

    //   return {
    //     content,
    //     title,
    //     date,
    //   }
    // }

    return { content: body, ...metadata };
  } catch (error) {
    console.log(`Error importing sections content for ${section}: ${error}`);
  }
}
