import { SortOrder } from "../components/SortSelector";
import { Platform } from "./usePlatform";
import { useQuery } from "@tanstack/react-query";
import axiosInstance, { FetchResult } from "../services/api-client";
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

const useGame = (gameQuery: GameQuery) =>
  useQuery<FetchResult<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      axiosInstance
        .get<FetchResult<Game>>("/games", {
          params: {
            genres: gameQuery.genres?.id,
            parent_platforms: gameQuery.platforms?.id,
            ordering: gameQuery.ordering?.value,
            search: gameQuery.search,
          },
        })
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGame;
