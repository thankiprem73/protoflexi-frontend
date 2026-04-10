"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">

      <div className="text-xl font-bold text-blue-600">
        Protoflexi
      </div>

      <div className="flex gap-6">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>

        <Link href="/upload" className="hover:text-blue-600">
          Upload
        </Link>

        <Link href="/dashboard" className="hover:text-blue-600">
          Dashboard
        </Link>
      </div>

    </nav>
  );
}
