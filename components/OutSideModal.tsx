"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import { BiCross } from "react-icons/bi";

interface OutSideModalProps {
  children: React.ReactNode;
}

const OutSideModal: FC<OutSideModalProps> = ({ children }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="fixed inset-0 bg-zinc-900/50 z-50"
    >
      <span className="absolute top-10 right-10">
        <BiCross />
      </span>
      {children}
    </div>
  );
};

export default OutSideModal;
