export default function TrustBadges() {
  const badges = [
    {
      title: "Worldwide Shipping",
      description:
        "Fast and secure delivery to 100+ countries.",
    },
    {
      title: "1 Year Warranty",
      description:
        "Premium warranty coverage on all products.",
    },
    {
      title: "Secure Payments",
      description:
        "Protected checkout with trusted payment providers.",
    },
    {
      title: "AI Technology",
      description:
        "Advanced AI features built for the future.",
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
          WHY CHOOSE RAY-YEN-SOTA
        </p>

        <h2
          style={{
            fontSize: "48px",
            marginTop: "12px",
          }}
        >
          Premium Experience Guaranteed
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",
          gap: "24px",
        }}
      >
        {badges.map((badge) => (
          <div
            key={badge.title}
            style={{
              background: "#111111",
              border: "1px solid #1f1f1f",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h3>{badge.title}</h3>

            <p
              style={{
                color: "#8A8A8A",
                marginTop: "10px",
              }}
            >
              {badge.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
