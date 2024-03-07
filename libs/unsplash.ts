import { Photo } from "./types";

const headers = {
  Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
};

const getPhotos = async (): Promise<Photo[]> => {
  const url = new URL("https://api.unsplash.com/photos");
  url.searchParams.set("per_page", "200");
  url.searchParams.set("order_by", "latest");
  const response = await fetch(url.toString(), { headers });
  const data = await response.json();
  return data;
};

export const getPhoto = async (id: string) => {
  const response = await fetch(`https://api.unsplash.com/photos/${id}`, {
    headers,
  });
  const data = await response.json();
  return data;
};

export const getUser = async (username: string) => {
  const response = await fetch(`https://api.unsplash.com/users/${username}`, {
    headers,
  });
  const data = await response.json();
  return data;
};

export default getPhotos;
