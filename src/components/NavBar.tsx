import { HStack, Image } from "@chakra-ui/react";
import LOGO from "../assets/LOGO.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  setSearchValue: (value: string) => void;
}

const NavBar = ({ setSearchValue }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={LOGO} boxSize="60px"></Image>
      <SearchInput setSearchValue={setSearchValue}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
