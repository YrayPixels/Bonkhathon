"use client"

import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { Shopcontext } from '../../context/ecommerceContext';

export default function Page() {
  const { cartitem, setCartitem } = useContext(Shopcontext);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const total = cartitem.reduce((acc, item) => acc + (item.cost * item.count), 0);
    setTotalCost(total);
  }, [cartitem, setTotalCost]);

  const increaseCount = (product) => {
    setCartitem((prevItems) =>
      prevItems.map((item) =>
        item.name === product ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseCount = (product) => {
    setCartitem((prevItems) => {
      const updatedItems = prevItems
        .map((item) =>
          item.name === product ? { ...item, count: Math.max(0, item.count - 1) } : item
        )
        .filter((item) => item.count > 0);

      return updatedItems;
    });
  };

  return (
    <div className="min-h-screen bg-[#FF8A00] p-10 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <Link href='store' className="block mb-4 font-bold underline text-white text-center">
          Return to shop
        </Link>
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Your Cart:</h2>
        <div className=" ml-[250px] items-center">
          {cartitem.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-3 max-w-[300px] text-center">
              <img src={item.image} alt={item.name} className="w-full h-24 object-cover rounded-lg mb-2" />
              <h2 className="text-sm font-bold mb-1">{item.name}</h2>
              <p className="text-xs text-gray-700 mb-1">Cost: #{item.cost}</p>
              <div className="flex justify-center items-center space-x-2 mb-2">
                <button className="bg-white text-[#FF8A00] border-2 border-[#FF8A00] px-4 py-2 rounded" onClick={() => decreaseCount(item.name)}>
                  -
                </button>
                <span>{item.count}</span>
                <button className="bg-[#FF8A00] text-white px-4 py-2 rounded" onClick={() => increaseCount(item.name)}>
                  +
                </button>
              </div>
              <div className="font-bold">
                Total: #{item.cost * item.count}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="bg-green-500 text-white px-8 py-4 rounded-lg">
            Pay: #{totalCost}
          </button>
        </div>
      </div>
    </div>
  );
}
