import React from 'react';
import {
  RiReactjsLine,
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiBootstrapLine,
  RiGithubLine,
} from 'react-icons/ri';
import { AiOutlinePython } from 'react-icons/ai';
import { BiLogoDjango } from 'react-icons/bi';
import { TbBrandCpp } from "react-icons/tb";
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <RiHtml5Line className='text-5xl text-orange-600' />
        </motion.div>

        <motion.div
          variants={iconVariants(1.8)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <RiCss3Line className='text-5xl text-blue-500' />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <RiBootstrapLine
            variants={iconVariants(1)}
            initial='initial'
            animate='animate'
            className='text-5xl text-purple-600'
          />
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <RiJavascriptLine className='text-5xl text-yellow-500' />
        </motion.div>

        <motion.div
          variants={iconVariants(2.8)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <RiReactjsLine className='text-5xl text-cyan-400' />
        </motion.div>

        <motion.div
          variants={iconVariants(2.1)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <AiOutlinePython className='text-5xl fill-yellow-200' />
        </motion.div>

        <motion.div
          variants={iconVariants(1.7)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <TbBrandCpp className='text-5xl' />
        </motion.div>

        <motion.div
          variants={iconVariants(2.3)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <BiLogoDjango className='text-5xl text-green-400' />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <RiGithubLine className='text-5xl text-purple-400' />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
