export default function NewsletterSection() {
  return (
    <section
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "100px 24px",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg,#111111,#1a1a1a)",
          border: "1px solid #1f1f1f",
          borderRadius: "32px",
          padding: "60px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#00BFFF",
            letterSpacing: "2px",
            fontWeight: 600,
          }}
        >
          JOIN THE FUTURE
        </p>

        <h2
          style={{
            fontSize: "52px",
            marginTop: "16px",
            marginBottom: "20px",
          }}
        >
          Get Exclusive Updates
        </h2>

        <p
          style={{
            color: "#8A8A8A",
            maxWidth: "700px",
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          Be the first to know about new AI glasses,
          product launches, exclusive offers and future
          innovations from RAY-YEN-SOTA.
        </p>

        <form
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: "380px",
              maxWidth: "100%",
              padding: "16px 20px",
              borderRadius: "14px",
              border: "1px solid #2a2a2a",
              background: "#090909",
              color: "#ffffff",
              outline: "none",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "16px 28px",
              borderRadius: "14px",
              border: "none",
              background: "#00BFFF",
              color: "#000000",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </form>

        <p
          style={{
            color: "#666666",
            marginTop: "18px",
            fontSize: "14px",
          }}
        >
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
