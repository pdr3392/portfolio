import React from 'react';

export default function BoxLabel({
  label,
}: {
  label: string;
}): React.ReactElement {
  if (label === 'Proprietary') {
    return (
      <div className='w-fit h-[30px] rounded-lg bg-proprietarybox flex items-center justify-center p-2'>
        <p className='text-[#e398b3] opacity-80 font-Raleway text-base font-bold whitespace-nowrap'>
          {label}
        </p>
      </div>
    );
  }

  return (
    <div className='w-fit h-[30px] rounded-lg bg-projectbox flex items-center justify-center p-2'>
      <p className='text-herolayer opacity-80 font-Raleway text-base font-bold whitespace-nowrap'>
        {label}
      </p>
    </div>
  );
}
