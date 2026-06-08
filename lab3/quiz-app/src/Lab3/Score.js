import React from 'react';

const Score = ({ score, restartQuiz }) => {
  return (
    <div>
      <h2>Quiz Ended</h2>
      <h3>Your Score: {score}</h3>
      <button 
        onClick={restartQuiz}
        style={{ padding: '10px 20px', marginTop: '10px', cursor: 'pointer' }}
      >
        Play Again
      </button>
    </div>
  );
};

export default Score;