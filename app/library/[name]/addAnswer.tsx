"use client";
import { addAnswer } from "@/app/actions";
import Modal from "@/app/components/modal/modal";
import ModalBody from "@/app/components/modal/modalBody";
import { ModalHeader } from "flowbite-react/components/Modal";
import React from "react";
import EditorInput from "./editorInput";

type AddAnswerProps = {
  status: boolean;
  category: string;
  answer: string;
  question: string;
  questionId: string;
  isCode?: boolean;
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
}) => {
  const [newAnswer, setNewAnswer] = React.useState<string>(answer);

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
          {answer && (
            <>
              Your answer:
              <EditorInput
                value={answer}
                onChange={() => {}}
                readOnly={true}
                isCode={isCode}
              />
            </>
          )}
          Enter new answer:
          <EditorInput
            value={newAnswer}
            onChange={setNewAnswer}
            isCode={isCode}
          />
        </div>
      </ModalBody>
    </Modal>
  );
};

export default AddAnswer;
