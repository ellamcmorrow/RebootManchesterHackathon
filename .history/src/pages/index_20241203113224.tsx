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
      </d
  
  );
};

export default Home;
