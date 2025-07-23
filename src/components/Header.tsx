'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import { SiGithub } from 'react-icons/si';


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-xl border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
          Thai Hoang
        </Link>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-gray-700 dark:text-gray-300'
              } hover:text-blue-500 dark:hover:text-blue-300 hover:underline underline-offset-4 transition text-[16px]`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="https://github.com/thaihoang26" target="_blank" rel="noopener noreferrer">
            <SiGithub className="w-8 h-8 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" />

          </Link>
          <button
            className="md:hidden text-2xl font-bold text-gray-700 dark:text-gray-200 border border-gray-400 dark:border-gray-600 px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-white dark:bg-gray-900 shadow-md border-t border-gray-200 dark:border-gray-700 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-800 dark:text-gray-300'
              } hover:text-blue-500 dark:hover:text-blue-300 transition`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
