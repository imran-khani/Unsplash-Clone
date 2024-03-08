"use client";
import { Photo } from "@/libs/types";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import AuthorDetail from "./AuthorDetail";

interface ImageProp {
  photo: Photo;
}

const ImageDetail: FC<ImageProp> = ({ photo }) => {
  const [imageWidth, setImageWidth] = useState<number | null>(null);
  const [imageHeight, setImageHeight] = useState<number | null>(null);

  useEffect(() => {
    const img: HTMLImageElement = document.createElement("img");
    img.src = photo.urls.regular;
    img.onload = () => {
      setImageWidth(img.width);
      setImageHeight(img.height);
    };
  }, [photo.urls.regular]);

  const isVertical =
    imageWidth && imageHeight ? imageHeight > imageWidth : false;

  if (!imageWidth || !imageHeight) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AuthorDetail photo={photo} />
      <div className="overflow-auto p-10">
        <div
          className={`mx-auto ${isVertical ? "h-auto w-[500px]" : "h-[500px] w-auto"} aspect-${
            (imageWidth / imageHeight) * 100
          }`}
        >
          <Image
            src={photo.urls.regular}
            alt={photo.alt_description}
            className="h-full w-full object-cover"
            placeholder="blur"
            blurDataURL={photo.urls.small}
            width={imageWidth}
            height={imageHeight}
          />
        </div>
      </div>
    </>
  );
};

export default ImageDetail;
