import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Product } from "./Products";

const ProductsBestSeller = () => {
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

  const firstOfCategory = (cat: Product["category"]) =>
    products.find((p) => p.category === cat);

  const selectedProducts: Product[] = [
    firstOfCategory("ring"),
    firstOfCategory("bracelet"),
    firstOfCategory("earring"),
    firstOfCategory("necklace"),
  ].filter(Boolean) as Product[];

  if (loading) return <p>Cargando productos...</p>;

  return (
      <div className="products-list">
        {selectedProducts.map((product) => (
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
              {product.modelImage && (
                <img
                  src={product.modelImage}
                  alt={`${product.name} model`}
                  className="hover-image"
                />
              )}
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

export default ProductsBestSeller;
