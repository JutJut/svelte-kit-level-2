import { getPosts } from '../../lib/api/get-posts';
import { getProjects } from '../../lib/api/get-projects';
import { getSectionsContent } from '../../lib/api/markdown';

async function getFeaturedProjects() {
  return (await getProjects()).filter((project) => project.featured);
}

async function getRecentPosts() {
  const recentPostCount = 4; // TODO: Move into a config
  return (await getPosts()).slice(0, recentPostCount);
}

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  return {
    hero: await getSectionsContent('hero'),
    facts: await getSectionsContent('facts'),
    about: await getSectionsContent('about'),
    cardGrid: await getSectionsContent('cards'),
    projects: await getFeaturedProjects(),
    posts: await getRecentPosts(),
    contact: await getSectionsContent('contact'),
  };
}
