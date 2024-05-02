"use client";
import { addAnswer } from "@/app/actions";
import Modal from "@/app/components/modal/modal";
import ModalBody from "@/app/components/modal/modalBody";
import React from "react";
import EditorInput from "./editorInput";
import ModalHeader from "@/app/components/modal/modalHeader";
import LinkButton from "@/app/components/linkButton/linkButton";

type AddAnswerProps = {
  status: boolean;
  category: string;
  answer: string;
  question: string;
  questionId: string;
  isCode?: boolean;
  links?: string[];
};
export type AnswerData = {
  id: string;
  status: boolean;
  timestamp: Date;
  userEmail: string;
  question: string;
  answer: string;
  isCode?: boolean;
};
const AddAnswer: React.FC<AddAnswerProps> = ({
  status,
  question,
  answer,
  questionId,
  isCode,
  category,
  links,
}) => {
  const [newAnswer, setNewAnswer] = React.useState<string>(answer);
  console.log(links);
  const handleDownloadImage = async () => {
    const res = await addAnswer({
      answer: newAnswer,
      questionId: questionId,
    });
  };
  const clearInput = () => {
    setNewAnswer("");
  };
  const triggerVariant = "primary";
  const triggerText = !status ? "Answer" : "Update Your Answer";
  return (
    <Modal
      triggerText={triggerText}
      triggerVariant={triggerVariant}
      onCancel={clearInput}
      onSave={handleDownloadImage}>
      <ModalHeader>{category}</ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-4 w-full">
          <EditorInput
            value={question}
            readOnly={true}
            isCode={isCode}
            darkTheme={false}
          />

          {answer ? "Update your answer" : " New answer:"}
          <EditorInput
            value={newAnswer}
            onChange={setNewAnswer}
            isCode={isCode}
          />
          {links?.length
            ? links.map((link) => <LinkButton link={link} />)
            : null}
        </div>
      </ModalBody>
    </Modal>
  );
};

export default AddAnswer;
