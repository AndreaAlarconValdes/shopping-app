import { Link } from "react-router-dom";
import ImageWrapper from "../components/ImageWrapper";
import CategoryNavbar from "../components/CategoryNavbar";
import ProductsBestSeller from "../components/ProductsBestSeller";
import "./Home.css";

const Home = () => (
  <div>
    <ImageWrapper />
    <CategoryNavbar />
    <div className="bestseller-products">
      <h2>MOST WANTED</h2>
      <ProductsBestSeller />
    </div>
    <Link to="/collections">Discover More</Link>
  </div>
);

export default Home
