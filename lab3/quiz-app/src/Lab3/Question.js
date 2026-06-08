import React from 'react';

const Question = ({ currentQuestionIndex, questionData, handleAnswerOptionClick }) => {
  return (
    <div>
      <h2>Question {currentQuestionIndex}</h2>
      <h3>{questionData.question}</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        {questionData.options.map((option, index) => (
          <button 
            key={index} 
            onClick={() => handleAnswerOptionClick(option)}
            style={{ margin: '5px 0', padding: '10px', cursor: 'pointer', textAlign: 'left' }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;