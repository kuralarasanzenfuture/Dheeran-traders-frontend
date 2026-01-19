import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";

export const AddBankDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    account_name: "",
    bank_name: "",
    account_number: "",
    branch: "",
    ifsc_code: "",
    status: "active",          // ✅ FIX
    qr_image: null,
  });

  /* 🔹 FETCH FOR EDIT */
  useEffect(() => {
    if (!id) return;

    const fetchBank = async () => {
      const res = await api.get(`/company-bank/${id}`);
      setFormData({
        account_name: res.data.account_name,
        bank_name: res.data.bank_name,
        account_number: res.data.account_number,
        branch: res.data.branch,
        ifsc_code: res.data.ifsc_code,
        status: res.data.status, // active / inactive
        qr_image: null,          // ✅ do NOT prefill file
      });
    };

    fetchBank();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((p) => ({ ...p, qr_image: e.target.files[0] }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append("account_name", formData.account_name);
  data.append("bank_name", formData.bank_name);
  data.append("account_number", formData.account_number);
  data.append("branch", formData.branch);
  data.append("ifsc_code", formData.ifsc_code);
  data.append("status", formData.status);

  // ✅ MUST MATCH multer.single("qr_code_image")
  if (formData.qr_image instanceof File) {
    data.append("qr_code_image", formData.qr_image);
  }

  try {
    if (id) {
      await api.put(`/company-bank/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Bank updated successfully");
    } else {
      await api.post("/company-bank", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Bank added successfully");
    }

    navigate("/bank-details");
  } catch (error) {
    console.error(error.response?.data || error);
    alert("Operation failed");
  }
};



  return (
    <div className="row gy-4 justify-content-center">
      <div className="col-lg-12">
        <div className="form_element">
          <div className="form_title">
            <h5 className="title">
              {id ? "Edit Bank Details" : "Add Bank Details"}
            </h5>
          </div>

          <div className="form_content">
            <form className="row gy-3" onSubmit={handleSubmit}>
              <div className="col-md-4">
                <label className="form-label">QR Code</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={handleFileChange}
                />
              </div>

              {[
                ["Account Name", "account_name"],
                ["Bank Name", "bank_name"],
                ["Account Number", "account_number"],
                ["Branch", "branch"],
                ["IFSC Code", "ifsc_code"],
              ].map(([label, name]) => (
                <div className="col-md-4" key={name}>
                  <label className="form-label">{label}</label>
                  <input
                    className="form-control"
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                  />
                </div>
              ))}

              <div className="col-md-4">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className="col-md-12 text-end">
                <button className="btn main-btn">
                  {id ? "Update Bank" : "Add Bank"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
