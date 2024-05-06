import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateCartItem, getTotalPrice } =
    useContext(CartContext);

  const handleQuantityChange = (index, newQuantity) => {
    updateCartItem(index, { ...cartItems[index], quantity: newQuantity });
  };

  const handleBuyNow = () => {
    // You can customize the alert message here
    alert("Checkout page is coming soon!");
  };

  return (
    <div className="w-full bg-[#EEEEEE] flex flex-col h-screen justify-between">
      <Navbar />
      <div className="cart-outer-container w-full p-16 flex-grow">
        {cartItems.length === 0 ? (
          <div className="cart-container p-6 h-full w-full bg-slate-300 rounded-md flex items-center justify-center text-center">
            <div className="empty-cart-container flex-col text-[#222831]">
              <div className=" font-bold text-4xl">Your cart is empty....</div>
              <div className="mt-2 font-semibold text-2xl">
                Wanna shop something?
              </div>
              <br />
              <Link to="/shop">
                <Button Button_Name="Shop Now" class_button="explore-btn" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="cart-container w-full bg-slate-300 rounded-md p-8 flex flex-col justify-between">
            <div className="cart-items-container">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="cart-item flex items-center justify-between mb-4">
                  <img
                    src={item.img_src}
                    alt={item.product_name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="product-info flex-1 ml-4">
                    <h3 className="font-bold">{item.product_name}</h3>
                    <p className="text-gray-500">Rs. {item.product_price}</p>
                  </div>
                  <div className="actions">
                    <button
                      className="bg-[#222831] text-white px-2 py-1 rounded-md mr-2"
                      onClick={() =>
                        handleQuantityChange(index, item.quantity - 1)
                      }
                      disabled={item.quantity === 1}>
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="bg-[#222831] text-white px-2 py-1 rounded-md mr-2"
                      onClick={() =>
                        handleQuantityChange(index, item.quantity + 1)
                      }>
                      +
                    </button>
                    <button
                      className="bg-[#222831] text-white px-2 py-1 rounded-md mr-2"
                      onClick={() => removeFromCart(index)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="total-price-container mt-8 text-right">
              <h3 className="font-bold text-2xl">
                Total: Rs. {getTotalPrice()}
              </h3>
            </div>
            <div className="buy-now-container mt-4 text-right">
              <button
                ripple={false}
                className="bg-[#222831] rounded-md p-2 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
