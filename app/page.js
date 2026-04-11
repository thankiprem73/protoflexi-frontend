import QuoteForm from "../components/QuoteForm";

export default function Home() {
  return (
    <div className="container">
      {/* HERO */}
      <div className="hero">
        <div className="left">
          <h1>Prototype. Test. Launch.</h1>
          <p>PCB Prototyping & BOM Sourcing for Australia & New Zealand</p>

          <div className="features">
            <span>⚡ Fast turnaround</span>
            <span>📦 Full BOM sourcing</span>
            <span>🇦🇺 Local support</span>
          </div>
        </div>

        <div className="right">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}
