import { HeroSec } from "./heroSec/HeroSec";
import { HeroTailSec } from "./heroTailSec/HeroTailSec";
import { NavBar } from "./navBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <HeroSec />
      <HeroTailSec />
    </>
  );
}

export default App;
