"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/slices/cartSlice";

type AddToCartButtonProps = {
  product: Product;
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const dispatch = useAppDispatch();
  const [isAdding, setIsAdding] = useState(false);

  const handleClick = () => {
    setIsAdding(true);
    dispatch(addToCart(product));
    // simple fake delay for feedback
    setTimeout(() => {
      setIsAdding(false);
    }, 300);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isAdding}
      className="w-full rounded-full bg-brand-purple px-4 py-3 text-sm font-medium text-brand-white tracking-wide transition hover:bg-brand-purple/90 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {isAdding ? "Adding..." : "Add to cart"}
    </button>
  );
}
