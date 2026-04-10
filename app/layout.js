import Navbar from "../components/Navbar";

export const metadata = {
  title: "Protoflexi",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />   {/* 👈 THIS is “including it” */}
        {children}   {/* 👈 page content */}
      </body>
    </html>
  );
}
