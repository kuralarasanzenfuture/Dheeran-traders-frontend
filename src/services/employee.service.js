import api from "./api";

// ➕ Create employee
export const createEmployee = (data) => {
  return api.post("/employees", data);
};

// 📄 Get all employees
export const getEmployees = () => {
  return api.get("/employees");
};

// 🔍 Get employee by ID
export const getEmployeeById = (id) => {
  return api.get(`/employees/${id}`);
};

// ✏️ Update employee
export const updateEmployee = (id, data) => {
  return api.put(`/employees/${id}`, data);
};

// ❌ Delete employee
export const deleteEmployee = (id) => {
  return api.delete(`/employees/${id}`);
};
