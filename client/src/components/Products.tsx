import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import { getProducts } from "../services/products";
import type { Product } from "../types/product";

export type { Product };

type ProductsProps = {
  category?: Product["category"];
  material?: Product["material"];
};

const Products: React.FC<ProductsProps> = ({ category , material}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = category ? product.category === category : true;
    const materialMatch = material ? product.material === material : true;
    return categoryMatch && materialMatch;
  });

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

export default Products;
