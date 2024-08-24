import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-black to-blue-900 ... text-gray-300'>
      <div>
        {/* <img src={Logo} alt='Logo Image' style={{ width: '200px' }} /> */}
        <h1 className="text-2xl font-bold text-gray-400">
          Manoj's Portfolio
        </h1>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className="hover:text-white hover:scale-110">
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-white hover:scale-110">
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-white hover:scale-110">
          <Link to='education' smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li className="hover:text-white hover:scale-110">
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-white hover:scale-110">
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:text-white hover:scale-110">
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='  sm:visible md:hidden z-10 '>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen   text-black font-semibold  bg-gray-700 flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl hover:text-white hover:scale-110'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-white hover:scale-110'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-white hover:scale-110'>
          <Link onClick={handleClick} to='education' smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-white hover:scale-110'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-white hover:scale-110'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-white hover:scale-110'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed  flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/43765b196'
              target='_blank' rel="noreferrer">
                LinkedIn
               <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/manojkum1'
              target='_blank' rel="noreferrer"
              >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
          <a
          className='flex justify-between items-center w-full text-gray-300'
          href='mailto:krmanoj2298@gmail.com'
          target='_blank' rel="noreferrer"
        >
          Email <HiOutlineMail size={30} />
        </a>

          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1U1D9cRECSqbc6PQY5EyBjzrmip4nxglS/view?usp=drivesdk'
              target='_blank' rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;