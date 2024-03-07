import ImageDetail from "@/components/ImageDetail";
import OutSideModal from "@/components/OutSideModal";
import { getPhoto } from "@/libs/unsplash";
import { FC } from "react";

interface ModalDetailPageProps {
  params: {
    id: string;
  };
}
const ModalDetailPage: FC<ModalDetailPageProps> = async ({ params }) => {
  const photo = await getPhoto(params.id);

  return (
    <OutSideModal>
      <div className="flex items-center h-full max-w-3xl mx-auto mt-10">
        <div className="relative bg-white w-full py-20 px-2 rounded-lg">
          <ImageDetail photo={photo} />
        </div>
      </div>
    </OutSideModal>
  );
};

export default ModalDetailPage;
