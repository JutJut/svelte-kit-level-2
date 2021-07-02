import { process } from '$lib/utils/markdown';
import fs from 'fs';

function getHero() {
  const { metadata, content } = process('src/content/sections/hero.md');
  return { ...metadata, content };
}

function getAbout() {
  const { metadata, content } = process('src/content/sections/about.md');
  return { ...metadata, content };
}

function getFeaturedProjects() {
  let projects = fs
    .readdirSync(`src/content/projects`)
    .filter((fileName) => /.+\.md$/.test(fileName))
    .map((fileName) => {
      const { metadata, content } = process(`src/content/projects/${fileName}`);
      return {
        metadata,
        content,
      };
    });

  return projects.filter((project) => project.metadata.featured);
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
      projects: getFeaturedProjects(),
      contact: getContact(),
    },
  };
}
