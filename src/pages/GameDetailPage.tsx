import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import { Heading, Spinner, Text } from "@chakra-ui/react";
const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error, isError } = useGameDetail(slug!);
  console.log(game);

  if (isLoading) return <Spinner />;
  if (isError) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description}</Text>
    </>
  );
};

export default GameDetailPage;
