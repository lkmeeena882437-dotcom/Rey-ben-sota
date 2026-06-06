export default function FlashSaleBanner() {
  return (
    <section
      style={{
        maxWidth: "1400px",
        margin: "40px auto",
        padding: "0 24px",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg,#111111,#1a1a1a)",
          border: "1px solid #1f1f1f",
          borderRadius: "24px",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#00BFFF",
            fontWeight: 700,
            letterSpacing: "2px",
          }}
        >
          LIMITED TIME OFFER
        </p>

        <h2
          style={{
            fontSize: "42px",
            margin: "16px 0",
          }}
        >
          Save Up To ₹5,000
        </h2>

        <p
          style={{
            color: "#8A8A8A",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Experience next-generation AI smart glasses with exclusive launch pricing.
        </p>

        <button
          style={{
            marginTop: "24px",
            background: "#00BFFF",
            color: "#000",
            border: "none",
            padding: "16px 28px",
            borderRadius: "12px",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          SHOP OFFER
        </button>
      </div>
    </section>
  );
}
