"use client";
import { useModal } from "@/hooks/useModal";
import { FC } from "react";

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
      <button></button>
    </div>
    </>
  )
};

export default MultiChoiceDownloadBtn;
