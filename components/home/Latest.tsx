import DownloadButton from "@/components/DownloadButton";
import getPhotos from "@/libs/unsplash";
import Image from "next/image";
import Link from "next/link";

const Latest = async () => {
  const photos = await getPhotos();

  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center">
        <div className="container self-start">
          <h1 className="mt-10 text-2xl font-bold text-white">MiniSplash</h1>
          <p>Explore the Free Photos from Unsplash</p>
        </div>
        <div className="my-16 w-full max-w-screen-xl columns-2 gap-3 rounded bg-white p-5 md:columns-3">
          {photos.map((item) => (
            <div
              key={item.id}
              className="relative mb-4 break-inside-avoid overflow-hidden rounded"
            >
              <div className="group relative">
                <DownloadButton
                  className="z-10 hidden group-hover:block"
                  imgTitle={item.alt_description}
                  imageUrl={item.urls.full}
                />
                <div className="absolute bottom-5 left-3 z-10">
                  <div className="flex items-center">
                    <Image
                      src={item.user.profile_image.large}
                      alt={item.user.name}
                      width={100}
                      height={100}
                      className="h-auto w-10 rounded-full object-cover object-center"
                    />
                    <div className="ml-2 flex-1">
                      <Link
                        href={`users/${item.user.username}`}
                        className="text-base text-white/70 hover:text-white"
                      >
                        {item.user.name}
                      </Link>
                    </div>
                  </div>
                </div>
                <Link href={`/photo/${item.id}`}>
                  <div className="absolute inset-0 cursor-pointer transition-all group-hover:bg-slate-900/40"></div>
                  <Image
                    src={item.urls.small}
                    alt={item.id}
                    width={400}
                    height={400}
                    placeholder="blur"
                    blurDataURL={item.urls.small}
                    className="h-full w-full cursor-pointer rounded object-cover"
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
