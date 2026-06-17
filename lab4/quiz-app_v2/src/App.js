import React from 'react';
import { QuizProvider, useQuiz } from './QuizContext';
import Question from './Question';
import Result from './Result';

const QuizApp = () => {
  const { isCompleted } = useQuiz();
  return (
    <div style={{ padding: '40px' }}>
      {isCompleted ? <Result /> : <Question />}
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