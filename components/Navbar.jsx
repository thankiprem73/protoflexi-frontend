"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (path) =>
    `px-3 py-2 rounded-md text-sm font-medium transition ${
      pathname === path
        ? "text-blue-600 bg-blue-50"
        : "text-gray-600 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">

      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          Protoflexi
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
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
          className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
        >
          Get Quote
        </Link>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-2 border-t">

          <Link href="/" className={linkClass("/")} onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/upload" className={linkClass("/upload")} onClick={() => setOpen(false)}>
            Upload
          </Link>

          <Link href="/dashboard" className={linkClass("/dashboard")} onClick={() => setOpen(false)}>
            Dashboard
          </Link>

          <Link
            href="/upload"
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
            onClick={() => setOpen(false)}
          >
            Get Quote
          </Link>

        </div>
      )}
    </header>
  );
}
