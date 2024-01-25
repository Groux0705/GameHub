import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  slug: string;
  description: string;
  genres: Genre[];
  publishers: Publisher[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
