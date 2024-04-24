
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
};
const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  category,
  id,
  status,
  answer,
  icCode,
}) => {
  return (
    <div
      className={`flex flex-col gap-4 rounded-md p-4 border w-full  ${
        !status ? "border-red-400" : "border-green-600"
      }`}>
      <div className=" flex justify-center font-bold text-lg">{category}</div>
      <div className="w-full min-h-60 mb-4 py-4 h-full">
        <b>Question: </b>
        <EditorInput value={question} readOnly={true} />
      </div>
      <div className="flex justify-end w-full text-sm">
        <AddAnswer
          status={status}
          question={question}
          category={category}
          questionId={id}
          answer={answer || ""}
          isCode={icCode}
        />
      </div>
    </div>
  );
};
export default QuestionCard;
