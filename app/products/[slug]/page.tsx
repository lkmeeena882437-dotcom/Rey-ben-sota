import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import StickyAddToCart from "@/components/product/StickyAddToCart";
import ProductGallery from "@/components/product/ProductGallery";
import { productImages } from "@/lib/product-images";
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
  <>
  <main
  style={{
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "40px 24px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "50px",
      alignItems: "start",
    }}
  >
    <ProductGallery
      images={
        productImages[
          product.slug as keyof typeof productImages
        ] || []
      }
      productName={product.name}
    />

    <div>
      <h1>{product.name}</h1>

      <p
        style={{
          color: "#8A8A8A",
          marginTop: "20px",
        }}
      >
        {product.description}
      </p>

      <h2
        style={{
          marginTop: "24px",
          color: "#00BFFF",
        }}
      >
        ₹{product.price.toLocaleString()}
      </h2>
    </div>
  </div>
</main>

    <StickyAddToCart
      name={product.name}
      price={product.price}
    />
  </>
);
