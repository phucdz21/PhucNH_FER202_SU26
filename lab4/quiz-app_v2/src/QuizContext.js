import React, { createContext, useState, useEffect, useContext } from 'react';
import { quizData } from './quizData'; // Dữ liệu ban đầu

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  // Đưa quizData vào state để quản lý động
  const [questions, setQuestions] = useState(quizData); 
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  // Cập nhật câu hỏi hiện tại dựa trên mảng questions (thay vì quizData)
  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      setCurrentQuestion(questions[currentQuestionIndex]);
    } else {
      setIsCompleted(true);
    }
  }, [currentQuestionIndex, questions]);

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setSelectedAnswer('');
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setScore(0);
    setIsCompleted(false);
  };

  // Hàm mới: Thêm câu hỏi vào danh sách
  const addNewQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
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
      restartQuiz,
      addNewQuestion, // Truyền hàm thêm câu hỏi xuống cho Component con
      totalQuestions: questions.length
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);