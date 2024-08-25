import React from "react";
import productdata from "../data/productdata.json";
import Card from "./Card";
function Products() {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-4 gap-4">
        {productdata.map((product) => (
          <Card
            id={product.product_id}
            key={product.product_id}
            name={product.product_name}
            catg={product.category}
            brand={product.brand}
            psize={product.size}
            weight={product.weight}
            color={product.color}
            size={product.size}
            price={product.price}
          />
        ))}
      </div>
      s
    </div>
  );
}

export default Products;
