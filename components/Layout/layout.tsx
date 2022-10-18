import { Grid, Container } from "@chakra-ui/react";
import Head from "next/head";
import LeftBar from "./LeftBar";
import MainBar from "./MainBar";
import RightBar from "./RightBar";

function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>ProjectsHub</title>
        <meta name="description" content="Created by MD" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Grid templateColumns={"auto 1fr auto"} gap={"1rem"}>
            <LeftBar />
            <MainBar>{children}</MainBar>
            <RightBar />
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default Layout;
