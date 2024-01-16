import { SortOrder } from "../components/SortSelector";
import { Platform } from "./usePlatform";
import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResult } from "../services/api-client";
import { Genre } from "./useGenres";

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

const apiClient = new ApiClient<Game>("/games");

const useGame = (gameQuery: GameQuery) =>
  useQuery<FetchResult<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genres?.id,
          parent_platforms: gameQuery.platforms?.id,
          ordering: gameQuery.ordering?.value,
          search: gameQuery.search,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGame;
