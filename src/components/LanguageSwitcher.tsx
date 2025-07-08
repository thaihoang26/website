'use client';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (lang: string) => {
    const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, '');
    router.push(`/${lang}${pathWithoutLang}`);
  };

  return (
    <select onChange={(e) => switchTo(e.target.value)} className="...">
      <option value="en">English</option>
      <option value="vi">Tiếng Việt</option>
    </select>
  );
}
