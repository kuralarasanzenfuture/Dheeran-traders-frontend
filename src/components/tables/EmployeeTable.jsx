import React, { useState } from "react";

export const EmployeeTable = ({ data, onEdit, onDelete }) => {
  const [openRow, setOpenRow] = useState(null);

  const toggleRow = (id) => {
    setOpenRow(openRow === id ? null : id);
  };

  return (
    <div className="common-table-wrapper">
      <table className="common-table table-striped">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date Of Birth</th>
            <th>Gender</th>
            <th>Aadhar No</th>
            <th className="text-end">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((emp) => (
            <React.Fragment key={emp.id}>
              {/* MAIN ROW */}
              <tr>
                <td>{emp.employee_code}</td>
                <td>{emp.employee_name}</td>
                <td>{emp.email || "-"}</td>
                <td>{emp.phone || "-"}</td>
                <td>{emp.date_of_birth?.slice(0, 10) || "-"}</td>
                <td>{emp.gender || "-"}</td>
                <td>{emp.aadhar_number || "-"}</td>
<td className="text-end">
  <div className="d-inline-flex align-items-center gap-3">

    {/* VIEW MORE */}
    <button
      className="btn p-0 border-0 bg-transparent"
      onClick={() => toggleRow(emp.id)}
      title="View details"
    >
      <i className="bi bi-three-dots-vertical fs-5 text-dark"></i>
    </button>

    {/* EDIT */}
    <button
      className="btn p-0 border-0 bg-transparent"
      onClick={() => onEdit(emp)}
      title="Edit employee"
    >
      <i className="bi bi-pencil fs-5 text-dark"></i>
    </button>

    {/* DELETE */}
    <button
      className="btn p-0 border-0 bg-transparent"
      onClick={() => onDelete(emp.id)}
      title="Delete employee"
    >
      <i className="bi bi-trash fs-5 text-dark"></i>
    </button>

  </div>
</td>


              </tr>

              {/* EXPANDED DETAILS */}
              {openRow === emp.id && (
                <tr className="employee-expand-row">
                  <td colSpan="8">
                    <div className="employee-expand-box">
                      <div><strong>Address:</strong> {emp.address || "-"}</div> 
                      <div><strong>PAN:</strong> {emp.pan_number || "-"}</div>
                      <div><strong>Bank:</strong> {emp.bank_name || "-"}</div>
                      <div><strong>Account Number:</strong>{emp.bank_account_number || "-"}</div>
                      <div><strong>IFSC:</strong> {emp.ifsc_code || "-"}</div>
                      <div>
                        <strong>Emergency Contact:</strong>{" "}
                        {emp.emergency_contact_name || "-"} (
                        {emp.emergency_contact_phone || "-"})
                      </div>
                      <div>
                        <strong>Relation:</strong>{" "}
                        {emp.emergency_contact_relation || "-"}
                      </div>
                      <div>
                        <strong>Status:</strong>{" "}
                        <span className={`badge ${emp.status === "active" ? "bg-success" : "bg-secondary"}`}>
                          {emp.status}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
