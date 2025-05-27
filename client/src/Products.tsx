import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  category: "anillo" | "collar" | "pulsera" | "pendiente";
  price: number;
  image: string;
};

const Products: React.FC = () => {
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

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}>
          <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
          <h3>{product.name}</h3>
          <p>Categoría: {product.category}</p>
          <p>Precio: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
