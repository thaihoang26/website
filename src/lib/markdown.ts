import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Post } from '@/types/post';

const postsDirectory = path.join(process.cwd(), 'public/content/posts');

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    id: data.id,
    title: data.title,
    date: data.date,
    description: data.description,
    slug: data.slug,
    content: contentHtml,
  };
}
