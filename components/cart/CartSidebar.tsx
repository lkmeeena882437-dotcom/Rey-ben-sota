"use client";

import { useCart } from "@/context/CartContext";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({
  isOpen,
  onClose,
}: CartSidebarProps) {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 9998,
          }}
        />
      )}

      <div
        style={{
          position: "fixed",
          top: 0,
          right: isOpen ? 0 : "-450px",
          width: "420px",
          maxWidth: "100%",
          height: "100vh",
          background: "#0a0a0a",
          borderLeft: "1px solid #1f1f1f",
          transition: "0.3s ease",
          zIndex: 9999,
          padding: "24px",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Your Cart</h2>

          <button
            onClick={onClose}
            style={{
              background: "transparent",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ marginTop: "30px" }}>
          {cart.length === 0 ? (
            <p style={{ color: "#8A8A8A" }}>
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                style={{
                  borderBottom: "1px solid #1f1f1f",
                  paddingBottom: "16px",
                  marginBottom: "16px",
                }}
              >
                <h4>{item.name}</h4>

                <p style={{ color: "#8A8A8A" }}>
                  Qty: {item.quantity}
                </p>

                <p
                  style={{
                    color: "#00BFFF",
                    fontWeight: 700,
                  }}
                >
                  ₹
                  {(
                    item.price * item.quantity
                  ).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>

        <div
          style={{
            marginTop: "30px",
            borderTop: "1px solid #1f1f1f",
            paddingTop: "20px",
          }}
        >
          <h3>
            Total: ₹{total.toLocaleString()}
          </h3>

          <button
            style={{
              width: "100%",
              marginTop: "16px",
              background: "#00BFFF",
              color: "#000",
              border: "none",
              borderRadius: "12px",
              padding: "14px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
