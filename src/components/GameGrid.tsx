import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGame, { GameQuery } from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGame(gameQuery);
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return <Text>{error.message}</Text>;
  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton></GameCardSkeleton>
              </GameCardContainer>
            ))
          : data.pages.map((page, index) => {
              return (
                <React.Fragment key={index}>
                  {page.results.map((game) => (
                    <GameCardContainer key={game.id}>
                      <GameCard game={game}></GameCard>
                    </GameCardContainer>
                  ))}
                </React.Fragment>
              );
            })}
      </SimpleGrid>
      <Button
        marginY={5}
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load more"}
      </Button>
    </Box>
  );
};

export default GameGrid;
