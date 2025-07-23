import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/lib/projectMarkdown';
import { getAllProjects } from '@/lib/getProjects';
import { format } from 'date-fns';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = await getProjectBySlug(await (await params).slug);
  const allProjects = await getAllProjects();

  if (!project) return notFound();

  const currentSlug = slug;

  return (
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8 mt-8">
      <aside className="md:w-1/4 hidden md:block">
        <h2 className="text-xl font-semibold mb-4">Other Projects</h2>

        {/* AI group */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">AI</h3>
          <ul className="space-y-1 text-sm">
            {allProjects
              .filter((p) => p.category === 'AI')
              .map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className={`hover:underline ${
                      p.slug === currentSlug
                        ? 'font-bold text-black dark:text-white'
                        : 'text-blue-600 dark:text-blue-400'
                    }`}
                  >
                    # {p.id} {p.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        {/* IoT group */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">IoT / Embedded</h3>
          <ul className="space-y-1 text-sm">
            {allProjects
              .filter((p) => p.category === 'IoT')
              .map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className={`hover:underline ${
                      p.slug === currentSlug
                        ? 'font-bold text-black dark:text-white'
                        : 'text-blue-600 dark:text-blue-400'
                    }`}
                  >
                    # {p.id} {p.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        {/* IC group */}
        <div>
          <h3 className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-1">IC Design – FPGA & ASIC</h3>
          <ul className="space-y-1 text-sm">
            {allProjects
              .filter((p) => p.category === 'FPGA')
              .map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className={`hover:underline ${
                      p.slug === currentSlug
                        ? 'font-bold text-black dark:text-white'
                        : 'text-blue-600 dark:text-blue-400'
                    }`}
                  >
                    # {p.id} {p.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </aside>

      <article className="md:w-3/4 space-y-4">
        <Link
          href="/projects"
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
        >
          ← Back to projects
        </Link>

        <h1 className="text-3xl font-bold">
          #{project.id} {project.title}
        </h1>
        <p className="text-sm text-gray-500">
          {format(new Date(project.date), 'HH:mm dd/MM/yyyy')}
        </p>

        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      </article>
    </div>
  );
}
