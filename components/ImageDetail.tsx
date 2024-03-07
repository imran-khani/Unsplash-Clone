import { Photo } from "@/libs/types";
import Image from "next/image";
import { FC } from "react";
import AuthorDetail from "./AuthorDetail";

interface ImageProp {
  photo: Photo;
}

const ImageDetail: FC<ImageProp> = ({ photo }) => {
  return (
    <div>
      <AuthorDetail photo={photo} />
      <Image
        src={photo.urls.regular}
        width={600}
        height={600}
        alt={photo.alt_description}
        className="object-cover mx-auto w-[600px] h-[600px] cursor-zoom-in"
        placeholder="blur"
        blurDataURL={photo.urls.small}
      />
    </div>
  );
};

export default ImageDetail;
