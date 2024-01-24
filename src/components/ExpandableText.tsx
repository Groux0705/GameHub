import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const textLimit = 300;

  const showText = expanded
    ? children
    : children.substring(0, textLimit) + "...";

  if (children.length <= textLimit) return <Text>{children}</Text>;

  return (
    <Text>
      {showText}{" "}
      <Button
        onClick={() => setExpanded(!expanded)}
        size="xs"
        marginLeft={1}
        fontWeight="bold"
        colorScheme="yellow"
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
