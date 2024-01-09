import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import GamePlatformList from "./GamePlatformList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={game.background_image}></Image>
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <GamePlatformList
              platformIconList={game.parent_platforms.map(
                (parent_platform) => parent_platform.platform
              )}
            ></GamePlatformList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
