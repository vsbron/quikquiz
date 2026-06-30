import { NextResponse } from "next/server";

import { CATEGORIES } from "@/data/categories";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ category: string }> },
) {
  // Get the category name
  const { category } = await params;

  // Find the pack inside categories
  const questionsPack = CATEGORIES.find((pack) => pack.slug === category);

  // If not found, throw error
  if (!questionsPack) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  // Strip correctAnswer from every question before sending to the client
  const publicPack: PublicQuestionsPack = {
    ...questionsPack,
    difficulties: Object.fromEntries(
      Object.entries(questionsPack.difficulties).map(([level, questions]) => [
        level,
        questions.map(({ correctAnswer: _correctAnswer, ...rest }) => rest),
      ]),
    ) as Record<Difficulty, PublicQuestion[]>,
  };

  // Return the response
  return NextResponse.json(publicPack);
}
