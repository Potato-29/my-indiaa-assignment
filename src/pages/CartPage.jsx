import React from "react";
import { useSelector } from "react-redux";
import QuantityCounter from "../components/QuantityCounter/QuantityCounter";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems
    .reduce((total, item) => total + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <div className="container mx-auto px-4 py-8 h-screen">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded shadow"
            >
              <img
                className="w-16 h-16 object-contain mb-4 md:mb-0"
                src={item.image}
                alt={item.title}
              />
              <div className="flex-1 ml-0 md:ml-4 mb-4 md:mb-0 text-center md:text-left">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-700">Price: ₹{item.price}</p>
              </div>
              <QuantityCounter product={item} />
              <p className="text-lg font-semibold ml-0 md:ml-4 mt-4 md:mt-0">
                Total: ₹{(item.price * item.qty).toFixed(2)}
              </p>
            </div>
          ))}
          <div className="flex justify-end mt-4">
            <div className="text-right">
              <p className="text-xl font-bold">Total Amount: ₹{totalAmount}</p>
              <button
                className="mt-2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={() =>
                  alert(`Total amount to be paid: ₹${totalAmount}`)
                }
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
