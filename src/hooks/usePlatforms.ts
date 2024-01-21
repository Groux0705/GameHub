import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "../constant";
import ApiClient, { FetchResult } from "../services/api-client";
import platforms from "../data/platforms";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery<FetchResult<Platform>, Error>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });
};

export default usePlatforms;
