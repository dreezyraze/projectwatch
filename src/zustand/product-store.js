import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],

  addBasket: (product) =>
    set((state) => {
      const exists = state.products.find((item) => item.id === product.id);

      if (exists) {
        return {
          products: state.products.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        products: [...state.products, { ...product, quantity: 1 }],
      };
    }),

  increaseQuantity: (id) =>
    set((state) => ({
      products: state.products.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      products: state.products
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),

  removeBasket: (id) =>
    set((state) => ({
      products: state.products.filter((item) => item.id !== id),
    })),
}));