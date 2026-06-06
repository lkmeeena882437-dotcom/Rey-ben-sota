"use client";

interface StickyAddToCartProps {
  name: string;
  price: number;
}

export default function StickyAddToCart({
  name,
  price,
}: StickyAddToCartProps) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(900px, calc(100% - 32px))",
        background: "rgba(17,17,17,0.95)",
        backdropFilter: "blur(16px)",
        border: "1px solid #1f1f1f",
        borderRadius: "18px",
        padding: "16px 20px",
        zIndex: 9999,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div>
        <div
          style={{
            fontWeight: 700,
            fontSize: "18px",
          }}
        >
          {name}
        </div>

        <div
          style={{
            color: "#00BFFF",
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          ₹{price.toLocaleString()}
        </div>
      </div>

      <button
        style={{
          background: "#00BFFF",
          color: "#000",
          border: "none",
          borderRadius: "12px",
          padding: "14px 28px",
          cursor: "pointer",
          fontWeight: 700,
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}
