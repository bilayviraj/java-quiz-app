import { useNavigate, useSearchParams } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const score = params.get("score");
  const total = params.get("total");

  return (
    <div className="result">
      <h2>Quiz Completed</h2>
      <p>
        Your Score: {score} / {total}
      </p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default Result;
