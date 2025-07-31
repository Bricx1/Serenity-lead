import React, { useState } from "react";
import ScenarioCard from "./ScenarioCard";
import ReflectionModal from "./ReflectionModal";

// Game scenarios
const scenarios = [
  {
    id: "party-invite",
    text: "You get invited to a party where alcohol may be present. What do you do?",
    choices: [
      { text: "Decline and suggest coffee instead", next: "coffee-success", score: +1 },
      { text: "Say maybe and see how you feel", next: "temptation", score: 0 },
      { text: "Agree to go", next: "relapse", score: -1 },
    ],
  },
  {
    id: "coffee-success",
    text: "Your friend agrees to coffee. You feel proud of your decision.",
    reflection: true,
  },
  {
    id: "temptation",
    text: "You went but left early, feeling conflicted.",
    reflection: true,
  },
  {
    id: "relapse",
    text: "You gave in. It's okay — time to reset and try again.",
    restart: true,
  }
];

const RecoveryQuest = () => {
  const [currentId, setCurrentId] = useState("party-invite");
  const [showReflection, setShowReflection] = useState(false);
  const [score, setScore] = useState(0);

  const scenario = scenarios.find((s) => s.id === currentId);

  const handleChoice = (choice) => {
    const next = choice.next;
    const nextScenario = scenarios.find((s) => s.id === next);

    setScore(prev => prev + (choice.score || 0));
    setCurrentId(next);

    if (nextScenario?.reflection) {
      setShowReflection(true);
    }
  };

  const handleReflectionClose = () => {
    setShowReflection(false);
    setCurrentId("party-invite");
    setScore(0);
  };

  if (!scenario) return <p>Loading...</p>;

  return (
    <div className="min-h-[400px] bg-gradient-to-br from-white to-blue-50 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">Recovery Quest</h2>
      <p className="text-center text-sm text-gray-600 mb-2">Your Score: {score}</p>

      {showReflection && scenario.reflection ? (
        <ReflectionModal onClose={handleReflectionClose} />
      ) : scenario.restart ? (
        <div className="text-center">
          <p className="text-lg text-gray-800 mb-6">{scenario.text}</p>
          <button
            onClick={handleReflectionClose}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Restart Quest
          </button>
        </div>
      ) : (
        <ScenarioCard scenario={scenario} onChoice={handleChoice} />
      )}
    </div>
  );
};

export default RecoveryQuest;
