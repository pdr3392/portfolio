/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
import React from 'react';

export default function Outlined({
  element,
  onClick = () => {},
}: {
  element: React.ReactElement;
  onClick: () => void;
}): React.ReactElement {
  return (
    <div
      className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-herolayer before:absolute before:left-0 before:bottom-0 cursor-pointer flex flex-row gap-2 items-center pb-2'
      onClick={onClick}
    >
      {element}
    </div>
  );
}
