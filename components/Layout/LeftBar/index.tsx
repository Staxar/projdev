import { GridItem, Box } from "@chakra-ui/react";
import Menu from "./menu";
import Other from "./other";
import Projects from "./projects";
import SiteLogo from "./sitelogo";
export default function LeftBar() {
  return (
    <GridItem>
      <Box w={"100%"} h={"auto"}>
        <SiteLogo />
        <Projects />
        <Menu />
        <Other />
      </Box>
    </GridItem>
  );
}
