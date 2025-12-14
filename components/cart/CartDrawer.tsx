"use client";

import { useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeCartDrawer } from "@/store/slices/uiSlice";
import { clearCart, decrementQuantity, incrementQuantity, removeFromCart } from "@/store/slices/cartSlice";
import { formatPrice } from "@/lib/formatPrice";

export default function CartDrawer() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((s) => s.ui.isCartDrawerOpen);
  const items = useAppSelector((s) => s.cart.items);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items]
  );

  // ESC closes
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") dispatch(closeCartDrawer());
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, dispatch]);

  // prevent body scroll when open
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close cart drawer"
        onClick={() => dispatch(closeCartDrawer())}
        className="absolute inset-0 bg-black/35"
      />

      {/* Drawer */}
      <aside className="absolute right-0 top-0 h-full w-full max-w-sm bg-brand-white shadow-xl border-l border-brand-purple/10">
        <div className="flex items-center justify-between px-5 py-4 border-b border-brand-purple/10">
          <div>
            <h2 className="text-lg font-serif text-brand-purple">Your Cart</h2>
            <p className="text-xs text-brand-purple/60">
              {items.length} item{items.length === 1 ? "" : "s"}
            </p>
          </div>

          <button
            type="button"
            onClick={() => dispatch(closeCartDrawer())}
            className="rounded-full px-3 py-1.5 text-sm text-brand-purple/70 hover:text-brand-purple hover:bg-brand-purple/5"
          >
            Close
          </button>
        </div>

        {/* Content */}
        <div className="flex h-[calc(100%-64px)] flex-col">
          <div className="flex-1 overflow-auto px-5 py-4 space-y-4">
            {items.length === 0 ? (
              <div className="rounded-xl border border-dashed border-brand-purple/25 bg-brand-white/60 p-6">
                <p className="text-sm text-brand-purple">
                  Your cart is empty.
                </p>
                <p className="text-xs text-brand-purple/60 mt-1">
                  Add a piece to start your daily gem ritual.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 rounded-xl border border-brand-purple/10 bg-white/70 p-3"
                >
                  <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-brand-purple/5 shrink-0">
                    <Image
                      src={item.product.mainImage}
                      alt={item.product.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm text-brand-purple">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-brand-purple/60">
                          {formatPrice(item.product.price)}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => dispatch(removeFromCart(item.product.id))}
                        className="text-xs text-brand-purple/60 hover:text-brand-purple underline underline-offset-4"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-brand-purple/15 bg-white">
                        <button
                          type="button"
                          onClick={() => dispatch(decrementQuantity(item.product.id))}
                          className="px-3 py-1 text-brand-purple/70 hover:text-brand-purple"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="px-2 text-sm text-brand-purple">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => dispatch(incrementQuantity(item.product.id))}
                          className="px-3 py-1 text-brand-purple/70 hover:text-brand-purple"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-semibold text-brand-purple">
                        {formatPrice(item.product.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-brand-purple/10 p-5 space-y-3">
            <div className="flex items-center justify-between text-sm text-brand-purple">
              <span className="text-brand-purple/70">Subtotal</span>
              <span className="font-semibold">{formatPrice(subtotal)}</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/cart"
                onClick={() => dispatch(closeCartDrawer())}
                className="rounded-full border border-brand-purple/20 bg-white px-4 py-2.5 text-center text-sm text-brand-purple hover:bg-brand-purple/5"
              >
                View cart
              </Link>

              <Link
                href="/checkout"
                onClick={() => dispatch(closeCartDrawer())}
                className="rounded-full bg-brand-purple px-4 py-2.5 text-center text-sm font-medium text-brand-white hover:bg-brand-purple/90"
              >
                Checkout
              </Link>
            </div>

            {items.length > 0 && (
              <button
                type="button"
                onClick={() => dispatch(clearCart())}
                className="w-full text-xs text-brand-purple/60 hover:text-brand-purple underline underline-offset-4"
              >
                Clear cart
              </button>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
