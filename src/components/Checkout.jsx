import React from "react";
import ProductStore from "../store/ProductStore";

function Checkout() {
  const cartItems = ProductStore((state) => state.cartItems);
  const clearCart = ProductStore((state) => state.clearCart);
  const totalPrice = cartItems.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);
  return (
    <div>
      <h1 className="text-xl text-green-400">Checkout</h1>
      <h1 className="text-5xl">Price : {totalPrice}</h1>
      <button
        onClick={clearCart}
        className="bg-red-600 text-white p-4 text-3xl rounded-lg"
      >
        Clear Cart
      </button>
    </div>
  );
}

export default Checkout;
