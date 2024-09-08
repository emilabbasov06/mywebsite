import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className='bg-red mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shring-0 items-center'>
        <h1 className='text-3xl'>
          <a className='no-underline' href='/'>
            Ea
          </a>
        </h1>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a
          href='https://www.linkedin.com/in/emil-abbasov-39b12a218/'
          target='_blank'
        >
          <FaLinkedin />
        </a>
        <a href='https://github.com/emilabbasov06' target='_blank'>
          <FaGithub />
        </a>
        <a href='https://www.instagram.com/emil.abb_06/' target='_blank'>
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
