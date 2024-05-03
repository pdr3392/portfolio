/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { AiOutlineJava } from 'react-icons/ai';
import { BiLogoAws, BiLogoGoLang } from 'react-icons/bi';
import {
  SiApachekafka,
  SiChakraui,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFauna,
  SiFigma,
  SiFlask,
  SiGin,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiJenkins,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiRedux,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

export default function Skills(): React.ReactNode {
  return (
    <div className='w-full h-fit flex flex-col relative' id='skills'>
      <div className='w-full h-fit flex items-center justify-center font-extrabold mt-[140px] flex-col gap-4'>
        <p className='font-Raleway text-white text-[48px]'>Tools & Skills</p>

        <p className='font-Raleway text-white opacity-80 text-2xl mt-[60px]'>
          Tools I'm using everyday
        </p>

        <div className='flex flex-row w-full h-fit items-center justify-center gap-4'>
          <SiTypescript className='text-[62px] text-herolayer' />
          <SiDocker className='text-[62px] text-herolayer' />
          <SiNodedotjs className='text-[62px] text-herolayer' />
          <SiReact className='text-[62px] text-herolayer' />
          <SiNextdotjs className='text-[62px] text-herolayer' />
          <SiFigma className='text-[62px] text-herolayer' />
          <SiExpress className='text-[62px] text-herolayer' />
          <SiChakraui className='text-[62px] text-herolayer' />
          <SiPostgresql className='text-[62px] text-herolayer' />
          <SiPrisma className='text-[62px] text-herolayer' />
          <SiPython className='text-[62px] text-herolayer' />
          <VscAzure className='text-[62px] text-herolayer' />
          <SiGit className='text-[62px] text-herolayer' />
          <SiGithub className='text-[62px] text-herolayer' />
          <SiRabbitmq className='text-[62px] text-herolayer' />
          <SiApachekafka className='text-[62px] text-herolayer' />
          <SiRedis className='text-[62px] text-herolayer' />
          <SiLinux className='text-[62px] text-herolayer' />
        </div>
        <p className='font-Raleway text-white opacity-80 text-2xl mt-[60px]'>
          Tools I'm experienced with
        </p>
        <div className='flex flex-row w-full h-fit items-center justify-center gap-4'>
          <SiMysql className='text-[62px] text-herolayer' />
          <BiLogoAws className='text-[62px] text-herolayer' />
          <SiTailwindcss className='text-[62px] text-herolayer' />
          <SiSpringboot className='text-[62px] text-herolayer' />
          <AiOutlineJava className='text-[62px] text-herolayer' />
          <BiLogoGoLang className='text-[62px] text-herolayer' />
          <SiGin className='text-[62px] text-herolayer' />
          <SiDjango className='text-[62px] text-herolayer' />
          <SiFlask className='text-[62px] text-herolayer' />
          <SiFastapi className='text-[62px] text-herolayer' />
          <SiGooglecloud className='text-[62px] text-herolayer' />
          <SiMongodb className='text-[62px] text-herolayer' />
          <SiFauna className='text-[62px] text-herolayer' />
          <SiJenkins className='text-[62px] text-herolayer' />
          <SiNginx className='text-[62px] text-herolayer' />
          <SiRedux className='text-[62px] text-herolayer' />
        </div>
      </div>

      <p className='font-Raleway text-white opacity-80 text-sm max-w-[600px] mt-14 self-center'>
        In my daily work, I employ a range of tools, including those previously
        mentioned, alongside others. I'm committed to principles like S.O.L.I.D,
        Clean Code, and Clean Architecture, ensuring my code is not just
        functional, but also maintainable and scalable.
      </p>
    </div>
  );
}
