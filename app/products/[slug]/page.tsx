import { notFound } from "next/navigation";
import { products } from "@/lib/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "40px 24px",
      }}
    >
      <h1>{product.name}</h1>

      <p>{product.description}</p>

      <h2>
        ₹{product.price.toLocaleString()}
      </h2>
    </main>
  );
}
