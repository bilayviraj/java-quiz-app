import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import quizStructure from "../data/quizStructure";

const STORAGE_KEY = "quiz-progress";

const Home = () => {
  const navigate = useNavigate();

  // Extract all topics from structure
  const allTopics = quizStructure.map((item) => item.topic);

  const [topic, setTopic] = useState(allTopics[0]);
  const [subtopic, setSubtopic] = useState("");
  const [difficulty, setDifficulty] = useState("easy");

  const [availableSubtopics, setAvailableSubtopics] = useState([]);
  const [hasSavedProgress, setHasSavedProgress] = useState(false);
  const [savedData, setSavedData] = useState(null);

  // Update subtopics when topic changes
  useEffect(() => {
    const found = quizStructure.find((item) => item.topic === topic);
    if (found) {
      setAvailableSubtopics(found.subtopics);
      setSubtopic(found.subtopics[0]);
    }
  }, [topic]);

  // Load progress if exists
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setHasSavedProgress(true);
      setSavedData(parsed);
    }
  }, []);

  const handleStart = () => {
    localStorage.removeItem(STORAGE_KEY);
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
            {allTopics.map((t, idx) => (
              <option key={idx} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <label>
          Subtopic:
          <select
            value={subtopic}
            onChange={(e) => setSubtopic(e.target.value)}
          >
            {availableSubtopics.map((s, idx) => (
              <option key={idx} value={s}>
                {s}
              </option>
            ))}
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
