import React from 'react';
import { projects } from '../data/projects';
import ProjectBox from './ProjectBox';

export default function Projects(): React.ReactElement {
  return (
    <div
      className='min-h-lvh w-full flex flex-col bg-bg p-36 gap-2'
      id='projects'
    >
      <h1 className='font-Raleway text-white text-5xl font-extrabold self-center'>
        Projects
      </h1>

      <div className='flex gap-4 w-full max-w-full mt-4 flex-wrap'>
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
