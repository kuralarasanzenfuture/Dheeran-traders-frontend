import { Link } from "react-router-dom";
import { VendorTable } from "../../../../components/tables/VendorTable";

export const VendorList = () => {
  return (
    <>
      <div className="product_detail">
        <div className="mb-4">
          <div className="row gy-3 align-items-center">
            <div className="col-lg-12 ">
              <div className="d-flex justify-content-end gap-3 align-items-center">
                <div className="search-box ">
                  <input type="text" className="search-input" placeholder="Search..." />
                  <i className="bi bi-search search-icon"></i>
                </div>
                <div className="add-btn">
                  <Link to="/add-vendors" className="btn main-btn">
                    Add Vendors +
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <VendorTable />
      </div>
    </>
  );
};
