import { Flex, Text, Center, Icon, Box } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
export default function Other() {
  return (
    <Box w={"100%"} p={"1rem"}>
      <Flex flexDirection={"column"}>
        <Flex flexDirection={"row"}>
          <Center gap={"1rem"}>
            <Icon as={AddIcon} w={8} h={8} />
            <Text>Settings</Text>
          </Center>
        </Flex>
        <Flex flexDirection={"row"}>
          <Center gap={"1rem"}>
            <Icon as={AddIcon} w={8} h={8} />
            <Text>Log Out</Text>
          </Center>
        </Flex>
      </Flex>
    </Box>
  );
}
