'use client';

import React, { useEffect, useState } from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';

export default function ArrowDown(): React.ReactNode {
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    function handleScroll(): void {
      const targetElement = document.getElementById('page-wrapper');

      if (!targetElement) return;

      const rect = targetElement.getBoundingClientRect();

      if (rect.top !== 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='w-full h-full absolute items-end justify-center flex pb-10'>
      <BsArrowDownCircle
        className={`text-herolayer text-2xl cursor-pointer opacity-50 ${isAtTop ? 'hidden' : ''}`}
      />
    </div>
  );
}
