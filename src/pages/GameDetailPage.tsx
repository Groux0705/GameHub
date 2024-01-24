import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error, isError } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;
  if (isError) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
