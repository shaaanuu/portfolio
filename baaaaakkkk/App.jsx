import { Footer } from "./components/footer/Footer";
import { HeroSec } from "./components/heroSec/HeroSec";
import { HeroTailSec } from "./components/heroTailSec/HeroTailSec";
import { NavBar } from "./components/navBar/NavBar";

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
