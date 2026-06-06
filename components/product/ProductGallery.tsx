"use client";

import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(
    images[0] || ""
  );

  return (
    <div
      style={{
        display: "grid",
        gap: "16px",
      }}
    >
      <div
        style={{
          background: "#111111",
          border: "1px solid #1f1f1f",
          borderRadius: "24px",
          overflow: "hidden",
          aspectRatio: "1/1",
        }}
      >
        <img
          src={selectedImage}
          alt={productName}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "12px",
          overflowX: "auto",
        }}
      >
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            style={{
              border:
                selectedImage === image
                  ? "2px solid #00BFFF"
                  : "1px solid #222",
              borderRadius: "12px",
              overflow: "hidden",
              background: "transparent",
              padding: 0,
              minWidth: "90px",
              height: "90px",
              cursor: "pointer",
            }}
          >
            <img
              src={image}
              alt={`${productName}-${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
