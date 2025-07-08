export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-center py-6 mt-12 border-t dark:border-gray-700">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Thai Hoang. All rights reserved.
      </p>
      <p className="text-xs text-gray-400 mt-1">Built with Next.js & Tailwind CSS</p>
    </footer>
  );
}
