const API_URL = "http://localhost:4000";

export const getProducts = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error al obtener productos");
  return res.json();
};

export const getProductById = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Error al obtener el producto");
  return res.json();
};

export const createProduct = async (product: any) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
  });

  if (!res.ok) {
    throw new Error("Error al crear el producto");
  }

  return res.json(); 
};

export const updateProduct = async (id: number, product: any) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
  });

  if (!res.ok) {
    throw new Error("Error al actualizar el producto");
  }

  return res.json(); 
};

export const deleteProduct = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar el producto");
  return res.json();
};
