import { getAllProjects } from '@/lib/getProjects';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = getAllProjects();

  const ai = projects.filter((p) => p.category === 'AI');
  const iot = projects.filter((p) => p.category === 'IoT');
  const fpga = projects.filter((p) => p.category === 'FPGA');

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">🚀 Projects</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* AI */}
        <div>
          <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-2 mb-4">
            🤖 AI
          </h2>
          <ul className="space-y-4">
            {ai.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="group block">
                  <h3 className="text-base font-semibold group-hover:text-blue-600">
                    #{p.id} {p.title}
                  </h3>
                  <p className="text-xs text-gray-500">{p.date}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{p.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* IoT */}
        <div>
          <h2 className="text-xl font-semibold text-green-600 dark:text-green-400 flex items-center gap-2 mb-4">
            📡 IoT / Embedded
          </h2>
          <ul className="space-y-4">
            {iot.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="group block">
                  <h3 className="text-base font-semibold group-hover:text-blue-600">
                    #{p.id} {p.title}
                  </h3>
                  <p className="text-xs text-gray-500">{p.date}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{p.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* FPGA */}
        <div>
          <h2 className="text-xl font-semibold text-orange-600 dark:text-orange-400 flex items-center gap-2 mb-4">
            💻  FPGA / ASIC
          </h2>
          <ul className="space-y-4">
            {fpga.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="group block">
                  <h3 className="text-base font-semibold group-hover:text-blue-600">
                    #{p.id} {p.title}
                  </h3>
                  <p className="text-xs text-gray-500">{p.date}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{p.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
