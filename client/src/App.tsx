import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rings from "./pages/Rings";
import Bracelets from "./pages/Bracelets";
import Earrings from "./pages/Earrings";
import Home from "./pages/Home";
import Necklaces from "./pages/Necklaces";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rings" element={<Rings />} />
        <Route path="/bracelets" element={<Bracelets />} />
        <Route path="/earrings" element={<Earrings />} />
        <Route path="/necklaces" element={<Necklaces />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
