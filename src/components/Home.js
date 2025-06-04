import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Pix1 from "./img/bp-icon.png";
import Pix2 from "./img/fast-delivery.png";
import Pix3 from "./img/integrity-icon.png";
import Pix4 from "./img/Brand_Efficiency.png";
import Pix5 from "./img/BUA.png";
import Pix6 from "./img/Interstyle.png";
import Pix7 from "./img/Titan.jpg";
import Pix8 from "./img/Raumplus.png";
import Pix9 from "./img/TOFA.jpg";

let index = 0;
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeInAnimateView = {
  initial: { opacity: 0, y: 100 },
  animate: (index)=>({ opacity: 1, y: 0, transition: { duration: 0.8 } }),
}

function Home() {
  return (
    <div className="banner">
      <div className="section">
        <motion.div
          id="home"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          className="welcome"
        >
          <div className="welcome">
            <h1>Welcome to your Laserjet Toner Hub</h1>

            <p> ...quality product, best value...</p>
          </div>
        </motion.div>
        <Link to="/about">
          <button className="menuBtn">Learn more</button>
        </Link>
      </div>

      <div className="section2">
        <motion.div
          id="section2"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
        >
          <div className="col1">
            <h2>Why choose us?</h2>
          </div>
          </motion.div>
          {/* <motion.div
          id="col2"
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimateView}
          viewport={{ once: true }}
          custom={index}
        > */}
          <motion.div
          key="index"
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimateView}
          viewport={{ once: true }} 
          className="col2"
          custom={index++}>
            <div className="tab1">
              <img src={Pix1} alt="" className="Img-1" />
              <h1>Good price, Good quality!</h1>
              <p>
                At our laserjet toner hub, our commitment to delivering
                high-quality products sets us apart. We strive to provide our
                customers with nothing but the best, meticulously crafting and
                delivering exceptional products at competitive prices..
              </p>
            </div>
            <div className="tab2">
              <img src={Pix2} alt="" className="Img-1" />
              <h1>Professional service, Fast delivery!</h1>
              <p>
                We understand that our customers are busy, and we want to make
                sure they receive their products as soon as possible. That's why
                we offer our customers a fast and efficient service, ensuring
                that they can enjoy their laserjet toners without any hassle.
              </p>
            </div>
            <div className="tab3">
              <img src={Pix3} alt="" className="Img-1" />
              <h1>Customer satisfaction, Integrity driven!</h1>
              <p>
                Integrity is emphasized as the core value that guides all
                aspects of our business. This commitment to ethical standards
                encompasses our dealings with customers, employees, partners,
                and the communities we engage with. Honesty, transparency, and
                fairness are the guiding principles behind every business
                practice we undertake.
              </p>
            </div>
            <div className="tab4">
              <img src={Pix4} alt="" className="Img-1" />
              <h1>We're here to help, always!</h1>
              <p>
                If you're unsure about whether you need a laserjet toner, or if
                you have any questions about our services, don't hesitate to
                reach out. We're here to support you and help you find the best
                solution for your needs.
              </p>
            </div>
          </motion.div>
        {/* </motion.div> */}
      </div>
      <motion.div
        id="section3"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        className="section3"
      >
        <div className="section3">
          <h2>Our Products</h2>
          <p>Check out our products!</p>
          <Link to="/product">
            <button className="menuBtn">See all products</button>
          </Link>
        </div>
      </motion.div>
      <div className="section4">
        {/* <motion.div
          id="section4"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
        > */}
          <div className="col1">
            <h1>Meet our amazing customers!</h1>
            <p>We are proud to work with these amazing companies!</p>
          </div>
          <div className="col2">
            <div>
            <img src={Pix5} alt="" className="clientLogo" />
            <img src={Pix6} alt="" className="clientLogo" />
            <img src={Pix7} alt="" className="clientLogo" />
            <img src={Pix8} alt="" className="clientLogo" />
            <img src={Pix9} alt="" className="clientLogo" />
            <img src={Pix5} alt="" className="clientLogo" />
            <img src={Pix6} alt="" className="clientLogo" />
            <img src={Pix7} alt="" className="clientLogo" />
            <img src={Pix8} alt="" className="clientLogo" />
            <img src={Pix9} alt="" className="clientLogo" />
            </div>
          </div>
        {/* </motion.div> */}
      </div>
      <div className="section5"></div>
    </div>
  );
}
export default Home;
