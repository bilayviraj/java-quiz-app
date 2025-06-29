import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const STORAGE_KEY = "quiz-progress";

const Home = () => {
  const navigate = useNavigate();

  const [topic, setTopic] = useState("Java Fundamentals");
  const [subtopic, setSubtopic] = useState("Introduction to Java");
  const [difficulty, setDifficulty] = useState("easy");

  const [hasSavedProgress, setHasSavedProgress] = useState(false);
  const [savedData, setSavedData] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setHasSavedProgress(true);
      setSavedData(parsed);
    }
  }, []);

  const handleStart = () => {
    navigate(
      `/quiz?topic=${encodeURIComponent(topic)}&subtopic=${encodeURIComponent(
        subtopic
      )}&difficulty=${encodeURIComponent(difficulty)}`
    );
  };

  const handleResume = () => {
    if (savedData) {
      navigate(
        `/quiz?topic=${encodeURIComponent(
          savedData.topic
        )}&subtopic=${encodeURIComponent(
          savedData.subtopic
        )}&difficulty=${encodeURIComponent(savedData.difficulty)}`
      );
    }
  };

  return (
    <div className="home">
      <div className="selectors">
        <label>
          Topic:
          <select value={topic} onChange={(e) => setTopic(e.target.value)}>
            <option value="Java Fundamentals">Java Fundamentals</option>
            {/* Add more topics as needed */}
          </select>
        </label>

        <label>
          Subtopic:
          <select
            value={subtopic}
            onChange={(e) => setSubtopic(e.target.value)}
          >
            <option value="Introduction to Java">Introduction to Java</option>
            {/* Add more subtopics */}
          </select>
        </label>

        <label>
          Difficulty:
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
      </div>

      <button onClick={handleStart} className="resume-button">
        Start New Quiz
      </button>

      {hasSavedProgress && (
        <button onClick={handleResume} className="resume-button">
          Continue Previous Quiz
        </button>
      )}
    </div>
  );
};

export default Home;
