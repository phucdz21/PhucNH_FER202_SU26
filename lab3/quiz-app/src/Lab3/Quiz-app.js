import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';

const QuizApp = () => {
  // Khởi tạo state như yêu cầu của bài Lab
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

  // Xử lý sự kiện khi người dùng chọn một đáp án
  const handleAnswerOptionClick = (selectedAnswer) => {
    // Kiểm tra nếu đáp án đúng thì tăng điểm
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    // Chuyển sang câu hỏi tiếp theo
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizEnd(true); // Nếu hết câu hỏi thì kết thúc bài Quiz
    }
  };

  // Hàm để chơi lại từ đầu
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizEnd(false);
  };

  return (
    <div style={{ margin: '20px', fontFamily: 'Arial' }}>
      {quizEnd ? (
        // Nếu kết thúc, gọi Component Score
        <Score score={score} restartQuiz={restartQuiz} />
      ) : (
        // Nếu chưa kết thúc, gọi Component Question
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