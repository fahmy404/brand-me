export default function Footer() {
  return (
    <footer
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="wrap"
        style={{
          paddingTop: "clamp(3rem, 6vw, 5rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
          display: "flex",
          flexDirection: "column" as const,
          gap: "clamp(2rem, 4vw, 4rem)",
        }}
      >
        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Logo */}
          <div className="relative w-56 h-16">
            <img 
              src="/logo.png" 
              alt="BrandMe" 
              className="w-full h-full object-contain origin-left scale-[1.6]" 
            />
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.3)",
              fontStyle: "italic",
              letterSpacing: "0.02em",
            }}
          >
            It&apos;s not luck. It&apos;s strategy.
          </p>

          {/* Links */}
          <div className="flex items-center gap-8">
            {["Work", "Services", "Process", "Contact"].map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{
                  fontSize: 12,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} BrandMe. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Cairo', sans-serif",
              direction: "rtl",
              fontSize: 13,
              color: "rgba(255,255,255,0.2)",
            }}
          >
            مش حظ... دي استراتيجية.
          </p>
        </div>
      </div>
    </footer>
  );
}
