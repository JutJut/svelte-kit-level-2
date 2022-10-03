export async function getSectionsContent(section) {
  try {
    const { default: body, metadata } = await import(`../../../src/content/sections/${section}.md`);

    return { content: body, ...metadata };
  } catch (error) {
    console.log(`Error importing sections content for ${section}: ${error}`);
  }
}
