import React from 'react';

export default function Navbar(): React.ReactNode {
  const navItems = [
    {
      name: 'Home',
      action: () => {},
    },
    {
      name: 'About me',
      action: () => {},
    },
    {
      name: 'Projects',
      action: () => {},
    },
    {
      name: 'Skills',
      action: () => {},
    },
    {
      name: 'Career',
      action: () => {},
    },
    {
      name: 'Contact',
      action: () => {},
    },
    {
      name: 'Rant',
      action: () => {},
    },
  ];

  return (
    <div className='w-fit absolute top-9 right-40 rounded-2xl bg-navbar h-16 flex flex-row items-center px-10 gap-4 justify-end'>
      {navItems.map((item) => (
        <p
          className='font-Raleway text-white opacity-80 hover:text-parsed hover:opacity-100 cursor-pointer'
          key={item.name}
        >
          {item.name}
        </p>
      ))}
    </div>
  );
}
