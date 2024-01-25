import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  term: string;
}

const DefinitionTerm = ({ children, term }: Props) => {
  return (
    <Box margin={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionTerm;
