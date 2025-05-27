import { Link } from "react-router-dom";
import "./ImageWrapper.css"

const ImageWrapper = () => (
  <Link to="/aurum" className="wrapper-container">
    <h2>Aurum</h2>
    <h1>New collection available</h1>
    <div className="image-wrapper">
      <img src="./model(01).jpg" alt="" />
      <img src="./model(02).jpg" alt="" />
      <img src="./model(03).jpg" alt="" />
    </div>
  </Link>
);

export default ImageWrapper;
