import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';

const QuizApp = () => {
  const [questions] = useState([
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    }
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  
  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizEnd(true); 
    }
  };

  
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizEnd(false);
  };

  return (
    <div style={{ margin: '20px', fontFamily: 'Arial' }}>
      {quizEnd ? (    
        <Score score={score} restartQuiz={restartQuiz} />
      ) : (      
        <Question 
          currentQuestionIndex={currentQuestion + 1}
          questionData={questions[currentQuestion]} 
          handleAnswerOptionClick={handleAnswerOptionClick} 
        />
      )}
    </div>
  );
};

export default QuizApp;