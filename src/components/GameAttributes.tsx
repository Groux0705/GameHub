import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionTerm from "./DefinitionTerm";
import Game from "../entity/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2}>
      <DefinitionTerm term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionTerm>
      <DefinitionTerm term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionTerm>
      <DefinitionTerm term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionTerm>
      <DefinitionTerm term="Plulishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionTerm>
    </SimpleGrid>
  );
};

export default GameAttributes;
