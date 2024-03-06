const headers = {
  Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
};

interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
}

const getPhotos = async (): Promise<Photo[]> => {
  const url = new URL("https://api.unsplash.com/photos");
  url.searchParams.set("per_page", "200");
  url.searchParams.set("order_by", "latest");
  const response = await fetch(url.toString(), { headers });
  const data = await response.json();
  return data;
};

export default getPhotos;
