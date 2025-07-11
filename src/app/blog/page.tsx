import Link from 'next/link';
import { getAllPosts } from '@/lib/getPosts';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📝 Blog</h1>
      <ul className="space-y-6">
        {(await posts).map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block group">
              <h2 className="text-2xl font-semibold group-hover:text-blue-600 transition">
                <span className="flex items-center justify-between w-full">
                  <span className="truncate">
                    #{post.id} {post.title}
                  </span>
                  <ArrowRight className="ml-2 w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
                </span>
              </h2>
              <p className="text-sm text-gray-500">
                {format(new Date(post.date), 'HH:mm dd/MM/yyyy')}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-1">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
