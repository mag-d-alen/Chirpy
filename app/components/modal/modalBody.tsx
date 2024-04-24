'use client';
import { Modal } from "flowbite-react";


export type ModalSectionProps = {
  children: React.ReactNode;
};

const ModalBody: React.FC<ModalSectionProps> = ({ children }) => {
  return (
    <Modal.Body className="h-full scroll py-8">
      <div className="space-y-6 flex h-full md:h-[550px]">{children}</div>
    </Modal.Body>
  );
};
export default ModalBody;
