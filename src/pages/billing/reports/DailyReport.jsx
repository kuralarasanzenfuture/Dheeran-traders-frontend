import React from "react";
import { CustomerTable } from "../../../components/tables/CustomerTable";

export const DailyReport = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="d-md-flex align-items-center justify-content-between">
            <div className="search-box">
              <input type="text" className="search-input" placeholder="Search..." />
              <i className="bi bi-search search-icon"></i>
            </div>
            <div className="d-flex gap-2 flex-wrap justify-content-md-end mt-3">
              <button className="excel-btn">
                <i class="fi fi-tr-file-excel"></i>Export Excel
              </button>
              <button className="pdf-btn">
                <i class="fi fi-tr-file-pdf"></i>Pdf
              </button>
              <button className="print-btn">
                <i class="fi fi-tr-print"></i>Print 
              </button>
            </div>
          </div>
          <CustomerTable />
        </div>
      </div>
    </>
  );
};
