import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../entity/Platform";

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
        <Icon
          key={platformIcon.id}
          as={platformIconMap[platformIcon.slug]}
          color="gray.500"
        ></Icon>
      ))}
    </HStack>
  );
};

export default GamePlatformList;
