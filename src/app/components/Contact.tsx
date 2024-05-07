/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-alert */
import Link from 'next/link';
import React from 'react';
import { BiPaperPlane } from 'react-icons/bi';
import { BsClipboard, BsWhatsapp } from 'react-icons/bs';
import { copyToClipboard } from '../utils/clipboard';
import Toast from './Toast';

export default function Contact(): React.ReactElement {
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
          onClick={() => copyToClipboard('phrcorreia3392@gmail.com')}
        >
          <BiPaperPlane className='text-herolayer opacity-80 text-3xl' />
          <p className='text-herolayer text-base font-Raleway'>
            phrcorreia3392@gmail.com
          </p>
          <BsClipboard className='text-herolayer opacity-80 text-3xl mt-4' />
        </div>
      </div>

      <Toast message='test' />
    </div>
  );
}
