import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Project } from '@/types/project';

const projectsDir = path.join(process.cwd(), 'public/content/projects');

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDir)) return [];

  const fileNames = fs.readdirSync(projectsDir);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(projectsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      id: data.id,
      title: data.title,
      date: data.date,
      description: data.description,
      slug: data.slug,
      category: data.category,
      content: '',
    };
  });
}
