import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/formatPrice";
import AddToCartButton from "@/components/cart/AddToCartButton";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata(
  { params }: ProductPageProps
): Metadata {
  const product = products.find((p) => p.slug === params.slug);

  return {
    title: product
      ? `VIVE JEWEL — ${product.name}`
      : "Product not found | VIVE JEWEL",
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid gap-12 md:grid-cols-2">
        {/* Left: image gallery placeholder */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-xl bg-brand-purple/5">
            <img
              src={product.mainImage}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Later: thumbnails */}
        </div>

        {/* Right: details */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">
            {product.category}
          </p>

          <h1 className="text-3xl font-serif text-brand-purple">
            {product.name}
          </h1>

          <div className="text-lg font-semibold text-brand-purple">
            {formatPrice(product.price)}
          </div>

          {product.gemstone || product.metal ? (
            <div className="text-xs text-brand-purple/70 space-y-1">
              {product.gemstone && <div>Gemstone: {product.gemstone}</div>}
              {product.metal && <div>Metal: {product.metal}</div>}
            </div>
          ) : null}

          <p className="text-sm text-brand-purple/80 leading-relaxed">
            {product.description}
          </p>

          <div className="pt-4">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </main>
  );
}
