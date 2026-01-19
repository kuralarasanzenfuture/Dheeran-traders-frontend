import React from "react";

export const AddProduct = () => {
  return (
    <>
      <div className="row gy-4">
        <div className="col-lg-12">
          <div className="form_element">
            <div className="form_title">
              <h5 className="title">Add Product</h5>
            </div>
            <div className="form_content">
              <form action="" className="row gy-3">
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Product ID
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder="Product Id" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Product Name
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder="Product Name" />
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
                    Product Price
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder="Price" />
                </div>
                <div className="col-md-3">
                  <button type="submit" className="btn main-btn">
                    Add categorey
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
