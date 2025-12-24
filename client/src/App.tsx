import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rings from "./pages/Rings/Rings";
import Bracelets from "./pages/Bracelets/Bracelets";
import Earrings from "./pages/Earrings/Earrings";
import Home from "./pages/Home";
import Necklaces from "./pages/Necklaces/Necklaces";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import GoldRings from "./pages/Rings/GoldRings";
import SilverRings from "./pages/Rings/SilverRings";
import Gold from "./pages/Collections/Gold";
import Silver from "./pages/Collections/Silver";
import AllJewerly from "./pages/AllJewerly";

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
        <Route path="/aurum" element={<Gold />} />
        <Route path="/luna" element={<Silver />} />
        <Route path="/collections" element={<AllJewerly />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
