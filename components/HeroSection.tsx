import Image from "next/image";

import HeroButtons from "@/components/HeroButtons";
import SectionTitle from "@/components/ui/SectionTitle";

import { APP_NAME } from "@/utils/constants";

function HeroSection() {
  // Returned JSX
  return (
    <section className="text-section flex flex-col gap-1 sm:mt-10 sm:mb-8">
      <div className="flex-center gap-5 mb-2 sm:mb-8">
        <div className="max-sm:hidden sm:w-30 sm:h-16.25 md:w-43.75 md:h-23.75 relative">
          <Image
            src="/logo.svg"
            fill
            className="object-contain"
            alt={`${APP_NAME} Logo`}
            priority
          />
        </div>
        <SectionTitle className="mb-0! text-[32px] sm:text-[40px]! md:text-[50px]!">
          QuikQuiz
        </SectionTitle>
      </div>
      <p>
        Welcome to a place where you can test your knowledge by taking fun,
        quick quizzes.
      </p>
      <p>
        Choose from multiple categories, each with two difficulty levels -
        perfect for both casual players and trivia nerds.
      </p>
      <p>
        Start by learning the rules, explore quiz categories, or jump straight
        into a random quiz!
      </p>
      <HeroButtons />
    </section>
  );
}

export default HeroSection;
