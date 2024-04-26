"use client";
import React from "react";
import {
  useGetSnapshotQuestions,
  QuestionAndAnswer,
} from "../../hooks/useGetSnapshotQuestions";
import QuestionCard from "./questionCard";
type QuestionListProps = {
  category: string;
  userEmail: string;
};

const QuestionList: React.FC<QuestionListProps> = ({ category, userEmail }) => {
  const data = useGetSnapshotQuestions({
    category: category,
    userEmail: userEmail,
  });
  return (
    <div className="flex flex-col w-full md:w-[75%] align-center justify-center gap-4">
      {data ? (
        data.map((question: QuestionAndAnswer) => (
          <QuestionCard
            key={question.id}
            question={question.text}
            category={question.category}
            id={question.id}
            status={question.answer ? true : false}
            answer={question.answer || ""}
            icCode={question.isCode}
            links={question.links}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default QuestionList;
