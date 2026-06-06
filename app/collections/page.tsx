import CollectionGrid from "@/components/collections/CollectionGrid";

export const metadata = {
  title: "Collections | RAY-YEN-SOTA",
  description: "Explore our premium AI glasses collections.",
};

export default function CollectionsPage() {
  return (
    <main>
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "60px 24px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
          }}
        >
          Collections
        </h1>

        <p
          style={{
            color: "#8A8A8A",
            fontSize: "18px",
          }}
        >
          Explore our premium range of AI-powered smart glasses.
        </p>
      </section>

      <CollectionGrid />
    </main>
  );
}
