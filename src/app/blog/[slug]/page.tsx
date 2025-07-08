import Link from 'next/link';
import { getPostBySlug } from '@/lib/markdown';
import { getAllPosts } from '@/lib/getPosts';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';

type Params = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: Params) {
  const post = await getPostBySlug(params.slug);
  const posts = await getAllPosts();

  if (!post) return notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8 mt-8">
      {/* Sidebar */}
      <aside className="md:w-1/4 hidden md:block">
        <h2 className="text-xl font-semibold mb-4">📝 Other Posts</h2>
        <ul className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className={`hover:underline ${
                  p.slug === params.slug ? 'font-bold text-black dark:text-white' : ''
                }`}
              >
                #{p.id} {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Nội dung */}
      <article className="md:w-3/4 space-y-4">
        <Link
          href="/blog"
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
        >
          ← Back to blog
        </Link>

        <h1 className="text-3xl font-bold">#{post.id} {post.title}</h1>
        <p className="text-sm text-gray-500">
          {format(new Date(post.date), 'HH:mm dd/MM/yyyy')}
        </p>

        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
