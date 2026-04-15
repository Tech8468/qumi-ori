import { Link } from "react-router-dom";
import Logo from "./img/qumi_logo_2.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { WHATSAPP_URL } from "./siteConfig";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div className="footer-brand">
          <Link to="/">
            <img src={Logo} alt="Qumi-Ori" />
          </Link>
          <p>
            Reliable toner and printer supply partner for businesses that value
            quality output, responsive service, and timely delivery.
          </p>
        </div>
        <div className="footer-links">
          <strong>Quick links</strong>
          <Link to="/about">About</Link>
          <Link to="/product">Products</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <strong>Customer care</strong>
          <span>qumiori.consumables@gmail.com</span>
          <span>+234-901-6454-261</span>
          <div className="footer-socials">
            <Link to="/" aria-label="Instagram">
              <FaInstagram />
            </Link>
            <Link to="/" aria-label="Facebook">
              <FaFacebook />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <PiWhatsappLogoLight />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <p>{year} Qumi-Ori Resources. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
