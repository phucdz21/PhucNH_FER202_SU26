import React, { useState } from 'react';
import { quizData } from '../data/quizData';
import QuizQuestion from '../components/QuizQuestion';

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleNext = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);

    if (currentIndex + 1 < quizData.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="quiz-container quiz-result">
        <h2 className="text-danger">Quiz Completed!</h2>
        <p className="mt-3" style={{ fontSize: '1.2rem' }}>Your score: <strong>{score}</strong> / {quizData.length}</p>
      </div>
    );
  }

  return (
    <QuizQuestion
      data={quizData[currentIndex]}
      questionNumber={currentIndex + 1}
      onNext={handleNext}
    />
  );
}

export default Quiz;