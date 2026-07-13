import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const QuizReviewGrid = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const userAnswers = useSelector((state) => state.quiz.userAnswers);

  return (
    <div>
      <div className="bg-dark text-white text-center py-4 mb-4 rounded">
        <h2>Quiz Review</h2>
      </div>

      <div className="row row-cols-2 row-cols-md-5 g-3 mb-5">
        {questions.map((q) => {
          const isAnswered = !!userAnswers[q.id];
          return (
            <div key={q.id} className="col">
              <div className={`p-3 border rounded h-100 ${isAnswered ? 'bg-success text-white bg-opacity-25 border-success' : 'bg-light text-dark'}`}>
                <div className="mb-2 text-decoration-underline" style={{cursor: 'pointer'}}>Question No {q.id}</div>
                <div className="fw-bold">{isAnswered ? 'Answered' : 'Not Answered'}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="d-flex gap-2">
        <Link to="/quizzes" className="btn btn-info text-white">Quiz</Link>
        <Link to="/quiz/review" className="btn btn-info text-white">Quiz Review</Link>
        <Link to="/quiz/result" className="btn btn-info text-white">Submit</Link>
      </div>
    </div>
  );
};

export default QuizReviewGrid;
