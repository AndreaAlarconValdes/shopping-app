import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProductDetail.css";
import { getProductById } from "../services/products";
import type { Product } from "../types/product";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    getProductById(id)
      .then((data) => {
        setProduct(data);
        setError(null);
      })
      .catch(() => setError("Error al cargar el producto"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      {product.modelImage && (
        <img src={product.modelImage} alt={`${product.name} model`} />
      )}
      <div>
        <h1>{product.name}</h1>
        <p>{product.price}€</p>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDetail;
