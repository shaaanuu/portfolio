import { Footer } from "./components/footer/Footer";
import { HeroSec } from "./components/heroSec/HeroSec";
import { HeroTailSec } from "./components/heroTailSec/HeroTailSec";
import "./page.scss";

export default function Home() {
  return (
    <>
      <HeroSec />
      <HeroTailSec />
      <Footer />
    </>
  );
}
