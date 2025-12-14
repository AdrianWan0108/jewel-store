"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { openCartDrawer } from "@/store/slices/uiSlice";

export default function CartIcon() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);
  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      type="button"
      onClick={() => dispatch(openCartDrawer())}
      className="relative inline-flex items-center gap-1 text-sm font-medium text-brand-purple hover:text-brand-purple/80 transition"
      aria-label="Open cart"
    >
      <span>Cart</span>
      <span aria-hidden>🛒</span>

      {totalQty > 0 && (
        <span className="absolute -right-3 -top-2 rounded-full bg-brand-gold px-1.5 text-[10px] font-semibold text-brand-purple">
          {totalQty}
        </span>
      )}
    </button>
  );
}
