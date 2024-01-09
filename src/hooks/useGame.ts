import { SortOrder } from "../components/SortSelector";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface GameQuery {
  genres: Genre | null;
  platforms: Platform | null;
  ordering: SortOrder | null;
  search: string;
}

const useGame = (gameQuery: GameQuery) =>
  useData<Game>(
    "games",
    {
      params: {
        genres: gameQuery.genres?.id,
        platforms: gameQuery.platforms?.id,
        ordering: gameQuery.ordering?.value,
        search: gameQuery.search,
      },
    },
    [gameQuery]
  );

export default useGame;
