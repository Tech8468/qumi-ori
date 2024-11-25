import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-board">
        <Link to="/">
          <h1 className="log">Qumi-Ori Resources</h1>
        </Link>
        <div className="footer-link">
          <ul>
            <Link to="/about">
            <li>About Us</li>
            </Link>
            <Link to="/product">
            <li>Product</li>
            </Link>
            <Link to="/contact">
            <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="footer-care">
          <h2>Customer Care</h2>
          <p>Email: qumiori.consumables@gmail.com</p>
          <p>WhatsApp: +2347066758468</p>
        </div>
      </div>
      <div className="copyright">
        <p>�� 2024 Qumi-Ori Resources. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
