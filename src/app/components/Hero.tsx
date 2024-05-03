import React from 'react';

export default function Hero(): React.ReactNode {
  return (
    <div className='w-full h-full absolute items-center justify-center top-0 left-0'>
      <div className='top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full relative items-center justify-center flex'>
        <div
          className='bg-glow rounded-full absolute blur shadow-inner-glow z-50 opacity-50'
          style={{ width: 'calc(80% + 30px', height: 'calc(80% + 30px)' }}
        />
        <div className='h-4/5 w-4/5 rounded-full bg-herolayer z-20 p-1 opacity-60'>
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
