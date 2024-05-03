import { BsLinkedin, BsGithub } from 'react-icons/bs';
import React from 'react';
import Link from 'next/link';

export default function NameSection(): React.ReactNode {
  return (
    <div className='h-full w-1/4 flex flex-col justify-center items-start z-50'>
      <h1 className='font-Raleway font-extrabold text-white text-5xl max-w-2'>
        Pedro Correia
      </h1>
      <p className='font-Raleway font-normal text-xl text-white opacity-50'>
        Fullstack Developer
      </p>
      <div className='flex flex-row gap-4 items-center'>
        <Link href='https://www.linkedin.com/in/phrcorreia/' target='_blank'>
          <BsLinkedin className='text-white text-2xl mt-4 cursor-pointer opacity-50' />
        </Link>
        <Link href='https://github.com/pdr3392' target='_blank'>
          <BsGithub className='text-white text-2xl mt-4 cursor-pointer opacity-50' />
        </Link>
      </div>
    </div>
  );
}
