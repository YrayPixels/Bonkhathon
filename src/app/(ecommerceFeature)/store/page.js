"use client"

import React, { useContext, useState } from 'react';
import { Shopcontext } from '../../context/ecommerceContext';
import Link from 'next/link';

const ProductCard = (props) => {
  const { setCartitem, cartitem } = useContext(Shopcontext);
  const [isClicked, setIsClicked] = useState(null);

  const handleAddToCart = () => {
    setIsClicked(true);
    if (!cartitem.some((items) => items.name === props.name && items.cost === props.price)) {
      setCartitem((prevItems) => [...prevItems, {  key:props.key, name: props.name, cost: props.price, image:props.image, count: 1 }]);
    }
  };

  return (
    <div key={props.key} className="bg-white rounded-lg shadow-lg p-3 text-center">
      <img src={props.image} alt={props.name} className="w-full h-24 object-cover rounded-lg mb-2" />
      <h2 className="text-sm font-bold mb-1">{props.name}</h2>
      <p className="text-xs text-gray-700 mb-1">{props.description}</p>
      <p className="text-sm text-gray-900 font-bold">${props.price}</p>
      {isClicked ? ( 
        <Link href='cart'>
        <button className='bg-[#FF8A00] text-white rounded-lg text-xs px-2 py-1 mt-2'>
          Item Added
        </button>
        </Link>
      ) : (
        <button className='bg-[#FF8A00] text-white rounded-lg text-xs px-2 py-1 mt-2' onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

function App() {
  const items = [
    { key: 1, name: 'Moses', description: 'Rich, muscular and intelligent', price: '10.00', image: 'https://via.placeholder.com/150' },
    { key: 2, name: 'Tomiwa', description: 'Tall, handsome, funny, creative and amazing', price: '70.00', image: 'https://via.placeholder.com/150' },
    { key: 3, name: 'Moses', description: 'Rich, muscular and intelligent', price: '15.00', image: 'https://via.placeholder.com/150' },
    { key: 4, name: 'Moses', description: 'Rich, muscular and intelligent', price: '25.00', image: 'https://via.placeholder.com/150' },
    { key: 5, name: 'Moses', description: 'Rich, muscular and intelligent', price: '18.00', image: 'https://via.placeholder.com/150' },
    { key: 6, name: 'Moses', description: 'Rich, muscular and intelligent', price: '22.00', image: 'https://via.placeholder.com/150' },
    { key: 7, name: 'Moses', description: 'Rich, muscular and intelligent', price: '17.00', image: 'https://via.placeholder.com/150' },
    { key: 8, name: 'Moses', description: 'Rich, muscular and intelligent', price: '17.00', image: 'https://via.placeholder.com/150' },
    { key: 9, name: 'Moses', description: 'Rich, muscular and intelligent', price: '17.00', image: 'https://via.placeholder.com/150' },
    { key: 10, name: 'Moses', description: 'Rich, muscular and intelligent', price: '12.00', image: 'https://via.placeholder.com/150' },
    { key: 11, name: 'Moses', description: 'Rich, muscular and intelligent', price: '21.00', image: 'https://via.placeholder.com/150' },
    { key: 12, name: 'Moses', description: 'Rich, muscular and intelligent', price: '24.00', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="min-h-screen bg-[#FF8A00] p-10">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-white hidden md:block">Store</h1>
        <div className="bg-white rounded-lg p-2 flex items-center w-full md:w-1/2 lg:w-1/3">
          <input
            type="text"
            placeholder="Search for items"
            className="border-none focus:outline-none px-2 w-full"
          />
          <button className="bg-[#FF8A00] text-white rounded-lg px-3 py-1">
            Search
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href='cart' className="text-white">Cart</Link>
          <a href="#" className="text-white">Help</a>
          <a href="#" className="text-white">Account</a>
        </div>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {items.map((content) => (
          <ProductCard
            key={content.key}
            name={content.name}
            price={content.price}
            description={content.description}
            image={content.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
