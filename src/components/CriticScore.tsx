import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const colorScheme = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <>
      <Badge colorScheme={colorScheme} borderRadius={2} paddingX={2}>
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
