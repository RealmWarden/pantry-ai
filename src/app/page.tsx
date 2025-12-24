"use client";

import { useState } from "react";

export default function Home() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  }

  function handleClick() {
    setMessage("button clicked, reality still intact");
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Pantry MVP</h1>

      <input type="file" accept="image/*" onChange={handleFileChange} />

      {fileName && <p>Selected file: {fileName}</p>}

      <button onClick={handleClick} style={{ display: "block", marginTop: "1rem" }}>
        Do something
      </button>

      {message && <p>{message}</p>}
    </main>
  );
}
