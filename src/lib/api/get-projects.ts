export interface Project {
  content: string;
  featured: boolean;
  date: Date;
  title: string;
  repoLink: string;
  demoLink: string;
  techs: string[];
}

export async function getProjects(): Promise<Project[]> {
  const projectsGlob = await import.meta.glob('../../content/projects/*');

  const projects: Project[] = [];

  for (const path in projectsGlob) {
    const { default: content, metadata } = await projectsGlob[path]();
    projects.push({ content, ...metadata });
  }

  return projects;
}
