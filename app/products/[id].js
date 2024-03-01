import { useEffect, useState } from 'react';
import Image from 'next/image';
import products from '../api/data'; // Adjust the import path as needed

export async function getServerSideProps(context) {
  const { id } = context.params;
  const product = products.find((product) => product.id === id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product },
  };
}

export default function ProductDetail({ product }) {
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setSelectedImage(product.images[0]);
    setSelectedColor(product.colors[0]);
  }, [product]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
        
        <div className="grid md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          {/* <div className="mb-4">
            <Image src={selectedImage} alt="Selected Product Image" width={400} height={400} />
          </div> */}

<div className="mb-4 relative" style={{ width: '400px', height: '400px' }}>
  <Image src={selectedImage} alt="Selected Product Image" layout="fill" objectFit="cover" />
</div>
          <div className="flex space-x-2 overflow-auto">
            {product.images.map((image, index) => (
              <button key={index} onClick={() => setSelectedImage(image)} className="relative" style={{ width: '100px', height: '100px' }}>
              <Image src={image} alt={`Product Image ${index}`} layout="fill" objectFit="cover" />
            </button>
            
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <div className="mt-4">
            <span className="text-lg font-semibold">Price: ₹.{product.price}</span>
            <span className="ml-2 text-gray-500 line-through">₹{product.originalPrice}</span>
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Color</label>
            <select
              className="border border-gray-300 rounded p-2"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              {product.colors.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4">
  <label className="block mb-2 text-sm font-medium text-gray-700">Color</label>
  <div>
    {product.sizes.map((size, index) => (
      <button
        key={index}
        value={size}
        onClick={() => setSelectedColor(size)}
        className={`mr-2 mb-2 p-2 px-6 rounded ${selectedColor === size ? 'bg-blue-500 text-white' : 'border border-gray-300 bg-white text-gray-700'}`}
      >
        {size}
      </button>
    ))}
  </div>
</div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              className="border border-gray-300 rounded p-2"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
            />
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Add to Cart
          </button>

          <button className="mt-4 ml-12  bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Buy Now
          </button>
        </div>
      </div>

      
   </div>
  );
}
