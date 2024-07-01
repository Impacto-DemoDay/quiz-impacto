import React, { useState } from 'react';
import questions from "../../Data/questions.json";
import Question from "../Question/Question";
import "../../index.css";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (answer: string) => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const isAnswerCorrect = answer === correctAnswer;
    setIsCorrect(isAnswerCorrect);
    setUserAnswers([...userAnswers, answer]);

    if (isAnswerCorrect) {
      setScore(score + 1);
    }
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setShowFeedback(false);
      setIsCorrect(null);
    } else {
      setShowFeedback(false);
      setIsCorrect(null);
    }
  };

  return (
    <main className="max-w-xl mx-auto mt-10 text-center">
      {!showFeedback ? (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onAnswer={handleAnswer}
        />
      ) : (
        <section className="p-4">
          <h2 className={`text-2xl font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
            {isCorrect ? 'Correct!' : 'Incorrect!'}
          </h2>
          {!isCorrect && (
            <p className="text-xl">
              The correct answer is: <span className="font-bold">{questions[currentQuestionIndex].answer}</span>
            </p>
          )}
          <button
            onClick={handleNextQuestion}
            className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-700"
          >
            Next Question
          </button>
        </section>
      )}
    </main>
  );
};

export default Quiz;
