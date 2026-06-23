import React, { useState } from 'react';
import { useQuiz } from './QuizContext';

const AddQuestion = ({ onBack }) => {
  const { addNewQuestion } = useQuiz();
  
  // State cục bộ cho form nhập liệu
  const [questionText, setQuestionText] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Kiểm tra dữ liệu đầu vào
    if (!questionText || !option1 || !option2 || !option3 || !correctAnswer) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    if (![option1, option2, option3].includes(correctAnswer)) {
      alert("Đáp án đúng phải trùng khớp với một trong các lựa chọn!");
      return;
    }

    // Tạo đối tượng câu hỏi mới
    const newQuestion = {
      question: questionText,
      answers: [option1, option2, option3],
      correctAnswer: correctAnswer
    };

    // Gọi hàm từ Context để lưu
    addNewQuestion(newQuestion);
    
    // Reset form và quay lại màn hình Quiz
    alert("Thêm câu hỏi thành công!");
    onBack();
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h2 style={{ color: '#d93043' }}>Thêm Câu Hỏi Mới</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          placeholder="Nội dung câu hỏi" 
          value={questionText} onChange={(e) => setQuestionText(e.target.value)} 
          style={{ padding: '8px' }}
        />
        <input 
          placeholder="Lựa chọn 1" 
          value={option1} onChange={(e) => setOption1(e.target.value)} 
          style={{ padding: '8px' }}
        />
        <input 
          placeholder="Lựa chọn 2" 
          value={option2} onChange={(e) => setOption2(e.target.value)} 
          style={{ padding: '8px' }}
        />
        <input 
          placeholder="Lựa chọn 3" 
          value={option3} onChange={(e) => setOption3(e.target.value)} 
          style={{ padding: '8px' }}
        />
        <input 
          placeholder="Nhập chính xác text của đáp án đúng" 
          value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} 
          style={{ padding: '8px', border: '1px solid #d93043' }}
        />
        
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button type="submit" style={{ backgroundColor: '#28a745', color: 'white', padding: '10px', border: 'none', cursor: 'pointer', flex: 1 }}>
            Lưu Câu Hỏi
          </button>
          <button type="button" onClick={onBack} style={{ backgroundColor: '#6c757d', color: 'white', padding: '10px', border: 'none', cursor: 'pointer', flex: 1 }}>
            Hủy / Quay lại
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddQuestion;