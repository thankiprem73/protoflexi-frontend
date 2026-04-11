"use client";

import { useState } from "react";
import axios from "axios";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    quantity: ""
  });

  const [gerber, setGerber] = useState(null);
  const [bom, setBom] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("quantity", form.quantity);
    data.append("gerber", gerber);
    data.append("bom", bom);

    await axios.post("https://YOUR-BACKEND.onrender.com/upload", data);

    alert("Quote submitted!");
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Request a Quote</h2>

      <input placeholder="Your Name" onChange={(e) => setForm({...form, name: e.target.value})} />
      <input placeholder="Your Email" onChange={(e) => setForm({...form, email: e.target.value})} />
      <input placeholder="Quantity" onChange={(e) => setForm({...form, quantity: e.target.value})} />

      <label>Upload Gerber</label>
      <input type="file" onChange={(e) => setGerber(e.target.files[0])} />

      <label>Upload BOM</label>
      <input type="file" onChange={(e) => setBom(e.target.files[0])} />

      <button type="submit">Get Quote</button>
    </form>
  );
}
