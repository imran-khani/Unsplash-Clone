import ImageDetail from "@/components/ImageDetail";
import InnerModal from "@/components/Modals/InnerModal";
import OutSideModal from "@/components/Modals/OutSideModal";
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
      <InnerModal className="flex items-center h-full max-w-6xl mx-auto mt-4">
        <div className="relative bg-white w-full py-7 px-2 rounded-lg">
          <ImageDetail photo={photo} />
        </div>
      </InnerModal>
    </OutSideModal>
  );
};

export default ModalDetailPage;
