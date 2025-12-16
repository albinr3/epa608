'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function LangSetter() {
  const pathname = usePathname();

  useEffect(() => {
    const lang = pathname.startsWith('/es') ? 'es' : 'en';
    document.documentElement.lang = lang;
  }, [pathname]);

  return null;
}
