import Link from "next/link";

export default function Navbar() {
  return (
    <div style={{ padding: 20, background: "#eee" }}>
      <Link href="/">Home</Link> |{" "}
      <Link href="/upload">Upload</Link> |{" "}
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
