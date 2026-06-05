import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",

    name: "RYS Vision Pro",

    slug: "rys-vision-pro",

    shortDescription:
      "Premium AI smart glasses for creators and professionals.",

    description:
      "Experience AI-powered smart glasses with HD recording, live translation and premium design.",

    price: 39999,

    comparePrice: 44999,

    stock: 25,

    rating: 4.9,

    reviewCount: 847,

    featured: true,

    collection: "Flagship",

    thumbnail: "/products/vision-pro/main.webp",

    images: [
      "/products/vision-pro/main.webp",
      "/products/vision-pro/gallery-1.webp",
      "/products/vision-pro/gallery-2.webp"
    ],

    specifications: {
      battery: "12 Hours",
      camera: "4K",
      audio: "Open-Ear",
      connectivity: "Bluetooth 5.4",
      weight: "49g",
      translation: "Real-Time"
    }
  }
];
