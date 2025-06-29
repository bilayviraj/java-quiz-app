import { useState } from "react";

const QuestionCard = ({ data, onAnswer }) => {
  const [selected, setSelected] = useState(null);

  const handleSubmit = () => {
    if (selected) {
      onAnswer(selected === data.correctAnswer);
      setSelected(null); // reset for next question
    } else {
      alert("Please select an answer.");
    }
  };

  return (
    <div className="question-card">
      <p>{data.question}</p>
      <ul>
        {Object.entries(data.options).map(([key, value]) => (
          <li key={key}>
            <label>
              <input
                type="radio"
                name="option"
                value={key}
                checked={selected === key}
                onChange={() => setSelected(key)}
              />
              {key}. {value}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuestionCard;
