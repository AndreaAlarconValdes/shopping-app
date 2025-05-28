import { Link } from "react-router-dom";
import "./CategoryNavbar.css";

type Category = {
  name: string;
  image: string;
  width?: number;
  route: string;
};

const categories: Category[] = [
  {
    name: "Rings",
    image: "./ring-cat.png",
    route: "/rings",
  },
  {
    name: "Bracelets",
    image: "./bracelet-cat.png",
    route: "/bracelets",
  },
  {
    name: "Earrings",
    image: "./earring-cat.png",
    route: "/earrings",
  },
  {
    name: "Necklaces",
    image: "./necklace-cat.png",
    route: "/necklaces",
  },
];

const CategoryNavbar = () => {
  return (
    <div className="category-navbar">
      {categories.map((cat) => (
        <Link to={cat.route} key={cat.name} className="category-item">
          <img src={cat.image} alt={cat.name}/>
          <p>{cat.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default CategoryNavbar;
