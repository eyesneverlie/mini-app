import { useEffect, useState } from 'react';

export function useIsWideScreen(): boolean {
  const [isWide, setIsWide] = useState<boolean>(() => window.innerWidth > 540);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 540px)');

    const handleMediaQueryChange = (e: MediaQueryListEvent): void => {
      setIsWide(e.matches);
    };

    setIsWide(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);

  return isWide;
}