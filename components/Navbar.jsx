"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (path) =>
    pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-600";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">

      <div className="flex items-center justify-between px-6 md:px-10 py-4">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          Protoflexi
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className={isActive("/")}>
            Home
          </Link>

          <Link href="/upload" className={isActive("/upload")}>
            Upload
          </Link>

          <Link href="/dashboard" className={isActive("/dashboard")}>
            Dashboard
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/upload"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm border-t border-gray-100 bg-white">
          <Link href="/" onClick={() => setOpen(false)} className={isActive("/")}>
            Home
          </Link>

          <Link href="/upload" onClick={() => setOpen(false)} className={isActive("/upload")}>
            Upload
          </Link>

          <Link href="/dashboard" onClick={() => setOpen(false)} className={isActive("/dashboard")}>
            Dashboard
          </Link>

          <Link
            href="/upload"
            onClick={() => setOpen(false)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
          >
            Get Quote
          </Link>
        </div>
      )}
    </header>
  );
}
