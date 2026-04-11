import UploadForm from "./components/UploadForm";

export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "40px" }}>
      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
        Prototype. Test. Launch.
      </h1>

      <p style={{ marginTop: "10px", color: "#555" }}>
        PCB Prototyping & BOM Sourcing for Australia & New Zealand
      </p>

      <div style={{ marginTop: "30px" }}>
        <UploadForm />
      </div>
    </main>
  );
}
