import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import BackgroundWrapper from "./components/Backgroundwrapper";
import { Parallax } from "react-parallax";
import backgroundImage from './assets/background.jpg'

function App() {
  return (
    <div> 
      <BackgroundWrapper>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </BackgroundWrapper>
    </div>
  );
}

export default App;
