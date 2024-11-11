import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Ivas from "./components/Ivas/Ivas";
import Decorations from "./components/Decorations/Decorations";
import Distributors from "./components/Distributors/Distributors";
import Maps from "./components/Map/Map";
import Footer2 from "./components/Footer-2/Footer2";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Ivas />
      <Decorations />
      <Distributors />
      <Maps />
      <Footer2 />
    </div>
  );
}

export default App;
