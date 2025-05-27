import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

type RouteGroup = {
  title: string;
  options: string[];
};

const routes: RouteGroup[] = [
  {
    title: "All the jewels",
    options: ["rings", "bracelets", "earrings", "necklaces"],
  },
  {
    title: "Gold",
    options: ["gold-rings", "gold-bracelets", "gold-earrings", "gold-necklaces"],
  },
  {
    title: "Silver",
    options: ["silver-rings", "silver-bracelets", "silver-earrings", "silver-necklaces"],
  },
];

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <nav className="navbar">
      {routes.map((route, index) => (
        <div
          className="dropdown"
          key={route.title}
          onMouseEnter={() => toggleDropdown(index)}
          onMouseLeave={() => toggleDropdown(-1)}
        >
          <button className="dropdown-title">
            {route.title}
            <span className="material-icons">
              {openIndex === index ? "expand_less" : "expand_more"}
            </span>
          </button>
          {openIndex === index && (
            <ul className="dropdown-menu">
              {route.options.map((option) => (
                <li key={option}>
                  <Link
                    to={`/${option}`}
                    className="dropdown-link"
                  >
                    {option}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <Link to="/" className="logo">
        Brillia
      </Link>
    </nav>
  );
}
