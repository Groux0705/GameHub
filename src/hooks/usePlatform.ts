import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "../constant";
import ApiClient, { FetchResult } from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatform = () => {
  return useQuery<FetchResult<Platform>, Error>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    // initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatform;
