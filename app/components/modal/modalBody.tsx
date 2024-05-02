"use client";
import { Modal } from "flowbite-react";

export type ModalSectionProps = {
  children: React.ReactNode;
};

const ModalBody: React.FC<ModalSectionProps> = ({ children }) => {
  return (
    <Modal.Body className="flex flex-col h-full scroll py-8 text-black rounded-md">
      <div className="space-y-6 flex flex-col h-full md:h-[550px] mt-4 text-black">
        {children}
      </div>
    </Modal.Body>
  );
};
export default ModalBody;
