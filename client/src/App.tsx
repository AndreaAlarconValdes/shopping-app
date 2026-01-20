import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import Home from "./pages/Home";
import AllJewerly from "./pages/AllJewerly";
import Rings from "./pages/Rings/Rings";
import GoldRings from "./pages/Rings/GoldRings";
import SilverRings from "./pages/Rings/SilverRings";
import Bracelets from "./pages/Bracelets/Bracelets";
import GoldBracelets from "./pages/Bracelets/GoldBracelets";
import SilverBracelets from "./pages/Bracelets/SilverBracelets";
import Earrings from "./pages/Earrings/Earrings";
import GoldEarrings from "./pages/Earrings/GoldEarrings";
import SilverEarrings from "./pages/Earrings/SilverEarrings";
import Necklaces from "./pages/Necklaces/Necklaces";
import GoldNecklaces from "./pages/Necklaces/GoldNecklaces";
import SilverNecklaces from "./pages/Necklaces/SilverNecklaces";
import Gold from "./pages/Collections/Gold";
import Silver from "./pages/Collections/Silver";

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
        <Route path="/gold-bracelets" element={<GoldBracelets />} />
        <Route path="/silver-bracelets" element={<SilverBracelets />} />
        <Route path="/earrings" element={<Earrings />} />
        <Route path="/gold-earrings" element={<GoldEarrings />} />
        <Route path="/silver-earrings" element={<SilverEarrings />} />
        <Route path="/necklaces" element={<Necklaces />} />
        <Route path="/gold-necklaces" element={<GoldNecklaces />} />
        <Route path="/silver-necklaces" element={<SilverNecklaces />} />
        <Route path="/aurum" element={<Gold />} />
        <Route path="/luna" element={<Silver />} />
        <Route path="/collections" element={<AllJewerly />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
