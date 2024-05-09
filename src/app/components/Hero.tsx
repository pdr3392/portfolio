'use client';

/* eslint-disable max-len */
// eslint-disable-next-line object-curly-newline
import React, { useEffect, useMemo, useState, useRef } from 'react';
import { useWindowSize } from '../hooks/usePageWidth';

export default function Hero(): React.ReactNode {
  const pageWidth = useWindowSize();
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageWidth, setImageWidth] = useState<number | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    function handleResize(): void {
      if (imageRef.current) {
        setImageWidth(imageRef.current.offsetWidth);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function calculateSize(): number {
    const viewportWidth = window.innerWidth;
    const baseWidth = 1440;
    const baseSize = 750;
    const size = baseSize * (viewportWidth / baseWidth);
    return Math.min(size, baseSize);
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

  const pageProps = useMemo(() => {
    let width;
    let height;
    let top;
    let left;

    switch (true) {
      case pageWidth < 345:
        width = size + 100;
        height = size + 100;
        break;
      case pageWidth < 380:
        width = size + 50;
        height = size + 50;
        break;
      case pageWidth < 700:
        width = size + 150;
        height = size + 150;
        break;
      case pageWidth < 981:
        width = size;
        height = size;
        break;
      default:
        width = size;
        height = size;
        break;
    }

    const glowSize = imageWidth ? imageWidth + 40 : 0;

    return {
      width,
      height,
      top,
      left,
      glowSize,
    };
  }, [pageWidth, size, imageWidth]);

  return (
    <div
      className='w-full h-full absolute items-center justify-center top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-[30%]'
      style={{ width: pageProps.width, height: pageProps.height }}
    >
      <div
        className={`top-[50%] left-[${pageProps.left}%] transform -translate-x-[${pageProps.left}%] -translate-y-[50%] rounded-full relative items-center justify-center flex`}
      >
        <div
          className='bg-glow rounded-full absolute blur shadow-inner-glow z-50 opacity-50'
          style={{
            width: pageProps.glowSize,
            height: pageProps.glowSize,
          }}
        />
        <div className='h-4/5 w-4/5 rounded-full bg-herolayer z-20 p-1'>
          <div className='h-full w-full rounded-full'>
            <img
              src='/images/hero.png'
              alt='hero'
              className='h-full w-full rounded-full'
              ref={imageRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
