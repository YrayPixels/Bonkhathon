"use client";

import React, { useContext } from 'react';
import { Shopcontext } from '../../context/ecommerceContext';
import Link from 'next/link';

export default function DetailsPage() {
  const { selectedProduct, setCartitem, cartitem } = useContext(Shopcontext);

  if (!selectedProduct) {
    return <div>No product selected</div>;
  }

  const handleAddToCart = () => {
    if (!cartitem.some((items) => items.name === selectedProduct.name && items.cost === selectedProduct.cost)) {
      setCartitem((prevItems) => [...prevItems, { key: selectedProduct.key, name: selectedProduct.name, cost: selectedProduct.cost, image: selectedProduct.image, count: 1 }]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FF8A00] p-10 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <Link href='store' className="block mb-4 font-bold underline text-white text-center">
          Return to shop
        </Link>
        <div className="bg-white rounded-lg shadow-lg p-3 m-2 lg:w-[350px] text-center mx-auto">
          <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-40  object-cover rounded-lg mb-2" />
          <h2 className="text-sm font-bold mb-1">{selectedProduct.name}</h2>
          <p className="text-xs text-gray-700 mb-1">Cost: ${selectedProduct.cost}</p>
          <p className="text-xs text-gray-700 mb-1">{selectedProduct.description}</p>
          <button className='bg-[#FF8A00] text-white rounded-lg text-xs px-2 py-1 mt-2' onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
