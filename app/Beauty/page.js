import Beauty from "@/components/Beauty";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Beauty</title>
        <meta
          name="description"
          content="Découvrez les dernières tendances et astuces en matière de beauté avec notre sélection d’articles, de guides, d’avis et plus encore. Que vous cherchiez des conseils sur les soins de la peau, des tutoriels de maquillage, des astuces pour les cheveux ou de l’inspiration pour le bien-être, nous avons tout ce qu’il vous faut."
        />
      </Head>
      <Beauty />
    </>
  );
}
