import Head from "next/head";
import Home from "./Home";
import Services from "./Services";
import Resume from "./Resume";
import Contact from "./Contact";
import { metadata } from "@/constants";
import Office from "./Office";
import { Stack } from "@mui/material";
const LandingPage = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Stack>
        <Home />
        <Resume />
        <Services />
        <Office />
        <Contact />
      </Stack>
    </>
  );
};

export default LandingPage;
