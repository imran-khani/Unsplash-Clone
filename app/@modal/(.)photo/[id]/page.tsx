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
      <InnerModal className="mx-auto mt-10 flex h-auto max-w-6xl items-center">
        <div className="relative w-full rounded-lg bg-white px-2 py-7">
          <ImageDetail photo={photo} />
        </div>
      </InnerModal>
    </OutSideModal>
  );
};

export default ModalDetailPage;
