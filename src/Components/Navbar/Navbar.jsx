import React from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className='bg-white relative'>
        <nav className='md:flex md:flex-row flex flex-col items-center justify-between flex-wrap  py-6 md:mx-14'>
          {/* logo here */}
          <div className='flex items-center flex-shrink-0 text-gray-500 mr-6'>
            <Link to='/'>
              <p className='text-3xl text-slate-900 font-bold uppercase'>
                <img src='/logo.svg' className="w-16" alt='logo' />
              </p>
            </Link>
          </div>
          {/* navigation link here */}
          <div className='md:flex md:flex-row flex flex-col items-center'>
            <Link
              to='/'
              className='inline-block text-md px-4 py-2 leading-none   text-gray-800   hover:text-blue-500 hover:bg-white mt-4 lg:mt-0'
            >
              Home
            </Link>
            <Link
              to='/about'
              className='relative inline-block text-md px-4 py-2 leading-none  text-gray-800   hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-4'
            >
              About
            </Link>
            <Link
              to='/services'
              className='inline-block text-md px-4 py-2 leading-none  text-gray-800  hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-4'
            >
              Services
            </Link>
            <Link
              to='/blog'
              className='relative inline-block text-md px-4 py-2 leading-none  text-gray-800   hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-4'
            >
              Blog
            </Link>
            <Link
              to='/contact'
              className='inline-block text-md px-4 py-2 leading-none  text-gray-800   hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-4'
            >
              Contact
            </Link>
          </div>
          {/* login & cart & wish icon here */}
          <div>
            <div className='flex items-center md:space-x-6'>
              <Link to='/cart'>
                <FiShoppingBag className='text-gray-500' size={25} />
              </Link>
              <Link to='/search'>
                {" "}
                <FiSearch className='text-gray-500 cursor-pointer' size={25} />
              </Link>
              <Link to='/Appointment'>
                <button className='px-6 py-2.5 rounded border border-[#FF3811] text-[#FF3811]'>
                  Appointment
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
