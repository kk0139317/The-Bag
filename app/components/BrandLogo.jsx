import React from 'react'
import Image from 'next/image'

function BrandLogo() {
  return (
    // <div>

<Image 
     src={'/assets/img/shopify-logo.png'}
     width={80}
     height={80}
     alt='Shopify Logo'
     className='m-auto mx-auto float-left '
     />

    // </div>
  )
}

export default BrandLogo