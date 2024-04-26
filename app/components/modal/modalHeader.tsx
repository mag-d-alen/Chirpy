"use client";

import React from "react";
import { Modal } from "flowbite-react";
import { ModalSectionProps } from "./modalBody";
const ModalHeader: React.FC<ModalSectionProps> = ({ children }) => {
  return (
    <Modal.Header className="text-black font-semibold">{children}</Modal.Header>
  );
};
export default ModalHeader;
