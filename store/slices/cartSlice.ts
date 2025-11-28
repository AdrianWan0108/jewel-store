import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/lib/types";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existing = state.items.find(
        (item) => item.product.id === action.payload.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );
    },
    incrementQuantity(state, action: PayloadAction<string>) {
      const existing = state.items.find(
        (item) => item.product.id === action.payload
      );
      if (existing) {
        existing.quantity += 1;
      }
    },
    decrementQuantity(state, action: PayloadAction<string>) {
      const existing = state.items.find(
        (item) => item.product.id === action.payload
      );
      if (existing) {
        if (existing.quantity > 1) {
          existing.quantity -= 1;
        } else {
          // if quantity would go to 0, remove the item
          state.items = state.items.filter(
            (item) => item.product.id !== action.payload
          );
        }
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
