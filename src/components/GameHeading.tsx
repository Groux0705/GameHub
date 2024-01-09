import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../hooks/useGame";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading fontSize="3xl">
      {gameQuery.platforms?.name || ""} {gameQuery.genres?.name || ""} Game
    </Heading>
  );
};

export default GameHeading;
