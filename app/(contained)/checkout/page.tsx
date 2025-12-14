"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearCart } from "@/store/slices/cartSlice";
import { formatPrice } from "@/lib/formatPrice";

export default function CheckoutPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const subtotal = useMemo(
    () =>
      items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items]
  );

  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  // Mock form state (no validation yet)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    province: "ON",
    postalCode: "",
  });

  const onChange =
    (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const canCheckout = items.length > 0;

  const handlePlaceOrder = () => {
    if (!canCheckout) return;

    setIsPlacingOrder(true);

    // Mock "processing"
    setTimeout(() => {
      dispatch(clearCart());
      router.push("/order-completed");
    }, 600);
  };

  if (!canCheckout) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-serif text-brand-purple mb-2">Checkout</h1>
        <p className="text-sm text-brand-purple/70 mb-6">
          Your cart is empty — add a piece before checking out.
        </p>

        <Link
          href="/necklaces"
          className="inline-block rounded-full bg-brand-purple px-4 py-2.5 text-sm font-medium text-brand-white hover:bg-brand-purple/90"
        >
          Continue shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-serif text-brand-purple mb-2">Checkout</h1>
      <p className="text-sm text-brand-purple/70 mb-8">
        Shipping details and order summary.
      </p>

      <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
        {/* Left: Shipping form */}
        <section className="rounded-xl border border-brand-purple/15 bg-brand-white/80 p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-brand-purple mb-4">
            Shipping Information
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="block text-xs text-brand-purple/70 mb-1">
                First name
              </label>
              <input
                value={form.firstName}
                onChange={onChange("firstName")}
                className="w-full rounded-lg border border-brand-purple/20 bg-white px-3 py-2 text-sm outline-none focus:border-brand-gold"
              />
            </div>

            <div className="sm:col-span-1">
              <label className="block text-xs text-brand-purple/70 mb-1">
                Last name
              </label>
              <input
                value={form.lastName}
                onChange={onChange("lastName")}
                className="w-full rounded-lg border border-brand-purple/20 bg-white px-3 py-2 text-sm outline-none focus:border-brand-gold"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs text-brand-purple/70 mb-1">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={onChange("email")}
                className="w-full rounded-lg border border-brand-purple/20 bg-white px-3 py-2 text-sm outline-none focus:border-brand-gold"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs text-brand-purple/70 mb-1">
                Address
              </label>
              <input
                value={form.address}
                onChange={onChange("address")}
                className="w-full rounded-lg border border-brand-purple/20 bg-white px-3 py-2 text-sm outline-none focus:border-brand-gold"
              />
            </div>

            <div className="sm:col-span-1">
              <label className="block text-xs text-brand-purple/70 mb-1">
                City
              </label>
              <input
                value={form.city}
                onChange={onChange("city")}
                className="w-full rounded-lg border border-brand-purple/20 bg-white px-3 py-2 text-sm outline-none focus:border-brand-gold"
              />
            </div>

            <div className="sm:col-span-1">
              <label className="block text-xs text-brand-purple/70 mb-1">
                Province
              </label>
              <select
                value={form.province}
                onChange={onChange("province")}
                className="w-full rounded-lg border border-brand-purple/20 bg-white px-3 py-2 text-sm outline-none focus:border-brand-gold"
              >
                <option value="ON">ON</option>
                <option value="BC">BC</option>
                <option value="AB">AB</option>
                <option value="QC">QC</option>
              </select>
            </div>

            <div className="sm:col-span-1">
              <label className="block text-xs text-brand-purple/70 mb-1">
                Postal code
              </label>
              <input
                value={form.postalCode}
                onChange={onChange("postalCode")}
                className="w-full rounded-lg border border-brand-purple/20 bg-white px-3 py-2 text-sm outline-none focus:border-brand-gold"
              />
            </div>
          </div>

          <p className="mt-4 text-xs text-brand-purple/50">
            * This checkout is a UI demo for now (no payment processing yet).
          </p>
        </section>

        {/* Right: Order summary */}
        <aside className="rounded-xl border border-brand-purple/15 bg-brand-white/80 p-6 shadow-sm h-fit">
          <h2 className="text-sm font-semibold text-brand-purple mb-4">
            Order Summary
          </h2>

          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between gap-3">
                <div className="text-sm text-brand-purple">
                  {item.product.name}
                  <span className="text-xs text-brand-purple/60">
                    {" "}
                    × {item.quantity}
                  </span>
                </div>
                <div className="text-sm text-brand-purple/80">
                  {formatPrice(item.product.price * item.quantity)}
                </div>
              </div>
            ))}
          </div>

          <div className="my-4 border-t border-brand-purple/10 pt-4 space-y-2">
            <div className="flex justify-between text-sm text-brand-purple/80">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-xs text-brand-purple/60">
              <span>Shipping</span>
              <span>Calculated later</span>
            </div>
          </div>

          <div className="flex justify-between text-sm font-semibold text-brand-purple mb-4">
            <span>Total</span>
            <span>{formatPrice(subtotal)}</span>
          </div>

          <button
            type="button"
            onClick={handlePlaceOrder}
            disabled={isPlacingOrder}
            className="w-full rounded-full bg-brand-purple px-4 py-2.5 text-sm font-medium text-brand-white hover:bg-brand-purple/90 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isPlacingOrder ? "Placing order..." : "Place order"}
          </button>

          <Link
            href="/cart"
            className="mt-3 block text-center text-xs text-brand-purple/60 hover:text-brand-purple underline underline-offset-4"
          >
            Back to cart
          </Link>
        </aside>
      </div>
    </main>
  );
}
