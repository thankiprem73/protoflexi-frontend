import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Protoflexi",
  description: "PCB Prototyping Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">

        {/* GLOBAL NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}
