import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Edit, Trash2 } from "lucide-react";
import api from "../../services/api";

export const BankDetailsList = () => {
  const [banks, setBanks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchBanks = async () => {
    try {
      const res = await api.get("/company-bank");
      setBanks(res.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanks();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this bank?")) return;

    try {
      await api.delete(`/company-bank/${id}`);
      setBanks((prev) => prev.filter((b) => b.id !== id));
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="row gy-4">
      {/* ADD BUTTON */}
      <div className="col-lg-10 text-end">
        <Link to="add-bank" className="btn main-btn">
          Add Bank Details +
        </Link>
      </div>

      {/* LIST */}
      {banks.map((bank) => (
        <div className="col-lg-10" key={bank.id}>
          <div className="bank-details-card p-3 shadow-sm rounded">
            <div className="row gy-3 align-items-center">
              {/* QR IMAGE */}
              <div className="col-md-3 text-center">
                {bank.qr_code_image ? (
                  <img
                    src={`http://localhost:5000${bank.qr_code_image}`}
                    alt="QR"
                    style={{ width: "100%", maxWidth: 160 }}
                  />
                ) : (
                  <div className="text-muted">No QR</div>
                )}
              </div>

              {/* DETAILS */}
              <div className="col-md-7">
                <p><b>Account Name:</b> {bank.account_name}</p>
                <p><b>Account No:</b> {bank.account_number}</p>
                <p><b>Bank:</b> {bank.bank_name}</p>
                <p><b>Branch:</b> {bank.branch || "-"}</p>
                <p><b>IFSC:</b> {bank.ifsc_code}</p>
                <p>
                  <b>Status:</b>{" "}
                  <span
                    className={`badge ${
                      bank.status === "active"
                        ? "bg-success"
                        : "bg-secondary"
                    }`}
                  >
                    {bank.status}
                  </span>
                </p>
              </div>

              {/* ACTION ICONS */}
              <div className="col-md-2 text-end">
                <button
                  className="btn btn-sm btn-outline-primary me-2"
                  title="Edit"
                  onClick={() => navigate(`edit-bank/${bank.id}`)}
                >
                  <Edit size={16} />
                </button>

                <button
                  className="btn btn-sm btn-outline-danger"
                  title="Delete"
                  onClick={() => handleDelete(bank.id)}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* EMPTY STATE */}
      {!banks.length && (
        <div className="col-lg-10 text-center text-muted">
          No bank details found
        </div>
      )}
    </div>
  );
};
