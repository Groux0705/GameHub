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
  selectedSortOrder: SortOrder | null,
  searchValue: string
) =>
  useData<Game>(
    "games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        ordering: selectedSortOrder?.value,
        search: searchValue,
      },
    },
    [
      selectedGenre?.id,
      selectedPlatform?.id,
      selectedSortOrder?.value,
      searchValue,
    ]
  );

export default useGame;
