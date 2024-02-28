import React from 'react'
import Link from 'next/link'

function Contatct() {
  return (
    <section className=' w-full left-0 py-10 absolute bg-amber-400 text-white ' >
      <div className=' justify-center text-center flex flex-col my-10 ' >
        <h1 className=' font-extrabold text-2xl sm:text-3xl ' >
        JOIN SHOPPING COMMUNITY TO  <br />
        GET MONTHLY PROMO
        </h1>
        <span className=' text-l my-3' >
        Type your email down below and be young wild <br /> generation
        </span>
        <div className='bg-white text-white flex  w-80 mx-auto  ' >
        <input type="text"
        className=' text-black border-none  focus:border-none'
        />
        </div>
      </div>
    </section>
  )
}

export default Contatct