import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      className="bg-brand py-1 px-3 text-white rounded hover:brightness-110"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
