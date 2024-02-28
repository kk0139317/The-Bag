import React from 'react'
import Image from 'next/image'
import { WidthFull } from '@mui/icons-material'
import BrandLogo from './BrandLogo'

function Brands() {
  return (
    <section className=' w-full bg-amber-300 absolute left-0 my-10 py-4 px-10 ' >
     <div className='flex flex-wrap'>

   <BrandLogo/>
   <BrandLogo/>
   <BrandLogo/>
     </div>
    </section>
  )
}

export default Brands