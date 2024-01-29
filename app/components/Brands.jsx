import React from 'react'
import Image from 'next/image'
import { WidthFull } from '@mui/icons-material'

function Brands() {
  return (
    <section className=' w-full bg-amber-200 absolute left-0 my-10 py-4 px-10 ' >
     <div className='flex flex-wrap'>

     <Image 
     src={'/assets/img/h&m-logo.png'}
     width={50}
     height={10}
     alt='H&M Logo'
     className=' m-auto float-left '
     />

  <Image 
     src={'/assets/img/obey-logo.png'}
     width={60}
     height={80}
     alt='obey Logo'
     className=' m-auto float-left '
     />


  <Image 
     src={'/assets/img/shopify-logo.png'}
     width={80}
     height={80}
     alt='Shopify Logo'
     className='m-auto float-left '
     />

  <Image 
     src={'/assets/img/loceste-logo.png'}
     width={100}
     height={80}
     alt=' locostey Logo'
     className=' m-auto float-left -my-10 '
     />


  <Image 
     src={'/assets/img/levis-logo.png'}
     width={70}
     height={80}
     alt='Levis Logo'
     className='m-auto float-left '
     />
    
  <Image 
     src={'/assets/img/amazon-logo.png'}
     width={80}
     height={80}
     alt='Amazon Logo'
     className=' m-auto float-left  '
     />

     </div>
    </section>
  )
}

export default Brands