const headers = {
  Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
};

interface Photo {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  links: {
    download_location: string;
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


export const getPhoto = async (id:string)=>{
  return await fetch(`https://api.unsplash.com/photos/${id}`)
}

export default getPhotos;
