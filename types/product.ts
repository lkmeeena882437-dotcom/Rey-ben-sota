export interface ProductSpecification {
  battery?: string;
  camera?: string;
  audio?: string;
  connectivity?: string;
  weight?: string;
  translation?: string;
}

export interface ProductReview {
  id: string;
  customerName: string;
  rating: number;
  review: string;
  createdAt: string;
}

export interface Product {
  id: string;

  name: string;

  slug: string;

  shortDescription: string;

  description: string;

  price: number;

  comparePrice?: number;

  stock: number;

  rating: number;

  reviewCount: number;

  featured: boolean;

  collection: string;

  thumbnail: string;

  images: string[];

  specifications: ProductSpecification;

  reviews?: ProductReview[];

  createdAt?: string;

  updatedAt?: string;
}
