import Adunit from "@/components/Adunit";
import Adunit1 from "@/components/Adunit1";
import AuthorIcon from "@/components/AuthorIcon";
import Beauty from "@/components/Beauty";
import Bienetre from "@/components/Bienetre";
import Cuisine from "@/components/Cuisine";
import Fitness from "@/components/Fitness";

export const metadata = {
  title: "Beauté naturelle: 4 marques de maquillage propres à shopper",
  description:
    "Découvrez 4 marques de maquillage propres et éthiques qui vont sublimer votre beauté naturelle sans compromettre la qualité ou la sécurité. Des produits innovants et respectueux de la peau et de l’environnement à essayer absolument!",
};

export default function Home() {
  return (
    <>
      <AuthorIcon />
      <article>
        <h1>Beauté naturelle: 4 marques de maquillage propres à shopper</h1>
        <Adunit1 />
        <p>
          Bonjour! Vous êtes à la recherche de marques de maquillage qui
          embellissent votre beauté naturelle sans compromettre la qualité ou la
          sécurité? Alors vous êtes au bon endroit! Dans cet article , je vais
          vous présenter 4 marques de maquillage propres et éthiques qui vont
          sublimer votre teint, vos yeux et vos lèvres tout en respectant votre
          peau et l’environnement.<br></br> Prêtes à découvrir ces pépites?
          C’est parti!
        </p>
        <p>
          <strong>
            <em> 1 • Kosas</em>
          </strong>
          <br></br>
          Cette marque californienne créée par une artiste maquilleuse propose
          des produits innovants et performants à base d’ingrédients naturels et
          botaniques. Ses produits sont sans parabènes, sans phtalates, sans
          sulfates, sans gluten et non testés sur les animaux.<br></br> Ses
          best-sellers sont le rouge à lèvres Weightless Lip Color, le fond de
          teint Tinted Face Oil et le blush crème Color & Light.
        </p>
        <Adunit />
        <p>
          <strong>
            <em>2 • Ilia Beauty</em>
          </strong>
          <br></br>
          Cette marque canadienne se définit comme une marque de maquillage «
          clean with a conscience ». Elle combine des ingrédients naturels et
          biologiques avec des pigments minéraux et synthétiques pour offrir des
          produits efficaces et respectueux de la peau. Ses produits sont sans
          parfum, sans silicone, sans talc, sans gluten et certifiés Leaping
          Bunny. Ses incontournables sont le mascara Limitless Lash Mascara, le
          baume teinté Multi-Stick et le sérum teinté Super Serum Skin Tint SPF
          401.
        </p>
        <Adunit1 />
        <p>
          <strong>
            <em>3 • Kjaer Weis</em>
          </strong>
          <br></br>
          Cette marque danoise fondée par une maquilleuse professionnelle est à
          la pointe du luxe écologique. Elle propose des produits haut de gamme
          à base d’ingrédients naturels et biologiques certifiés par les labels
          COSMOS Natural ou Ecocert. Ses produits sont sans conservateurs
          synthétiques, sans parfums artificiels, sans pétrochimie et véganes.
          Ses must-haves sont le blush crème Cream Blush, l’ombre à paupières
          crème Cream Eye Shadow et le rouge à lèvres mat Matte Naturally
          Lipstick.
        </p>
        <Adunit />
        <p>
          <strong>
            <em>4 • Florence By Mills</em>
          </strong>
          <br></br>
          Cette marque créée par l’actrice Millie Bobby Brown s’adresse aux
          jeunes beautés qui veulent un maquillage simple et rêveur qui met en
          valeur leur peau. Cette marque est adaptée aux débutantes qui veulent
          reproduire un look naturel sans maquillage. Ses produits sont sans
          parabènes, sans sulfates, sans phtalates, sans huiles minérales, non
          comédogènes et cruelty-free. Ses coups de cœur sont le gloss Glow Yeah
          Lip Oil , le correcteur See You Never Concealer et la palette Like a
          Light Skin Tint.
        </p>
        <p>
          Voilà! J’espère que vous avez envie d’essayer ces marques de
          maquillage qui embellissent votre beauté naturelle tout en prenant
          soin de votre peau et de la planète.<br></br>
          N’hésitez pas à me dire en commentaire quelle est votre marque
          préférée ou si vous en connaissez d’autres qui méritent d’être
          mentionnées.<br></br> À bientôt! 😊
        </p>
        <p>
          <strong>Sources:</strong>
          <br></br>
          <a href="https://www.alwaysmoodyblogs.com/" target={"_blank"}>
            <strong>• alwaysmoodyblogs.com</strong>
          </a>
          <br></br>
          <a href="https://www.allure.com/" target={"_blank"}>
            <strong>• Allure.com</strong>
          </a>
          <br></br>
          <a href="https://www.rd.com/" target={"_blank"}>
            <strong>• rd.com</strong>
          </a>
        </p>
      </article>
      <Beauty />
      <Bienetre />
      <Fitness />
      <Cuisine />
    </>
  );
}
