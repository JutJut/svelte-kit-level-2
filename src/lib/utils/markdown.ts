export async function getSectionsContent(file) {
  try {
    const { default: body, metadata } = await import(`../../../src/content/sections/${file}.md`);

    return { content: body, ...metadata };
  } catch (error) {
    console.log(`Error importing sections content: ${error}`);
  }
}
