import { Footer } from "./footer/Footer";
import { HeroSec } from "./heroSec/HeroSec";
import { HeroTailSec } from "./heroTailSec/HeroTailSec";
import { NavBar } from "./navBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <HeroSec />
      <HeroTailSec />
      <Footer />
    </>
  );
}

export default App;
