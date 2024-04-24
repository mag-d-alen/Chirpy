"use client";
import React, { useState } from "react";
import Button from "../button/button";
import { Modal as FlowbiteModal } from "flowbite-react";

type ModalProps = {
  triggerText: string;
  triggerVariant: "primary" | "secondary";
  children: React.ReactNode;
  onSave?: () => void;
  onCancel?: () => void;
  withFooter?: boolean;
};

const Modal: React.FC<ModalProps> = ({
  triggerText,
  triggerVariant,
  onSave = () => {},
  onCancel = () => {},
  withFooter = true,
  children,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleSave = () => {
    onSave && onSave();
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
        className="w-full bg-slate-900 bg-opacity-30 h-full ">
        <div className="w-full p-8 h-full rounded-md ">
          {children}
          {withFooter ? (
            <FlowbiteModal.Footer className="flex gap-4 justify-end">
              <Button onClick={handleSave}>Save</Button>
              <Button variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>
            </FlowbiteModal.Footer>
          ) : null}
        </div>
      </FlowbiteModal>
    </>
  );
};
export default Modal;
