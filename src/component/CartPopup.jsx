import React from "react";
import useCartStore from "../store/store";

const CartPopup = () => {
  const toggleCart = useCartStore((state) => state.toggleCart);
  const cart = useCartStore((state) => state.cart);
  const cleareCart = useCartStore((state) => state.cleareCart);
  const isCartOpen = useCartStore((state) => state.isCartOpen);

  if (!isCartOpen) return null;

  return (
    <div className="absolute right-4 top-16 bg-white shadow-lg p-4 rounded-lg w-64 z-50">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      <button
        onClick={toggleCart}
        className="absolute top-2 right-2 text-gray-500"
      >
        ✕
      </button>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <h3 className="text-lg">{item.name}</h3>
                <p>${item.price}</p>
                <p>Qty: {item.quantity}</p>
              </div>
              <div className="flex space-x-1">
                <button className="bg-green-500 text-white px-2 rounded">
                  +
                </button>
                <button className="bg-yellow-500 text-white px-2 rounded">
                  -
                </button>
                <button className="bg-red-500 text-white px-2 rounded">
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <button
          onClick={cleareCart}
          className="mt-4 w-full bg-red-600 text-white py-2 rounded"
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default CartPopup;
