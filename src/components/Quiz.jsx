import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Quiz = () => {
  const { state } = useLocation(); // Contains { type, level }
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  useEffect(() => {
    if (!state || !state.type || !state.level) {
      console.error("Invalid state passed to Quiz component.");
      navigate("/");
      return;
    }

    const generateQuestions = () => {
      const operation = state.type; // '+', '-', '*', or '/'
      const level = state.level; // 'Easy', 'Medium', 'Hard'
      let maxValue;

      // Set difficulty levels
      switch (level) {
        case "Easy":
          maxValue = 10;
          break;
        case "Medium":
          maxValue = 50;
          break;
        case "Hard":
          maxValue = 100;
          break;
        default:
          maxValue = 10;
      }

      // Generate mock questions
      const questionsArray = [];
      for (let i = 0; i < 10; i++) {
        const num1 = Math.floor(Math.random() * maxValue) + 1;
        const num2 = Math.floor(Math.random() * maxValue) + 1;
        let question;
        let answer;

        switch (operation) {
          case "+":
            question = `${num1} + ${num2}`;
            answer = num1 + num2;
            break;
          case "-":
            question = `${num1} - ${num2}`;
            answer = num1 - num2;
            break;
          case "*":
            question = `${num1} * ${num2}`;
            answer = num1 * num2;
            break;
          case "/":
            if (num2 === 0) {
              continue;
            }
            question = `${num1} / ${num2}`;
            answer = Math.floor(num1 / num2);
            break;
          default:
            question = `${num1} + ${num2}`;
            answer = num1 + num2;
        }

        const options = new Set([answer]);
        while (options.size < 4) {
          const wrongAnswer = Math.floor(Math.random() * (maxValue * 2));
          options.add(wrongAnswer);
        }

        const optionsArray = Array.from(options).sort(
          () => Math.random() - 0.5
        );
        questionsArray.push({ question, answer, options: optionsArray });
      }
      return questionsArray;
    };

    setQuestions(generateQuestions());
  }, [state, navigate]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      nextQuestion();
    }
  }, [timeLeft]);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(20);
      setSelectedAnswer("");
    } else {
      navigate("/result", { state: { score } });
    }
  };

  const checkAnswer = () => {
    if (
      questions[currentQuestion] && // Ensure the question exists
      parseInt(selectedAnswer) === questions[currentQuestion].answer // Check the selected answer
    ) {
      setScore((prev) => prev + 10);
    }
    nextQuestion();
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      <div className="border-4 border-slate-950 p-12 bg-[#fde68a] w-full">
        <h1 className="text-xl font-bold mb-4">Score: {score}</h1>
        {questions.length > 0 && (
          <>
            <h2 className="text-lg mb-4">
              {questions[currentQuestion]?.question}
            </h2>
            <div className="mb-4">
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option.toString()}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                    className="mr-2"
                  />
                  <label htmlFor={`option-${index}`} className="cursor-pointer">
                    {option}
                  </label>
                </div>
              ))}
            </div>
            <button
              onClick={checkAnswer}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Submit Answer
            </button>
            <p className="mt-4">Time Left: {timeLeft}s</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
