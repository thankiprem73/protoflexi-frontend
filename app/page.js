export const dynamic = "force-dynamic";

import QuoteForm from "../components/QuoteForm";
import FileUpload from "../components/FileUpload";

export default function Home() {
  return (
    <main className="p-10">
      <QuoteForm />
      <FileUpload />
    </main>
  );
}
