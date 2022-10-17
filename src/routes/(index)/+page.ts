import { getPosts } from '$lib/api/get-posts';
import { getProjects } from '$lib/api/get-projects';
import { getSection } from '$lib/api/get-section';

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
    hero: await getSection('hero'),
    facts: await getSection('facts'),
    about: await getSection('about'),
    cardGrid: await getSection('cards'),
    projects: await getFeaturedProjects(),
    posts: await getRecentPosts(),
    contact: await getSection('contact'),
  };
}
