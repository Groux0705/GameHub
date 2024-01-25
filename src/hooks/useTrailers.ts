import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entity/Tailer";
import ApiClient from "../services/api-client";

const useTrailers = (gameId: number) => {
  const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["tailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
