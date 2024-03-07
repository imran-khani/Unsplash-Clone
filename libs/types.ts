export interface Photo {
  json(): Photo | PromiseLike<Photo>;
  id: string;
  alt_description: string;
  urls: {
    raw: string;
    small: string;
    regular: string;
    full: string;
    thumb: string;
  };
  user: {
    name: string;
    username: string;
    location: string;
    profile_image: {
      large: string;
    };
  };
  links: {
    download_location: string;
  };
}
