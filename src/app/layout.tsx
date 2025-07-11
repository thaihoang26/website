'use client';

import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
          <Footer />
        </ThemeProvider>

        {/* Umami analytics script */}
        <Script
          async
          defer
          src="https://analytics.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        />
      </body>
    </html>
  );
}
