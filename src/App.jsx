import { Footer } from "./footer/Footer";
import { HeroSec } from "./heroSec/HeroSec";
import { HeroTailSec } from "./heroTailSec/HeroTailSec";
import { NavBar } from "./navBar/NavBar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSec />
              <HeroTailSec />
              <Footer />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <HeroSec />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
