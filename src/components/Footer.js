import { Link } from "react-router-dom";
import Logo from "./img/qumi_logo_2.png";
import { PiCopyright } from "react-icons/pi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { PiWhatsappLogoLight } from "react-icons/pi";


function Footer() {
  return (
    <div className="footer">
      <div className="footer-board">
        <Link to="/">
          <img src={Logo} alt="" />
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
          <p>Phone: +234-901-6454-261</p>
          <div className="footerSocial">
            <Link to="/">
              <FaInstagram className="instagram" />
            </Link>
            <Link to="/">
              <FaFacebook className="facebook" />
            </Link>
            <Link to="/">
              <FaLinkedin className="linkedin" />
            </Link>
            <Link to="https://wa.me/07066758468" target="_blank" rel="noopener noreferrer">
              <PiWhatsappLogoLight className="whatsApp" />
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          <PiCopyright className="cpy" />
          2025 Qumi-Ori Resources. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
