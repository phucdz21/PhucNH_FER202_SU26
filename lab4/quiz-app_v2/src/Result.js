import React from 'react';
import { useQuiz } from './QuizContext';

const Result = () => {
  // Lấy thêm hàm restartQuiz từ state chung
  const { score, restartQuiz } = useQuiz();

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#d93043', fontSize: '2.5rem' }}>Quiz Completed!</h1>
      <h2 style={{ fontWeight: 'normal' }}>Your score: {score}</h2>
      
      {/* Thêm nút Restart để làm lại */}
      <button 
        onClick={restartQuiz}
        style={{ 
          backgroundColor: '#d93043', 
          color: 'white', 
          padding: '10px 20px', 
          border: 'none', 
          borderRadius: '5px', 
          fontSize: '16px', 
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;