import DownloadButton from "@/components/DownloadButton";
import getPhotos from "@/libs/unsplash";
import Image from "next/image";
import Link from "next/link";

const Latest = async () => {
  const photos = await getPhotos();

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center">
        <div className="self-start container">
          <h1 className="text-white mt-10 text-2xl font-bold">MiniSplash</h1>
          <p>Explore the Free Photos from Unsplash</p>
        </div>
        <div className="columns-2 md:columns-3 max-w-screen-xl bg-white rounded w-full my-16 p-5 gap-3">
          {photos.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid relative overflow-hidden rounded mb-4"
            >
              <div className="relative group">
                <DownloadButton
                  className="hidden group-hover:block z-10"
                  imgTitle={item.alt_description}
                  imageUrl={item.urls.full}
                />
                <div className="absolute left-3 bottom-5 z-10">
                  <div className="flex items-center">
                    <Image
                      src={item.user.profile_image.large}
                      alt={item.user.name}
                      width={100}
                      height={100}
                      className="rounded-full object-cover object-center w-10 h-auto"
                    />
                    <div className="flex-1 ml-2">
                      <Link
                        href={`users/${item.user.username}`}
                        className="text-base hover:text-white text-white/70"
                      >
                        {item.user.name}
                      </Link>
                    </div>
                  </div>
                </div>
                <Link href={`/photo/${item.id}`}>
                  <div className="absolute inset-0 group-hover:bg-slate-900/40 cursor-pointer transition-all"></div>
                  <Image
                    src={item.urls.small}
                    alt={item.id}
                    width={400}
                    height={400}
                    placeholder="blur"
                    blurDataURL={item.urls.small}
                    className="rounded cursor-pointer w-full h-full object-cover"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Latest;
