import api from "./api";

// Get all customers
export const getCustomers = () => {
  return api.get("/customers");
};
