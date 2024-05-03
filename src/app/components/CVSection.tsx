'use client';

/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import Link from 'next/link';
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { RiDownloadLine } from 'react-icons/ri';

export default function CVSection(): React.ReactNode {
  return (
    <div className='h-full w-1/4 flex flex-col justify-center items-center gap-4 z-50'>
      <a href='/cv.pdf' download='cv'>
        <div className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-herolayer before:absolute before:left-0 before:bottom-0 cursor-pointer flex flex-row gap-2 items-center pb-2'>
          <p className='text-herolayer font-Raleway text-base'>Download CV</p>
          <RiDownloadLine className='text-herolayer text-base cursor-pointer' />
        </div>
      </a>
      <Link href='https://wa.me/+5582999303230' target='_blank'>
        <button
          className='border-herolayer border-solid rounded-2xl w-48 h-11 text-herolayer font-Raleway border hover:bg-herolayer hover:text-white hover:opacity-80 items-center flex justify-center gap-2'
          type='button'
        >
          <BsWhatsapp className='text-base mr-2' />
          Contact me
        </button>
      </Link>
    </div>
  );
}
