// ProductList.js
import React from "react";
import { products } from "../data";
import useCartStore from "../store/store";

const ProductList = () => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {/*  { id: 1, name: "Product 1", price: 20 } */}
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
              className="mt-2 bg-blue-500 text-white py-1 px-3 rounded"
              onClick={() => {
                addItem(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
