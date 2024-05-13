import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function isAlphanumeric(char) {
    return /^[0-9a-zA-Z]$/.test(char);
  }

  function handleClick() {
    const s = input.toLowerCase();
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
      while (i < j && !isAlphanumeric(s[i])) i++;
      while (i < j && !isAlphanumeric(s[j])) j--;
      if (s[i].toLowerCase() !== s[j].toLowerCase()) {
        setResult(s + " is ot a palindrome");
        return;
      }
      i += 1;
      j -= 1;
    }
    setResult(s + " is a palindrome");
  }
  return (
    <>
      <main className="main">
        <h1 className="title">Is it a palindrome?</h1>
        <div className="container">
          <label htmlFor="text-input">
            {" "}
            Enter a word to check if it is a palindrome:{" "}
          </label>
          <input
            className="wordInput"
            id="text-input"
            type="text"
            placeholder="enter a word"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleClick}
            id="check-btn"
            className="button"
            type="button"
          >
            Check
          </button>
          <div className="result" id="result">
            {result}
          </div>
        </div>
      </main>
    </>
  );
}
