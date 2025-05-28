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
    options: ["rings", "bracelets", "earrings", "necklaces", "view-all"],
  },
  {
    title: "Gold",
    options: [
      "gold-rings",
      "gold-bracelets",
      "gold-earrings",
      "gold-necklaces",
    ],
  },
  {
    title: "Silver",
    options: [
      "silver-rings",
      "silver-bracelets",
      "silver-earrings",
      "silver-necklaces",
    ],
  },
  {
    title: "Collections",
    options: ["aurum", "luna"],
  },
];

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <nav className="navbar">
      <div className="mobile-navbar">
        <span className="material-icons menu-icon" onClick={toggleMenu}>
          menu
        </span>
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
          Brillia
        </Link>
      <span className="material-icons bag">shopping_bag</span>
      </div>
      <div className={`navbar-routes ${isOpen ? "is-open" : ""}`}>
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
                      onClick={toggleMenu}
                    >
                      {option.split("-").join(" ")}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
