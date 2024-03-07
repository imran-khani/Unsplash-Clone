import ImageDetail from "@/components/ImageDetail";
import { getPhoto } from "@/libs/unsplash";
import { FC } from "react";

interface PhotoProps {
  params: {
    id: string;
  };
}

const PhotoDetailsPage: FC<PhotoProps> = async ({ params }) => {
  const photo = await getPhoto(params.id);
  return <ImageDetail photo={photo} />;
};

export default PhotoDetailsPage;
