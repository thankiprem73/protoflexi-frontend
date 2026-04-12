export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

<div className="max-w-5xl mx-auto">{children}</div>
