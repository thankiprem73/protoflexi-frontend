"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="className="flex items-center gap-10"">

      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">
        Protoflexi
      </div>

      {/* Links (FIX IS HERE ↓↓↓) */}
      <div className="flex items-center gap-8 text-gray-700 font-medium">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>

        <Link href="/upload" className="hover:text-blue-600 transition">
          Upload
        </Link>

        <Link href="/dashboard" className="hover:text-blue-600 transition">
          Dashboard
        </Link>
      </div>

    </nav>
  );
}
