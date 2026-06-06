export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const collections: Collection[] = [
  {
    id: "1",
    name: "Flagship Series",
    slug: "flagship-series",
    description:
      "Premium AI glasses with advanced features and luxury design.",
    image: "/collections/flagship.jpg",
  },

  {
    id: "2",
    name: "Creator Series",
    slug: "creator-series",
    description:
      "Built for content creators, vloggers and influencers.",
    image: "/collections/creator.jpg",
  },

  {
    id: "3",
    name: "Business Series",
    slug: "business-series",
    description:
      "Professional smart eyewear for meetings and productivity.",
    image: "/collections/business.jpg",
  },

  {
    id: "4",
    name: "Travel Series",
    slug: "travel-series",
    description:
      "AI-powered translation and navigation for travelers.",
    image: "/collections/travel.jpg",
  }
];
