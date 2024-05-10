/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable operator-linebreak */
import React from 'react';
import { education, professional } from '../data/career';
import { processTimeInterval } from '../utils/timeInterval';
import { useWindowSize } from '../hooks/usePageWidth';

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
        <p className='text-herolayer font-Raleway text-base font-bold max-w-24'>
          {intervalResult}
        </p>

        <p className='text-herolayer font-Raleway text-base font-bold max-w-24'>
          {interval}
        </p>
      </div>
    </div>
  );
}

export default function Career(): React.ReactElement {
  const pageWidth = useWindowSize();

  const rowCount = Math.max([education.length, professional.length].sort()[0]);

  const rows = Array.from({ length: rowCount + 1 }, (_, i) => i).map(
    (index) => {
      const professionalExperience =
        professional.length - 1 >= index
          ? professional[index]
          : {
              company: '',
              description: '',
              interval: '',
              position: '',
            };
      const educationExperience =
        education.length - 1 >= index
          ? education[index]
          : {
              company: '',
              description: '',
              interval: '',
              position: '',
            };

      return (
        <div className='w-full h-fit flex gap-4' key={index}>
          {professionalExperience.company === '' ? (
            <div className='w-full h-fit min-h-[13rem] rounded-lg p-6 flex flex-col gap-2' />
          ) : (
            <CareerBox
              company={professionalExperience.company}
              description={professionalExperience.description}
              interval={professionalExperience.interval}
            />
          )}

          {educationExperience.company === '' ? (
            <div className='w-full h-fit min-h-[13rem] rounded-lg p-6 flex flex-col gap-2' />
          ) : (
            <CareerBox
              company={educationExperience.company}
              description={educationExperience.position}
              interval={educationExperience.interval}
            />
          )}
        </div>
      );
      // eslint-disable-next-line comma-dangle
    }
  );

  if (pageWidth < 771) {
    return (
      <div
        className='min-h-lvh h-fit w-full flex bg-bg p-6 flex-col gap-4'
        id='career'
      >
        <div className='w-full h-fit flex flex-col gap-4'>
          <div className='w-full h-fit flex flex-col'>
            <p className='font-Raleway text-white text-3xl self-center text-center'>
              Professional Experience
            </p>

            <p className='font-Raleway text-white text-[1.5rem] opacity-50 self-center'>
              2018 - Present
            </p>
          </div>

          {professional.map((experience) => (
            <CareerBox
              company={experience.company}
              description={experience.description}
              interval={experience.interval}
              key={experience.company}
            />
          ))}
        </div>

        <div className='w-full h-fit flex flex-col gap-4 mt-6'>
          <div className='w-full h-fit flex flex-col'>
            <p className='font-Raleway text-white text-3xl self-center'>
              Education
            </p>

            <p className='font-Raleway text-white text-[1.5rem] opacity-50 self-center'>
              2014 - Present
            </p>
          </div>

          {education.map((experience) => (
            <CareerBox
              company={experience.company}
              description={experience.description}
              interval={experience.interval}
              key={experience.company}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className='min-h-lvh h-fit w-full flex bg-bg p-36 flex-col gap-4'
      id='career'
    >
      <div className='w-full h-fit flex justify-between gap-4'>
        <div className='w-full h-fit flex flex-col'>
          <p className='font-Raleway text-white text-3xl self-center whitespace-nowrap'>
            Professional Experience
          </p>

          <p className='font-Raleway text-white text-[1.5rem] opacity-50 self-center'>
            2018 - Present
          </p>
        </div>

        <div className='w-full h-fit flex flex-col'>
          <p className='font-Raleway text-white text-3xl self-center'>
            Education
          </p>

          <p className='font-Raleway text-white text-[1.5rem] opacity-50 self-center'>
            2014 - Present
          </p>
        </div>
      </div>

      {rows.map((row) => row)}
    </div>
  );
}
