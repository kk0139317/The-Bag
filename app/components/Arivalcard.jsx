import React from 'react'
import Image from 'next/image'
import { Right_Icon } from './icons'
function Arivalcard() {
  return (
    <div className=' flex-col my-10 m-auto w-auto '>
    <div>

        <Image
            src={"/assets/img/card-1.png"}
            width={400}
            height={500}
            alt='Girl.png'
            className=' bg-gray-200 m-auto rounded-2xl '
        />
    </div>
    <div className='flex'>
        <div>

        <h1 className=' text-xl font-semibold mt-5 '>
            Hoodies & Sweetshirt
        </h1>
        <span className=' text-gray-500 font-semibold  ' >Explore Now</span>
        </div>
        <div className=' ml-auto my-auto mr-2 hover:mr-0 transition-transform '>
            <Right_Icon/>
        </div>
    </div>

</div>
  )
}

export default Arivalcard