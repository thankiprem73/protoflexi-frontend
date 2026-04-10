"use client";

import { useState } from "react";
import { API } from "../../lib/api";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await API.post("/upload", formData);

      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Upload BOM</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0])}
          className="block w-full"
        />

        <button
          onClick={handleUpload}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload BOM"}
        </button>
      </div>

      {result && (
        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Result</h2>
          <pre className="text-sm">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
