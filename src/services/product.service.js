import api from "./api";

// Get all products
export const getProducts = () => {
  return api.get("/products");
};
