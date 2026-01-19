import { useEffect, useState } from "react";
import {
  createQuantity,
  getQuantity,
  updateQuantity,
  deleteQuantity,
} from "../../../services/quantity.service";
import { getBrands } from "../../../services/brand.service";
import { getCategories } from "../../../services/category.service";

export const AddQuantity = () => {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [quantities, setQuantities] = useState([]);

  // CREATE
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("Qty");
  const [status, setStatus] = useState("active");

  // EDIT
  const [editingId, setEditingId] = useState(null);
  const [editBrand, setEditBrand] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editAmount, setEditAmount] = useState("");
  const [editUnit, setEditUnit] = useState("Qty");
  const [editStatus, setEditStatus] = useState("active");

  const [error, setError] = useState("");

  const UNITS = ["Qty", "Kg", "Litre", "Pack"];

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const brandData = await getBrands();

    // 🔒 only ACTIVE categories allowed
    const categoryData = await getCategories();
    const activeCategories = categoryData.filter(
      (c) => c.status === "active"
    );

    setBrands(brandData);
    setCategories(activeCategories);
    setQuantities(await getQuantity());
  };

  /* ================= CREATE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!brand || !category || !amount) {
      setError("Brand, Category and Quantity are required");
      return;
    }

    const selectedCategory = categories.find(
      (c) => c.id === Number(category)
    );

    if (!selectedCategory || selectedCategory.status !== "active") {
      setError("Selected category is inactive");
      return;
    }

    try {
      await createQuantity({
        brand_id: Number(brand),
        category_id: Number(category),
        name: `${amount} ${unit}`,
        status,
      });

      setBrand("");
      setCategory("");
      setAmount("");
      setUnit("Qty");
      setStatus("active");
      setError("");
      loadData();
    } catch (err) {
      setError(err.response?.data?.message || "Server error");
    }
  };

  /* ================= EDIT ================= */
  const startEdit = (q) => {
    if (q.category_status === "inactive") return;

    const [amt, unt] = q.name.split(" ");

    setEditingId(q.id);
    setEditBrand(q.brand_id);
    setEditCategory(q.category_id);
    setEditAmount(amt);
    setEditUnit(unt || "Qty");
    setEditStatus(q.status);
  };

  const saveEdit = async (id) => {
    if (!editAmount) return;

    await updateQuantity(id, {
      brand_id: Number(editBrand),
      category_id: Number(editCategory),
      name: `${editAmount} ${editUnit}`,
      status: editStatus,
    });

    setEditingId(null);
    loadData();
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (window.confirm("Delete this quantity?")) {
      await deleteQuantity(id);
      loadData();
    }
  };

  return (
    <div className="row gy-4">
      {/* ================= FORM ================= */}
      <div className="col-lg-10">
        <form className="row gy-3" onSubmit={handleSubmit}>
          <div className="col-md-3">
            <select
              className="form-select"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="">Select Brand</option>
              {brands.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-3">
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-2">
            <input
              type="number"
              min="1"
              className="form-control"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="col-md-2">
            <select
              className="form-select"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              {UNITS.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-2">
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="col-md-12">
            <button className="btn main-btn">Add Quantity</button>
            {error && <p className="text-danger mt-2">{error}</p>}
          </div>
        </form>
      </div>

      {/* ================= TABLE ================= */}
      <div className="col-lg-10">
        <table className="common-table table-striped">
          <thead>
            <tr>
              <th>Brand</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {quantities.map((q) => (
              <tr key={q.id}>
                <td>{q.brand_name}</td>
                <td>{q.category_name}</td>
                <td>{q.name}</td>
                <td>
                  <span
                    className={`badge ${
                      q.status === "active"
                        ? "bg-success"
                        : "bg-secondary"
                    }`}
                  >
                    {q.status}
                  </span>
                </td>

                <td className="d-flex justify-content-end">
                  {q.category_status === "inactive" ? (
                    <span className="text-danger small">
                      Inactive Category
                    </span>
                  ) : (
                    <>
                      <button
                        className="btn btn-warning me-2"
                        onClick={() => startEdit(q)}
                      >
                        ✏
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(q.id)}
                      >
                        🗑
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
