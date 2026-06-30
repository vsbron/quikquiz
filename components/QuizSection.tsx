"use client";
import { useState } from "react";

import QuestionsDisplay from "@/components/QuestionsDisplay";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

function QuizSection({ questions }: { questions: PublicQuestionsPack }) {
  // Create state value for Difficulty
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  // Click handler for difficulty select button
  const buttonHandler = (selection: Difficulty) => {
    setDifficulty(selection);
  };

  // Returned JSX
  return (
    <section>
      <SectionTitle className="mb-3!">{`${questions.title} Quiz`}</SectionTitle>
      {difficulty ? (
        <QuestionsDisplay
          questions={questions.difficulties[difficulty]}
          difficulty={difficulty}
          category={questions.slug}
        />
      ) : (
        <div className="text-center text-section">
          <p className="text-lg sm:text-xl">{questions.description}</p>
          <div className="text-center mt-8 sm:mt-12 text-xl sm:text-2xl">
            Please select the Difficulty
          </div>
          <div className="flex max-sm:flex-col max-sm:items-center gap-5 sm:gap-6 mt-4 sm:mt-6 justify-center">
            <Button onClick={() => buttonHandler("casual")}>Casual</Button>
            <Button onClick={() => buttonHandler("moderate")}>Moderate</Button>
            <Button onClick={() => buttonHandler("pro")}>Pro</Button>
          </div>
        </div>
      )}
    </section>
  );
}

export default QuizSection;
