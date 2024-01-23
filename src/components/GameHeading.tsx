import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const selectedPlatform = usePlatform(gameQuery.platformId);
  const selectedGenre = useGenre(gameQuery.genreId);
  return (
    <Heading fontSize="3xl">
      {selectedPlatform?.name || ""} {selectedGenre?.name || ""} Game
    </Heading>
  );
};

export default GameHeading;
