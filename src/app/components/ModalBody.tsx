import React from 'react';
import { BsX } from 'react-icons/bs';
import { useModal } from '../hooks/useProjectsModal';

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
  );
}