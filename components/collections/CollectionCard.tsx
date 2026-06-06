import Link from "next/link";
import { Collection } from "@/lib/collections";

interface Props {
  collection: Collection;
}

export default function CollectionCard({
  collection,
}: Props) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          background: "#111111",
          border: "1px solid #1f1f1f",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "240px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient(135deg,#1a1a1a,#090909)",
          }}
        >
          COLLECTION IMAGE
        </div>

        <div style={{ padding: "20px" }}>
          <h3>{collection.name}</h3>

          <p
            style={{
              color: "#8a8a8a",
            }}
          >
            {collection.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
