"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `px-3 py-2 rounded-md text-sm font-medium transition ${
      pathname === path
        ? "text-blue-600 bg-blue-50"
        : "text-gray-600 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b">

      <div className="flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="text-xl font-bold text-blue-600">
          Protoflexi
        </div>

        {/* NAV LINKS — FIX IS HERE */}
        <nav className="flex items-center gap-4">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/upload" className={linkClass("/upload")}>
            Upload
          </Link>

          <Link href="/dashboard" className={linkClass("/dashboard")}>
            Dashboard
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/upload"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
        >
          Get Quote
        </Link>

      </div>

    </header>
  );
}
