import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../hooks/useGame";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const selectedGenre = useGenre(gameQuery.genreId);

  const selectedPlatform = usePlatform(gameQuery.platformId);

  return (
    <Heading fontSize="3xl">
      {selectedPlatform?.name || ""} {selectedGenre?.name || ""} Game
    </Heading>
  );
};

export default GameHeading;
