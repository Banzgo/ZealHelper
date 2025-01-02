"use client";
import { useState } from "react";

export default function Home() {
  const [showResponse, setShowResponse] = useState(false);

  return (
    <div
      className="h-screen p-6 flex flex-col items-center justify-center bg-gray-800"
      onClick={() => setShowResponse(true)}
    >
      <div>
        <h1 className="text-6xl font-bold text-center mb-10">Zeal Helper</h1>
        {!showResponse ? (
          <p className="text-xl text-center">What does Zeal do?</p>
        ) : (
          <p className="text-xl text-center">
            An attack with Zeal must reroll failed to-wound rolls.
          </p>
        )}
      </div>
    </div>
  );
}
