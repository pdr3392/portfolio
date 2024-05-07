'use client';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { initFlowbite } from 'flowbite';
import { useModal } from '../hooks/useProjectsModal';
import ArrowDown from '../components/ArrowDown';
import NameSection from '../components/NameSection';
import Hero from '../components/Hero';
import CVSection from '../components/CVSection';
import Navbar from '../components/Navbar';
import Divider from '../components/Divider';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Career from '../components/Career';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import ModalBody from '../components/ModalBody';

export default function Portfolio(): React.ReactElement {
  React.useEffect(() => {
    initFlowbite();
  }, []);

  const { isOpen, setIsOpen } = useModal();

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', (e) => handleKeyDown(e));

    return () => {
      window.removeEventListener('keydown', (e) => handleKeyDown(e));
    };
  }, [setIsOpen]);

  return (
    <div className='flex flex-col overflow-x-hidden relative' id='page-wrapper'>
      <div className='flex h-lvh w-lvw bg-bg relative'>
        <ArrowDown />
        <div className='flex flex-row h-full w-full px-36'>
          <NameSection />
          <Hero />
          {/* filler */}
          <div className='flex w-1/2 h-full' />
          {/* filler */}
          <CVSection />
          <Navbar />
        </div>
      </div>
      <Divider />

      <div className='flex h-lvh w-lvw bg-bg relative'>
        <Skills />
      </div>

      <Divider />

      <Projects />

      <Divider />

      <Career />

      <Divider />

      <AboutMe />

      <Divider />

      <Contact />

      <Divider />

      {/* Project's Modal */}

      {isOpen && (
        <div
          className='w-full h-full absolute flex flex-col top-0 left-0'
          style={{ zIndex: '800' }}
          onClick={() => setIsOpen(false)}
        >
          <div className='w-full h-full flex bg-black opacity-30' />
          <div
            className='w-1/2 bg-modalbody flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg p-8'
            style={{ zIndex: '999', height: 'calc(100% - 64px)' }}
          >
            <ModalBody />
          </div>
        </div>
      )}
    </div>
  );
}
