import React, { useState } from 'react';
import { QuizProvider, useQuiz } from './QuizContext';
import Question from './Question';
import Result from './Result';
import AddQuestion from './AddQuestion';

const QuizApp = () => {
  const { isCompleted } = useQuiz();
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      
      {/* Nút chuyển đổi giao diện */}
      {!isAdding && (
         <div style={{ textAlign: 'right', marginBottom: '20px' }}>
           <button onClick={() => setIsAdding(true)} style={{ padding: '8px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
             + Thêm câu hỏi
           </button>
         </div>
      )}

      {/* Logic hiển thị các Component */}
      {isAdding ? (
        <AddQuestion onBack={() => setIsAdding(false)} />
      ) : isCompleted ? (
        <Result />
      ) : (
        <Question />
      )}

    </div>
  );
};

const App = () => {
  return (
    <QuizProvider>
      <QuizApp />
    </QuizProvider>
  );
};

export default App;