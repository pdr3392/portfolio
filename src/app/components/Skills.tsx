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
  SiJest,
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
  SiSelenium,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import Tooltip from './Tooltip';

export default function Skills(): React.ReactNode {
  return (
    <div className='w-full h-fit flex flex-col relative' id='skills'>
      <div className='w-full h-fit flex items-center justify-center font-extrabold mt-[140px] flex-col gap-4'>
        <p className='font-Raleway text-white text-[48px]'>Tools & Skills</p>

        <p className='font-Raleway text-white opacity-80 text-2xl mt-[60px]'>
          Tools I'm using on a daily basis
        </p>

        <div className='flex flex-row w-full h-fit items-center justify-center gap-4 flex-wrap'>
          <Tooltip
            el={<SiTypescript className='text-[62px] text-herolayer' />}
            label='Typescript'
          />
          <Tooltip
            el={<SiDocker className='text-[62px] text-herolayer' />}
            label='Docker'
          />
          <Tooltip
            el={<SiNodedotjs className='text-[62px] text-herolayer' />}
            label='Node.js'
          />
          <Tooltip
            el={<SiReact className='text-[62px] text-herolayer' />}
            label='React.js'
          />
          <Tooltip
            el={<SiFigma className='text-[62px] text-herolayer' />}
            label='Figma'
          />
          <Tooltip
            el={<SiExpress className='text-[62px] text-herolayer' />}
            label='Express'
          />
          <Tooltip
            el={<SiChakraui className='text-[62px] text-herolayer' />}
            label='Chakra UI'
          />
          <Tooltip
            el={<SiPostgresql className='text-[62px] text-herolayer' />}
            label='PostgreSQL'
          />
          <Tooltip
            el={<SiPrisma className='text-[62px] text-herolayer' />}
            label='Prisma ORM'
          />
          <Tooltip
            el={<SiPython className='text-[62px] text-herolayer' />}
            label='Python'
          />
          <Tooltip
            el={<VscAzure className='text-[62px] text-herolayer' />}
            label='Microsoft Azure'
          />
          <Tooltip
            el={<SiGit className='text-[62px] text-herolayer' />}
            label='Git'
          />
          <Tooltip
            el={<SiGithub className='text-[62px] text-herolayer' />}
            label='Github'
          />
          <Tooltip
            el={<SiRabbitmq className='text-[62px] text-herolayer' />}
            label='RabbitMQ'
          />
          <Tooltip
            el={<SiApachekafka className='text-[62px] text-herolayer' />}
            label='Apache Kafka'
          />
          <Tooltip
            el={<SiRedis className='text-[62px] text-herolayer' />}
            label='Redis'
          />
          <Tooltip
            el={<SiLinux className='text-[62px] text-herolayer' />}
            label='Linux'
          />
          <Tooltip
            el={<SiJest className='text-[62px] text-herolayer' />}
            label='Jest'
          />
        </div>
        <p className='font-Raleway text-white opacity-80 text-2xl mt-[60px]'>
          Tools I'm experienced with
        </p>
        <div className='flex flex-row w-full h-fit items-center justify-center gap-4 flex-wrap'>
          <Tooltip
            el={<SiMysql className='text-[62px] text-herolayer' />}
            label='MySQÇ'
          />
          <Tooltip
            el={<SiNextdotjs className='text-[62px] text-herolayer' />}
            label='Next.js'
          />
          <Tooltip
            el={<BiLogoAws className='text-[62px] text-herolayer' />}
            label='AWS'
          />
          <Tooltip
            el={<SiTailwindcss className='text-[62px] text-herolayer' />}
            label='Tailwind CSS'
          />
          <Tooltip
            el={<SiSpringboot className='text-[62px] text-herolayer' />}
            label='Spring Boot Framework'
          />
          <Tooltip
            el={<AiOutlineJava className='text-[62px] text-herolayer' />}
            label='Java'
          />
          <Tooltip
            el={<BiLogoGoLang className='text-[62px] text-herolayer' />}
            label='Golang'
          />
          <Tooltip
            el={<SiGin className='text-[62px] text-herolayer' />}
            label='Gin Gonic'
          />
          <Tooltip
            el={<SiDjango className='text-[62px] text-herolayer' />}
            label='Django'
          />
          <Tooltip
            el={<SiFlask className='text-[62px] text-herolayer' />}
            label='Flask'
          />
          <Tooltip
            el={<SiFastapi className='text-[62px] text-herolayer' />}
            label='Fast API'
          />
          <Tooltip
            el={<SiGooglecloud className='text-[62px] text-herolayer' />}
            label='GCP'
          />
          <Tooltip
            el={<SiMongodb className='text-[62px] text-herolayer' />}
            label='Mongo DB'
          />
          <Tooltip
            el={<SiFauna className='text-[62px] text-herolayer' />}
            label='Fauna DB'
          />
          <Tooltip
            el={<SiJenkins className='text-[62px] text-herolayer' />}
            label='Jenkins'
          />
          <Tooltip
            el={<SiNginx className='text-[62px] text-herolayer' />}
            label='Nginx'
          />
          <Tooltip
            el={<SiRedux className='text-[62px] text-herolayer' />}
            label='Redux'
          />
          <Tooltip
            el={<SiSelenium className='text-[62px] text-herolayer' />}
            label='Selenium'
          />
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
