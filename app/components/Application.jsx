import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Application() {
  return (
    <section className=' w-full h-auto bg-white rounded-3xl sm:flex ' >
      <div className='flex flex-col my-auto'>
        <div className=' text-2xl sm:text-2xl  font-extrabold  m-10  flex flex-col' >

          <span className=' my-0 sm:my-2'>
          DOWNLOAD APP & <br />
          GET THE VOUCHER!
          </span > 
        </div>
        <span className='mx-12 mb:0 mt-0 sm:mb-5 sm:-mt-5' >
        Get 30% off for first transaction using Rondovision mobile app for now.

        </span> 
        <div className='sm:flex hidden px-10 mx-2 gap-8'>
        <Image
        src={'/assets/img/apple_store.png'}
        width={100}
        height={100}
        alt='Apple Store'
        />
        <Image
        src={'/assets/img/apple_store.png'}
        width={100}
        height={100}
        alt='Apple Store'
        />
        </div>
      </div>
      <div className='flex align-middle ml-auto  '>
      <Image 
      src={'/assets/img/android.png'} 
      width={500} 
      height={800} 
      className=' mt-auto ml-auto '
      />
      
      </div>
      <div className='flex sm:hidden mx-auto content-center mb-10 w-60 gap-0'>
        <Image
        src={'/assets/img/apple_store.png'}
        width={100}
        height={100}
        alt='Apple Store'
        className='m-auto'
        />
        <Image
        src={'/assets/img/apple_store.png'}
        width={100}
        height={100}
        alt='Apple Store'
        className='m-auto'
        />
        </div>
    </section>
  )
}

export default Application;