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
        <meta charSet="UTF-8"/>
        <meta name="google-site-verification" content="I21XqSDecJvksgT0f1qLa73oQbeD-fPb8aJ_nVXAMS8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content={metadata.description}/>
        <meta name="keywords" content={metadata.keywords} 
        /> 
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
