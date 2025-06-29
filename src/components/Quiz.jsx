import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import allQuestions from "../data";

const Quiz = () => {
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

  useEffect(() => {
    const filtered = allQuestions.filter(
      (q) =>
        q.topic === topic &&
        q.subtopic === subtopic &&
        q.difficulty === difficulty
    );

    setQuestions(filtered);
    setCurrentIndex(0);
    setSubmitted(false);
    setScore(0);
    setSelectedAnswer("");
  }, [topic, subtopic, difficulty]);

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
    }
  };

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
      <div className="description">ℹ️ {question.description}</div>
    </div>
  );

  return (
    <div className="quiz">
      <h3>
        Question {currentIndex + 1} of {questions.length}
      </h3>
      <p className="question-text">{question.question}</p>

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
        </div>
      )}
    </div>
  );
};

export default Quiz;
