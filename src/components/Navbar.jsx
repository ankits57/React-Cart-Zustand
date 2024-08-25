import React from "react";
import { NavLink } from "react-router-dom";
import ProductStore from "../store/ProductStore.jsx";
function Navbar() {
  const cartCount = ProductStore((state) => state.cartCount);
  return (
    <nav className="flex flex-row justify-center text-2xl gap-4 p-4 bg-slate-200">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-black"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-black"
        }
        to="/cart"
      >
        Cart
      </NavLink>
      <h1 className="text-blue-500">Items in Cart ({cartCount})</h1>
    </nav>
  );
}

export default Navbar;
