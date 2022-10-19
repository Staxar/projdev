import {
  Avatar,
  Badge,
  Box,
  Center,
  Flex,
  GridItem,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { BoxWrapper } from "../../Shared/BoxWrapper";
export default function MainBar({ children }: any) {
  return (
    <GridItem>
      <Stack direction="row" justifyContent={"space-evenly"}>
        <Badge>Default</Badge>
        <Badge color="green">Success</Badge>
        <Badge colorScheme="red">Removed</Badge>
        <Badge colorScheme="purple">New</Badge>
      </Stack>
    </GridItem>
  );
}
