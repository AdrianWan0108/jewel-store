import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/formatPrice";
import AddToCartButton from "@/components/cart/AddToCartButton";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: ProductPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  return {
    title: product
      ? `VIVE JEWEL — ${product.name}`
      : "Product not found | VIVE JEWEL",
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid gap-12 md:grid-cols-2">
        {/* Left: image */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-brand-purple/5">
            <Image
              src={product.mainImage}
              alt={product.name}
              fill
              priority
              className="object-cover"
            />
          </div>
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
