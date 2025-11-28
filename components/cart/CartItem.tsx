"use client";

import { formatPrice } from "@/lib/formatPrice";
import type { CartItem as CartItemType } from "@/store/slices/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "@/store/slices/cartSlice";

type CartItemProps = {
  item: CartItemType;
};

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();
  const { product, quantity } = item;

  const lineTotal = product.price * quantity;

  return (
    <div className="flex gap-4 border-b border-brand-purple/10 py-4">
      {/* Thumb */}
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-brand-purple/5">
        <img
          src={product.mainImage}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-sm text-brand-purple">
              {product.name}
            </h3>
            <button
              type="button"
              onClick={() => dispatch(removeFromCart(product.id))}
              className="text-xs text-brand-purple/60 hover:text-brand-purple"
            >
              Remove
            </button>
          </div>

          <p className="text-xs text-brand-purple/60 mt-1">
            {product.gemstone && `${product.gemstone} · `} 
            {product.metal}
          </p>
        </div>

        <div className="mt-2 flex items-center justify-between">
          {/* Quantity controls */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-purple/20 px-2 py-1 text-xs">
            <button
              type="button"
              onClick={() => dispatch(decrementQuantity(product.id))}
              className="px-1 text-brand-purple/80 hover:text-brand-purple"
            >
              −
            </button>
            <span className="min-w-[1.5rem] text-center text-brand-purple">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => dispatch(incrementQuantity(product.id))}
              className="px-1 text-brand-purple/80 hover:text-brand-purple"
            >
              +
            </button>
          </div>

          {/* Line total */}
          <div className="text-sm font-semibold text-brand-purple">
            {formatPrice(lineTotal)}
          </div>
        </div>
      </div>
    </div>
  );
}
