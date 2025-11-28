"use client";

import Link from "next/link";
import { useAppSelector } from "@/store/hooks";

export default function CartIcon() {
  const items = useAppSelector((state) => state.cart.items);
  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center gap-1 text-sm font-medium text-brand-purple"
    >
      <span>Cart</span>
      <span aria-hidden>🛒</span>
      {totalQty > 0 && (
        <span className="absolute -right-3 -top-2 rounded-full bg-brand-gold px-1.5 text-[10px] font-semibold text-brand-purple">
          {totalQty}
        </span>
      )}
    </Link>
  );
}
