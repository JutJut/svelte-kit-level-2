import { getSectionsContent } from '../lib/utils/markdown';

// function getAbout() {
//   const { metadata, content } = process('src/content/sections/about.md');
//   return { ...metadata, content };
// }

// function getCards() {
//   const { metadata, content } = process('src/content/sections/cards.md');
//   return { ...metadata, content };
// }

// function getFeaturedProjects() {
//   return getProjects().filter((project) => project.featured);
// }

// function getRecentPosts() {
//   const recentPostCount = 4; // TODO: Put in some config
//   return JSON.parse(getPosts()).slice(0, recentPostCount);
// }

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  return {
    // TODO: Refactor into single return value for sections
    hero: await getSectionsContent('hero'),
    facts: await getSectionsContent('facts'),
    about: await getSectionsContent('about'),
    cardGrid: await getSectionsContent('cards'),
    // projects: getFeaturedProjects(),
    // recentPosts: getRecentPosts(),
    contact: await getSectionsContent('contact'),
  };
}
