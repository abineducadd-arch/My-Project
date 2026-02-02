import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import ShopDropDown from "./components/ShopDropDown";
import InstantCoffee from "./components/InstantCoffee";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <CartProvider>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/InstantCoffee" element={<InstantCoffee />} />
              <Route path="/bestseller" element={<InstantCoffee />} />
              <Route path="/bulkorders" element={<InstantCoffee />} />
            </Routes>
            
          </div>
          <Footer/>
        </CartProvider>

      </Router>
    </>
  );
}

export default App;
