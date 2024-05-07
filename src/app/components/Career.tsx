import React from 'react';
import { education, professional } from '../data/career';
import { processTimeInterval } from '../utils/timeInterval';

function CareerBox({
  company,
  description,
  interval,
}: {
  company: string;
  description: string;
  interval: string;
}): React.ReactElement {
  const intervalResult = processTimeInterval(interval);

  return (
    <div className='w-full h-fit min-h-[13rem] rounded-lg border border-solid border-herolayer p-6 flex flex-col gap-2'>
      <p className='font-Raleway text-white text-[1.25rem]'>{company}</p>

      <p className='font-Raleway text-white text-base opacity-50'>
        {description}
      </p>

      <div className='flex flex-row h-fit w-full justify-between mt-auto'>
        <p className='text-herolayer font-Raleway text-base font-bold'>
          {intervalResult}
        </p>

        <p className='text-herolayer font-Raleway text-base font-bold'>
          {interval}
        </p>
      </div>
    </div>
  );
}

export default function Career(): React.ReactElement {
  return (
    <div className='min-h-lvh h-fit w-full flex gap-2 bg-bg p-36' id='career'>
      <div className='w-1/2 h-full flex flex-col p-2'>
        <div className='w-full h-fit flex flex-col'>
          <p className='font-Raleway text-white text-3xl self-center'>
            Professional Experience
          </p>

          <p className='font-Raleway text-white text-[1.5rem] opacity-50 self-center'>
            2018 - Present
          </p>
        </div>

        <div className='h-fit w-full flex flex-col mt-16 px-[7.5rem] gap-16'>
          {professional.map((job) => (
            <CareerBox
              company={job.company}
              description={job.description}
              interval={job.interval}
            />
          ))}
        </div>
      </div>

      <div className='w-1/2 h-full flex flex-col p-2'>
        <div className='w-full h-fit flex flex-col'>
          <p className='font-Raleway text-white text-3xl self-center'>
            Education
          </p>

          <p className='font-Raleway text-white text-[1.5rem] opacity-50 self-center'>
            2014 - Present
          </p>
        </div>

        <div className='h-fit w-full flex flex-col mt-16 px-[7.5rem] gap-16'>
          {education.map((edu) => (
            <CareerBox
              company={edu.company}
              description={edu.position}
              interval={edu.interval}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
