import { Link } from "react-router-dom";
import Pix1 from "./img/toner1.jpg";
// import Pix2 from "./img/toner.webp";
// import Pix3 from "./img/backdrop2.jpg";
import Pix2 from "./img/astaBrand.jpg";
import Pix3 from "./img/tonerPr.jpg";
import Pix4 from "./img/Hp-printer.png";
// import 'product.css' from "./src/product.css";

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import { useHistory } from "react-router-dom";

function Product() {
  return (
    // <div className="prodWrapper ">
    //     <div className="prodContainer ">
    //         <div className="title">
    //             <div className="scroll">
    //                 <div className="slider">
    //                     <img src={Pix1} alt="" />
    //                 </div>
    //                 <div className="slider">
    //                     <img src={Pix2} alt="" />
    //                 </div>
    //                 <div className="slider">
    //                     <img src={Pix3} alt="" />
    //                 </div>
    //                 <div className="slider">
    //                     <img src={Pix4} alt="" />
    //                 </div>
    //                 <div className="slider">
    //                     <img src={Pix5} alt="" />
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    // </div>

    <div className="prodWrapper ">
      <div className="prodContainer">
        <div className="tonerProd">
          <div className="col1">
            <div className="blackToner">
              <div className="imageContainer">
                <img src={Pix1} alt="" />
              </div>
              <div className="txtContainer">
                <h1>Laserjet toner cartridges - BLACK TONER</h1>
                <p>
                  Precision Printing, Unmatched Performance Keep your documents
                  looking sharp and professional with our LaserJet Printer Black
                  Toner Cartridges. Engineered for consistent performance, these
                  cartridges deliver crisp, clear text and images with every
                  print. Whether you're printing at home or in the office, enjoy
                  flawless results that exceed expectations.
                </p>
              </div>
            </div>
            <div className="colorToner">
              <div className="imageContainer">
                <img src={Pix2} alt="" />
              </div>
              <div className="txtContainer">
                <h1>Laserjet toner cartridges - COLOR TONER</h1>
                <p>
                  High yield OEM range of color laserjet toner cartridges{" "}
                  <span>(Black, Cyan, Magenta, Yellow)</span> made with genuine
                  manufacturer componnents for best quality print. Whether it's
                  for business reports, marketing materials, or creative
                  projects, these cartridges ensure your prints leave a lasting
                  impression.
                </p>
              </div>
            </div>
          </div>
          <div className="col2">
            <img className="proImg" src={Pix3} alt="" />
            <Link to="/contact">
              <button className="orderBtn1">Make your Order</button>
            </Link>
          </div>
        </div>
        <div className="printerProd">
          <div className="col1">
            <img className="proImg" src={Pix4} alt="" />
            <Link to="/contact">
              <button className="orderBtn2">Make your Order</button>
            </Link>
          </div>
          <div className="col2">
            <h1>Black LaserJet Printer</h1>
            <span>Effortless Printing, Every Time </span>
            <p>
              Experience unmatched reliability and precision with our Black
              LaserJet Printer, designed to handle high-volume tasks with ease.
              Perfect for home offices or businesses, this printer ensures
              crisp, clear text and sharp monochrome images on every page.
            </p>
            <h1>Colored LaserJet Printer</h1>
            <span>Bring Your Prints to Life</span>
            <p>
              Transform ordinary documents into vibrant masterpieces with the
              Colored LaserJet Printer. Designed for those who demand both
              quality and style, this printer delivers brilliant colors and
              detailed prints that make an impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
