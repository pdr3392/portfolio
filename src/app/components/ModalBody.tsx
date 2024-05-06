import React from 'react';
import { BsX } from 'react-icons/bs';
import { useModal } from '../hooks/useProjectsModal';
import BoxLabel from './BoxLabel';

export default function ModalBody(): React.ReactElement {
  const { setIsOpen, modalData } = useModal();

  return (
    <div className='w-full h-full flex flex-col gap-2 relative'>
      <div className='w-full h-fit absolute justify-end flex'>
        <BsX
          className='text-black text-2xl cursor-pointer'
          onClick={() => setIsOpen(false)}
        />
      </div>

      <h1 className='font-Raleway text-2xl text-black font-bold mt-8'>
        {modalData.projectName}
      </h1>

      <p className='font-Raleway text-base text-black mt-2'>
        {modalData.projectData}
      </p>

      <div className='w-full h-fit flex flex-row flex-wrap gap-2 mt-auto justify-end'>
        {modalData.projectLabels.map((label) => (
          <BoxLabel label={label} key={label} />
        ))}
      </div>
    </div>
  );
}
