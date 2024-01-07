import { HStack, Image, Text } from "@chakra-ui/react";
import LOGO from "../assets/LOGO.png";

const NavBar = () => {
  return (
    <>
      <HStack>
        <Image src={LOGO} boxSize="60px"></Image>
        <Text>Game Hub</Text>
      </HStack>
    </>
  );
};

export default NavBar;
