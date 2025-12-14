"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/formatPrice";
import ImageArrowButton from "@/components/ui/ImageArrowButton";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const images = product.images?.length
    ? product.images
    : [product.mainImage];

  const [index, setIndex] = useState(0);
  const total = images.length;

  const prev = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent Link navigation
    e.stopPropagation();
    setIndex((i) => (i === 0 ? total - 1 : i - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((i) => (i === total - 1 ? 0 : i + 1));
  };

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block rounded-xl border border-brand-gold/30 bg-brand-white/60 p-4 shadow-sm transition hover:-translate-y-1 hover:border-brand-gold hover:shadow-md"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-brand-purple/5 mb-3">
        <Image
          src={images[index]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition"
        />

        {total > 1 && (
          <>
            {/* Left arrow */}
            <ImageArrowButton
              direction="left"
              onClick={prev}
              className="left-2 opacity-0 group-hover:opacity-100"
            />

            {/* Right arrow */}
            <ImageArrowButton
              direction="right"
              onClick={next}
              className="right-2 opacity-0 group-hover:opacity-100"
            />
          </>
        )}
      </div>

      {/* Name */}
      <h3 className="font-serif text-lg text-brand-purple mb-1">
        {product.name}
      </h3>

      {/* Price + badge row */}
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-semibold text-brand-purple">
          {formatPrice(product.price)}
        </span>

        {product.isNew && (
          <span className="rounded-full bg-brand-pink/20 px-2 py-0.5 text-xs text-brand-purple">
            New
          </span>
        )}

        {product.isLimited && !product.isNew && (
          <span className="rounded-full bg-brand-gold/20 px-2 py-0.5 text-xs text-brand-purple">
            Limited
          </span>
        )}
      </div>

      {/* Short description */}
      <p className="text-xs text-brand-purple/70 line-clamp-2">
        {product.shortDescription}
      </p>
    </Link>
  );
}
