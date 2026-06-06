import CollectionCard from "./CollectionCard";
import { collections } from "@/lib/collections";

export default function CollectionGrid() {
  return (
    <section
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "80px 24px",
      }}
    >
      <div
        style={{
          marginBottom: "40px",
        }}
      >
        <p
          style={{
            color: "#00BFFF",
            letterSpacing: "2px",
            fontWeight: 600,
          }}
        >
          COLLECTIONS
        </p>

        <h2
          style={{
            fontSize: "48px",
            marginTop: "10px",
          }}
        >
          Find Your Perfect AI Glasses
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "24px",
        }}
      >
        {collections.map((collection) => (
          <CollectionCard
            key={collection.id}
            collection={collection}
          />
        ))}
      </div>
    </section>
  );
}
