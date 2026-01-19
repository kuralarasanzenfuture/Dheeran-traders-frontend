import React, { useEffect, useState } from "react";
import { getCustomers } from "../../services/customer.service";

export const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCustomers = async () => {
    try {
      const res = await getCustomers();
      setCustomers(res.data);
    } catch (error) {
      console.error("Failed to fetch customers", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  if (loading) {
    return <p>Loading customers...</p>;
  }

  return (
    <div className="common-table-wrapper mt-4">
      <table className="common-table table-striped">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Advance Amount</th>
            <th>Pending Amount</th>
            <th>Buy Stock</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td colSpan="9" className="text-center">
                No customers found
              </td>
            </tr>
          ) : (
            customers.map((customer) => (
              <tr key={customer.id}>
                <td className="time-cell">{customer.customer_code}</td>
                <td className="time-cell">{customer.name}</td>
                <td className="time-cell">{customer.email || "-"}</td>
                <td className="time-cell">{customer.phone_number}</td>
                <td className="hours-cell">
                  ₹ {Number(customer.advance_amount || 0).toLocaleString()}
                </td>
                <td className="hours-cell">
                  ₹ {Number(customer.pending_amount || 0).toLocaleString()}
                </td>
                <td className="hours-cell">{customer.stock || 0}</td>
                <td className="hours-cell">
                  ₹ {Number(customer.total || 0).toLocaleString()}
                </td>
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
