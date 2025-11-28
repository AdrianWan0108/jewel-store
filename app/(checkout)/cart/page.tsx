"use client";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import CartItem from "@/components/cart/CartItem";
import { clearCart } from "@/store/slices/cartSlice";
import { formatPrice } from "@/lib/formatPrice";
import Link from "next/link";

export default function CartPage() {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const hasItems = items.length > 0;

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-serif text-brand-purple mb-2">Your Cart</h1>
      <p className="text-sm text-brand-purple/70 mb-6">
        Review your pieces before moving to checkout.
      </p>

      {!hasItems && (
        <div className="rounded-xl border border-dashed border-brand-purple/30 p-8 text-center text-sm text-brand-purple/70">
          Your cart is empty for now.  
          <br />
          <Link
            href="/necklaces"
            className="mt-3 inline-block text-brand-purple underline underline-offset-4"
          >
            Discover gemstone pieces →
          </Link>
        </div>
      )}

      {hasItems && (
        <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
          {/* Left: list of items */}
          <div>
            {items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}

            <button
              type="button"
              onClick={() => dispatch(clearCart())}
              className="mt-4 text-xs text-brand-purple/60 hover:text-brand-purple"
            >
              Clear cart
            </button>
          </div>

          {/* Right: summary */}
          <aside className="rounded-xl border border-brand-purple/15 bg-brand-white/80 p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-brand-purple mb-3">
              Order Summary
            </h2>

            <div className="flex justify-between text-sm text-brand-purple/80 mb-2">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            <div className="flex justify-between text-xs text-brand-purple/60 mb-4">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>

            <div className="flex justify-between border-t border-brand-purple/10 pt-3 text-sm font-semibold text-brand-purple mb-4">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            <Link
              href="/checkout"
              className="block w-full rounded-full bg-brand-purple px-4 py-2.5 text-center text-sm font-medium text-brand-white tracking-wide hover:bg-brand-purple/90"
            >
              Continue to checkout
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}
