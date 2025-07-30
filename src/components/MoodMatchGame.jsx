import React, { useState } from 'react';

const emotions = [
  { id: 1, label: 'Happy', image: '/emotions/happy.png' },
  { id: 2, label: 'Sad', image: '/emotions/sad.png' },
  { id: 3, label: 'Angry', image: '/emotions/angry.png' },
];

const MoodMatchGame = () => {
  const [selectedLabel, setSelectedLabel] = useState(null);
  const [matchMessage, setMatchMessage] = useState('');

  const handleMatch = (label, correctLabel) => {
    if (label === correctLabel) {
      setMatchMessage('✅ Correct!');
    } else {
      setMatchMessage('❌ Try Again');
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 text-center">
      <h3 className="text-lg font-semibold mb-4 text-[#1e3369]">Match the Emotion to the Face</h3>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {emotions.map((emotion) => (
          <div key={emotion.id} className="flex flex-col items-center">
            <img src={emotion.image} alt={emotion.label} className="w-24 h-24 object-contain" />
            <button
              onClick={() => setSelectedLabel(emotion.label)}
              className="mt-2 px-4 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600"
            >
              Select
            </button>
          </div>
        ))}
      </div>

      <div className="space-x-4">
        {emotions.map((emotion) => (
          <button
            key={emotion.id}
            className="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700"
            onClick={() => handleMatch(selectedLabel, emotion.label)}
          >
            {emotion.label}
          </button>
        ))}
      </div>

      {matchMessage && <div className="mt-4 text-lg font-medium">{matchMessage}</div>}
    </div>
  );
};

export default MoodMatchGame;
