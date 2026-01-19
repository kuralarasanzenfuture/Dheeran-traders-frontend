import api from "./api";

// Get all vendors
export const getVendors = () => {
  return api.get("/vendors");
};
