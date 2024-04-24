"use client";
import React, { useState } from "react";
import { addQuestion } from "@/app/actions";
import Modal from "@/app/components/modal/modal";
import Button from "@/app/components/button/button";
import EditorInput from "./editorInput";
import { ModalHeader } from "flowbite-react";
type AddQuestionProps = {
  category: string;
};
const AddQuestion: React.FC<AddQuestionProps> = ({ category }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="w-full py-4 flex justify-end ">
      <Modal
        triggerText="Add Question"
        triggerVariant="secondary"
        withFooter={false}>
        <ModalHeader> You are adding a new {category} Question</ModalHeader>
        <form
          action={async (formData) => {
            const text = inputValue;
            const isCode = formData.get("isCode") === "true";
            if (!text) return;
            await addQuestion({
              text: text,
              category: category,
              isCode: isCode,
            });
            setInputValue("");
          }}>
          <EditorInput
            value={inputValue}
            onChange={(value) => {
              setInputValue(value);
            }}
            readOnly={false}
            isCode={true}
          />
          <label htmlFor="isCode">Is the answer a code or a text?</label>
          <div>
            <input type="radio" name="isCode" value="true" /> code
          </div>
          <div>
            <input type="radio" name="isCode" value="false" /> text
          </div>
          <div className="flex justify-end w-full">

            <Button>Submit</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default AddQuestion;
