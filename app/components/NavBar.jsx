'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Navicon } from './icons';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='flex flex-wrap py-6'>
        <div className='text-black text-2xl font-extrabold'>
            FASHION
        </div>
        <div className='ml-auto text-sm gap-6 my-auto text-center font-normal sm:flex hidden'>
        <Link href={"#"} className='px-2 hover:bg-gray-100 py-2 mt-2 rounded-md hover:bg-opacity-90 transition duration-300 ease-in-out'>CATALOGUE</Link>
        <Link href={"#"} className='px-2 hover:bg-gray-100 py-2 mt-2 rounded-md hover:bg-opacity-90 transition duration-300 ease-in-out'>FASHION</Link>
        <Link href={"#"} className='px-2 hover:bg-gray-100 py-2 mt-2 rounded-md hover:bg-opacity-90 transition duration-300 ease-in-out'>FAVOURITE</Link>
        <Link href={"#"} className='px-2 hover:bg-gray-100 py-2 mt-2 rounded-md hover:bg-opacity-90 transition duration-300 ease-in-out'>LIFESTYLE</Link>
        <Link href={"#"} className='bg-black text-white px-2 py-2 mt-2 rounded-md font-semibold hover:bg-opacity-90 transition duration-300 ease-in-out'>SIGNUP</Link>

        </div>
        {/* Mobile menu button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-black right-8 mt-2 sm:hidden absolute '>
            <Navicon/>
        </button>

        {isMenuOpen && (
            <div className='text-sm gap-4 ml-auto text-center font-normal grid mt-12 sm:hidden bg-white shadow-md rounded-lg p-4 duration-100 px-10 absolute right-5 z-10 '>
        <Link href={"#"} className='hover:bg-gray-100 rounded-md p-2 transition duration-300 ease-in-out'>CATALOGUE</Link>
        <Link href={"#"} className='hover:bg-gray-100 rounded-md p-2 transition duration-300 ease-in-out'>FASHION</Link>
        <Link href={"#"} className='hover:bg-gray-100 rounded-md p-2 transition duration-300 ease-in-out'>FAVORITE</Link>
        <Link href={"#"} className='hover:bg-gray-100 rounded-md p-2 transition duration-300 ease-in-out'>LIFESTYLE</Link>
        <Link href={"#"} className='bg-black text-white px-2 py-2 mt-2 rounded-md font-semibold hover:bg-opacity-90 transition duration-300 ease-in-out'>SIGNUP</Link>
    </div>
        )}
    </div>
  );
}

export default NavBar;
