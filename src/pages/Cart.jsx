import React from "react";
import Navbar from "../components/Navbar";
import ProductStore from "../store/ProductStore";
import Checkout from "../components/Checkout";

function Cart() {
  const cartItems = ProductStore((state) => state.cartItems);
  return (
    <div>
      <h1 className="text-3xl text-blue-600">Cart</h1>
      <div className="flex">
        <div className="mt-4 w-1/2 border rounded-lg h-96 ml-5">
          {cartItems.map((item) => (
            <div>
              <h1>{item.name}</h1>
              <h1>{item.price}</h1>
              <hr />
            </div>
          ))}
        </div>
        <div className="w-1/2 ml-10">
          <Checkout />
        </div>
      </div>
    </div>
  );
}

export default Cart;
