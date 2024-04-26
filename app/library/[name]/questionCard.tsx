import React from "react";
import AddAnswer from "./addAnswer";
import EditorInput from "./editorInput";

type QuestionCardProps = {
  question: string;
  category: string;
  id: string;
  status: boolean;
  answer?: string;
  icCode?: boolean;
  links?: string[];
};
const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  category,
  id,
  status,
  answer,
  icCode,
  links,
}) => {
  return (
    <div
      className={`flex flex-col gap-4 rounded-md p-4 border w-full  ${
        !status ? "border-red-400" : "border-green-600"
      }`}>
      <b className="text-lg text-light">Question: </b>
      <EditorInput value={question} readOnly={true} />
      <div className="flex justify-end w-full text-sm">
        <AddAnswer
          status={status}
          question={question}
          category={category}
          questionId={id}
          answer={answer || ""}
          isCode={icCode}
          links={links}
        />
      </div>
    </div>
  );
};
export default QuestionCard;
