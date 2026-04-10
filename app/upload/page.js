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
    <div className="p-10">
      <h1 className="text-2xl font-bold">Upload BOM</h1>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <button
        onClick={uploadFile}
        className="bg-blue-600 text-white px-4 py-2 mt-4"
      >
        Upload
      </button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
