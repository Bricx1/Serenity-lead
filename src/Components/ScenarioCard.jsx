import React from 'react';

export default function ScenarioCard({ scenario, onChoice }) {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg w-full max-w-xl text-left">
      <p className="text-lg font-semibold mb-4">{scenario.text}</p>
      {scenario.choices?.map((choice, idx) => (
        <button
          key={idx}
          onClick={() => onChoice(choice)}
          className="block w-full text-left bg-blue-100 hover:bg-blue-200 rounded px-4 py-2 mb-2"
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
}
