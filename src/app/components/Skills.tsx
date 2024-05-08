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

type Skill = { icon: React.ReactElement; label: string; tooltipId: string };

export default function Skills(): React.ReactNode {
  const daily: Skill[] = [
    {
      icon: <SiTypescript className='text-[62px] text-herolayer' />,
      label: 'Typescript',
      tooltipId: 'typescript',
    },
    {
      icon: <SiDocker className='text-[62px] text-herolayer' />,
      label: 'Docker',
      tooltipId: 'docker',
    },
    {
      icon: <SiNodedotjs className='text-[62px] text-herolayer' />,
      label: 'Node.js',
      tooltipId: 'nodejs',
    },
    {
      icon: <SiReact className='text-[62px] text-herolayer' />,
      label: 'React.js',
      tooltipId: 'reactjs',
    },
    {
      icon: <SiFigma className='text-[62px] text-herolayer' />,
      label: 'Figma',
      tooltipId: 'figma',
    },
    {
      icon: <SiExpress className='text-[62px] text-herolayer' />,
      label: 'Express',
      tooltipId: 'express',
    },
    {
      icon: <SiChakraui className='text-[62px] text-herolayer' />,
      label: 'Chakra UI',
      tooltipId: 'chakraui',
    },
    {
      icon: <SiPostgresql className='text-[62px] text-herolayer' />,
      label: 'PostgreSQL',
      tooltipId: 'postgresql',
    },
    {
      icon: <SiPrisma className='text-[62px] text-herolayer' />,
      label: 'Prisma ORM',
      tooltipId: 'prisma',
    },
    {
      icon: <SiPython className='text-[62px] text-herolayer' />,
      label: 'Python',
      tooltipId: 'python',
    },
    {
      icon: <VscAzure className='text-[62px] text-herolayer' />,
      label: 'Microsoft Azure',
      tooltipId: 'azure',
    },
    {
      icon: <SiGit className='text-[62px] text-herolayer' />,
      label: 'Git',
      tooltipId: 'git',
    },
    {
      icon: <SiGithub className='text-[62px] text-herolayer' />,
      label: 'Github',
      tooltipId: 'github',
    },
    {
      icon: <SiRabbitmq className='text-[62px] text-herolayer' />,
      label: 'RabbitMQ',
      tooltipId: 'rabbitmq',
    },
    {
      icon: <SiApachekafka className='text-[62px] text-herolayer' />,
      label: 'Apache Kafka',
      tooltipId: 'kafka',
    },
    {
      icon: <SiRedis className='text-[62px] text-herolayer' />,
      label: 'Redis',
      tooltipId: 'redis',
    },
    {
      icon: <SiLinux className='text-[62px] text-herolayer' />,
      label: 'Linux',
      tooltipId: 'linux',
    },
    {
      icon: <SiJest className='text-[62px] text-herolayer' />,
      label: 'Jest',
      tooltipId: 'jest',
    },
  ];

  const experienced: Skill[] = [
    {
      icon: <SiMysql className='text-[62px] text-herolayer' />,
      label: 'MySQL',
      tooltipId: 'mysql',
    },
    {
      icon: <SiNextdotjs className='text-[62px] text-herolayer' />,
      label: 'Next.js',
      tooltipId: 'nextjs',
    },
    {
      icon: <BiLogoAws className='text-[62px] text-herolayer' />,
      label: 'AWS',
      tooltipId: 'aws',
    },
    {
      icon: <SiTailwindcss className='text-[62px] text-herolayer' />,
      label: 'Tailwind CSS',
      tooltipId: 'tailwindcss',
    },
    {
      icon: <SiSpringboot className='text-[62px] text-herolayer' />,
      label: 'Spring Boot Framework',
      tooltipId: 'springboot',
    },
    {
      icon: <AiOutlineJava className='text-[62px] text-herolayer' />,
      label: 'Java',
      tooltipId: 'java',
    },
    {
      icon: <BiLogoGoLang className='text-[62px] text-herolayer' />,
      label: 'Golang',
      tooltipId: 'golang',
    },
    {
      icon: <SiGin className='text-[62px] text-herolayer' />,
      label: 'Gin Gonic',
      tooltipId: 'gin',
    },
    {
      icon: <SiDjango className='text-[62px] text-herolayer' />,
      label: 'Django',
      tooltipId: 'django',
    },
    {
      icon: <SiFlask className='text-[62px] text-herolayer' />,
      label: 'Flask',
      tooltipId: 'flask',
    },
    {
      icon: <SiFastapi className='text-[62px] text-herolayer' />,
      label: 'Fast API',
      tooltipId: 'fastapi',
    },
    {
      icon: <SiGooglecloud className='text-[62px] text-herolayer' />,
      label: 'GCP',
      tooltipId: 'gcp',
    },
    {
      icon: <SiMongodb className='text-[62px] text-herolayer' />,
      label: 'Mongo DB',
      tooltipId: 'mongodb',
    },
    {
      icon: <SiFauna className='text-[62px] text-herolayer' />,
      label: 'Fauna DB',
      tooltipId: 'fauna',
    },
    {
      icon: <SiJenkins className='text-[62px] text-herolayer' />,
      label: 'Jenkins',
      tooltipId: 'jenkins',
    },
    {
      icon: <SiNginx className='text-[62px] text-herolayer' />,
      label: 'Nginx',
      tooltipId: 'nginx',
    },
    {
      icon: <SiRedux className='text-[62px] text-herolayer' />,
      label: 'Redux',
      tooltipId: 'redux',
    },
    {
      icon: <SiSelenium className='text-[62px] text-herolayer' />,
      label: 'Selenium',
      tooltipId: 'selenium',
    },
  ];

  return (
    <div className='flex min-h-lvh w-lvw bg-bg relative h-fit' id='skills'>
      <div className='w-full min-h-lvh h-fit flex flex-col relative'>
        <div className='w-full h-fit flex items-center justify-center font-extrabold mt-[140px] flex-col gap-4'>
          <p className='font-Raleway text-white text-[48px]'>Tools & Skills</p>

          <p className='font-Raleway text-white opacity-80 text-2xl mt-[60px]'>
            Tools I'm using on a daily basis
          </p>

          <div className='flex flex-row w-full h-fit items-center justify-center gap-4 flex-wrap'>
            {daily.map((skill) => (
              <Tooltip
                el={skill.icon}
                label={skill.label}
                tooltipId={skill.tooltipId}
              />
            ))}
          </div>
          <p className='font-Raleway text-white opacity-80 text-2xl mt-[60px]'>
            Tools I'm experienced with
          </p>
          <div className='flex flex-row w-full h-fit items-center justify-center gap-4 flex-wrap'>
            {experienced.map((skill) => (
              <Tooltip
                el={skill.icon}
                label={skill.label}
                tooltipId={skill.tooltipId}
              />
            ))}
          </div>
        </div>

        <p className='font-Raleway text-white opacity-80 text-sm max-w-[600px] mt-14 self-center'>
          In my daily work, I employ a range of tools, including those
          previously mentioned, alongside others. I'm committed to principles
          like S.O.L.I.D, Clean Code, and Clean Architecture, ensuring my code
          is not just functional, but also maintainable and scalable. I use
          arch, btw.
        </p>
      </div>
    </div>
  );
}
