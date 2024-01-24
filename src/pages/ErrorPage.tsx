import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar></NavBar>
      <Box padding={5}>
        <Heading>Oops!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "There is no such address!"
            : "an unexpected error occur!"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
