import { AboutSec } from "./aboutSec/AboutSec";
import { HeroSec } from "./heroSec/HeroSec";
import { HeroTailSec } from "./heroTailSec/HeroTailSec";
import { NavBar } from "./navBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <HeroSec />
      <HeroTailSec />
      <AboutSec />
    </>
  );
}

export default App;
