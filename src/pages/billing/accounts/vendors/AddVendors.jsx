import React from "react";

export const AddVendors = () => {
  return (
    <>
      <div className="row gy-4 align-items-center justify-content-center">
        <div className="col-lg-12">
          <div className="form_element">
            <div className="form_title">
              <h5 className="title">Add Vendors</h5>
            </div>
            <div className="form_content">
              <form action="" className="row gy-3 align-items-center justify-content-between">
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Vendor ID
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder="Vendor ID" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Vendor Name
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder="Vendor Name" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Email
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder="Email" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Phone
                  </label>
                  <input type="number" className="form-control" name="" id="" placeholder="Phone" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Product Name
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder="Product Name" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Product ID
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder="Product Id" />
                </div>

                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Product Brand
                  </label>
                  <select name="" id="" className="form-select">
                    <option value="">Select</option>
                    <option value="Bullet">Bullet</option>
                    <option value="Surya">Surya</option>
                    <option value="Ponni">Ponni</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Product Categorey
                  </label>
                  <select name="" id="" className="form-select">
                    <option value="">Select</option>
                    <option value="Bullet">Half Boil</option>
                    <option value="Surya">Full Boil</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Product Quantity
                  </label>
                  <select name="" id="" className="form-select">
                    <option value="">Select</option>
                    <option value="Bullet">5 kg</option>
                    <option value="Surya">10 Kg</option>
                    <option value="Ponni">26 Kg</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Purchase Stock
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder="Purchase Stock" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Total Price
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder="Total" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Advance Amount
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder="Advance" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Pending Amount
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder="  Pending Amount" />
                </div>
                <div className="col-md-4 align-self-end text-end">
                  <button type="submit" className="btn main-btn">
                    Add Vendor
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
