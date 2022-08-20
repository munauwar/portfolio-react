import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Experience />
    </>
  );
}

export default App;
