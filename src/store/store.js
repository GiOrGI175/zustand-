import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  isCartOpen: false,

  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  addItem: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      }

      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),

  increaseQuantity: (itemid) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === itemid ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decreaseQuantity: (ItemId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === ItemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),

  cleareCart: () => set({ cart: [] }),
}));

export default useCartStore;
