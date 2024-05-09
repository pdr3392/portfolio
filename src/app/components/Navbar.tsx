'use client';

/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { usePortfolioOrRantState } from '../hooks/usePortfolioOrRant';
import { useWindowSize } from '../hooks/usePageWidth';
import BurgerMenuContent from './BurgerMenuContent';
import { useBurgerMenuState } from '../hooks/useBurgerMenu';

export default function Navbar(): React.ReactNode {
  const { isBurgerMenuOpened, setIsBurgerMenuOpened } = useBurgerMenuState();
  const { setPortfolioOrRant, portfolioOrRant } = usePortfolioOrRantState();
  const pageWidth = useWindowSize();

  const scroll = (id: string): void => {
    const section = document.querySelector(`#${id}`);

    if (!section) return;

    section.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    {
      name: 'Home',
      action: () => {
        setPortfolioOrRant('portfolio');

        if (portfolioOrRant === 'rant') {
          setTimeout(() => scroll('page-wrapper'), 400);
        } else {
          scroll('page-wrapper');
        }
      },
    },
    {
      name: 'Skills',
      action: () => {
        setPortfolioOrRant('portfolio');

        if (portfolioOrRant === 'rant') {
          setTimeout(() => scroll('skills'), 400);
        } else {
          scroll('skills');
        }
      },
    },
    {
      name: 'Projects',
      action: () => {
        setPortfolioOrRant('portfolio');

        if (portfolioOrRant === 'rant') {
          setTimeout(() => scroll('projects'), 400);
        } else {
          scroll('projects');
        }
      },
    },
    {
      name: 'Career',
      action: () => {
        setPortfolioOrRant('portfolio');

        if (portfolioOrRant === 'rant') {
          setTimeout(() => scroll('career'), 400);
        } else {
          scroll('career');
        }
      },
    },
    {
      name: 'About me',
      action: () => {
        setPortfolioOrRant('portfolio');

        if (portfolioOrRant === 'rant') {
          setTimeout(() => scroll('about-me'), 400);
        } else {
          scroll('about-me');
        }
      },
    },
    {
      name: 'Contact',
      action: () => {
        setPortfolioOrRant('portfolio');

        if (portfolioOrRant === 'rant') {
          setTimeout(() => scroll('contact'), 400);
        } else {
          scroll('contact');
        }
      },
    },
    // {
    //   name: 'Rant',
    //   action: () => {
    //     setPortfolioOrRant('rant');
    //   },
    // },
  ];

  if (pageWidth < 393) {
    return (
      <>
        <button
          onClick={() => setIsBurgerMenuOpened(true)}
          className='w-fit absolute top-9 left-8 rounded-2xl bg-navbar h-14 flex flex-row items-center px-6 gap-4 justify-end z-50 hover:text-parsed hover:opacity-100 text-white'
          type='button'
        >
          <RxHamburgerMenu className='opacity-80' />
        </button>

        {isBurgerMenuOpened && <BurgerMenuContent />}
      </>
    );
  }

  if (pageWidth < 981) {
    return (
      <>
        <button
          onClick={() => setIsBurgerMenuOpened(true)}
          className='w-fit absolute top-9 left-16 rounded-2xl bg-navbar h-14 flex flex-row items-center px-6 gap-4 justify-end z-50 hover:text-parsed hover:opacity-100 text-white'
          type='button'
        >
          <RxHamburgerMenu className='opacity-80' />
        </button>

        {isBurgerMenuOpened && <BurgerMenuContent />}
      </>
    );
  }

  return (
    <div className='w-fit absolute top-9 left-12 rounded-2xl bg-navbar h-16 flex flex-row items-center px-10 gap-4 justify-end z-50'>
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
