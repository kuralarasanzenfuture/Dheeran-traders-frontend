import { Link } from "react-router-dom";
import { CustomerTable } from "../../../../components/tables/CustomerTable";


export const CustomerList = () => {
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
                <Link to="/add-customer" className="btn main-btn">Add Customers +</Link>
               </div>
              </div>
             
            </div>

          </div>
        </div>
        <CustomerTable />
      </div>
    </>
  );
};
