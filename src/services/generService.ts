import { ApiClient } from "./api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const genresService = new ApiClient<Genre>("/genres");

export default genresService;
