import * as React from 'react';
import Hero from './components/Hero';
import CVSection from './components/CVSection';
import NameSection from './components/NameSection';
import Navbar from './components/Navbar';
import Divider from './components/Divider';
import Skills from './components/Skills';

export default function Home(): React.ReactElement {
  return (
    <div className='flex flex-col overflow-x-hidden'>
      <div className='flex h-lvh w-lvw bg-bg relative'>
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
    </div>
  );
}
