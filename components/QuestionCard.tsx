import Image from "next/image";
import Button from "@/components/ui/Button";

// Props interface
interface QuestionCardProps {
  curQuestion: PublicQuestion;
  index: number;
  submitHandler: (answer: string) => void;
  disableButtons: boolean;
}

// The component
function QuestionCard({
  curQuestion,
  index,
  submitHandler,
  disableButtons,
}: QuestionCardProps) {
  // Destructure the question
  const { id, question, image, answers } = curQuestion;

  // Returned JSX
  return (
    <div
      className={`w-full shrink-0 px-3 transition-opacity duration-700 ${id - 1 === index ? "opacity-100" : "opacity-0"}`}
    >
      <div className="bg-white border border-chocolate/50 rounded-xl max-sm:min-h-65 sm:h-68 flex-center text-center shadow-md shadow-chocolate/50 pt-2 sm:pt-3 pb-3 sm:pb-5 px-4 sm:px-8 mb-8">
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl font-merriweather px-4">
            {question}
          </h2>
          {image && (
            <div className="relative max-w-80 h-40 sm:max-w-120 sm:h-50 mt-2 mx-auto">
              <Image
                src={image}
                className="object-cover rounded-md"
                fill
                alt={question}
                sizes="(max-width: 1200px) 320px, 480px"
              />
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 content-stretch justify-stretch items-stretch">
        {answers.map((answer) => (
          <Button
            key={answer}
            small
            onClick={() => submitHandler(answer)}
            disabled={disableButtons}
          >
            {answer}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
