import getPhotos from "@/libs/unsplash";
import Image from "next/image";

export default async function Home() {
  const photos = await getPhotos();

  return (
    <>
      <div className="w-full min-h-screen text-white bg-[#0C1222] flex flex-col items-center">
        <div className="self-start container">
          <h1 className="text-white mt-10 text-2xl font-bold">MiniSplash</h1>
          <p>Explore the Free Photos from Unsplash</p>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-4 max-w-screen-xl bg-white rounded w-full my-16 p-5 gap-3">
          {photos.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid relative overflow-hidden rounded mb-4"
            >
              <Image
                src={item.urls.small}
                alt={item.id}
                layout="responsive"
                width={400}
                height={400}
                placeholder="blur"
                blurDataURL={item.urls.small}
                className="rounded cursor-pointer w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
