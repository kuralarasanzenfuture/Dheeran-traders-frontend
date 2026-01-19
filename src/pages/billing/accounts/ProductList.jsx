
import { ProductTable } from "../../../components/tables/ProductTable";

export const ProductList = () => {
  return (
    <>
      <div className="product_detail">
        <div className="mb-4">
          <div className="row gy-3 align-items-center">
            <div className="col-lg-12">
              <div className="d-flex gap-3 align-items-center justify-content-end">
                <div className="d-flex gap-3 align-items-center">
                  <div class="dropdown">
                    <button class="btn filter-button btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Brand
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Bullet
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Bhasmathi
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Ponni
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown">
                    <button class="btn filter-button btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Categorey
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Half Boil
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Full Boil
                        </a>
                      </li>
                     
                    </ul>
                  </div>
                </div>
                <div className="search-box ">
                  <input type="text" className="search-input" placeholder="Search..." />
                  <i className="bi bi-search search-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductTable />
      </div>
    </>
  );
};
