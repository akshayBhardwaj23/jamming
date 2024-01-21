/**
 * Component for Header Bar
 */
import { Center, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";

const NavBar = () => {
  return (
    <Center>
      <Image src={logo} boxSize="60px"></Image>
    </Center>
  );
};

export default NavBar;
