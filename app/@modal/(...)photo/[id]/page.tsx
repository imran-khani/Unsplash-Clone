import ImageDetail from "@/components/ImageDetail";
import { Photo } from "@/libs/types";
import { getPhoto } from "@/libs/unsplash";
import { FC } from "react";

interface ModalDetailsPageProps {
  params: {
    id: string;
  };
}

const ModalDetailsPage: FC<ModalDetailsPageProps> = async ({ params }) => {
  const response = await getPhoto(params.id);
  const photo = (await response.json()) as Photo;
  return (
    <div className="fixed inset-0 bg-zinc-900/20 z-50">
      <div className="flex items-center h-full max-w-3xl mx-auto">
        <div className="relative bg-white w-full py-20 px-2 rounded-lg">
          <ImageDetail photo={photo} />
        </div>
      </div>
    </div>
  );
};

export default ModalDetailsPage;
