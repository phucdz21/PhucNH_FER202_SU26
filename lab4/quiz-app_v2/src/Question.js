import React from 'react';
import { useQuiz } from './QuizContext';

const Question = () => {
  // Dùng useContext để truy cập đáp án đã chọn và các dữ liệu khác từ state chung
  const { 
    currentQuestion, 
    currentQuestionIndex, 
    selectedAnswer, 
    setSelectedAnswer, 
    handleNextQuestion 
  } = useQuiz();

  if (!currentQuestion) return null;

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#d93043' }}>Question {currentQuestionIndex + 1}</h1>
      <h3>{currentQuestion.question}</h3>
      
      <div style={{ border: '1px solid #e0e0e0', borderRadius: '5px', padding: '10px 20px', marginBottom: '20px' }}>
        {currentQuestion.answers.map((answer, index) => (
          <div key={index} style={{ padding: '10px 0', borderBottom: index !== currentQuestion.answers.length - 1 ? '1px solid #e0e0e0' : 'none' }}>
            <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <input
                type="radio"
                name="quiz-option"
                value={answer}
                checked={selectedAnswer === answer}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                style={{ marginRight: '10px' }}
              />
              {answer}
            </label>
          </div>
        ))}
      </div>

      <button 
        onClick={handleNextQuestion}
        disabled={!selectedAnswer}
        style={{ 
          backgroundColor: '#d93043', color: 'white', padding: '10px 20px', 
          border: 'none', borderRadius: '5px', fontSize: '16px', cursor: selectedAnswer ? 'pointer' : 'not-allowed', opacity: selectedAnswer ? 1 : 0.6
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Question;