import { products } from "@/lib/products";
import ProductGrid from "@/components/product/ProductGrid";

export default function BraceletsPage() {
  const bracelets = products.filter((p) => p.category === "bracelet");

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">
          Category
        </p>
        <h1 className="text-3xl font-serif text-brand-purple">Rings</h1>
        <p className="text-brand-purple/80 text-sm mt-2">
          Explore gemstone bracelets designed to sit close to your heart. Soft
          light, intentional color, everyday elegance.
        </p>
      </div>

      <ProductGrid products={bracelets} />
    </main>
  );
}
