export const dynamic = "force-dynamic";

import QuoteForm from "../components/QuoteForm";

export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Protoflexi</h1>
      <QuoteForm />
    </main>
  );
}
