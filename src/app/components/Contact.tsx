/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-alert */
import Link from 'next/link';
import React, { useState } from 'react';
import { BiPaperPlane } from 'react-icons/bi';
import { BsClipboard, BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { copyToClipboard } from '../utils/clipboard';
import Toast from './Toast';
import { useWindowSize } from '../hooks/usePageWidth';

export default function Contact(): React.ReactElement {
  const [showToast, setShowToast] = useState(false);

  const pageWidth = useWindowSize();

  if (pageWidth < 930) {
    return (
      <div
        className='min-h-lvh w-full flex flex-col bg-bg px-36 py-10 gap-2'
        id='contact'
      >
        <h1 className='font-Raleway text-white text-5xl font-extrabold self-center'>
          Contact me
        </h1>
        <div className='flex flex-col w-full h-fit mt-32 mb-auto items-center gap-12 justify-center'>
          <Link href='https://wa.me/+5582999303230' target='_blank'>
            <button
              className='border-herolayer border-solid rounded-2xl w-48 h-11 text-herolayer font-Raleway border hover:bg-herolayer hover:text-white hover:opacity-80 items-center flex justify-center gap-2'
              type='button'
            >
              <BsWhatsapp className='text-base mr-2' />
              WhatsApp
            </button>
          </Link>

          <div
            className='flex flex-col gap-2 items-center cursor-pointer'
            onClick={() => {
              copyToClipboard('phrcorreia3392@gmail.com');

              setShowToast(true);
            }}
          >
            <BiPaperPlane className='text-herolayer opacity-80 text-3xl' />
            <p className='text-herolayer text-base font-Raleway'>
              phrcorreia3392@gmail.com
            </p>
            <BsClipboard className='text-herolayer opacity-80 text-3xl mt-4' />
          </div>
        </div>
        {showToast && (
          <Toast setShowToast={setShowToast} message='Email copied!' />
        )}
        <div className='absolute bottom-0 left-0 w-full h-fit bg-[#14142b] flex flex-row items-center px-4 pr-40 py-4'>
          <p className='font-Raleway text-white opacity-80 text-base'>
            Developed by Pedro Correia, based on design by
            <Link
              href='https://www.figma.com/community/file/1162385628597290713/my-web-portfolio'
              target='_blank'
              className='text-herolayer'
            >
              {' '}
              Henrique Sousa
            </Link>
          </p>
          <div className='flex w-fit h-full absolute top-1/2 right-11 transform -translate-y-1/2 items-center justify-center gap-6'>
            <Link
              href='https://www.linkedin.com/in/phrcorreia/'
              target='_blank'
            >
              <BsLinkedin className='text-white text-2xl mt-4 cursor-pointer opacity-50' />
            </Link>
            <Link href='https://github.com/pdr3392' target='_blank'>
              <BsGithub className='text-white text-2xl mt-4 cursor-pointer opacity-50' />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className='min-h-lvh w-full flex flex-col bg-bg p-36 gap-2'
      id='contact'
    >
      <h1 className='font-Raleway text-white text-5xl font-extrabold self-center'>
        Contact me
      </h1>
      <div className='flex flex-row w-full h-fit justify-evenly mt-32 mb-auto align-center'>
        <Link href='https://wa.me/+5582999303230' target='_blank'>
          <button
            className='border-herolayer border-solid rounded-2xl w-48 h-11 text-herolayer font-Raleway border hover:bg-herolayer hover:text-white hover:opacity-80 items-center flex justify-center gap-2'
            type='button'
          >
            <BsWhatsapp className='text-base mr-2' />
            WhatsApp
          </button>
        </Link>

        <div
          className='flex flex-col gap-2 items-center cursor-pointer'
          onClick={() => {
            copyToClipboard('phrcorreia3392@gmail.com');

            setShowToast(true);
          }}
        >
          <BiPaperPlane className='text-herolayer opacity-80 text-3xl' />
          <p className='text-herolayer text-base font-Raleway'>
            phrcorreia3392@gmail.com
          </p>
          <BsClipboard className='text-herolayer opacity-80 text-3xl mt-4' />
        </div>
      </div>
      {showToast && (
        <Toast setShowToast={setShowToast} message='Email copied!' />
      )}

      <div className='absolute bottom-0 left-0 w-full h-24 bg-[#14142b] flex flex-row items-center px-4'>
        <p className='font-Raleway text-white opacity-80 text-base'>
          Developed by Pedro Correia, based on design by
          <Link
            href='https://www.figma.com/community/file/1162385628597290713/my-web-portfolio'
            target='_blank'
            className='text-herolayer'
          >
            {' '}
            Henrique Sousa
          </Link>
        </p>
        <div className='flex w-fit h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-6'>
          <Link href='https://www.linkedin.com/in/phrcorreia/' target='_blank'>
            <BsLinkedin className='text-white text-2xl mt-4 cursor-pointer opacity-50' />
          </Link>
          <Link href='https://github.com/pdr3392' target='_blank'>
            <BsGithub className='text-white text-2xl mt-4 cursor-pointer opacity-50' />
          </Link>
        </div>
      </div>
    </div>
  );
}
