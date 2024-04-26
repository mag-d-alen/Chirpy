import { getUserData } from "@/app/actions";
import React from "react";
import QuestionList from "./questionList";
import AddQuestion from "./addQuestion";
import Header from "@/app/components/layout/header";
type CategoryProps = {
  params: {
    name: string;
  };
};

const Category = async ({ params: { name } }: CategoryProps) => {
  const { email } = await getUserData();
  return (
    <>
      <Header>{name} questions</Header>
      <div className="flex flex-col w-full items-center gap-4">
        <AddQuestion category={name} />
        <QuestionList category={name} userEmail={email} />
      </div>
    </>
  );
};

export default Category;
