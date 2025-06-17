// src/App.jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const getJoke = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://v2.jokeapi.dev/joke/Any?safe-mode&type=single"
      );
      const data = await res.json();
      setJoke(data.joke || "No joke found.");
    } catch (error) {
      setJoke("Failed to fetch joke.");
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>Joke Generator</h1>
      <button onClick={getJoke} disabled={loading}>
        {loading ? "Loading..." : "Get a Joke"}
      </button>
      <p>{joke}</p>
    </div>
  );
}

export default App;
