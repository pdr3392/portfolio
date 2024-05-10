'use client';

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useWindowSize } from '../hooks/usePageWidth';

export default function AboutMe(): React.ReactElement {
  const pageWidth = useWindowSize();

  if (pageWidth < 1140) {
    return (
      <div
        className='min-h-lvh h-fit w-full flex flex-col bg-bg py-10 gap-2 items-center'
        id='about-me'
      >
        <h1 className='font-Raleway text-white text-5xl font-extrabold self-center'>
          About me
        </h1>

        <p className='text-white opacity-80 font-Raleway text-lg text-justify px-12 mt-12'>
          It appears that the recent joy in my life can be attributed to my
          openness to seizing opportunities and immersing myself in subjects
          that ignite my passion, all while maintaining a strong desire for
          continuous learning. I'm writing this at the age of 27, and I find
          myself reflecting on the nine months since I bid farewell to my
          hometown and ventured to São Paulo, Brazil—a city that warmly embraced
          me, and to which I reciprocated that embrace.
          <br />
          <br />
          Despite my academic background in Journalism & Media Studies, I've
          explored a multitude of fields. From taking on photography assignments
          and delving into videomaking to crafting compelling copy and managing
          social media, I've also contributed to media outlets and navigated the
          intricate world of financial markets through my small business,
          offering educational services and financial products. Furthermore, I
          pursue personal photography projects, particularly analog photography,
          which involves developing and scanning films. Music also holds a
          significant place in my life—I've collaborated on an album with a
          band, embarked on mini-tours, showcased my DJing skills, and produced
          solo tracks.
          <br />
          <br />
          However, amidst this array of experiences, my enduring fascination
          lies in software development. At the age of 16, I first delved into
          scripting with PHP, oblivious to its boundless potential. My interest
          was reignited in 2020 when I enrolled in Harvard's CS50 course,
          reigniting my passion for computer science, beginning with C. Since
          then, I've immersed myself in Data Engineering, Data Scraping,
          Front-end, and Back-end development. The allure of creating and
          building remains irresistible, with the world of software development
          always offering something new to captivate my interest.
        </p>
      </div>
    );
  }

  return (
    <div
      className='min-h-lvh h-fit w-full flex flex-col bg-bg p-36 gap-2'
      id='about-me'
    >
      <h1 className='font-Raleway text-white text-5xl font-extrabold self-center'>
        About me
      </h1>

      <div className='mt-8 w-full h-fit flex flex-row items-center'>
        <p className='text-white opacity-80 font-Raleway text-lg max-w-[50%] text-justify'>
          It appears that the recent joy in my life can be attributed to my
          openness to seizing opportunities and immersing myself in subjects
          that ignite my passion, all while maintaining a strong desire for
          continuous learning. I'm writing this at the age of 27, and I find
          myself reflecting on the nine months since I bid farewell to my
          hometown and ventured to São Paulo, Brazil—a city that warmly embraced
          me, and to which I reciprocated that embrace.
          <br />
          <br />
          Despite my academic background in Journalism & Media Studies, I've
          explored a multitude of fields. From taking on photography assignments
          and delving into videomaking to crafting compelling copy and managing
          social media, I've also contributed to media outlets and navigated the
          intricate world of financial markets through my small business,
          offering educational services and financial products. Furthermore, I
          pursue personal photography projects, particularly analog photography,
          which involves developing and scanning films. Music also holds a
          significant place in my life—I've collaborated on an album with a
          band, embarked on mini-tours, showcased my DJing skills, and produced
          solo tracks.
          <br />
          <br />
          However, amidst this array of experiences, my enduring fascination
          lies in software development. At the age of 16, I first delved into
          scripting with PHP, oblivious to its boundless potential. My interest
          was reignited in 2020 when I enrolled in Harvard's CS50 course,
          reigniting my passion for computer science, beginning with C. Since
          then, I've immersed myself in Data Engineering, Data Scraping,
          Front-end, and Back-end development. The allure of creating and
          building remains irresistible, with the world of software development
          always offering something new to captivate my interest.
        </p>

        <div className='flex flex-col items-center justify-center w-1/2 h-full'>
          <img
            alt='About me'
            src='/images/myself.jpg'
            className='rounded-full w-[400px] h-[400px] object-cover border-herolayer border-solid border-4 opacity-70 drop-shadow-2xl'
          />
        </div>
      </div>
    </div>
  );
}
