"use client";

import { useCart } from "@/components/cart/CartContext";

interface AddToCartButtonProps {
  name: string;
  price: number;
}

export default function AddToCartButton({
  name,
  price,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() =>
        addToCart({
          id: name.toLowerCase().replace(/\s+/g, "-"),
          name,
          price,
          quantity: 1,
        })
      }
      style={{
        width: "100%",
        padding: "16px",
        background: "#00BFFF",
        border: "none",
        borderRadius: "10px",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      Add To Cart
    </button>
  );
}
