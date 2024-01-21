import { SortOrder } from "../components/SortSelector";
import { Platform } from "./usePlatforms";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResult } from "../services/api-client";
import { Genre } from "./useGenres";
import ms from "ms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering: SortOrder | null;
  search: string;
}

const apiClient = new ApiClient<Game>("/games");

const useGame = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResult<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.ordering?.value,
          search: gameQuery.search,
          page: pageParam,
        },
      }),
    staleTime: ms("24h"),
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
  });

export default useGame;
