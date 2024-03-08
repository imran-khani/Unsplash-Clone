"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import { IoClose } from "react-icons/io5";

interface OutSideModalProps {
  children: React.ReactNode;
}

const OutSideModal: FC<OutSideModalProps> = ({ children }) => {
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    router.back();
  };

  return (
    <div
      onClick={handleClick}
      className="fixed inset-0 z-50 overflow-y-auto bg-zinc-900/50"
    >
      <span className="absolute right-10 top-10">
        <IoClose className="cursor-pointer" size={50} />
      </span>
      {children}
    </div>
  );
};

export default OutSideModal;
