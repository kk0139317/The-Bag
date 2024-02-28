import React from 'react'
import Image from 'next/image'
import { BestSellingCard } from '.'
import Link from 'next/link'
import { Right_Icon } from '../components/icons'

function All_Products() {
    return (
        <section className=' mt-0 flex ' >
            <div className=' sm:mt-10 mt-10 mx-auto flex-col ' >
            
            <div className='flex' >
                <h1 className='text-2xl sm:mt-0 mt-10 mx-auto font-extrabold' >
                    ALL PRODUCTS
                </h1>
            </div>
            
                <div className=' h-auto w-auto mx-auto justify-end items-center grid sm:grid-cols-3 gap-4 ' >
                <BestSellingCard/>
                <BestSellingCard/>
                <BestSellingCard/>
                <BestSellingCard/>
                <BestSellingCard/>
                <BestSellingCard/>
                
            </div>

                </div>
        </section>
    )
}

export default All_Products