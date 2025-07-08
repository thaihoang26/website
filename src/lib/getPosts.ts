import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/types/post';

const postsDirectory = path.join(process.cwd(), 'public/content/posts');

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = await fs.readdir(postsDirectory);

  return Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        id: data.id,
        title: data.title,
        date: data.date,
        description: data.description,
        slug: data.slug,
        content: '',
      };
    })
  );
}