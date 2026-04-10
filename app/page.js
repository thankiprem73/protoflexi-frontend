"use client";
import { useState } from "react";
import { API } from "@/lib/api";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await API.post("/upload", formData);
    setData(res.data);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Upload BOM</h1>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <button onClick={uploadFile}>Upload</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
