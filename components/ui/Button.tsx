import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const getStyles = () => {
    switch (variant) {
      case "primary":
        return {
          background: "#00BFFF",
          color: "#000000",
          border: "none",
        };

      case "secondary":
        return {
          background: "rgba(255,255,255,0.05)",
          color: "#FFFFFF",
          border: "1px solid #1F1F1F",
          backdropFilter: "blur(12px)",
        };

      case "ghost":
        return {
          background: "transparent",
          color: "#FFFFFF",
          border: "1px solid transparent",
        };

      default:
        return {};
    }
  };

  return (
    <button
      {...props}
      style={{
        padding: "14px 24px",
        borderRadius: "12px",
        cursor: "pointer",
        fontWeight: 600,
        transition: "all 0.3s ease",
        ...getStyles(),
      }}
    >
      {children}
    </button>
  );
}
