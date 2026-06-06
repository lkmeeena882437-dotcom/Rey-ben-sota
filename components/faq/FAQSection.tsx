export default function FAQSection() {
  const faqs = [
    {
      question: "Do you ship worldwide?",
      answer:
        "Yes. We currently deliver to most countries worldwide with tracked shipping.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery times vary by region but typically range between 5-12 business days.",
    },
    {
      question: "Do the glasses support AI features?",
      answer:
        "Yes. Our AI smart glasses support voice assistance, translation, content creation and productivity features.",
    },
    {
      question: "Is there a warranty included?",
      answer:
        "Every purchase includes a 1-year limited warranty covering manufacturing defects.",
    },
    {
      question: "Can I return the product?",
      answer:
        "Yes. We offer a hassle-free return policy within the eligible return period.",
    }
  ];

  return (
    <section
      style={{
        maxWidth: "1200px",
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
          FAQ
        </p>

        <h2
          style={{
            fontSize: "48px",
            marginTop: "12px",
          }}
        >
          Frequently Asked Questions
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {faqs.map((faq, index) => (
          <details
            key={index}
            style={{
              background: "#111111",
              border: "1px solid #1f1f1f",
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            <summary
              style={{
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "18px",
              }}
            >
              {faq.question}
            </summary>

            <p
              style={{
                color: "#8A8A8A",
                marginTop: "16px",
                lineHeight: 1.7,
              }}
            >
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
