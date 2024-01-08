import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGame = (selectedGenre: Genre | null) =>
  useData<Game>("games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGame;
