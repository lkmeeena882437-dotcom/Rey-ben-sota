import { notFound } from "next/navigation";
import { products } from "@/lib/products";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({
  params,
}: ProductPageProps) {
  const product = products.find(
    (item) => item.slug === params.slug
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
        }}
      >
        <div
          style={{
            height: "500px",
            background:
              "linear-gradient(135deg,#1a1a1a,#0f0f0f)",
            borderRadius: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #1f1f1f",
          }}
        >
          PRODUCT IMAGE
        </div>

        <div>
          <div
            style={{
              color: "#00BFFF",
              marginBottom: "12px",
            }}
          >
            {product.collection}
          </div>

          <h1
            style={{
              fontSize: "52px",
              marginBottom: "20px",
            }}
          >
            {product.name}
          </h1>

          <div
            style={{
              fontSize: "24px",
              marginBottom: "20px",
            }}
          >
            ★ {product.rating} ({product.reviewCount} Reviews)
          </div>

          <p
            style={{
              color: "#8A8A8A",
              fontSize: "18px",
              marginBottom: "24px",
            }}
          >
            {product.description}
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                fontSize: "36px",
                fontWeight: "bold",
              }}
            >
              ₹{product.price.toLocaleString()}
            </span>

            {product.comparePrice && (
              <span
                style={{
                  color: "#8A8A8A",
                  textDecoration: "line-through",
                }}
              >
                ₹{product.comparePrice.toLocaleString()}
              </span>
            )}
          </div>

          <button
            style={{
              background: "#00BFFF",
              color: "#000",
              border: "none",
              padding: "16px 28px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>

      <section
        style={{
          marginTop: "80px",
        }}
      >
        <h2>Specifications</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          {Object.entries(product.specifications).map(
            ([key, value]) => (
              <div
                key={key}
                style={{
                  background: "#111111",
                  padding: "20px",
                  borderRadius: "16px",
                  border: "1px solid #1f1f1f",
                }}
              >
                <strong>{key}</strong>
                <br />
                {value}
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}
