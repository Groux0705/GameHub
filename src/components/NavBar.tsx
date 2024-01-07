import { HStack, Image } from "@chakra-ui/react";
import LOGO from "../assets/LOGO.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={LOGO} boxSize="60px"></Image>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
};

export default NavBar;
