import React from "react";

interface QuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, onAnswer }) => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">{question}</h2>
      <div className="flex flex-col space-y-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            className="block w-full bg-blue-500 text-white rounded hover:bg-blue-700 m-1 p-2 text-xs"
          >
            {option}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Question;
