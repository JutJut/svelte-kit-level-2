import { getSectionsContent } from '../lib/utils/markdown';

// function getHero() {
//   const { metadata, content } = process('src/content/sections/hero.md');
//   return { ...metadata, content };
// }

// function getFacts() {
//   const { metadata, content } = process('src/content/sections/facts.md');
//   return { ...metadata, content };
// }

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

async function getContact() {
  // const { metadata, content } = process('src/content/sections/contact.md');
  return await getSectionsContent('contact');
}

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  return {
    // hero: getHero(),
    // facts: getFacts(),
    // about: getAbout(),
    // cardGrid: getCards(),
    // projects: getFeaturedProjects(),
    // recentPosts: getRecentPosts(),
    contact: await getContact(),
  };
}
