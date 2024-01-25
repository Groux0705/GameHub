import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Trailer } from "../entity/Tailer";
import ms from "ms";

const useTrailers = (gameId: number) => {
  const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["tailers", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useTrailers;
