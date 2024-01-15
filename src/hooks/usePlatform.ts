import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "../constant";
import axiosInstance, { FetchResult } from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  return useQuery({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: () =>
      axiosInstance
        .get<FetchResult<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatform;
