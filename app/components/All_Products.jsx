import React from 'react'
import Image from 'next/image'
import { BestSellingCard } from '.'
import Link from 'next/link'
import { Right_Icon } from './icons'

function All_Products() {
    return (
        <section className=' mt-96 flex ' >
            <div className=' sm:mt-40 mt-10 flex-col ' >
            
            <div className='flex' >
                <h1 className='text-2xl sm:mt-0 mt-10 mx-auto font-extrabold' >
                    ALL PRODUCTS
                </h1>
            </div>
            <div className=' m-auto sm:flex gap-8 ' >
                <BestSellingCard/>
                <BestSellingCard/>
                <BestSellingCard/>
            </div>
            <div className='flex justify-center mt-4' >
            <Link href={"#"}  
            className=' mx-auto border-2 px-4 py-2 shadow-md bg-amber-100 shadow-gray-200 border-amber-300  flex-row'
            >
            <span className=' float-left my-auto ' >
                  See all
                </span>
                 <Right_Icon />
            </Link>
                </div>
                </div>
        </section>
    )
}

export default All_Products