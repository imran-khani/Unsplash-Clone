"use client";
import { useModal } from "@/hooks/useModal";
import { FC } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import DownloadButton from "./DownloadButton";

interface MultiChoiceDownloadBtnProps {
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  imgTitle: string;
}

const MultiChoiceDownloadBtn: FC<MultiChoiceDownloadBtnProps> = ({
  urls,
  imgTitle,
}) => {
  const modalState = useModal();
  return (
    <>
      <div className="relative">
        <div className="flex items-center gap-x-2 rounded-sm border-2 border-gray-200 px-3">
          <button className="border-r-2 pr-2">Download</button>
          <button onClick={modalState.onOpen}>
            <MdKeyboardArrowDown className="h-5 w-5" />
          </button>
        </div>
        <div className="absolute left-0 top-7 w-full max-w-3xl rounded bg-white px-5 py-2 shadow-md">
          <div className="flex flex-col gap-y-2">
            <button className="flex items-center gap-x-2 text-sm text-gray-600">
              Small
              <span>(640 x 426)</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiChoiceDownloadBtn;
