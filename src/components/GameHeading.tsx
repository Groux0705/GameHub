import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../hooks/useGame";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: platforms } = usePlatforms();
  const selectedPlatform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  const { data: genres } = useGenres();
  const selectedGenre = genres?.results.find(
    (genre) => genre.id === gameQuery.genreId
  );
  return (
    <Heading fontSize="3xl">
      {selectedPlatform?.name || ""} {selectedGenre?.name || ""} Game
    </Heading>
  );
};

export default GameHeading;
