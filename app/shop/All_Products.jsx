// Assuming your data structure in products matches the usage
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Right_Icon } from '../components/icons';
import products from '../api/data';

function All_Products() {
    console.log(products)
    return (
        <section className='mt-0 flex'>
            <div className='sm:mt-10 mt-10 mx-auto flex-col'>
                <div className='flex'>
                    <h1 className='text-2xl sm:mt-0 mt-10 mx-auto font-extrabold'>
                        ALL PRODUCTS
                    </h1>
                </div>
                <div className='grid h-auto w-auto mx-auto gap-4 justify-items-center sm:grid-cols-3'>
                    {products.map((product) => (
                        <Link href={`/products/${product.id}`} key={product.id}>

                                <div className='relative w-60 h-60'> {/* Adjust the width and height as needed */}
                                    <Image
                                        src={product.images[0]}
                                        layout='fill'
                                        objectFit='cover'
                                        alt={product.name}
                                        className='rounded-2xl'
                                    />
                                </div>
                                <div className='flex justify-between items-center mt-5'>
                                    <div>
                                        <h1 className='text-xl font-semibold'>{product.name}</h1>
                                        <span className='text-gray-500 font-semibold'>₹{product.price}</span>
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
