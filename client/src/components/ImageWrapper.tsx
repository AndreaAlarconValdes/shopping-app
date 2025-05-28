import { Link } from "react-router-dom";
import "./ImageWrapper.css"

const ImageWrapper = () => (
  <Link to="/aurum" className="wrapper-container">
    <h3>Aurum</h3>
    <h2>New collection available</h2>
    <div className="image-wrapper">
      <img src="./model(01).jpg" alt="new collection" className="img-1"/>
      <img src="./model(02).jpg" alt="new collection" className="img-2"/>
      <img src="./model(03).jpg" alt="new collection" className="img-3"/>
    </div>
  </Link>
);

export default ImageWrapper;
