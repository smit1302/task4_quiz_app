import React, { useState, useEffect } from "react";
import Quiz, { Question } from "./question";
import "./App.css";
function App() {
  const [currentQuestionindex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Array<string>>([]);
  //const [selectedOption, setSelectedOption] = useState<string>("");
  // const [timer, setTimer] = useState<number>(10);
  const [showSubmit, setShowSubmit] = useState<boolean>(false);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  const calculateScore = () => {
    // Assuming each correct answer gives 1 point
    const correctAnswers = Quiz.filter(
      (question, index) => question.answer === selectedOptions[index]
    );
    setScore(correctAnswers.length);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    // setSelectedOption(" ");
    // resetTimer();
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = [...prevSelectedOptions];
      //newSelectedOptions[prevIndex] = selectedOptions;
      return newSelectedOptions;
    });
  };
  const prevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleOptionChange = (option: string) => {
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = [...prevSelectedOptions];
      newSelectedOptions[currentQuestionindex] = option;
      return newSelectedOptions;
    });
  };
  /*
  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };*/
  /*
  const resetTimer = () => {
    setTimer(10);
  };
*/
  const submitQuiz = () => {
    setShowSubmit(false);
    setShowScore(true);
    calculateScore();
    setQuizSubmitted(true);
  };

  useEffect(() => {});
  /*useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [currentQuestionindex]);

  useEffect(() => {
    if (timer === 0) {
      nextQuestion();
    }
  }, [timer]);*/

  useEffect(() => {
    if (currentQuestionindex === Quiz.length - 1) {
      setShowSubmit(true);
    }
  }, [currentQuestionindex]);

  return (
    <div className="header">
      <h1 style={{ textAlign: "center" }}>Quiz</h1>
      <p>
        <b>Question {Quiz[currentQuestionindex].id}:</b>{" "}
        {Quiz[currentQuestionindex].question}
      </p>
      {Quiz[currentQuestionindex].options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`option${index}`}
            name="options"
            value={option}
            checked={selectedOptions[currentQuestionindex] === option}
            onChange={() => handleOptionChange(option)}
          />
          <label htmlFor={`option${index}`}>{option}</label>
        </div>
      ))}

      <button
        style={{ fontSize: "16px", padding: "10px" }}
        onClick={prevQuestion}
        disabled={currentQuestionindex === 0 || quizSubmitted}
      >
        Previous
      </button>
      <span style={{ marginLeft: "10px" }}></span>
      <button
        style={{ fontSize: "16px", padding: "10px" }}
        onClick={nextQuestion}
        disabled={quizSubmitted || currentQuestionindex === Quiz.length - 1}
      >
        Next
      </button>
      <span style={{ marginLeft: "10px" }}></span>
      {currentQuestionindex === Quiz.length - 1 && (
        <button
          style={{ fontSize: "16px", padding: "10px" }}
          onClick={submitQuiz}
        >
          Submit
        </button>
      )}

      {showScore && <p>Score: {score}</p>}
      {/*<p>Time left: {timer} seconds</p>*/}
    </div>
  );
}
export default App;
