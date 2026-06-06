import Hero from "@/components/hero/Hero";
import ProductGrid from "@/components/product/ProductGrid";
import CollectionGrid from "@/components/collections/CollectionGrid";
import TrustBadges from "@/components/trust/TrustBadges";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBadges />
      <ProductGrid products={products} />
      <CollectionGrid />
    </main>
  );
}
