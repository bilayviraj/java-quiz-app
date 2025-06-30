import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import allQuestions from "../data";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "quiz-progress";

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const topic = searchParams.get("topic");
  const subtopic = searchParams.get("subtopic");
  const difficulty = searchParams.get("difficulty");

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Load progress or fetch new questions
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (
        parsed.topic === topic &&
        parsed.subtopic === subtopic &&
        parsed.difficulty === difficulty
      ) {
        setQuestions(parsed.questions);
        setCurrentIndex(parsed.currentIndex || 0);
        setScore(parsed.score || 0);
        setSelectedAnswer(parsed.selectedAnswer || "");
        setSubmitted(false);
        return;
      }
    }

    // Fresh quiz
    const filtered = allQuestions.filter(
      (q) =>
        q.topic === topic &&
        q.subtopic === subtopic &&
        q.difficulty === difficulty
    );
    setQuestions(filtered);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer("");
    setSubmitted(false);
  }, [topic, subtopic, difficulty]);

  // Save progress
  useEffect(() => {
    if (questions.length > 0) {
      const progress = {
        topic,
        subtopic,
        difficulty,
        questions,
        currentIndex,
        score,
        selectedAnswer,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [questions, currentIndex, score, selectedAnswer]);

  const clearProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
  };

  if (questions.length === 0) {
    return (
      <div className="quiz">
        <h2>No Questions Found</h2>
        <p>
          ❌ We couldn't find any questions for the selected topic, subtopic,
          and difficulty.
        </p>
      </div>
    );
  }

  const question = questions[currentIndex];

  const handleSubmit = () => {
    if (!selectedAnswer) {
      alert("Please select an answer.");
      return;
    }

    if (selectedAnswer === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setSubmitted(true);
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer("");
      setSubmitted(false);
    } else {
      clearProgress();
    }
  };

  const restartQuiz = () => {
    clearProgress();

    // Reload questions again
    const filtered = allQuestions.filter(
      (q) =>
        q.topic === topic &&
        q.subtopic === subtopic &&
        q.difficulty === difficulty
    );
    setQuestions(filtered);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer("");
    setSubmitted(false);
  };

  const formatQuestionHTML = (text) => {
    // Wrap code blocks (```...```) or inline <code> tags
    const codeBlockPattern = /```([\s\S]*?)```/g;
    const inlineCodePattern = /`([^`]+)`/g;

    return text
      .replace(
        codeBlockPattern,
        (_, code) => `<pre><code>${escapeHTML(code)}</code></pre>`
      )
      .replace(
        inlineCodePattern,
        (_, code) => `<code>${escapeHTML(code)}</code>`
      );
  };

  const formatDescriptionHTML = (text) => {
    const inlineCodePattern = /`([^`]+)`/g;
    const formatted = text
      .replace(
        inlineCodePattern,
        (_, code) => `<code>${escapeHTML(code)}</code>`
      )
      .replace(/\n/g, "<br/>"); // Handle line breaks

    return formatted;
  };

  const escapeHTML = (str) =>
    str.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const renderFeedback = () => (
    <div className="result">
      <p
        className={
          selectedAnswer === question.correctAnswer ? "correct" : "wrong"
        }
      >
        {selectedAnswer === question.correctAnswer
          ? "✅ Correct!"
          : `❌ Incorrect. Correct answer is ${question.correctAnswer}.`}
      </p>
      <div
        className="description"
        dangerouslySetInnerHTML={{
          __html: formatDescriptionHTML(question.description),
        }}
      ></div>
    </div>
  );

  return (
    <div className="quiz">
      {/* Show Topic/Subtopic/Difficulty Info */}
      <div className="quiz-meta">
        <span>🎯{difficulty.toUpperCase()}</span>
        <span>📘 {topic}</span>
        <span>🧩 {subtopic}</span>
      </div>

      <h3>
        Question {currentIndex + 1} of {questions.length}
      </h3>
      <div
        className="question-text"
        dangerouslySetInnerHTML={{
          __html: formatQuestionHTML(question.question),
        }}
      ></div>
      <div className="options">
        {question.options.map((opt, idx) => {
          const isCorrect = opt === question.correctAnswer;
          const isSelected = opt === selectedAnswer;

          let className = "";
          if (submitted) {
            if (isCorrect) className = "correct";
            else if (isSelected) className = "wrong";
          }

          return (
            <label key={idx} className={className}>
              <input
                type="radio"
                name="answer"
                value={opt}
                onChange={() => setSelectedAnswer(opt)}
                disabled={submitted}
                checked={isSelected}
              />
              {String.fromCharCode(65 + idx)}. {opt}
            </label>
          );
        })}
      </div>

      {!submitted ? (
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      ) : currentIndex + 1 < questions.length ? (
        <>
          {renderFeedback()}
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </>
      ) : (
        <div className="result">
          {renderFeedback()}
          <p className="final-score">
            🎉 Quiz Completed! Your Score: {score}/{questions.length}
          </p>
          <div className="button-group">
            <button className="restart-button" onClick={restartQuiz}>
              🔄 Restart Quiz
            </button>
            <button
              className="home-button"
              onClick={() => {
                clearProgress();
                navigate("/");
              }}
            >
              🏠 Return to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
