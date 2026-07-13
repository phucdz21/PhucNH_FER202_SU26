import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAnswer } from '../store/quizSlice';

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const questions = useSelector((state) => state.quiz.questions);
  const userAnswers = useSelector((state) => state.quiz.userAnswers);
  const dispatch = useDispatch();

  const handleOptionChange = (option) => {
    dispatch(setAnswer({ questionId: questions[currentIndex].id, answer: option }));
  };

  const handleFirst = () => setCurrentIndex(0);
  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1));
  const handleLast = () => setCurrentIndex(questions.length - 1);

  if (!questions || questions.length === 0) return <div>Loading...</div>;

  const currentQuestion = questions[currentIndex];
  const currentAnswer = userAnswers[currentQuestion.id];

  return (
    <div>
      <div className="bg-dark text-white text-center py-4 mb-4 rounded">
        <h2>JavaScript Quiz</h2>
      </div>

      <div className="mb-4">
        <h5 className="fw-bold">Q.{currentQuestion.id} {currentQuestion.question}</h5>
        <div className="d-flex flex-column gap-3 mt-3">
          {currentQuestion.options.map((option, index) => (
            <div 
              key={index} 
              className={`p-3 rounded border ${currentAnswer === option ? 'bg-primary text-white border-primary' : 'bg-light border-secondary text-primary'}`}
              style={{ cursor: 'pointer' }}
              onClick={() => handleOptionChange(option)}
            >
              <div className="form-check m-0">
                <input
                  className="form-check-input"
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  id={`option-${index}`}
                  checked={currentAnswer === option}
                  onChange={() => handleOptionChange(option)}
                  style={{ cursor: 'pointer' }}
                />
                <label className="form-check-label w-100" htmlFor={`option-${index}`} style={{ cursor: 'pointer' }}>
                  {option}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-center gap-2 mb-5">
        <button className="btn btn-primary btn-sm px-4" onClick={handleFirst} disabled={currentIndex === 0}>First</button>
        <button className="btn btn-primary btn-sm px-4" onClick={handlePrev} disabled={currentIndex === 0}>Prev</button>
        <button className="btn btn-primary btn-sm px-4" onClick={handleNext} disabled={currentIndex === questions.length - 1}>Next</button>
        <button className="btn btn-primary btn-sm px-4" onClick={handleLast} disabled={currentIndex === questions.length - 1}>Last</button>
      </div>

      <div className="d-flex gap-2">
        <Link to="/quizzes" className="btn btn-info text-white">Quiz</Link>
        <Link to="/quiz/review" className="btn btn-info text-white">Quiz Review</Link>
        <Link to="/quiz/result" className="btn btn-info text-white">Submit</Link>
      </div>
    </div>
  );
};

export default Quiz;
