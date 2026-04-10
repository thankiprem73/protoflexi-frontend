export const metadata = {
  title: "Protoflexi",
  description: "PCB Prototyping Platform"
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}