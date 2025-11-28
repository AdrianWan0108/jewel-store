import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/formatPrice";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block rounded-xl border border-brand-gold/30 bg-brand-white/60 p-4 shadow-sm transition hover:-translate-y-1 hover:border-brand-gold hover:shadow-md"
    >
      {/* Image */}
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-brand-purple/5 mb-3">
        {/* For now plain img – you can switch to next/image later */}
        <img
          src={product.mainImage}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
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
