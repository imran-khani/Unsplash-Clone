export interface Photo {
  json(): Photo | PromiseLike<Photo>;
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  user: {
    name: string;
    username:string;
    profile_image: {
      large: string;
    };
  };
  links: {
    download_location: string;
  };
}
