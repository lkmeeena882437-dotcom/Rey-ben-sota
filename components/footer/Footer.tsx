export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #1f1f1f",
        background: "#090909",
        padding: "48px 24px",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "32px",
        }}
      >
        <div>
          <h3>RAY-YEN-SOTA</h3>
          <p>Intelligence In Sight.</p>
        </div>

        <div>
          <h4>Shop</h4>
          <p>Best Sellers</p>
          <p>New Arrivals</p>
          <p>Collections</p>
        </div>

        <div>
          <h4>Support</h4>
          <p>FAQ</p>
          <p>Shipping</p>
          <p>Warranty</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>support@rayyensota.com</p>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1400px",
          margin: "40px auto 0",
          borderTop: "1px solid #1f1f1f",
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        © 2026 RAY-YEN-SOTA. All Rights Reserved.
      </div>
    </footer>
  );
}
