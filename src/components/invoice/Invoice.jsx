import "./invoice.css";
import logo1 from "../../assets/images/logo-1.png";
import logo2 from "../../assets/images/logo-2.png";
import qr from "../../assets/images/qr.png";

export const Invoice = () => {
  return (
    <div className="invoice-box">
      <div style={{ border: "2px solid #000" }}>
        <div className="header">
          <div className="header-top">
            <span className="copy-type">Original / Duplicate / Accounts Copy</span>
          </div>

          <div className="header-bottom">
            <div className="left">
              <img src={logo1} alt="" />
            </div>

            <div className="center">
              <div className="center-top">
                <h1>
                  DHEERAN TRADERS <sup>TM</sup>
                </h1>
              </div>

              <div className="center-bottom">
                <p>
                  Registered: 5/218/1, Pennagaram Main Road, Sogathur, <br />
                  Dharmapuri, Tamil Nadu, 636809
                </p>
              </div>
            </div>

            <div className="right">
              <img src={logo2} alt="" />
            </div>
          </div>

          <div className="quote-box">
            <p>"மனிதனை மனிதனாக மதிப்போம்"! "வேற்றுமையில் ஒற்றுமை காண்போம்"!!</p>
            <p className="big">செய்வது துணிந்து செய்</p>
          </div>
        </div>

        <div className="info-section">
          <div className="contact-info">
            <div className="padd">
              <p>
                <strong>Email:</strong> dheerantradersthennarasu@gmail.com
              </p>
              <p>
                <strong>Website:</strong> www.dheerantrades.com
              </p>
              <p>
                <strong>GSTIN:</strong> 33AXPPT5859E1ZW
              </p>
            </div>
          </div>

          <div className="invoice-details">
            <div className="padd-1">
              <p>
                <strong>INVOICE:</strong> <span style={{ color: "#a52a2a" }}>DTT/1784/25-26</span>
              </p>
              <div className="date-info">Friday, December 19, 2025</div>
              <p>TN29CD5389</p>
            </div>
          </div>
        </div>

        <div className="customer-section">
          <div className="customer-section-top">
            <p>CUSTOMER ADDRESS</p>
          </div>

          <div style={{ display: "flex" }}>
            <div className="customer-address" style={{ width: "70%" }}>
              <p>NAVEEN MALLIGAI, VARAGUR</p>
              <p>
                <strong>Phone:</strong> +91 9843514642
              </p>
            </div>
            <div className="customer-address" style={{ width: "30%" }}>
              <p>
                <strong>GSTIN:</strong>
              </p>
              <p>
                <strong>Staff Name:</strong> <span style={{ color: "#a52a2a" }}>NAVEEN</span>
              </p>
            </div>
          </div>
        </div>

        <table className="invoice-table">
          <thead>
            <tr>
              <th width="7%">SI No</th>
              <th width="42%">DESCRIPTION</th>
              <th width="10%">HSN</th>
              <th width="10%">QTY</th>
              <th width="15%">RATE</th>
              <th width="15%">AMOUNT</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td className="text-left">SLS POWER</td>
              <td></td>
              <td>1</td>
              <td>1400</td>
              <td>1400</td>
            </tr>

            <tr>
              <td>2</td>
              <td className="text-left">MANGALYAM</td>
              <td></td>
              <td>1</td>
              <td>1320</td>
              <td>1320</td>
            </tr>

            <tr>
              <td>3</td>
              <td className="text-left">ANNAPURNA N</td>
              <td></td>
              <td>1</td>
              <td>1150</td>
              <td>1150</td>
            </tr>

            <tr className="empty-row">
              <td>4</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>0</td>
            </tr>

            <tr className="empty-row">
              <td>5</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>0</td>
            </tr>

            <tr className="empty-row">
              <td>6</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>0</td>
            </tr>
          </tbody>

          <tbody className="footer-body">
            <tr>
              <td colSpan="2"></td>
              <td>Total Bags</td>
              <td>3</td>
              <td>Subtotal</td>
              <td>3870</td>
            </tr>

            <tr>
              <td colSpan="4">
                <h5 style={{ fontSize: "20px", margin: 0 }}>Disclaimer</h5>
                <p style={{ fontWeight: 400, margin: "3px 0" }}>
                  Goods sold under this invoice are unregistered brand names & supply under GST chargeable to 0% tax.
                </p>
              </td>
              <td></td>
              <td>-</td>
            </tr>

            <tr>
              <td
                colSpan="4"
                style={{
                  textAlign: "right",
                  color: "#a52a2a",
                }}>
                #48 மணி நேரத்திற்கு பிறகு திரும்பபெற இயலாது*
              </td>
              <td style={{ fontSize: "16px" }}>Total</td>
              <td className="grand-total">3,870.00</td>
            </tr>

            <tr>
              <td colSpan="4">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ margin: " 0px 30px" }}>
                    <img src={qr} style={{ width: "80px" }} alt="" />
                  </div>
                  <div className="bank-details">
                    <strong>OUR BANK DETAILS:</strong>
                    <br />
                    BANK NAME: HDFC BANK
                    <br />
                    ACCOUNT NAME: DHEERAN TRADERS
                    <br />
                    A/C: 50200092427777
                    <br />
                    IFSC CODE: HDFC0001006 | BRANCH: DHARMAPURI
                  </div>
                </div>
              </td>

              <td colSpan="2">
                <div className="signature">
                  <h6 style={{ margin: "2px 0", fontSize: "16px" }}>For DHEERAN TRADER</h6>
                  <p style={{ margin: "2px 0" }}>Proprietor</p>
                </div>
              </td>
            </tr>

            <tr>
              <td colSpan="6">
                <div className="disclaimer">
                  <span>For Reg :</span>
                  Mathikonpalayam, Tirupattur Road, Dharmapuri, Tamil Nadu-636 701
                  <br />
                  If you have any questions about this invoice,
                  <br />
                  Please contact Phone No. +91 9865065260 & Email ID: dheerantradersthennarasu@gmail.com
                  <br />
                  <strong>Thank You For Your Business!</strong>
                  <br />
                  "the system generated signature not required"
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
