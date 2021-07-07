import { getPosts } from '$lib/api/get-posts';
import { getProjects } from '$lib/api/get-projects';
import { process } from '$lib/utils/markdown';

function getHero() {
  const { metadata, content } = process('src/content/sections/hero.md');
  return { ...metadata, content };
}

function getAbout() {
  const { metadata, content } = process('src/content/sections/about.md');
  return { ...metadata, content };
}

function getCards() {
  const { metadata, content } = process('src/content/sections/cards.md');
  return { ...metadata, content };
}

function getFeaturedProjects() {
  return getProjects().filter((project) => project.featured);
}

function getRecentPosts() {
  const recentPostCount = 4; // TODO: Put in some config
  return JSON.parse(getPosts()).slice(0, recentPostCount);
}

function getContact() {
  const { metadata, content } = process('src/content/sections/contact.md');
  return { ...metadata, content };
}

export function get() {
  return {
    body: {
      hero: getHero(),
      about: getAbout(),
      cardGrid: getCards(),
      projects: getFeaturedProjects(),
      recentPosts: getRecentPosts(),
      contact: getContact(),
    },
  };
}
