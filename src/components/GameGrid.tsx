import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatform";
import { SortOrder } from "./SortSelector";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  selectedSortOrder: SortOrder | null;
}

const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  selectedSortOrder,
}: Props) => {
  const { data, error, isLoading } = useGame(
    selectedGenre,
    selectedPlatform,
    selectedSortOrder
  );
  const skeletons = [0, 1, 2, 3, 4, 5];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding="10px"
      >
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton></GameCardSkeleton>
              </GameCardContainer>
            ))
          : data.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game}></GameCard>
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
