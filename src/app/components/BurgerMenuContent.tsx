/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line object-curly-newline
import React, { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { BsGithub, BsLinkedin, BsX } from 'react-icons/bs';
import { useBurgerMenuState } from '../hooks/useBurgerMenu';
import { usePortfolioOrRantState } from '../hooks/usePortfolioOrRant';
import Outlined from './Outlined';

export default function BurgerMenuContent(): React.ReactElement {
  const [visible, setVisible] = useState(false);
  const { setIsBurgerMenuOpened } = useBurgerMenuState();
  const burgerMenuRef = useRef<HTMLDivElement>(null);

  const { setPortfolioOrRant, portfolioOrRant } = usePortfolioOrRantState();

  const scroll = (id: string): void => {
    setIsBurgerMenuOpened(false);
    const section = document.querySelector(`#${id}`);

    if (!section) return;

    const headerHeight = document.querySelector('#hero')?.clientHeight;
    const offset = headerHeight
      ? section.getBoundingClientRect().top - headerHeight
      : section.getBoundingClientRect().top;

    window.scrollBy({ top: offset, behavior: 'smooth' });
  };
  const handleClickOutside = useCallback(
    (event: MouseEvent): void => {
      if (
        // eslint-disable-next-line operator-linebreak
        burgerMenuRef.current &&
        !burgerMenuRef.current.contains(event.target as Node)
      ) {
        setVisible(false);
        setIsBurgerMenuOpened(false);
      }
    },
    // eslint-disable-next-line comma-dangle
    [setIsBurgerMenuOpened]
  );

  useEffect(() => {
    setVisible(true);

    setTimeout(() => {
      const burgerMenu = burgerMenuRef.current;
      if (!burgerMenu) return;
      burgerMenu.focus();
    }, 400);

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [setIsBurgerMenuOpened, handleClickOutside]);
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
  return (
    <div
      ref={burgerMenuRef}
      id='burger-menu'
      className={`min-h-lvh max-h-lvh fixed top-0 left-0 w-80 bg-navbar flex flex-col z-[999] transition-opacity duration-500 px-8 py-20 gap-6 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='absolute top-6 right-6 h-fit w-fit'>
        <BsX
          className='text-white text-2xl cursor-pointer'
          onClick={() => setIsBurgerMenuOpened(false)}
        />
      </div>

      {navItems.map((navItem) => (
        <Outlined
          onClick={navItem.action}
          element={
            <p className='text-white opacity-80 font-Raleway text-base'>
              {navItem.name}
            </p>
          }
        />
      ))}

      <div className='flex flex-row gap-4 items-center mt-auto'>
        <Outlined
          onClick={() => {}}
          element={
            <Link
              href='https://www.linkedin.com/in/phrcorreia/'
              target='_blank'
            >
              <BsLinkedin className='text-white text-2xl mt-4 cursor-pointer opacity-50' />
            </Link>
          }
        />
        <Outlined
          onClick={() => {}}
          element={
            <Link href='https://github.com/pdr3392' target='_blank'>
              <BsGithub className='text-white text-2xl mt-4 cursor-pointer opacity-50' />
            </Link>
          }
        />
      </div>
    </div>
  );
}
