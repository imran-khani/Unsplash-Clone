import { Photo } from "@/libs/types";
import Image from "next/image";
import { FC } from "react";

interface ImageProp {
  photo: Photo;
}

const ImageDetail: FC<ImageProp> = ({ photo }) => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center my-10">
        {photo.alt_description}
      </h1>
      <Image
        src={photo.urls.regular}
        width={600}
        height={600}
        alt={photo.alt_description}
        className="object-cover mx-auto"
      />
    </div>
  );
};

export default ImageDetail;
