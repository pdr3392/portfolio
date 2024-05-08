'use client';

import { useState, useEffect } from 'react';

export const useWindowSize = (): number => {
  const [pageWidth, setpageWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (): void => {
      setpageWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (typeof window === 'undefined') return 0;

  return pageWidth;
};
