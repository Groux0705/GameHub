import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import genresService, { Genre } from "../services/generService";
import { CACHE_KEY_GENRES } from "../constant";
import axiosInstance, { FetchResult } from "../services/api-client";
const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      axiosInstance.get<FetchResult<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
