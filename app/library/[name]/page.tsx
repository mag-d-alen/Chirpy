import { getUserData } from "@/app/actions";
import React from "react";
import QuestionList from "./questionList";
import AddQuestion from "./addQuestion";
type CategoryProps = {
  params: {
    name: string;
  };
};

const Category = async ({ params: { name } }: CategoryProps) => {
  const { email } = await getUserData();
  return (
    <>
      <AddQuestion category={name}/>
      <QuestionList category={name} userEmail={email} />
    </>
  );
};

export default Category;
