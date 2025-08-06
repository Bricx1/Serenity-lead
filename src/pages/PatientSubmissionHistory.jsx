// src/pages/PatientSubmissionHistory.jsx
import React from 'react';

const submissionHistory = [
  {
    id: 1,
    title: "Medicine ABC - 8 AM",
    date: "Apr 25, 2025",
    status: "incomplete",
    type: "medication",
    hasVideo: false
  },
  {
    id: 2,
    title: "Medicine XYX - After Breakfast",
    date: "Apr 25, 2025",
    status: "incomplete",
    type: "medication",
    hasVideo: false
  },
  {
    id: 3,
    title: "Medicine ABC - After Dinner",
    date: "Apr 25, 2025",
    status: "completed",
    type: "medication",
    hasVideo: true,
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=60&h=60&fit=crop&crop=face"
  },
  {
    id: 4,
    title: "XYZ Dose",
    date: "Apr 25, 2025",
    status: "completed",
    type: "medication",
    hasVideo: true,
    thumbnail: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=60&h=60&fit=crop&crop=center"
  },
  {
    id: 5,
    title: "Morning Dose - 8AM",
    date: "Apr 25, 2025",
    status: "completed",
    type: "medication",
    hasVideo: true,
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&h=60&fit=crop&crop=center"
  },
  {
    id: 6,
    title: "Morning Dose - 8AM",
    date: "Apr 25, 2025",
    status: "completed",
    type: "medication",
    hasVideo: true,
    thumbnail: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=60&h=60&fit=crop&crop=center"
  },
  {
    id: 7,
    title: "Morning Dose - 8AM",
    date: "Apr 25, 2025",
    status: "completed",
    type: "medication",
    hasVideo: true,
    thumbnail: "https://images.unsplash.com/photo-1605684954998-685c79d6a018?w=60&h=60&fit=crop&crop=center"
  }
];

const PatientSubmissionHistory = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Patient Submission History</h1>
      <div className="space-y-4">
        {submissionHistory.map((entry) => (
          <div
            key={entry.id}
            className="flex items-center justify-between bg-white rounded-lg shadow p-4"
          >
            <div className="flex items-center space-x-4">
              {entry.hasVideo && (
                <img
                  src={entry.thumbnail}
                  alt="Thumbnail"
                  className="w-12 h-12 rounded-md object-cover"
                />
              )}
              <div>
                <h2 className="font-semibold">{entry.title}</h2>
                <p className="text-sm text-gray-500">{entry.date}</p>
              </div>
            </div>
            <span
              className={`px-3 py-1 text-xs rounded-full font-medium ${
                entry.status === 'completed'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-600'
              }`}
            >
              {entry.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientSubmissionHistory;
