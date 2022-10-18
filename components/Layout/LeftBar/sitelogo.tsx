import { Flex, Center, Text } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../../assets/images/logo.webp";
export default function SiteLogo() {
  return (
    <Flex color={"black"} h={45}>
      <Center gap={"1rem"}>
        <Image src={logo} alt={"logo"} width={24} height={24} />
        <Text fontSize={32}>ProjectDev</Text>
      </Center>
    </Flex>
  );
}
