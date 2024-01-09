import { SortOrder } from "../components/SortSelector";
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

const useGame = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  selectedSortOrder: SortOrder | null
) =>
  useData<Game>(
    "games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        ordering: selectedSortOrder?.value,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, selectedSortOrder?.value]
  );

export default useGame;
