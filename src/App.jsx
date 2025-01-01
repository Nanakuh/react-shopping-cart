import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Header from "./components/Header";
import "./styles/tailwind.css"; // Asegúrate de que esté correctamente importado

function App() {
  const [cart, setCart] = useState(() => {
    // Intentar cargar el carrito desde localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Guardar el carrito en localStorage cuando cambie
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Función para añadir un producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Buscar si el producto ya está en el carrito
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // Incrementar la cantidad del producto existente
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Añadir el producto con cantidad inicial de 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]); // Vacía el carrito
  };

  const incrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Eliminar productos con cantidad 0
    );
  };

  const getTotalItems = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  };

  return (
    <div>
      <Header totalItems={getTotalItems()} totalPrice={getTotalPrice()} />
      <ProductList addToCart={addToCart} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
    </div>
  );
}

export default App;
