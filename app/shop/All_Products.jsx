import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Right_Icon } from '../components/icons';
import products from '../api/data';

function All_Products() {
    return (
        <section className='mt-0 flex justify-center'>
            <div className='container max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto'>
                <div className='text-center'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mt-10'>
                        ALL PRODUCTS
                    </h1>
                </div>
                <div className='grid h-auto w-full mx-auto gap-4 justify-items-center mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4'>
                    {products.map((product) => (
                        <Link href={`/products/${product.id}`} key={product.id}>

                                <div className='relative w-full h-60 sm:w-60 sm:h-60 bg-gray-200 mx-auto rounded-2xl overflow-hidden '>
                                     {/* Adjust the width and height as needed */}
                                     <div className=' bg-red-500 text-center -rotate-45 absolute mt-4 text-white font-bold -ml-12 px-10 ' > {product.trending} </div>
                                    <Image
                                        src={product.images[0]}
                                        layout='fill'
                                        objectFit='cover'
                                        alt={product.name}
                                        className='rounded-2xl '
                                    />
                                </div>
                                <div className='flex justify-between items-center mt-5 px-2'>
                                    <div>
                                        <h1 className='text-lg sm:text-xl font-semibold'>{product.name}</h1>
                                        <del className='text-red-500 font-extrabold'><span className='text-red-500 font-semibold'>₹{product.originalPrice}</span></del>
                                        <span className='text-gray-500 ml-2 sm:ml-6 font-semibold'>₹{product.price}</span>
                                    </div>
                                    <div className='transition-transform hover:translate-x-1'>
                                        <Right_Icon />
                                    </div>
                                </div>
                            
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default All_Products;
