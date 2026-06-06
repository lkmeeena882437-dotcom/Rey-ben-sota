"use client";

import { useState } from "react";
import CartBadge from "./CartBadge";
import CartSidebar from "./CartSidebar";

export default function CartButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "transparent",
          border: "none",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Cart
        <CartBadge />
      </button>

      <CartSidebar
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
