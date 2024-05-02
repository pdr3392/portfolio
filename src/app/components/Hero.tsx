import React from 'react';

export default function Hero(): React.ReactNode {
  return (
    <div className='h-full w-1/2 flex flex-col justify-center items-center self-center py-36 px-24 relative'>
      <div className='h-3/5 w-4/6 rounded-full absolute z-10 p-4'>
        <div className='h-full w-full rounded-full bg-herolayer opacity-20' />
      </div>

      <div className='h-3/5 w-4/6 rounded-full absolute z-20 p-5 opacity-80'>
        <div className='h-full w-full rounded-full'>
          <img
            src='/images/hero.png'
            alt='hero'
            className='h-full w-full rounded-full'
          />
        </div>
      </div>

      <div className='h-3/5 w-4/6 bg-glow rounded-full absolute z-50 blur shadow-inner-glow opacity-30' />
    </div>
  );
}
