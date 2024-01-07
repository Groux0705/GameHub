import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { Platform } from "../hooks/useGame";
import { IconType } from "react-icons";
interface Props {
  platformIconList: Platform[];
}
const GamePlatformList = ({ platformIconList }: Props) => {
  const platformIconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    iox: MdPhoneIphone,
    web: BsGlobe,
    andriod: FaAndroid,
  };

  return (
    <HStack marginY={1}>
      {platformIconList.map((platformIcon) => (
        <Icon as={platformIconMap[platformIcon.slug]} color="gray.500"></Icon>
      ))}
    </HStack>
  );
};

export default GamePlatformList;
