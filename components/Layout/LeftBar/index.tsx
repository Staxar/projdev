import { GridItem, Box } from "@chakra-ui/react";
import Projects from "./projects";
import SiteLogo from "./sitelogo";
export default function LeftBar() {
  return (
    <GridItem>
      <Box>
        <SiteLogo />
        <Projects />
      </Box>
    </GridItem>
  );
}
