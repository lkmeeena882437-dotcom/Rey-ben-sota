import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <article
        style={{
          background: "#111111",
          border: "1px solid #1f1f1f",
          borderRadius: "20px",
          overflow: "hidden",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            height: "280px",
            background:
              "linear-gradient(135deg,#1a1a1a,#0f0f0f)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
          }}
        >
          PRODUCT IMAGE
        </div>

        <div
          style={{
            padding: "20px",
          }}
        >
          <div
            style={{
              color: "#00BFFF",
              fontSize: "14px",
              marginBottom: "8px",
            }}
          >
            {product.collection}
          </div>

          <h3
            style={{
              fontSize: "22px",
              margin: "0 0 10px 0",
            }}
          >
            {product.name}
          </h3>

          <p
            style={{
              color: "#8A8A8A",
              marginBottom: "16px",
            }}
          >
            {product.shortDescription}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                ₹{product.price.toLocaleString()}
              </div>

              {product.comparePrice && (
                <div
                  style={{
                    color: "#8A8A8A",
                    textDecoration: "line-through",
                  }}
                >
                  ₹{product.comparePrice.toLocaleString()}
                </div>
              )}
            </div>

            <div
              style={{
                color: "#00BFFF",
                fontWeight: "bold",
              }}
            >
              ★ {product.rating}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
