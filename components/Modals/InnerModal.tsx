"use client";

import { FC } from "react";

interface InnerModalProps {
  children: React.ReactNode;
  className?: string;
}
const InnerModal: FC<InnerModalProps> = ({ children, className }) => {
  return (
    <div className={className} onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  );
};

export default InnerModal;
