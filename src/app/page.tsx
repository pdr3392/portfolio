import * as React from 'react';
import Hero from './components/Hero';
import CVSection from './components/CVSection';
import NameSection from './components/NameSection';
import Navbar from './components/Navbar';

export default function Home(): React.ReactElement {
  return (
    <div className='flex h-lvh w-lvw bg-bg'>
      <div className='flex flex-row h-full w-full px-36'>
        <NameSection />
        <Hero />
        <CVSection />
        <Navbar />
      </div>
    </div>
  );
}
