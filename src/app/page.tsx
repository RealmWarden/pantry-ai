"use client";

import { useState } from "react";

export default function Home() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  }

  async function handleClick() {
    setLoading(true);

    const res = await fetch("/analyze", {
      method: "POST",
    });

    const data = await res.json();
    setIngredients(data.ingredients);

    setLoading(false);
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Pantry MVP</h1>

      <input type="file" accept="image/*" onChange={handleFileChange} />

      {fileName && <p>Selected file: {fileName}</p>}

      <button onClick={handleClick}>
        {loading ? "Loading..." : "Analyze"}
      </button>

      <ul>
        {ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </main>
  );
}


