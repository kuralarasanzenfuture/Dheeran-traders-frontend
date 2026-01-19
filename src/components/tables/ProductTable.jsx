import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/product.service";

export const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="common-table-wrapper">
      <table className="common-table table-striped">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th className="text-end">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">
                No products found
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id}>
                <td className="time-cell">{product.product_code}</td>
                <td className="time-cell">{product.product_name}</td>
                <td className="time-cell">{product.brand_name || "-"}</td>
                <td className="time-cell">{product.category_name || "-"}</td>
                <td className="hours-cell">{product.quantity}</td>
                <td className="hours-cell">{product.price}</td>

                <td className="action-buttons d-flex justify-content-end">
                  <button className="btn btn-sm btn-warning me-2">
                    <i className="bi bi-pencil"></i>
                  </button>

                  <button className="btn btn-sm btn-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
