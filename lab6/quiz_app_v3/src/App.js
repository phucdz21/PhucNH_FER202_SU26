import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Quiz from './pages/Quiz';
import QuizReviewGrid from './pages/QuizReviewGrid';
import QuizResult from './pages/QuizResult';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Navigate to="/quizzes" replace />} />
            <Route path="/quizzes" element={<Quiz />} />
            <Route path="/quiz/review" element={<QuizReviewGrid />} />
            <Route path="/quiz/result" element={<QuizResult />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
