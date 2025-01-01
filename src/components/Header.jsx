import React from "react";

function Header({ totalItems, totalPrice }) {
  return (
    <header className="flex justify-between items-center bg-gray-100 p-4 border-b border-gray-300">
      <h1 className="text-2xl font-bold text-gray-800">My Shop</h1>
      <div className="text-lg font-semibold text-blue-600">
        🛒 {totalItems} items - {totalPrice} €
      </div>
    </header>
  );
}

export default Header;
