import { Flex, Text, Center, Icon, Box } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
export default function Menu() {
  return (
    <Box w={"100%"} p={"1rem"}>
      <Flex flexDirection={"column"}>
        <Flex flexDirection={"row"}>
          <Center gap={"1rem"}>
            <Icon as={AddIcon} w={8} h={8} />
            <Text>Statistics</Text>
          </Center>
        </Flex>
        <Flex flexDirection={"row"}>
          <Center gap={"1rem"}>
            <Icon as={AddIcon} w={8} h={8} />
            <Text>DashBoard</Text>
          </Center>
        </Flex>
        <Flex flexDirection={"row"}>
          <Center gap={"1rem"}>
            <Icon as={AddIcon} w={8} h={8} />
            <Text>Documents</Text>
          </Center>
        </Flex>
      </Flex>
    </Box>
  );
}
