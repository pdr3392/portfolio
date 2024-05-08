/* eslint-disable max-len */
import React from 'react';
import { RiDownloadLine } from 'react-icons/ri';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';
import ArrowDown from './ArrowDown';
import NameSection from './NameSection';
import Hero from './Hero';
import CVSection from './CVSection';
import Navbar from './Navbar';
import { useWindowSize } from '../hooks/usePageWidth';

export default function HeroSection(): React.ReactElement {
  const pageWidth = useWindowSize();

  if (pageWidth < 981) {
    return (
      <div className='flex h-fit min-h-lvh w-lvw bg-bg relative items-center overflow-y-hidden flex-col justify-end py-32'>
        <ArrowDown />
        <Navbar />
        <div className='flex flex-row h-full w-full items-center justify-between px-10'>
          <Hero />
          <div className='h-full w-fit relative flex flex-col'>
            <h1 className='font-Raleway font-extrabold text-white text-3xl max-w-2'>
              Pedro Correia
            </h1>
            <p className='font-Raleway font-normal text-base text-white opacity-50'>
              Fullstack Developer
            </p>
          </div>

          <div className='h-full w-fit flex flex-col gap-4 z-50 justify-end items-end'>
            <a href='/cv.pdf' download='cv'>
              <div className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-herolayer before:absolute before:left-0 before:bottom-0 cursor-pointer flex flex-row gap-2 items-center pb-2'>
                <p className='text-herolayer font-Raleway text-base whitespace-nowrap'>
                  Download CV
                </p>
                <RiDownloadLine className='text-herolayer text-base cursor-pointer' />
              </div>
            </a>
            <Link href='https://wa.me/+5582999303230' target='_blank'>
              <button
                className='border-herolayer border-solid rounded-2xl w-48 h-11 text-herolayer font-Raleway border hover:bg-herolayer hover:text-white hover:opacity-80 items-center flex justify-center gap-2 text-sm max-w-[130px]'
                type='button'
              >
                <BsWhatsapp className='text-sm mr-2' />
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex h-fit min-h-lvh w-lvw bg-bg relative items-center overflow-y-hidden'>
      <ArrowDown />
      <div className='flex flex-row h-full w-full px-20 justify-between'>
        <NameSection />
        <Hero />
        {/* filler */}
        <div className='flex w-1/2 h-full' />
        {/* filler */}
        <CVSection />
        <Navbar />
      </div>
    </div>
  );
}
