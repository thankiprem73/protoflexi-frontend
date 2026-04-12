"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [form, setForm] = useState({
    layers: "",
    quantity: "",
    material: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        "https://your-backend.onrender.com/quote",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      alert("✅ Quote submitted!");
    } catch (err) {
      alert("❌ Error submitting quote");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Get PCB Quote</h2>

      <input
        placeholder="Layers"
        className="w-full p-2 mb-3 border rounded"
        onChange={(e) => setForm({ ...form, layers: e.target.value })}
      />

      <input
        placeholder="Quantity"
        className="w-full p-2 mb-3 border rounded"
        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
      />

      <input
        placeholder="Material"
        className="w-full p-2 mb-3 border rounded"
        onChange={(e) => setForm({ ...form, material: e.target.value })}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-black text-white py-2 rounded"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
}
