import { getSectionsContent } from '$lib/utils/markdown';

import { getPosts } from '../../lib/utils/get-posts';

// function getFeaturedProjects() {
//   return getProjects().filter((project) => project.featured);
// }

async function getRecentPosts() {
  const recentPostCount = 4; // TODO: Move into a config
  return (await getPosts()).slice(0, recentPostCount);
}

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  return {
    // TODO: Refactor into single return value for sections
    hero: await getSectionsContent('hero'),
    facts: await getSectionsContent('facts'),
    about: await getSectionsContent('about'),
    cardGrid: await getSectionsContent('cards'),
    // projects: getFeaturedProjects(),
    recentPosts: await getRecentPosts(),
    contact: await getSectionsContent('contact'),
  };
}
