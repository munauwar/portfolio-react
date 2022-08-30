import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
