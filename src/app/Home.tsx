import * as React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Home(): React.ReactElement {
  return (
    <div className='flex h-lvh w-lvw bg-bg'>
      <div className='flex flex-row h-full w-full px-36'>
        <div className='h-full w-1/4 flex flex-col justify-center items-start'>
          <h1 className='font-Raleway font-extrabold text-white text-5xl max-w-2'>
            Pedro Correia
          </h1>
          <p className='font-Raleway font-normal text-xl text-white opacity-50'>
            Fullstack Developer
          </p>
          <div className='flex flex-row gap-4 items-center'>
            <BsLinkedin className='text-white text-2xl mt-4 cursor-pointer opacity-50' />
            <BsGithub className='text-white text-2xl mt-4 cursor-pointer opacity-50' />
          </div>
        </div>

        <div className='h-full w-1/2 flex flex-col justify-center items-center self-center py-36 px-24 relative'>
          <div className='h-full w-full bg-black rounded-full z-10' />

          <div className='w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className='inset-0 bg-glow rounded-lg blur shadow-inner-glow z-0' />
          </div>
        </div>
        <div className='h-full w-1/4 flex flex-col justify-center items-start bg-red-400' />
      </div>
    </div>
  );
}
