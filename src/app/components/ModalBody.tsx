/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { BsX } from 'react-icons/bs';
import { useModal } from '../hooks/useProjectsModal';
import '../styles/scrollbar.css';
import { useWindowSize } from '../hooks/usePageWidth';

export default function ModalBody(): React.ReactElement {
  const { setIsOpen, modalData } = useModal();

  const pageWidth = useWindowSize();

  if (pageWidth < 535) {
    return (
      <div
        className='w-full h-full absolute flex flex-col top-0 left-0'
        style={{ zIndex: '800' }}
        onClick={() => setIsOpen(false)}
      >
        <div className='w-full h-full flex bg-black opacity-30' />
        <div
          className='w-4/5 bg-modalbody flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg p-4 pr-10'
          style={{ zIndex: '999', height: 'calc(100% - 64px)' }}
        >
          <div className='w-fit h-fit absolute justify-end flex top-2 right-2'>
            <BsX
              className='text-black text-2xl cursor-pointer'
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className='w-full h-full flex flex-col gap-2 relative'>
            <div
              className='w-full h-full flex flex-col overflow-y-scroll pr-4'
              id='custom-scrollbar'
            >
              <h1 className='font-Raleway text-lg text-black font-bold mt-2'>
                {modalData.projectName}
              </h1>

              <p className='font-Raleway text-sm text-black mt-2'>
                {modalData.projectData.split('\n\n').map((paragraph) => (
                  <>
                    {paragraph}
                    <br />
                    <br />
                  </>
                ))}
              </p>

              <div className='w-full h-fit flex flex-row flex-wrap gap-2 mt-auto justify-end'>
                {modalData.projectLabels.map((label, index) => (
                  <p
                    key={`modal-${label}`}
                    className='font-Raleway text-black opacity-80 text-base'
                  >
                    {label}
                    {index !== modalData.projectLabels.length - 1 && ', '}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className='w-full h-full absolute flex flex-col top-0 left-0'
      style={{ zIndex: '800' }}
      onClick={() => setIsOpen(false)}
    >
      <div className='w-full h-full flex bg-black opacity-30' />
      <div
        className='w-2/3 bg-modalbody flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg p-4 pr-10'
        style={{ zIndex: '999', height: 'calc(100% - 64px)' }}
      >
        <div className='w-fit h-fit absolute justify-end flex top-2 right-2'>
          <BsX
            className='text-black text-2xl cursor-pointer'
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className='w-full h-full flex flex-col gap-2 relative'>
          <div
            className='w-full h-full flex flex-col overflow-y-scroll pr-4'
            id='custom-scrollbar'
          >
            <h1 className='font-Raleway text-2xl text-black font-bold mt-2'>
              {modalData.projectName}
            </h1>

            <p className='font-Raleway text-base text-black mt-2'>
              {modalData.projectData.split('\n\n').map((paragraph) => (
                <>
                  {paragraph}
                  <br />
                  <br />
                </>
              ))}
            </p>

            <div className='w-full h-fit flex flex-row flex-wrap gap-2 mt-auto justify-end'>
              {modalData.projectLabels.map((label, index) => (
                <p
                  key={`modal-${label}`}
                  className='font-Raleway text-black opacity-80 text-base'
                >
                  {label}
                  {index !== modalData.projectLabels.length - 1 && ', '}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
