import { products } from "@/lib/products";
import ProductGrid from "@/components/product/ProductGrid";

export default function NecklacesPage() {
  const necklaces = products.filter((p) => p.category === "necklace");

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">
          Category
        </p>
        <h1 className="text-3xl font-serif text-brand-purple">Necklaces</h1>
        <p className="text-brand-purple/80 text-sm mt-2">
          Gemstone necklaces designed to sit close to your heart — quiet light,
          everyday intention.
        </p>
      </div>

      <ProductGrid products={necklaces} />
    </main>
  );
}
