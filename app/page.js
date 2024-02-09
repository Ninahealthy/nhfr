import Beauty from "@/components/Beauty";
import Bienetre from "@/components/Bienetre";
import Fitness from "@/components/Fitness";
import Nutrition from "@/components/Cuisine";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Nina Healthy</title>
        <meta
          name="description"
          content="Découvrez comment adopter un mode de vie sain pour améliorer votre santé et votre bien-être. dans mon blog Je vous propose des conseils pratiques sur la nutrition, l'exercice physique, la gestion du stress et plus encore pour vous aider à atteindre vos objectifs de santé. Commencez votre voyage vers une vie plus saine dès aujourd'hui !"
        />
      </Head>
      <actualites>
        <Beauty />
        <Bienetre />
        <Nutrition />
        <Fitness />
      </actualites>
    </>
  );
}
