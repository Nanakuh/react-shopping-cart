import React from "react";

function Cart({
  cart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
}) {
  return (
    <div className='bg-gray-50 p-6 rounded-lg shadow-lg mt-6'>
      <h2 className='text-xl font-bold mb-4'>Shopping cart</h2>
      <ul className='space-y-4'>
        {cart.map((item) => (
          <li
            key={item.id}
            className='flex justify-between items-center border-b border-gray-300 py-2'
          >
            <span className='text-lg'>
              {item.name} x {item.quantity} - {item.price * item.quantity} €
            </span>
            <div className='flex space-x-2'>
              <button
                onClick={() => decrementQuantity(item.id)}
                className='bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600'
              >
                -
              </button>
              <button
                onClick={() => incrementQuantity(item.id)}
                className='bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600'
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className='bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600'
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={clearCart}
        className='mt-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600'
      >
        Empty shopping cart
      </button>
    </div>
  );
}

export default Cart;
