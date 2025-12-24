import { Link } from "react-router-dom";
import "./ImageWrapper.css"

const ImageWrapper = () => (
  <Link to="/aurum" className="wrapper-container">
    <div>
    <h3>Aurum</h3>
    <h2>New collection available</h2>
    </div>
    <img src="./hero-img(01).png" alt="new collection" />
  </Link>
);

export default ImageWrapper;
