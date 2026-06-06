import Hero from "@/components/hero/Hero";
import FlashSaleBanner from "@/components/banner/FlashSaleBanner";
import TrustBadges from "@/components/trust/TrustBadges";
import ProductGrid from "@/components/product/ProductGrid";
import CollectionGrid from "@/components/collections/CollectionGrid";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import FAQSection from "@/components/faq/FAQSection";
import NewsletterSection from "@/components/newsletter/NewsletterSection";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FlashSaleBanner />
      <TrustBadges />
      <ProductGrid products={products} />
      <CollectionGrid />
      <ReviewsSection />
      <FAQSection />
      <NewsletterSection />
    </main>
  );
}
