"use client"

import React, { useContext, useState }  from 'react';
import { Shopcontext } from '../../context/ecommerceContext';

const items = [
  { id: 1, name: 'Moses', description: 'Rich, muscular and intelligent', price: '$10.00', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Tomiwa', description: 'Tall, handsome, funny, creative and amazing', price: '$20.00', image: 'https://via.placeholder.com/150' },
  { id: 3,  name: 'Moses', description: 'Rich, muscular and intelligent', price: '$15.00', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Moses', description: 'Rich, muscular and intelligent', price: '$25.00', image: 'https://via.placeholder.com/150' },
  { id: 5,  name: 'Moses', description: 'Rich, muscular and intelligent', price: '$18.00', image: 'https://via.placeholder.com/150' },
  { id: 6,  name: 'Moses', description: 'Rich, muscular and intelligent', price: '$22.00', image: 'https://via.placeholder.com/150' },
  { id: 7,  name: 'Moses', description: 'Rich, muscular and intelligent', price: '$17.00', image: 'https://via.placeholder.com/150' },
  { id: 8,  name: 'Moses', description: 'Rich, muscular and intelligent', image: 'https://via.placeholder.com/150' },
  { id: 9,  name: 'Moses', description: 'Rich, muscular and intelligent', image: 'https://via.placeholder.com/150' },
  { id: 10,  name: 'Moses', description: 'Rich, muscular and intelligent', price: '$12.00', image: 'https://via.placeholder.com/150' },
  { id: 11,  name: 'Moses', description: 'Rich, muscular and intelligent', price: '$21.00', image: 'https://via.placeholder.com/150' },
  { id: 12,  name: 'Moses', description: 'Rich, muscular and intelligent', price: '$24.00', image: 'https://via.placeholder.com/150' },
];

function App() {

  const { setCartitem, cartitem } = useContext(Shopcontext);
  const [isClicked, setIsClicked] = useState(null);

  const handleAddToCart = () => {
    setIsClicked(true);
    if (!cartitem.some((storeItem) => storeItem.name === items.name && storeItem.cost === items.cost)) {
        setCartitem((prevItems) => [...prevItems, { name: items.name, cost:items.cost, count:1}])
    };
  };

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
          <a href="#" className="text-white">Cart</a>
          <a href="#" className="text-white">Help</a>
          <a href="#" className="text-white">Account</a>
        </div>
      </header>
      <main>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-4">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg p-2 text-center">
              <img src={item.image} alt={item.name} className="w-full h-24 object-cover rounded-lg mb-2" />
              <h2 className="text-sm font-bold mb-1">{item.name}</h2>
              <p className="text-xs text-gray-700 mb-1">{item.description}</p>
              <p className="text-sm text-gray-900 font-bold">{item.price}</p>
              {isClicked ? (
          
            <button className='bg-[#FF8A00] text-white rounded-lg text-xs px-2 py-1 mt-2'>
              item Added
            </button>
          
        ) : (
              <button className='bg-[#FF8A00] text-white rounded-lg text-xs px-2 py-1 mt-2' 
              onClick={handleAddToCart}>
                Add to Cart
              </button>
        )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
