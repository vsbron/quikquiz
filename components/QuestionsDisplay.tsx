import { useMemo, useState } from "react";

import QuizEnd from "@/components/QuizEnd";
import QuestionCard from "@/components/QuestionCard";

import { getMultiplier, shuffleAnswers } from "@/utils/helpers";

// Props interface
interface QuestionsDisplayProps {
  questions: PublicQuestion[];
  difficulty: Difficulty;
  category: string;
}

// The component
function QuestionsDisplay({
  questions,
  category,
  difficulty,
}: QuestionsDisplayProps) {
  // Set state value for current question, selected answers and locked state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isLocked, setIsLocked] = useState(false);

  // Shuffle the answers
  const shuffledQuestions = useMemo(
    () => questions.map((q) => ({ ...q, answers: shuffleAnswers(q.answers) })),
    [questions],
  );

  // Selecting an answer handler
  const submitAnswer = (answer: string) => {
    setIsLocked(true);
    setSelectedAnswers((curAnswers) => [...curAnswers, answer]);
    setCurrentIndex((i) => i + 1);
    setTimeout(() => setIsLocked(false), 700);
  };

  // Conditional return if the quiz is completed
  if (currentIndex >= questions.length)
    return (
      <QuizEnd
        answers={selectedAnswers}
        category={category}
        difficulty={difficulty}
      />
    );

  // Define multiplier
  const multiplier = getMultiplier(difficulty);

  // Returned JSX
  return (
    <div className="relative w-full mx-auto">
      <div className="flex justify-center max-sm:flex-col max-sm:items-center sm:gap-3 mb-1 text-[15px] sm:text-base">
        <span>
          Question: {currentIndex + 1}/{shuffledQuestions.length}
        </span>
        <span className="max-sm:hidden">|</span>
        <span className="capitalize">
          Difficulty: {difficulty} (
          <span className="normal-case">Score multiplier: x{multiplier}</span>)
        </span>
      </div>
      <div className="overflow-hidden -mx-3">
        <div
          className="flex transition-transform duration-700 ease-in-out max-w-2xl mx-auto"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {shuffledQuestions.map((q) => (
            <QuestionCard
              key={q.id}
              curQuestion={q}
              index={currentIndex}
              submitHandler={submitAnswer}
              disableButtons={isLocked}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionsDisplay;
