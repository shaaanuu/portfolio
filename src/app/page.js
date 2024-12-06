import { Footer } from "./components/footer/Footer";
import { HeroSec } from "./components/heroSec/HeroSec";
import { HeroTailSec } from "./components/heroTailSec/HeroTailSec";
import { NavBar } from "./components/navBar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSec />
      <HeroTailSec />
      <Footer />
    </>
  );
}
