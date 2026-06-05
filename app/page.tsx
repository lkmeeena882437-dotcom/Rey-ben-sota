import Hero from "@/components/hero/Hero";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProductGrid products={products} />
    </main>
  );
}
