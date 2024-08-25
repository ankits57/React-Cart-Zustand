import React from "react";
import ProductStore from "../store/ProductStore.jsx";

function Card(props) {
  const addItem = ProductStore((state) => state.addItem);
  const removeItem = ProductStore((state) => state.removeItem);
  const cartItems = ProductStore((state) => state.cartItems);
  const addToCart = ProductStore((state) => state.addToCart);

  // Check if the item is already in the cart
  const isInCart = cartItems.some((item) => item.id === props.id);

  const handleButtonClick = () => {
    if (isInCart) {
      removeItem(props.id);
    } else {
      addItem(props);
      addToCart();
    }
  };

  return (
    <div>
      <div className="p-2 w-96 border rounded-lg">
        <h1 className="text-blue-500">{props.name}</h1>
        <h1 className="text-sm">{props.brand}</h1>
        <div className="flex gap-2">
          <h1 className="p-1 bg-green-300 w-fit rounded-md">{props.catg}</h1>
          <h1 className="p-1 bg-red-300 w-fit rounded-md">{props.color}</h1>
          <h1 className="p-1 bg-blue-300 w-fit rounded-md">{props.psize}</h1>
          <h1 className="p-1 bg-orange-300 w-fit rounded-md">{props.weight}</h1>
        </div>
        <h1 className="text-xl">Rs {props.price}</h1>
        <button
          className={`p-3 text-white rounded-lg ${
            isInCart ? "bg-red-600" : "bg-blue-600"
          }`}
          onClick={handleButtonClick}
        >
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default Card;
