import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div className=" bg-gradient-to-r from-red-400 to-blue-900 ...">
      <Navbar />
      <Home  />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
