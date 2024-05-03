import React from 'react';

export default function Tooltip({
  el,
  label,
}: {
  el: React.ReactElement;
  label: string;
}): React.ReactElement {
  return (
    <>
      <div data-tooltip-target='tooltip-bottom' data-tooltip-placement='bottom'>
        {el}
      </div>

      <div
        id='tooltip-bottom'
        role='tooltip'
        className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 font-Raleway'
      >
        {label}
        <div className='tooltip-arrow' data-popper-arrow />
      </div>
    </>
  );
}
