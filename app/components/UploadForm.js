"use client";

import { useState } from "react";
import axios from "axios";

export default function UploadForm() {
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

    await axios.post("http://localhost:5000/upload", data);

    alert("Quote request sent!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} /><br/>
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} /><br/>
      <input placeholder="Quantity" onChange={e => setForm({...form, quantity: e.target.value})} /><br/><br/>

      <label>Upload Gerber</label><br/>
      <input type="file" onChange={e => setGerber(e.target.files[0])} /><br/><br/>

      <label>Upload BOM</label><br/>
      <input type="file" onChange={e => setBom(e.target.files[0])} /><br/><br/>

      <button type="submit">Get Quote</button>
    </form>
  );
}
