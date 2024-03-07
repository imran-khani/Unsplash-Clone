import ImageDetail from "@/components/ImageDetail";
import { Photo } from "@/libs/types";
import { getPhoto } from "@/libs/unsplash";
import { FC } from "react";

interface PhotoProps {
  params: {
    slug: string;
  };
}

const PhotoDetailsPage: FC<PhotoProps> = async ({ params }) => {
  const response = await getPhoto(params.slug);
  const photo = (await response.json()) as Photo;
  return <ImageDetail photo={photo} />;
};

export default PhotoDetailsPage;
