import React from 'react';
import { PROJECTS } from '../constants/index';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Projects
      </motion.h2>
      <div className='projects flex items-center justify-center flex-wrap gap-3'>
        {PROJECTS.map((project, index) => {
          return (
            <div className='card mb-8 flex flex-wrap lg:justify-center h-auto' key={index}>
              <img src={project.image} alt={project.title} />
              <div className='p-3 flex flex-col items-center'>
                <h6 className='mb-2 font-semibold'>{project.title}</h6>
                <a className='linkBtn text-center' href={project.link} target='_blank'>GitHub</a>
              </div>
              {/* <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className='w-full lg:w-1/4'
              >
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className='mb-6 rounded'
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className='w-full max-w-xl lg:w-3/4'
              >
                <h6 className='mb-2 font-semibold'>{project.title}</h6>
                <p className='mb-4 text-neutral-400'>{project.description}</p>
                {project.technologies.map((tech, index) => {
                  return (
                    <span
                      className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'
                      key={index}
                    >
                      {tech}
                    </span>
                  );
                })}
              </motion.div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
