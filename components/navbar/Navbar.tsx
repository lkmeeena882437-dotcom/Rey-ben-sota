export default function Navbar() {
  return (
    <header
      style={{
        borderBottom: "1px solid #1f1f1f",
        background: "#090909",
        padding: "16px 24px",
      }}
    >
      <nav
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          RYS
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
          }}
        >
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/collections">Collections</a>
          <a href="/technology">Technology</a>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          <a href="/account">Account</a>
          <a href="/cart">Cart (0)</a>
        </div>
      </nav>
    </header>
  );
}
