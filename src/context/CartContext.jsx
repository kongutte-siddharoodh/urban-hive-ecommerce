import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingItem = cartItems.find(
      (item) => item.product_name === product.product_name
    );
    if (existingItem) {
      // If the product is already in the cart, update the quantity
      updateCartItem(cartItems.indexOf(existingItem), {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      });
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const updateCartItem = (index, updatedItem) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index] = updatedItem;
    setCartItems(updatedCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.product_price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItem,
        getTotalPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
};
