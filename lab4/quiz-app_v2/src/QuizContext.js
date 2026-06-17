import React, { createContext, useState, useEffect, useContext } from 'react';
import { quizData } from './quizData';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  // Cập nhật câu hỏi hiện tại mỗi khi Index thay đổi
  useEffect(() => {
    if (currentQuestionIndex < quizData.length) {
      setCurrentQuestion(quizData[currentQuestionIndex]);
    } else {
      setIsCompleted(true);
    }
  }, [currentQuestionIndex]);

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setSelectedAnswer('');
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  // Hàm mới: Đặt lại toàn bộ trạng thái để làm lại bài test
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <QuizContext.Provider value={{
      currentQuestion,
      currentQuestionIndex,
      selectedAnswer,
      setSelectedAnswer,
      score,
      isCompleted,
      handleNextQuestion,
      restartQuiz // Đừng quên truyền hàm này vào Provider
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);