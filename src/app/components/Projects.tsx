import React from 'react';
import { projects } from '../data/projects';
import ProjectBox from './ProjectBox';
import { useWindowSize } from '../hooks/usePageWidth';

export default function Projects(): React.ReactElement {
  const pageWidth = useWindowSize();

  if (pageWidth < 1044) {
    return (
      <div
        className='min-h-lvh w-full flex flex-col bg-bg p-6 gap-2 h-fit items-center pb-6'
        id='projects'
      >
        <h1 className='font-Raleway text-white text-5xl font-extrabold self-center'>
          Projects
        </h1>

        <div className='flex gap-4 w-full max-w-full mt-4 flex-wrap justify-center'>
          {projects.map((project) => (
            <ProjectBox
              key={project.projectName}
              projectName={project.projectName}
              projectData={project.projectData}
              labels={project.labels}
            />
          ))}
        </div>
      </div>
    );
  }

  if (pageWidth < 601) {
    return (
      <div
        className='min-h-lvh w-full flex flex-col bg-bg p-10 gap-2 h-fit pb-6'
        id='projects'
      >
        <h1 className='font-Raleway text-white text-5xl font-extrabold self-center'>
          Projects
        </h1>

        <div className='flex gap-4 w-full max-w-full mt-4 flex-wrap justify-center'>
          {projects.map((project) => (
            <ProjectBox
              key={project.projectName}
              projectName={project.projectName}
              projectData={project.projectData}
              labels={project.labels}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className='min-h-lvh w-full flex flex-col bg-bg p-36 gap-2 h-fit justify-self-center pb-6'
      id='projects'
    >
      <h1 className='font-Raleway text-white text-5xl font-extrabold self-center'>
        Projects
      </h1>

      <div className='flex gap-4 w-full max-w-full mt-4 flex-wrap justify-center'>
        {projects.map((project) => (
          <ProjectBox
            key={project.projectName}
            projectName={project.projectName}
            projectData={project.projectData}
            labels={project.labels}
          />
        ))}
      </div>
    </div>
  );
}
