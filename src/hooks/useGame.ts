import { useInfiniteQuery } from "@tanstack/react-query";
import Game from "../entity/Game";
import ApiClient, { FetchResult } from "../services/api-client";
import useGameQueryStore from "../store";

const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResult<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.ordering,
          search: gameQuery.search,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
  });
};

export default useGames;
