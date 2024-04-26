"use client";
import React, { useState } from "react";
import { addQuestion } from "@/app/actions";
import Modal from "@/app/components/modal/modal";
import EditorInput from "./editorInput";
import ModalHeader from "@/app/components/modal/modalHeader";
import ModalBody from "@/app/components/modal/modalBody";
import { Button } from "@/app/components/button/button";
type AddQuestionProps = {
  category: string;
};
const AddQuestion: React.FC<AddQuestionProps> = ({ category }) => {
  const [inputValue, setInputValue] = useState("");
  const [isCode, setIsCode] = useState(false);
  const [links, setLinks] = useState<string[]>([]);
  const [newLink, setNewLink] = useState("");
  const onSave = async () => {
    if (!inputValue) return;
    await addQuestion({
      text: inputValue,
      category: category,
      isCode: isCode,
      links: links,
    });
    setInputValue("");
  };
  const onCancel = () => {
    setInputValue("");
    setLinks([]);
    setNewLink("");
  };
  const addLink = () => {
    setLinks([...links, newLink]);
    setNewLink("");
  };

  return (
    <div className="w-full md:w-[75%] py-4 flex justify-end ">
      <Modal
        triggerText="Add Question"
        triggerVariant="secondary"
        onSave={onSave}
        onCancel={onCancel}>
        <ModalHeader> You are adding a new {category} Question</ModalHeader>
        <ModalBody>
          <EditorInput
            value={inputValue}
            onChange={(value) => {
              setInputValue(value);
            }}
            readOnly={false}
            isCode={true}
          />
          <label htmlFor="isCode">Is the answer a code or a text?</label>
          <div className="flex gap-4 items-center uppercase">
            <input
              type="radio"
              name="isCode"
              value="true"
              onChange={() => setIsCode(true)}
            />{" "}
            code
          </div>
          <div className="flex gap-4 items-center uppercase ">
            <input
              type="radio"
              name="isCode"
              value="false"
              onChange={() => setIsCode(false)}
            />
            text
          </div>
          <div className="flex flex-col gap-4  ">
            <b>Links</b>
            {links.length ? links.map((link) => <p>{link}</p>) : null}
            <div className="flex gap-4">
              <input
                value={newLink}
                onChange={(e) => setNewLink(e.target.value)}
                type="text"
                className="rounded-xl px-4 border-light flex-1"></input>
              <Button variant="primary" onClick={addLink}>
                Add link
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default AddQuestion;
