import { process } from '$lib/utils/markdown';
import fs from 'fs';

export function getProjects() {
  return fs
    .readdirSync(`src/content/projects`)
    .filter((fileName) => /.+\.md$/.test(fileName))
    .map((fileName) => {
      const { metadata, content } = process(`src/content/projects/${fileName}`);
      return {
        metadata,
        content,
      };
    });
}
