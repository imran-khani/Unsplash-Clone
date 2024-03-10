"use client";

import { FC, useCallback } from "react";
import { BsArrowDown } from "react-icons/bs";

interface DownloadButtonProps {
  imageUrl?: string;
  imgTitle?: string;
  className?: string;
  title?: string;
}

const DownloadButton: FC<DownloadButtonProps> = ({
  imageUrl,
  imgTitle,
  className,
  title,
}) => {
  const handleDownload = useCallback(async () => {
    try {
      if (!imageUrl) {
        throw new Error("Image URL is undefined");
      }
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", imgTitle || "image");
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
      className={`absolute bottom-5 right-3 rounded bg-white p-2 text-black ${className}`}
    >
      {title ? title : <BsArrowDown size={20} />}
    </button>
  );
};

export default DownloadButton;
