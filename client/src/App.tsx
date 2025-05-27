import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rings from "./pages/Rings/Rings";
import Bracelets from "./pages/Bracelets";
import Earrings from "./pages/Earrings";
import Home from "./pages/Home";
import Necklaces from "./pages/Necklaces";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import GoldRings from "./pages/Rings/GoldRings";
import SilverRings from "./pages/Rings/SilverRings";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rings" element={<Rings />} />
        <Route path="/gold-rings" element={<GoldRings />} />
        <Route path="/silver-rings" element={<SilverRings />} />
        <Route path="/bracelets" element={<Bracelets />} />
        <Route path="/earrings" element={<Earrings />} />
        <Route path="/necklaces" element={<Necklaces />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
