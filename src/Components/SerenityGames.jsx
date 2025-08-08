import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Heart, Star, Circle, Square, Triangle, Flower, Smile, Sparkles } from 'lucide-react';

const SerenityGames = () => {
  const [currentGame, setCurrentGame] = useState('menu');

  const GameMenu = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-2 flex items-center justify-center gap-2">
            <Sparkles className="text-yellow-500" />
            Serenity's Wellness Games
            <Sparkles className="text-yellow-500" />
          </h1>
          <p className="text-purple-600 text-lg">Relax, play, and heal with these gentle games</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GameCard
            title="Memory Garden"
            description="Match beautiful flowers and nature scenes"
            icon={<Flower className="w-8 h-8 text-pink-500" />}
            color="from-pink-400 to-rose-500"
            onClick={() => setCurrentGame('memory')}
          />
          
          <GameCard
            title="Breathing Bubbles"
            description="Pop bubbles while practicing deep breathing"
            icon={<Circle className="w-8 h-8 text-blue-500" />}
            color="from-blue-400 to-cyan-500"
            onClick={() => setCurrentGame('breathing')}
          />
          
          <GameCard
            title="Color Harmony"
            description="Create beautiful color patterns"
            icon={<Star className="w-8 h-8 text-yellow-500" />}
            color="from-yellow-400 to-orange-500"
            onClick={() => setCurrentGame('colors')}
          />
          
          <GameCard
            title="Shape Serenity"
            description="Match peaceful shapes and patterns"
            icon={<Triangle className="w-8 h-8 text-green-500" />}
            color="from-green-400 to-teal-500"
            onClick={() => setCurrentGame('shapes')}
          />
          
          <GameCard
            title="Gentle Puzzle"
            description="Solve calming picture puzzles"
            icon={<Square className="w-8 h-8 text-purple-500" />}
            color="from-purple-400 to-indigo-500"
            onClick={() => setCurrentGame('puzzle')}
          />
          
          <GameCard
            title="Mood Tracker"
            description="Express your feelings with emojis"
            icon={<Smile className="w-8 h-8 text-orange-500" />}
            color="from-orange-400 to-red-500"
            onClick={() => setCurrentGame('mood')}
          />
        </div>
      </div>
    </div>
  );

  const GameCard = ({ title, description, icon, color, onClick }) => (
    <div
      onClick={onClick}
      className={`bg-gradient-to-br ${color} p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer text-white`}
    >
      <div className="text-center">
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm opacity-90">{description}</p>
      </div>
    </div>
  );

  // Memory Game Component
  const MemoryGame = () => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [moves, setMoves] = useState(0);

    const symbols = useMemo(() => ['🌸', '🌺', '🌻', '🌷', '🌹', '🌿', '🦋', '🌈'], []);

    useEffect(() => {
      const shuffledCards = [...symbols, ...symbols]
        .sort(() => Math.random() - 0.5)
        .map((symbol, index) => ({ id: index, symbol, flipped: false }));
      setCards(shuffledCards);
    }, [symbols]);

    const handleCardClick = (id) => {
      if (flippedCards.length === 2 || matchedCards.includes(id)) return;

      const newFlippedCards = [...flippedCards, id];
      setFlippedCards(newFlippedCards);

      if (newFlippedCards.length === 2) {
        setMoves(moves + 1);
        const [first, second] = newFlippedCards;
        if (cards[first].symbol === cards[second].symbol) {
          setMatchedCards([...matchedCards, first, second]);
          setFlippedCards([]);
        } else {
          setTimeout(() => setFlippedCards([]), 1000);
        }
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <button
              onClick={() => setCurrentGame('menu')}
              className="mb-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
            >
              ← Back to Menu
            </button>
            <h2 className="text-3xl font-bold text-purple-800 mb-2">Memory Garden</h2>
            <p className="text-purple-600">Moves: {moves}</p>
          </div>
          
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`aspect-square rounded-xl flex items-center justify-center text-2xl cursor-pointer transition-all duration-300 ${
                  flippedCards.includes(card.id) || matchedCards.includes(card.id)
                    ? 'bg-white shadow-lg'
                    : 'bg-gradient-to-br from-purple-300 to-pink-300 hover:from-purple-400 hover:to-pink-400'
                }`}
              >
                {flippedCards.includes(card.id) || matchedCards.includes(card.id)
                  ? card.symbol
                  : '❓'}
              </div>
            ))}
          </div>
          
          {matchedCards.length === cards.length && (
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-green-600 mb-2">🎉 Congratulations!</h3>
              <p className="text-purple-600">You completed the game in {moves} moves!</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Breathing Bubbles Game
  const BreathingGame = () => {
    const [bubbles, setBubbles] = useState([]);
    const [breathPhase, setBreathPhase] = useState('inhale'); // inhale, hold, exhale
    const [timer, setTimer] = useState(4);
    const [score, setLocalScore] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            if (breathPhase === 'inhale') {
              setBreathPhase('hold');
              return 4;
            } else if (breathPhase === 'hold') {
              setBreathPhase('exhale');
              return 6;
            } else {
              setBreathPhase('inhale');
              return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }, [breathPhase]);

    useEffect(() => {
      const bubbleInterval = setInterval(() => {
        const newBubble = {
          id: Date.now() + Math.random(),
          x: Math.random() * 80 + 10,
          y: 100,
          size: Math.random() * 30 + 20,
          speed: Math.random() * 2 + 1,
        };
        setBubbles(prev => [...prev, newBubble].slice(-10));
      }, 2000);

      return () => clearInterval(bubbleInterval);
    }, []);

    useEffect(() => {
      const moveInterval = setInterval(() => {
        setBubbles(prev =>
          prev.map(bubble => ({
            ...bubble,
            y: bubble.y - bubble.speed,
          })).filter(bubble => bubble.y > -50)
        );
      }, 50);

      return () => clearInterval(moveInterval);
    }, []);

    const popBubble = (id) => {
      setBubbles(prev => prev.filter(bubble => bubble.id !== id));
      setLocalScore(prev => prev + 1);
    };

    const getBreathColor = () => {
      switch (breathPhase) {
        case 'inhale': return 'from-blue-400 to-cyan-400';
        case 'hold': return 'from-yellow-400 to-orange-400';
        case 'exhale': return 'from-green-400 to-teal-400';
        default: return 'from-blue-400 to-cyan-400';
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 p-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-6">
            <button
              onClick={() => setCurrentGame('menu')}
              className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              ← Back to Menu
            </button>
            <h2 className="text-3xl font-bold text-blue-800 mb-2">Breathing Bubbles</h2>
            <p className="text-blue-600 mb-4">Score: {score}</p>
            
            <div className={`mx-auto w-64 h-64 rounded-full bg-gradient-to-br ${getBreathColor()} flex items-center justify-center mb-6 shadow-lg transition-all duration-1000 ${breathPhase === 'inhale' ? 'scale-110' : breathPhase === 'exhale' ? 'scale-90' : 'scale-100'}`}>
              <div className="text-center text-white">
                <div className="text-2xl font-bold mb-2">
                  {breathPhase === 'inhale' ? '🫁 Breathe In' : breathPhase === 'hold' ? '⏸️ Hold' : '🌬️ Breathe Out'}
                </div>
                <div className="text-4xl font-bold">{timer}</div>
              </div>
            </div>
          </div>
        </div>

        {bubbles.map(bubble => (
          <div
            key={bubble.id}
            onClick={() => popBubble(bubble.id)}
            className="absolute rounded-full bg-gradient-to-r from-blue-200 to-purple-200 opacity-80 cursor-pointer hover:scale-110 transition-transform duration-200 flex items-center justify-center text-2xl animate-pulse"
            style={{
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
            }}
          >
            🫧
          </div>
        ))}
      </div>
    );
  };

  // Color Harmony Game
  const ColorGame = () => {
    const colors = useMemo(() => ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'], []);
    const [selectedColors, setSelectedColors] = useState([]);
    const [pattern, setPattern] = useState([]);
    const [showPattern, setShowPattern] = useState(true);

    useEffect(() => {
      const newPattern = Array.from({ length: 4 }, () => colors[Math.floor(Math.random() * colors.length)]);
      setPattern(newPattern);
      setSelectedColors([]);

      setTimeout(() => setShowPattern(false), 3000);
    }, [colors]);

    const addColor = (color) => {
      if (selectedColors.length < pattern.length) {
        setSelectedColors([...selectedColors, color]);
      }
    };

    const checkPattern = () => {
      if (JSON.stringify(selectedColors) === JSON.stringify(pattern)) {
        alert('Perfect harmony! 🎨');
        // Reset game
        const newPattern = Array.from({ length: 4 }, () => colors[Math.floor(Math.random() * colors.length)]);
        setPattern(newPattern);
        setSelectedColors([]);
        setShowPattern(true);
        setTimeout(() => setShowPattern(false), 3000);
      } else {
        setSelectedColors([]);
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <button
              onClick={() => setCurrentGame('menu')}
              className="mb-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              ← Back to Menu
            </button>
            <h2 className="text-3xl font-bold text-orange-800 mb-2">Color Harmony</h2>
            <p className="text-orange-600">Remember and recreate the color pattern</p>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-orange-700 mb-4">
              {showPattern ? 'Memorize this pattern:' : 'Recreate the pattern:'}
            </h3>
            <div className="flex justify-center gap-2 mb-4">
              {(showPattern ? pattern : selectedColors).map((color, index) => (
                <div
                  key={index}
                  className="w-16 h-16 rounded-full shadow-lg border-4 border-white"
                  style={{ backgroundColor: color }}
                />
              ))}
              {!showPattern && selectedColors.length < pattern.length && (
                <div className="w-16 h-16 rounded-full border-4 border-dashed border-orange-300 flex items-center justify-center">
                  ?
                </div>
              )}
            </div>
          </div>

          {!showPattern && (
            <>
              <div className="flex justify-center gap-4 mb-6">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => addColor(color)}
                    className="w-20 h-20 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 border-4 border-white"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              {selectedColors.length === pattern.length && (
                <div className="text-center">
                  <button
                    onClick={checkPattern}
                    className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 font-bold"
                  >
                    Check Pattern
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  };

  // Mood Tracker Component
  const MoodTracker = () => {
    const [selectedMood, setSelectedMood] = useState(null);
    const [moodHistory, setMoodHistory] = useState([]);
    const [note, setNote] = useState('');

    const moods = [
      { emoji: '😊', name: 'Happy', color: 'bg-yellow-200' },
      { emoji: '😌', name: 'Calm', color: 'bg-blue-200' },
      { emoji: '😴', name: 'Sleepy', color: 'bg-purple-200' },
      { emoji: '🤔', name: 'Thoughtful', color: 'bg-gray-200' },
      { emoji: '😔', name: 'Sad', color: 'bg-blue-300' },
      { emoji: '😰', name: 'Worried', color: 'bg-orange-200' },
    ];

    const saveMood = () => {
      if (selectedMood) {
        const newEntry = {
          mood: selectedMood,
          note,
          time: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString(),
        };
        setMoodHistory([newEntry, ...moodHistory.slice(0, 9)]);
        setNote('');
        setSelectedMood(null);
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <button
              onClick={() => setCurrentGame('menu')}
              className="mb-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            >
              ← Back to Menu
            </button>
            <h2 className="text-3xl font-bold text-pink-800 mb-2">Mood Tracker</h2>
            <p className="text-pink-600">How are you feeling right now?</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {moods.map((mood, index) => (
              <button
                key={index}
                onClick={() => setSelectedMood(mood)}
                className={`p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-200 ${
                  selectedMood?.name === mood.name ? mood.color + ' ring-4 ring-pink-400' : mood.color
                }`}
              >
                <div className="text-4xl mb-2">{mood.emoji}</div>
                <div className="font-bold text-gray-700">{mood.name}</div>
              </button>
            ))}
          </div>

          {selectedMood && (
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-700 mb-4">
                You selected: {selectedMood.emoji} {selectedMood.name}
              </h3>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Would you like to add a note about how you're feeling? (optional)"
                className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-pink-400 focus:outline-none resize-none"
                rows="3"
              />
              <button
                onClick={saveMood}
                className="mt-4 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 font-bold"
              >
                Save Mood
              </button>
            </div>
          )}

          {moodHistory.length > 0 && (
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-700 mb-4">Your Recent Moods</h3>
              <div className="space-y-3">
                {moodHistory.map((entry, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl">{entry.mood.emoji}</div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-700">{entry.mood.name}</div>
                      <div className="text-sm text-gray-500">{entry.date} at {entry.time}</div>
                      {entry.note && <div className="text-sm text-gray-600 mt-1">{entry.note}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Simple Puzzle Game
  const PuzzleGame = () => {
    const [pieces, setPieces] = useState([]);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
      // Create a simple 3x3 puzzle
      const shuffled = Array.from({ length: 8 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);
      shuffled.push(null); // Empty space
      setPieces(shuffled);
    }, []);

    const movePiece = (index) => {
      const emptyIndex = pieces.findIndex(piece => piece === null);
      const canMove = [emptyIndex - 1, emptyIndex + 1, emptyIndex - 3, emptyIndex + 3].includes(index);

      if (canMove) {
        const newPieces = [...pieces];
        [newPieces[index], newPieces[emptyIndex]] = [newPieces[emptyIndex], newPieces[index]];
        setPieces(newPieces);

        // Check if completed
        const isCompleted = newPieces.slice(0, 8).every((piece, i) => piece === i + 1);
        setCompleted(isCompleted);
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <button
              onClick={() => setCurrentGame('menu')}
              className="mb-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
            >
              ← Back to Menu
            </button>
            <h2 className="text-3xl font-bold text-indigo-800 mb-2">Gentle Puzzle</h2>
            <p className="text-indigo-600">Arrange the numbers in order from 1 to 8</p>
          </div>

          <div className="max-w-sm mx-auto">
            <div className="grid grid-cols-3 gap-2">
              {pieces.map((piece, index) => (
                <div
                  key={index}
                  onClick={() => movePiece(index)}
                  className={`aspect-square rounded-lg flex items-center justify-center text-2xl font-bold cursor-pointer transition-all duration-200 ${
                    piece === null
                      ? 'bg-gray-100'
                      : 'bg-gradient-to-br from-indigo-400 to-purple-500 text-white hover:scale-105 shadow-lg'
                  }`}
                >
                  {piece}
                </div>
              ))}
            </div>

            {completed && (
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-green-600 mb-2">🎉 Puzzle Complete!</h3>
                <p className="text-indigo-600">Great job solving the puzzle!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Shape Matching Game
  const ShapeGame = () => {
    const [targetShape, setTargetShape] = useState(null);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');

    const shapes = useMemo(() => [
      { component: Circle, name: 'Circle', color: 'text-blue-500' },
      { component: Square, name: 'Square', color: 'text-red-500' },
      { component: Triangle, name: 'Triangle', color: 'text-green-500' },
      { component: Heart, name: 'Heart', color: 'text-pink-500' },
      { component: Star, name: 'Star', color: 'text-yellow-500' },
    ], []);

    const generateNewRound = useCallback(() => {
      const target = shapes[Math.floor(Math.random() * shapes.length)];
      const wrongShapes = shapes.filter(s => s.name !== target.name);
      const randomWrong = wrongShapes.sort(() => Math.random() - 0.5).slice(0, 2);
      const allOptions = [target, ...randomWrong].sort(() => Math.random() - 0.5);

      setTargetShape(target);
      setOptions(allOptions);
      setFeedback('');
    }, [shapes]);

    useEffect(() => {
      generateNewRound();
    }, [generateNewRound]);

    const handleChoice = (shape) => {
      if (shape.name === targetShape.name) {
        setScore(prev => prev + 1);
        setFeedback('Correct! ✨');
        setTimeout(() => {
          generateNewRound();
        }, 1500);
      } else {
        setFeedback('Try again! 💫');
        setTimeout(() => setFeedback(''), 1000);
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <button
              onClick={() => setCurrentGame('menu')}
              className="mb-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
            >
              ← Back to Menu
            </button>
            <h2 className="text-3xl font-bold text-teal-800 mb-2">Shape Serenity</h2>
            <p className="text-teal-600">Score: {score}</p>
          </div>

          {targetShape && (
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-teal-700 mb-6">Find the matching shape:</h3>
              <div className="mb-8">
                <targetShape.component className={`w-24 h-24 mx-auto ${targetShape.color}`} />
              </div>

              <div className="flex justify-center gap-6">
                {options.map((shape, index) => {
                  const ShapeComponent = shape.component;
                  return (
                    <button
                      key={index}
                      onClick={() => handleChoice(shape)}
                      className="p-4 rounded-2xl bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
                    >
                      <ShapeComponent className={`w-16 h-16 ${shape.color}`} />
                    </button>
                  );
                })}
              </div>

              {feedback && (
                <div className="text-2xl font-bold text-center mt-6 text-teal-700">
                  {feedback}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderGame = () => {
    switch (currentGame) {
      case 'memory': return <MemoryGame />;
      case 'breathing': return <BreathingGame />;
      case 'colors': return <ColorGame />;
      case 'shapes': return <ShapeGame />;
      case 'puzzle': return <PuzzleGame />;
      case 'mood': return <MoodTracker />;
      default: return <GameMenu />;
    }
  };

  return renderGame();
};

export default SerenityGames;