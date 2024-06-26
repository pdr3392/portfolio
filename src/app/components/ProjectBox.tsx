'use client';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { BsEye } from 'react-icons/bs';
import { useModal } from '../hooks/useProjectsModal';
import BoxLabel from './BoxLabel';
import { useWindowSize } from '../hooks/usePageWidth';

export default function ProjectBox({
  labels,
  projectName,
  projectData,
}: {
  labels: string[];
  projectName: string;
  projectData: string;
}): React.ReactElement {
  const { setIsOpen, setModalData } = useModal();

  const pageWidth = useWindowSize();

  if (pageWidth < 861) {
    return (
      <div className='h-fit w-fit flex gap-4 flex-wrap overflow-x-hidden max-w-full min-w-full'>
        <div
          className='border-herolayer border border-solid rounded-lg min-h-[250px] p-8 cursor-pointer flex flex-col justify-between hover:border-[#a280ea] min-w-full'
          onClick={() => {
            setModalData({
              projectName,
              projectData,
              projectLabels: labels,
            });

            setIsOpen(true);
          }}
        >
          <p className='font-Raleway text-[20px] text-white'>{projectName}</p>

          <div className='flex w-fit h-fix gap-2 align-center self-center'>
            <BsEye className='text-white text-lg cursor-pointer opacity-80' />
            <p className='font-Raleway text-white opacity-80 font-sm'>
              Click to view more
            </p>
          </div>

          <div
            className='flex gap-2 self-end w-full px-2 overflow-x-scroll overflow-y-hidden'
            style={{ scrollbarWidth: 'none' }}
            id='label-area'
          >
            {labels.map((label) => (
              <BoxLabel label={label} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='h-fit w-fit flex gap-4 flex-wrap overflow-x-hidden'>
      <div
        className='border-herolayer border border-solid rounded-lg w-[360px] h-[250px] p-8 cursor-pointer flex flex-col justify-between hover:border-[#a280ea]'
        onClick={() => {
          setModalData({
            projectName,
            projectData,
            projectLabels: labels,
          });

          setIsOpen(true);
        }}
      >
        <p className='font-Raleway text-[20px] text-white'>{projectName}</p>

        <div className='flex w-fit h-fix gap-2 align-center self-center'>
          <BsEye className='text-white text-lg cursor-pointer opacity-80' />
          <p className='font-Raleway text-white opacity-80 font-sm'>
            Click to view more
          </p>
        </div>

        <div
          className='flex gap-2 self-end w-full px-2 overflow-x-scroll overflow-y-hidden'
          style={{ scrollbarWidth: 'none' }}
          id='label-area'
        >
          {labels.map((label) => (
            <BoxLabel label={label} />
          ))}
        </div>
      </div>
    </div>
  );
}
