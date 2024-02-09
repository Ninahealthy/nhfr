import Bienetre from "@/components/Bienetre";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Bien-être</title>
        <meta
          name="description"
          content="Vous avez envie de vous chouchouter et de vous ressourcer ? Nous avons ce qu’il vous faut ! Notre catégorie bien-être regroupe tout ce qui peut vous aider à vous sentir mieux dans votre corps et dans votre tête. Que vous cherchiez à vous relaxer, à vous tonifier ou à vous embellir, vous trouverez votre bonheur chez nous. Alors venez vite découvrir notre catégorie bien-être. Vous allez craquer !"
        />
      </Head>
      <Bienetre />
    </>
  );
}
