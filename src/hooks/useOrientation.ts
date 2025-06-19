import { useEffect, useState } from 'react';

type ScreenOrientation = 'portrait' | 'landscape';

export const useOrientation = (): string => {
  const getOrientation = (): ScreenOrientation => {
    return window.matchMedia('(orientation: portrait)').matches ? 'portrait' : 'landscape';
  }

  const [orientation, setOrientation] = useState<ScreenOrientation>(getOrientation());

  useEffect(() => {
    const handleOrientationChange = () => setOrientation(getOrientation());

    const mediaQueryList = window.matchMedia('(orientation: portrait)');
    mediaQueryList.addEventListener('change', handleOrientationChange);

    return () => mediaQueryList.removeEventListener('change', handleOrientationChange);
  }, []);

  return orientation;
};