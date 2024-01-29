import React from 'react'
import { Favcard } from '.'

function Favourite() {
  return (
    <section className=' flex  z-10 mt-80 ' >
        <div className='mt-40' >
        <div className='flex' >
                <h1 className='text-2xl mt-0 sm:mt-10 font-extrabold' >
                Young’s Favourite
                </h1>
            </div>
            <div className=' m-auto sm:flex gap-8 ' >
                <Favcard/>
                <Favcard/>
            </div>
         </div>
    </section>
  )
}

export default Favourite