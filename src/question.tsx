export type Question = {
    id: number;
    question: string;
    options: string[];
    answer: string;
  };
const Quiz = [
    {
      id: 1,
      question: "What is React?",
      options: [
        "A programming language",
        "A database",
        "A JavaScript library for building user interfaces",
        "An operating system"
      ],
      answer: "A JavaScript library for building user interfaces"
    },
    {
      id: 2,
      question: "Which component lifecycle method is called once after the component renders?",
      options: [
        "componentDidMount",
        "componentWillMount",
        "componentUpdate",
        "componentDidUpdate"
      ],
      "answer": "componentDidMount"
    },
    {
      id: 3,
      question: "What is JSX in React?",
      options: [
        "JavaScript XML",
        "JavaScript Extension",
        "JavaScript Syntax XML",
        "Java XML Syntax"
      ],
      answer: "JavaScript XML"
    },
    {
      id: 4,
      question: "What is the purpose of setState in React?",
      options: [
        "To fetch data from an API",
        "To update the component's state",
        "To define a new state for the component",
        "To change the component's CSS style"
      ],
      answer: "To update the component's state"
    },
    {
      id: 5,
      question: "In React, what does the props object represent?",
      options: [
        "The component's internal state",
        "The component's HTML structure",
        "Function parameters passed to the component",
        "The component's parent"
      ],
      answer: "Function parameters passed to the component"
    }
  ]
  
  
  
export default Quiz;