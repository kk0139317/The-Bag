import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function About() {
  return (
    <section className=' w-full h-auto bg-gray-100 rounded-3xl sm:flex mt-8 ' >
      <div className='flex flex-col '>
        <div className=' text-2xl sm:text-5xl  font-extrabold  m-10  flex flex-col' >
          <div className='bg-white mt-2 p-2 sm:mt-10 my-2 w-60 -rotate-3 '>
            THE
          </div > 
          <span className=' my-0 sm:my-2'>
            FOUNDER
          </span > 
          {/* <span className=' bg-amber-300 p-2 my-0 sm:my-2 w-80 -rotate-3 '>
            UNIQUE
          </span>  
          <span className=' my-2  pr-10  '>
            PRODUCTS.
          </span> */}
        </div>
        <span className='mx-12 mb:0 -mt-10 sm:mb-5 sm:-mt-5' >
        Hello! I am Shambhavi.

THE BAG was found in the year 2019 to find some sustainable alternatives to all things plastic.
        </span> 
        <Link href={"#"} className=' mx-10 text-center py-3 rounded-lg my-2 sm:mb-10 -mb-16 bg-black shadow-md shadow-gray-300 text-white w-40 ' >
           MORE
        </Link>
      </div>
      <div className='flex align-middle ml-auto  '>
      <Image 
      src={'/assets/img/founder.png'} 
      width={500} 
      height={800} 
      className=' mt-auto ml-auto '
      />
      </div>
    </section>
  )
}

export default About