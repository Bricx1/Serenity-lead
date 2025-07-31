import React from 'react';

export default function ReflectionModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md text-center">
        <h3 className="text-xl font-bold mb-4">Reflection</h3>
        <p className="mb-4">What did you learn from this experience?</p>
        <textarea
          rows={4}
          className="w-full border border-gray-300 rounded p-2"
          placeholder="Type your thoughts here..."
        />
        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
