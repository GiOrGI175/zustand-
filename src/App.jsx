import React from "react";
import ProductList from "./component/ProductList";
import CartPopup from "./component/CartPopup";
import useCartStore from "./store/store";

const App = () => {
  const toggleCart = useCartStore((state) => state.toggleCart);
  return (
    <div className="relative min-h-screen bg-gray-100">
      <ProductList />
      <button
        onClick={toggleCart}
        className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Cart
      </button>
      <CartPopup />
    </div>
  );
};

export default App;
