import React from 'react'
import Image from 'next/image'
import { Arivalcard } from '.'

function Arrivals() {
    return (
        <section className=' mt-20 flex-col ' >
            <div className='flex' >
                <h1 className='text-2xl mx-auto sm:mt-0 mt-10 font-extrabold' >
                    NEW ARRIVALS
                </h1>
            </div>
            <div className=' m-auto sm:flex gap-8 ' >
                <Arivalcard/>
                <Arivalcard/>
                <Arivalcard/>
            </div>
        </section>
    )
}

export default Arrivals