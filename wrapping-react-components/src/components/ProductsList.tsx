import { useEffect, useState } from "react";
import { httpClient } from "../wrappers/httpClient";
import { Product } from "../types/product";
import { DummyJsonProductsResult } from "../types/dummyJsonProductsResult";

export const ProductsList = () => {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    httpClient
      .get<DummyJsonProductsResult>("https://dummyjson.com/products")
      .then((result) => {
        setProducts(result.products);
      });
  }, []);

  if (!products) {
    return <p>Loading..</p>;
  }
  return (
    <table>
      <tr>
        <th>Title</th>
        <th>Category</th>
        <th>Description</th>
        <th>Price</th>
        <th>Stock</th>
      </tr>
      {products.map((product) => (
        <tr>
          <td>{product.title}</td>
          <td>{product.category}</td>
          <td>{product.description}</td>
          <td>{product.price}</td>
          <td>{product.stock}</td>
        </tr>
      ))}
    </table>
  );
};
