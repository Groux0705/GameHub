import { HStack, Image } from "@chakra-ui/react";
import LOGO from "../assets/LOGO.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image
        src={LOGO}
        boxSize="60px"
        onClick={() => {
          navigate("/");
        }}
      ></Image>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
