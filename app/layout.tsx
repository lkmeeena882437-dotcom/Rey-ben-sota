import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import { CartProvider } from "@/context/CartContext";
export const metadata: Metadata = {
  title: "RAY-YEN-SOTA",
  description: "Premium AI Smart Glasses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body>
  <CartProvider>
    <AnnouncementBar />
    <Navbar />
    {children}
    <Footer />
  </CartProvider>
</body>  
    </html>
  );
}
