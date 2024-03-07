"use client";
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
  return <div>MultiChoiceDownloadBtn</div>;
};

export default MultiChoiceDownloadBtn;
