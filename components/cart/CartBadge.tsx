"use client";

import { useCart } from "@/context/CartContext";

export default function CartBadge() {
  const { cartCount } = useCart();

  return (
    <span
      style={{
        background: "#00BFFF",
        color: "#000",
        padding: "4px 10px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 700,
      }}
    >
      {cartCount}
    </span>
  );
}
