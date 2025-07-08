import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Project } from '@/types/project';

const projectsDir = path.join(process.cwd(), 'public/content/projects');

export async function getProjectBySlug(slug: string): Promise<Project> {
  const fullPath = path.join(projectsDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);

  return {
    id: data.id,
    title: data.title,
    date: data.date,
    description: data.description,
    slug: data.slug,
    category: data.category,
    content: processedContent.toString(),
  };
}
