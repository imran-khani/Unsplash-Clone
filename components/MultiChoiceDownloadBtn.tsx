"use client";
import { useModal } from "@/hooks/useModal";
import { FC } from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";

interface MultiChoiceDownloadBtnProps {
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

const MultiChoiceDownloadBtn: FC<MultiChoiceDownloadBtnProps> = ({ urls }) => {
  const modalState = useModal()
  return (
    <>
    <div className="relative">
      <div className="flex gap-x-1">
      <button>Download</button>
      <button onClick={modalState.onOpen}>
        <IoArrowDownCircleOutline className="w-5 h-5" />
      </button>

      </div>
    </div>
    </>
  )
};

export default MultiChoiceDownloadBtn;
