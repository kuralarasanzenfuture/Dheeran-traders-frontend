import React, { useEffect, useState } from "react";
import { getVendors } from "../../services/vendor.service";

export const VendorTable = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVendors = async () => {
    try {
      const res = await getVendors();
      setVendors(res.data);
    } catch (error) {
      console.error("Failed to fetch vendors", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  if (loading) {
    return <p>Loading vendors...</p>;
  }

  return (
    <div className="common-table-wrapper mt-4">
      <table className="common-table table-striped">
        <thead>
          <tr>
            <th>Vendor ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Advance Amount</th>
            <th>Pending Amount</th>
            <th>Buy Stock</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {vendors.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-center">
                No vendors found
              </td>
            </tr>
          ) : (
            vendors.map((vendor) => (
              <tr key={vendor.id}>
                <td className="time-cell">{vendor.vendor_code}</td>
                <td className="time-cell">{vendor.name}</td>
                <td className="time-cell">{vendor.email || "-"}</td>
                <td className="time-cell">{vendor.phone_number}</td>
                <td className="hours-cell">
                  ₹ {Number(vendor.advance_amount || 0).toLocaleString()}
                </td>
                <td className="hours-cell">
                  ₹ {Number(vendor.pending_amount || 0).toLocaleString()}
                </td>
                <td className="hours-cell">{vendor.stock || 0}</td>
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
