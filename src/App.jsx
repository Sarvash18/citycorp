import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Ivas from "./components/Ivas/Ivas";
import Decorations from "./components/Decorations/Decorations";
import Distributors from "./components/Distributors/Distributors";
import Maps from "./components/Map/Map";
import Footer from "./components/Footer/Footer";
import Card2 from "./components/Card2/Card2";
import Card from "./components/Card/Card";
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
      <Footer />
     
      
    </div>
  );
}

export default App;
