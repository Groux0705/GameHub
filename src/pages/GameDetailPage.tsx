import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGameDetail from "../hooks/useGameDetail";
import GameTrailer from "../components/GameTrailer";
const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error, isError } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;
  if (isError) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
