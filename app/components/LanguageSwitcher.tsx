'use client';
import { usePathname, useRouter } from 'next/navigation';
import i18nConfig from '../../i18nConfig';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1];
  const otherLocale = i18nConfig.locales.find((l:string) => l !== currentLocale);

  const handleSwitch = () => {
    const segments = pathname.split('/');
    segments[1] = otherLocale!;
    router.push(segments.join('/'));
  };

  return (
    <button
      onClick={handleSwitch}
      className="bg-white text-black px-3 py-1 rounded"
    >
      {otherLocale?.toUpperCase()}
    </button>
  );
}
