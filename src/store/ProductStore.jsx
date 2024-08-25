import { create } from "zustand";

const ProductStore = create((set) => ({
  cartCount: 0,
  cartItems: [],
  addItem: (item) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
    })),
  removeItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
  clearCart: () => set((state) => ({ cartItems: [], cartCount: 0 })),
  addToCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
  removeFromCart: () => set((state) => ({ cartCount: state.cartCount - 1 })),
}));

export default ProductStore;
