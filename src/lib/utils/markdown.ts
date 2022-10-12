export async function getSectionsContent(section) {
  try {
    const { default: content, metadata } = await import(
      `../../../src/content/sections/${section}.md`
    );

    return { content, ...metadata };
  } catch (error) {
    console.log(`Error importing sections content for ${section}: ${error}`);
  }
}
