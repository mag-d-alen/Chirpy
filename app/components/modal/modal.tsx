"use client";
import React, { useState } from "react";
import Button from "../button/button";
import { Modal as FlowbiteModal } from "flowbite-react";

type ModalProps = {
  triggerText: string;
  triggerVariant: "primary" | "secondary";
  children: React.ReactNode;
  onSave: () => void | Promise<void>;
  onCancel: () => void;
};

const Modal: React.FC<ModalProps> = ({
  triggerText,
  triggerVariant,
  onSave,
  onCancel,
  children,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleSave = () => {
    onSave();
    setModalOpen(false);
  };

  const handleCancel = () => {
    onCancel();
    setModalOpen(false);
  };
  return (
    <>
      <Button variant={triggerVariant} onClick={() => setModalOpen(true)}>
        {triggerText}
      </Button>
      <FlowbiteModal
        show={modalOpen}
        onClose={() => setModalOpen(false)}
        className="w-full bg-slate-900 bg-opacity-70 h-full rounded-md ">
        <div className="w-full p-8 first-line:h-[90%] rounded-md bg-light">
          {children}
          <FlowbiteModal.Footer className="flex gap-4 justify-end ">
            <Button onClick={handleSave}>Save</Button>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </FlowbiteModal.Footer>
        </div>
      </FlowbiteModal>
    </>
  );
};
export default Modal;
