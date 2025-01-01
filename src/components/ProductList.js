import React from "react";

function ProductList({ addToCart }) {
  const products = [
    { id: 1, name: "Producto 1", price: 10 },
    { id: 2, name: "Producto 2", price: 20 },
    { id: 3, name: "Producto 3", price: 30 },
  ];

  return (
    <ul className="space-y-4">
      {products.map((product) => (
        <li key={product.id} className="flex justify-between items-center bg-white p-4 border border-gray-300 rounded-lg">
          <span className="text-lg">{product.name} - {product.price} €</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Añadir al carrito
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;


