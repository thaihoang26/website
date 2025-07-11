// src/app/contact/page.tsx

import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | ThaiHoang',
};

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold">📫 Contact Me</h1>

      <p className="text-lg">
        If you'd like to reach out, feel free to send an email:
      </p>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
        <p className="text-md">
          📧 <span className="font-mono select-all">electron16s19@gmail.com</span>
        </p>
      </div>

      <p className="text-lg">
        View the source code of this website:
      </p>

      <Link
        href="https://github.com/thaihoang26/website"
        target="_blank"
        className="inline-block text-blue-600 dark:text-blue-400 underline hover:text-blue-800"
      >
        🔗 GitHub Repository
      </Link>
    </section>
  );
}
