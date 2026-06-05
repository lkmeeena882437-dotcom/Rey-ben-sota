import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps) {
  return (
    <section
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "40px 24px",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          marginBottom: "30px",
        }}
      >
        Featured Products
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "24px",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
