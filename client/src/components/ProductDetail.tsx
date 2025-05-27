import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProductDetail.css";
type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  modelImage?: string;
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <img src={product.modelImage}  alt={`${product.name} model`} />
      <div>
        <h1>{product.name}</h1>
        <p>{product.price}€</p>
      <button>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDetail;
