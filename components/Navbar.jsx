// components/Navbar.jsx
export default function Navbar() {
  return (
    <div style={{ padding: 20, background: "#eee" }}>
      <a href="/">Home</a> |{" "}
      <a href="/upload">Upload</a> |{" "}
      <a href="/dashboard">Dashboard</a>
    </div>
  );
}
