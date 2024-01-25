import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import Game from "../entity/Game";
import ms from "ms";

const apiClient = new ApiClient<Game>("/games");

const useGameDetail = (slug: string) => {
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  });
};

export default useGameDetail;
