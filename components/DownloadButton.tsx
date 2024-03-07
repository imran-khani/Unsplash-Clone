"use client";

import { FC, useCallback } from "react";
import { BsArrowDown } from "react-icons/bs";

interface DownloadButtonProps {
  imageUrl: string;
  imgTitle: string;
  className?: string;
}

const DownloadButton: FC<DownloadButtonProps> = ({
  imageUrl,
  imgTitle,
  className,
}) => {
  const handleDownload = useCallback(async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", imgTitle);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      throw new Error("Error downloading image");
    }
  }, [imageUrl]);

  return (
    <button
      aria-label="Download Image"
      title="Download This Image"
      onClick={handleDownload}
      className={`absolute bottom-5 right-3 bg-white text-black p-2 rounded ${className}`}
    >
      <BsArrowDown size={20} />
    </button>
  );
};

export default DownloadButton;
