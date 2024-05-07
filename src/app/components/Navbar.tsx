'use client';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

export default function Navbar(): React.ReactNode {
  const navItems = [
    {
      name: 'Home',
      action: () => {},
    },
    {
      name: 'Skills',
      action: () => {
        const section = document.querySelector('#skills');

        if (!section) return;

        section.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      name: 'Projects',
      action: () => {
        const section = document.querySelector('#projects');

        if (!section) return;

        section.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      name: 'Career',
      action: () => {
        const section = document.querySelector('#career');

        if (!section) return;

        section.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      name: 'About me',
      action: () => {
        const section = document.querySelector('#about-me');

        if (!section) return;

        section.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      name: 'Contact',
      action: () => {
        const section = document.querySelector('#contact');

        if (!section) return;

        section.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      name: 'Rant',
      action: () => {},
    },
  ];

  return (
    <div className='w-fit absolute top-9 right-40 rounded-2xl bg-navbar h-16 flex flex-row items-center px-10 gap-4 justify-end z-50'>
      {navItems.map((item) => (
        <p
          className='font-Raleway text-white opacity-80 hover:text-parsed hover:opacity-100 cursor-pointer'
          key={item.name}
          onClick={item.action}
        >
          {item.name}
        </p>
      ))}
    </div>
  );
}
