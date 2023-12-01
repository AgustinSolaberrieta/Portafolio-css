import "./App.css";
import About from "./Componet/About/About";
import Fouter from "./Componet/Fouter/Fouter";
import Init from "./Componet/Init/Init";
import Proyects from "./Componet/Proyect/Proyects";
import Search from "./Componet/Search/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <Init />
      <About />
      <Proyects />
      <Fouter />
    </div>
  );
}

export default App;
