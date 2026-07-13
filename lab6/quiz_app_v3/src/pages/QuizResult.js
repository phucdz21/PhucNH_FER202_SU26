import React from 'react';
import { useSelector } from 'react-redux';

const QuizResult = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const userAnswers = useSelector((state) => state.quiz.userAnswers);

  return (
    <div>
      <div className="bg-dark text-white text-center py-4 mb-4 rounded">
        <h2>Quiz Review</h2>
      </div>

      <div className="mb-5">
        {questions.map((q) => {
          const userAnswer = userAnswers[q.id];
          const isCorrect = userAnswer === q.correctAnswer;
          
          let bgColorClass = 'bg-danger bg-opacity-10 border-danger';
          if (isCorrect) {
            bgColorClass = 'bg-success bg-opacity-25 border-success';
          }

          return (
            <div key={q.id} className={`p-3 mb-4 border rounded ${bgColorClass}`}>
              <h6 className="fw-bold mb-3">
                <span className={isCorrect ? 'text-success' : 'text-danger'}>Q{q.id}. </span>
                {q.question}
              </h6>
              
              <div className="d-flex flex-column gap-2 ms-3 mb-3">
                {q.options.map((opt, index) => {
                  const isSelected = userAnswer === opt;
                  
                  let labelClass = 'text-secondary';
                  if (isSelected && !isCorrect) {
                    labelClass = 'text-danger fw-bold';
                  } else if (isSelected && isCorrect) {
                    labelClass = 'text-success fw-bold';
                  }

                  return (
                    <div key={index} className="form-check m-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        checked={isSelected}
                        readOnly
                        disabled
                      />
                      <label className={`form-check-label ${labelClass}`}>
                        {opt}
                      </label>
                    </div>
                  );
                })}
              </div>

              <div className="bg-secondary bg-opacity-25 p-2 rounded border border-secondary text-secondary">
                Right answer is: <strong>{q.correctAnswer}</strong>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizResult;
