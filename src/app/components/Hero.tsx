'use client';

import React, { useEffect, useState } from 'react';

export default function Hero(): React.ReactNode {
  function calculateSize(): string {
    const viewportWidth = window.innerWidth;
    const baseWidth = 1440;
    const baseSize = 750;
    const size = baseSize * (viewportWidth / baseWidth);
    return `${Math.min(size, baseSize)}px`;
  }

  const [size, setSize] = useState(calculateSize());
  useEffect(() => {
    function handleResize(): void {
      setSize(calculateSize());
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className='w-full h-full absolute items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      style={{ width: size, height: size }}
    >
      <div className='top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full relative items-center justify-center flex'>
        <div
          className='bg-glow rounded-full absolute blur shadow-inner-glow z-50 opacity-50'
          style={{
            width: `calc(${size} - 110px)`,
            height: `calc(${size} - 110px)`,
          }}
        />
        <div className='h-4/5 w-4/5 rounded-full bg-herolayer z-20 p-1'>
          <div className='h-full w-full rounded-full'>
            <img
              src='/images/hero.png'
              alt='hero'
              className='h-full w-full rounded-full'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
