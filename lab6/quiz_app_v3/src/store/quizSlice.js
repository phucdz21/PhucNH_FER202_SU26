import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      question: "Inside which HTML element do we put the JavaScript?",
      options: ["javascript", "scripting", "script", "js"],
      correctAnswer: "script"
    },
    {
      id: 2,
      question: "What are variables used for in JavaScript Programs?",
      options: [
        "Storing numbers, dates, or other values",
        "Varying randomly",
        "Causing high-school algebra flashbacks",
        "None of these"
      ],
      correctAnswer: "Storing numbers, dates, or other values"
    },
    {
      id: 3,
      question: "Which of the following can't be done with client-side JavaScript?",
      options: [
        "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"
      ],
      correctAnswer: "Storing the form's contents to a database file on the server"
    },
    {
      id: 4,
      question: "Which of the following is an advantage of using JavaScript?",
      options: [
        "Less server interaction",
        "Immediate feedback to the visitors",
        "Increased interactivity",
        "All of the above"
      ],
      correctAnswer: "All of the above"
    },
    {
      id: 5,
      question: "How can you get the total number of arguments passed to a function?",
      options: [
        "Using args.length property",
        "Using arguments.length property",
        "Both of the above",
        "None of the above"
      ],
      correctAnswer: "Using arguments.length property"
    },
    {
      id: 6,
      question: "Which built-in method returns the calling string value converted to lower case?",
      options: [
        "toLowerCase()",
        "toLower()",
        "changeCase(case)",
        "None of the above"
      ],
      correctAnswer: "toLowerCase()"
    },
    {
      id: 7,
      question: "Which of the following function of Array object joins all elements of an array into a string?",
      options: [
        "concat()",
        "join()",
        "pop()",
        "map()"
      ],
      correctAnswer: "join()"
    },
    {
      id: 8,
      question: "How to write an IF statement in JavaScript?",
      options: [
        "if i = 5",
        "if i == 5 then",
        "if (i == 5)",
        "if i = 5 then"
      ],
      correctAnswer: "if (i == 5)"
    },
    {
      id: 9,
      question: "How does a FOR loop start?",
      options: [
        "for (i = 0; i <= 5)",
        "for (i = 0; i <= 5; i++)",
        "for i = 1 to 5",
        "for (i <= 5; i++)"
      ],
      correctAnswer: "for (i = 0; i <= 5; i++)"
    },
    {
      id: 10,
      question: "What is the correct way to write a JavaScript array?",
      options: [
        "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")",
        "var colors = [\"red\", \"green\", \"blue\"]",
        "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")",
        "var colors = \"red\", \"green\", \"blue\""
      ],
      correctAnswer: "var colors = [\"red\", \"green\", \"blue\"]"
    }
  ],
  userAnswers: {}
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      state.userAnswers[questionId] = answer;
    },
    resetQuiz: (state) => {
      state.userAnswers = {};
    }
  }
});

export const { setAnswer, resetQuiz } = quizSlice.actions;

export default quizSlice.reducer;
