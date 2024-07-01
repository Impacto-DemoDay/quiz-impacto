import React, { useEffect, useState } from 'react';
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

  const [seconds, setSeconds] = useState(0)
  const [isActive] = useState(false);
  
  useEffect(() => {
    let interval: any = null;
    if (!isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds])

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
    setCurrentQuestionIndex(nextQuestionIndex);
    if (nextQuestionIndex < 10) {
      if (nextQuestionIndex < questions.length) {
        setShowFeedback(false);
        setIsCorrect(null);
      } else {
        setShowFeedback(false);
        setIsCorrect(null);
      }
    }
    else{
      alert('Fim de jogo')
    }
  };

  const handleShowResults = () => {}

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  return (
    <main className="max-w-xl mx-auto mt-10 text-center">
     <div className="absolute bottom-5 left-1/2 -translate-x-1/2 sm:left-7 sm:-translate-x-0 sm:top-5 flex flex-col space-y-4">
      <span className="text-xl bg-blue-600 py-2 px-4 rounded-full text-zinc-200">Tempo: {formatTime(seconds)}</span>
      <span className="text-xl bg-blue-600 py-2 px-4 rounded-full text-zinc-200">Pontuação: {score} / 10</span>
     </div>

      {!showFeedback ? (
      <>
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onAnswer={handleAnswer}
        />
      </>
      ) : (
        <section className="p-4">
          <h2 className={`text-2xl font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
            {isCorrect ? 'Resposta correta! 😎' : 'Ops! Resposta Errada 😣'}
          </h2>
          {!isCorrect && (
            <p className="text-xl">
              A resposta correta é: <span className="font-bold">{questions[currentQuestionIndex].answer}</span> <br />
            </p>
          )}
          {
            currentQuestionIndex < 10 ? (
              <button
                onClick={handleNextQuestion}
                className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-700"
              >
                Próxima questão
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-700"
                onClick={handleShowResults}
              >
                Vamos aos resultados
              </button>
            )
          }
        </section>
      )}
    </main>
  );
};

export default Quiz;
