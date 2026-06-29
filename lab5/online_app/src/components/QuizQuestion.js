import React, { useState } from 'react';

function QuizQuestion({ data, questionNumber, onNext }) {
  const [selected, setSelected] = useState(null);

  const handleNext = () => {
    const isCorrect = selected === data.correctAnswer;
    onNext(isCorrect);
    setSelected(null);
  };

  return (
    <div className="quiz-container">
      <h4 className="quiz-question">Question {questionNumber}</h4>
      <p>{data.question}</p>
      {data.answers.map((ans, i) => (
        <div className="form-check" key={i}>
          <input
            className="form-check-input"
            type="radio"
            name="quiz-answer"
            id={`opt-${i}`}
            checked={selected === ans}
            onChange={() => setSelected(ans)}
          />
          <label className="form-check-label" htmlFor={`opt-${i}`}>
            {ans}
          </label>
        </div>
      ))}
      <button className="btn btn-danger mt-3 quiz-button" disabled={!selected} onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default QuizQuestion;