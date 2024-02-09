import Head from "next/head";
import Fitness from "@/components/Fitness";
export default function Home() {
  return (
    <>
      <Head>
        <title>Fitness et exercice physique</title>
        <meta name="description" content="" />
      </Head>
      <Fitness />
    </>
  );
}
