import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./sidebar.css";

/* ================= HELPERS ================= */
const isActive = (path, current) =>
  current === path || current.startsWith(path + "/");

const isAnyActive = (paths, current) =>
  paths.some((p) => isActive(p, current));

export const Sidebar = () => {
  /* ================= STATE ================= */
  const [openMain, setOpenMain] = useState(null);
  const [openSub, setOpenSub] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  /* ================= MOBILE TOGGLE ================= */
  useEffect(() => {
    const handler = () => setMobileOpen((prev) => !prev);
    window.addEventListener("toggle-sidebar", handler);
    return () => window.removeEventListener("toggle-sidebar", handler);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 992) {
      setMobileOpen(false);
    }
  }, [location.pathname]);

  /* ================= AUTO OPEN BILLING ================= */
  useEffect(() => {
    if (
      ["/dashboard", "/employees", "/products", "/accounts", "/report"].some(
        (p) => location.pathname.startsWith(p)
      )
    ) {
      setOpenMain("billing");
    }
  }, []);

  return (
    <aside className={`sidebar ${mobileOpen ? "mobile_open" : ""}`}>
      {/* ================= HEADER ================= */}
      <div className="sidebar_header">
        <div className="header_logo">
          <Link to="/dashboard">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <button
          className="sidebar_close_btn d-lg-none"
          onClick={() => setMobileOpen(false)}
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </div>

      {/* ================= MENU ================= */}
      <ul className="sidebar_menu_items">
        <li className={`sidebar_menu ${openMain === "billing" ? "open" : ""}`}>
          <div
            className="menu_header"
            onClick={() =>
              setOpenMain(openMain === "billing" ? null : "billing")
            }
          >
            <span className="sidebar_icon">
              <i className="fi fi-tr-calculator-money"></i>
            </span>
            <span className="sidebar_text">Billing</span>
            <i className="fi fi-tr-angle-small-down arrow"></i>
          </div>

          {openMain === "billing" && (
            <ul className="submenu pd-l15">
              {/* DASHBOARD */}
              <li
                className={`sidebar_menu ${
                  isActive("/dashboard", location.pathname) ? "active" : ""
                }`}
              >
                <Link to="/dashboard" className="menu_header">
                  <span className="sidebar_icon">
                    <i className="fi fi-tr-objects-column"></i>
                  </span>
                  <span className="sidebar_text">Dashboard</span>
                </Link>
              </li>

              {/* EMPLOYEES (SINGLE PAGE) */}
              <li
                className={`sidebar_menu pd-l15 ${
                  isActive("/employees", location.pathname) ? "active" : ""
                }`}
              >
                <Link to="/employees" className="menu_header">
                  <span className="sidebar_icon">
                    <i className="fi fi-tr-employee-man"></i>
                  </span>
                  <span className="sidebar_text">Employees</span>
                </Link>
              </li>

              {/* PRODUCTS */}
              <li
                className={`sidebar_menu pd-l15 ${
                  isAnyActive(["/products"], location.pathname)
                    ? "active"
                    : ""
                }`}
              >
                <div
                  className="menu_header"
                  onClick={() =>
                    setOpenSub(openSub === "products" ? null : "products")
                  }
                >
                  <span className="sidebar_icon">
                    <i className="fi fi-tr-box-open-full"></i>
                  </span>
                  <span className="sidebar_text">Products</span>
                  <i className="fi fi-tr-angle-small-down arrow"></i>
                </div>

                {openSub === "products" && (
                  <ul className="submenu submenu_list pd-l25">
                    <li><Link to="/products/add-product">Add Product</Link></li>
                    <li><Link to="/products/add-brand">Brand</Link></li>
                    <li><Link to="/products/add-categorey">Category</Link></li>
                    <li><Link to="/products/add-quantity">Quantity</Link></li>
                  </ul>
                )}
              </li>

              {/* ACCOUNTS */}
              <li
                className={`sidebar_menu pd-l15 ${
                  isAnyActive(["/accounts"], location.pathname)
                    ? "active"
                    : ""
                }`}
              >
                <div
                  className="menu_header"
                  onClick={() =>
                    setOpenSub(openSub === "accounts" ? null : "accounts")
                  }
                >
                  <span className="sidebar_icon">
                    <i className="fi fi-tr-calculator-bill"></i>
                  </span>
                  <span className="sidebar_text">Accounts</span>
                  <i className="fi fi-tr-angle-small-down arrow"></i>
                </div>

                {openSub === "accounts" && (
                  <ul className="submenu submenu_list pd-l25">
                    <li><Link to="/accounts/product-list">Products</Link></li>
                    <li><Link to="/accounts/customers">Customers</Link></li>
                    <li><Link to="/accounts/vendors">Vendors</Link></li>
                  </ul>
                )}
              </li>

              {/* REPORT */}
              <li
                className={`sidebar_menu pd-l15 ${
                  isAnyActive(["/report"], location.pathname)
                    ? "active"
                    : ""
                }`}
              >
                <div
                  className="menu_header"
                  onClick={() =>
                    setOpenSub(openSub === "report" ? null : "report")
                  }
                >
                  <span className="sidebar_icon">
                    <i className="fi fi-tr-file-spreadsheet"></i>
                  </span>
                  <span className="sidebar_text">Report</span>
                  <i className="fi fi-tr-angle-small-down arrow"></i>
                </div>

                {openSub === "report" && (
                  <ul className="submenu submenu_list pd-l25">
                    <li><Link to="/report/daily">Daily</Link></li>
                    <li><Link to="/report/weekly">Weekly</Link></li>
                    <li><Link to="/report/monthly">Monthly</Link></li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* ================= FOOTER ================= */}
      <div className="sidebar_footer">
        <Link to="/logout" className="footer_item">
          <span className="sidebar_icon">
            <i className="fi fi-tr-sign-out-alt"></i>
          </span>
          <span className="sidebar_text">Logout</span>
        </Link>
      </div>
    </aside>
  );
};
