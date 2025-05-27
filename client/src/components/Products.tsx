import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

type Product = {
  id: number;
  name: string;
  category: "ring" | "necklace" | "bracelete" | "earring";
  price: number;
  image: string;
  modelImage?: string;
};

type ProductsProps = {
  category?: Product["category"];
};

const Products: React.FC<ProductsProps> = ({ category }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando productos:", error);
        setLoading(false);
      });
  }, []);

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="products-list">
      {filteredProducts.map((product) => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}
          className="product"
        >
          <div className="product-image-wrapper">
            <img
              src={product.image}
              alt={product.name}
              className="main-image"
            />
            <img
              src={product.modelImage}
              alt={`${product.name} model`}
              className="hover-image"
            />
          </div>
          <div>
            <h3>{product.name}</h3>
            <p>{product.price}€</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
