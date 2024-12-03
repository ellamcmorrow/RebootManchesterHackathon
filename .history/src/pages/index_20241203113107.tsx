import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

type Routes = {
  text: string;
  route: string;
};

const Home: NextPage = () => {
  const routesArr: Routes[] = [
    { text: "Bill Reminder", route: "reminder" },
    { text: "fetch", route: "fetch-example" },
  ];

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="This is a starter kit for NextJS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Center>
          <Heading
            role="heading"
            as="h1"
            color="white"
            borderRadius={4}
            mt={8}
            p={4}
            bg="black"
          >
            Hackathon ADHD Tax
          </Heading>
        </Center>
        <Center>
          <UnorderedList mt={8} listStyleType="none">
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {routesArr.map(({ route, text }) => (
          
    </div>
  );
};

export default Home;
