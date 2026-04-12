"use client";

import { useState } from "react";

export default function FileUpload() {
  const [gerber, setGerber] = useState(null);
  const [bom, setBom] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("gerber", gerber);
    formData.append("bom", bom);

    await fetch("https://your-backend.onrender.com/upload", {
      method: "POST",
      body: formData,
    });

    alert("Files uploaded!");
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow mt-6">
      <h2 className="text-lg font-semibold mb-4">Upload Files</h2>

      <input type="file" onChange={(e) => setGerber(e.target.files[0])} />
      <input type="file" onChange={(e) => setBom(e.target.files[0])} />

      <button
        onClick={handleUpload}
        className="mt-4 bg-black text-white px-4 py-2 rounded"
      >
        Upload
      </button>
    </div>
  );
}
