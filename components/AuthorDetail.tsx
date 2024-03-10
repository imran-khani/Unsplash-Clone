import { Photo } from "@/libs/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaCheckCircle } from "react-icons/fa";
import MultiChoiceDownloadBtn from "./MultiChoiceDownloadBtn";

interface AuthorDetailProps {
  photo: Photo;
}

const AuthorDetail: FC<AuthorDetailProps> = ({ photo }) => {
  return (
    <div className="mb-5 flex items-center justify-between px-4 py-2 text-black">
      <div className="flex items-center">
        <Image
          src={photo.user.profile_image.large}
          alt={photo.user.name}
          width={100}
          height={100}
          className="h-auto w-14 rounded-full object-cover object-center"
        />
        <div className="ml-2 flex-1">
          <Link
            href={`users/${photo.user.username}`}
            className="text-lg font-semibold text-black"
          >
            {photo.user.name}
          </Link>
          <span className="m-0 flex items-center gap-x-1 text-sm text-indigo-500">
            Available for Hire
            <FaCheckCircle className="text-blue-500" size={14} />
          </span>
        </div>
      </div>
      <MultiChoiceDownloadBtn
        urls={photo.urls}
        imgTitle={photo.alt_description}
      />
    </div>
  );
};

export default AuthorDetail;
