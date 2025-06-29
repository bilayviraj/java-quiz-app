import { useState } from "react";
import { useNavigate } from "react-router-dom";
import quizStructure from "../data/quizStructure";

const Home = () => {
  const navigate = useNavigate();
  const [topic, setTopic] = useState("");
  const [subtopic, setSubtopic] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const selectedTopicObj = quizStructure.find((t) => t.topic === topic);

  const handleStart = () => {
    if (!topic || !subtopic || !difficulty) {
      alert("Please select all options.");
      return;
    }
    navigate(
      `/quiz?topic=${topic}&subtopic=${subtopic}&difficulty=${difficulty}`
    );
  };

  return (
    <div className="home">
      <div className="form-group">
        <label>Choose Topic:</label>
        <select
          value={topic}
          onChange={(e) => {
            setTopic(e.target.value);
            setSubtopic(""); // reset subtopic on topic change
          }}
        >
          <option value="">Select Topic</option>
          {quizStructure.map((t) => (
            <option key={t.topic} value={t.topic}>
              {t.topic}
            </option>
          ))}
        </select>
      </div>

      {topic && (
        <div className="form-group">
          <label>Choose Subtopic:</label>
          <select
            value={subtopic}
            onChange={(e) => setSubtopic(e.target.value)}
          >
            <option value="">Select Subtopic</option>
            {selectedTopicObj?.subtopics.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="form-group">
        <label>Choose Difficulty:</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="form-group">
        <button onClick={handleStart}>Start Quiz</button>
      </div>
    </div>
  );
};

export default Home;
