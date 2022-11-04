import React, { FC } from "react";
import { Box, Center } from "@chakra-ui/react";

export interface Props {
  children: React.ReactNode;
}
export const BoxWrapper: FC<Props> = ({ children }) => {
  return (
    <Center py={12} bg={"transparent"} color={"white"}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"100%"}
        rounded={"0.5rem"}
        pos={"relative"}
        zIndex={1}
        border={"1px solid #595959"}
        bg={"transparent"}
      >
        <Box p={"0.5rem"}>{children}</Box>
      </Box>
    </Center>
  );
};
