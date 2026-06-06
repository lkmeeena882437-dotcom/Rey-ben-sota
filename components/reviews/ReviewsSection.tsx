export default function ReviewsSection() {
  const reviews = [
    {
      name: "Michael R.",
      rating: "★★★★★",
      review:
        "The best AI glasses I've ever used. Premium build quality and amazing battery life.",
    },
    {
      name: "Sarah K.",
      rating: "★★★★★",
      review:
        "Real-time translation works incredibly well while travelling. Highly recommended.",
    },
    {
      name: "David L.",
      rating: "★★★★★",
      review:
        "Perfect for creators. Recording quality and audio are outstanding.",
    },
  ];

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
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <p
          style={{
            color: "#00BFFF",
            letterSpacing: "2px",
            fontWeight: 600,
          }}
        >
          CUSTOMER REVIEWS
        </p>

        <h2
          style={{
            fontSize: "48px",
            marginTop: "12px",
          }}
        >
          Trusted By Customers Worldwide
        </h2>

        <p
          style={{
            color: "#8A8A8A",
            maxWidth: "700px",
            margin: "20px auto 0",
          }}
        >
          Join thousands of users experiencing the future of wearable AI.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "24px",
        }}
      >
        {reviews.map((review) => (
          <div
            key={review.name}
            style={{
              background: "#111111",
              border: "1px solid #1f1f1f",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <div
              style={{
                color: "#00BFFF",
                marginBottom: "12px",
              }}
            >
              {review.rating}
            </div>

            <p
              style={{
                color: "#D0D0D0",
                lineHeight: 1.7,
              }}
            >
              "{review.review}"
            </p>

            <h4
              style={{
                marginTop: "20px",
              }}
            >
              {review.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
