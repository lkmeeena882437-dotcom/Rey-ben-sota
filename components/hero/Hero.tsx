import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "80px 24px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "48px",
        alignItems: "center",
      }}
    >
      <div>
        <p
          style={{
            color: "#00BFFF",
            letterSpacing: "2px",
            fontWeight: 600,
          }}
        >
          PREMIUM AI SMART GLASSES
        </p>

        <h1
          style={{
            fontSize: "64px",
            lineHeight: 1.1,
            margin: "16px 0",
          }}
        >
          THE FUTURE OF
          <br />
          VISION IS HERE
        </h1>

        <p
          style={{
            color: "#8A8A8A",
            fontSize: "18px",
            maxWidth: "600px",
          }}
        >
          AI-powered smart glasses built for creators,
          professionals and innovators. Experience
          next-generation technology with premium design.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "32px",
            flexWrap: "wrap",
          }}
        >
          <Button variant="primary">
            SHOP NOW
          </Button>

          <Button variant="secondary">
            EXPLORE TECH
          </Button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "500px",
            borderRadius: "24px",
            background:
              "linear-gradient(135deg,#111111,#1f1f1f)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            border: "1px solid #1f1f1f",
          }}
        >
          AI GLASSES RENDER
        </div>
      </div>
    </section>
  );
}
