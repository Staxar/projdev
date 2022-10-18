import { Flex, Text, Center, Icon } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export default function Projects() {
  return (
    <Flex color={"black"} flexDirection={"column"}>
      <Text>Projects</Text>
      <Flex flexDirection={"row"}>
        <Center gap={"1rem"}>
          <Icon as={AddIcon} w={8} h={8} />
          <Text>Front-end</Text>
        </Center>
      </Flex>
      <Flex flexDirection={"row"}>
        <Center gap={"1rem"}>
          <Icon as={AddIcon} w={8} h={8} />
          <Text>Back-end</Text>
        </Center>
      </Flex>
      <Flex flexDirection={"row"}>
        <Center gap={"1rem"}>
          <Icon as={AddIcon} w={8} h={8} />
          <Text>Full-stack</Text>
        </Center>
      </Flex>
      <Flex flexDirection={"row"}>
        <Center gap={"1rem"}>
          <Icon as={AddIcon} w={8} h={8} />
          <Text>UX / UI</Text>
        </Center>
      </Flex>
    </Flex>
  );
}
