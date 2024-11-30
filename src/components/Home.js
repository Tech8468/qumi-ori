import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homeBanner">
      <div className="section1">
        <h1>Welcome to your Laserjet Toner Hub</h1>
        <p> ...quality product, best value...</p>

        <Link to="/about">
          <button className="menuBtn">Learn more</button>
        </Link>
      </div>
      <div className="section2">
        <div className="col1">
          <h2>Why choose us?</h2>
        </div>
        <div className="col2">
          <div className="tab1">
            <h1>Good price, Good quality!</h1>
            <p>
              At our laserjet toner hub, our commitment to delivering
              high-quality products sets us apart. We strive to provide our
              customers with nothing but the best, meticulously crafting and
              delivering exceptional products at competitive prices..
            </p>
          </div>
          <div className="tab2">
            <h1>Professional service, Fast delivery!</h1>
            <p>
              We understand that our customers are busy, and we want to make
              sure they receive their products as soon as possible. That's why
              we offer our customers a fast and efficient service, ensuring that
              they can enjoy their laserjet toners without any hassle.
            </p>
          </div>
          <div className="tab3">
            <h1>Customer satisfaction, Integrity driven!</h1>
            <p>
              Integrity is emphasized as the core value that guides all aspects
              of our business. This commitment to ethical standards encompasses
              our dealings with customers, employees, partners, and the
              communities we engage with. Honesty, transparency, and fairness
              are the guiding principles behind every business practice we
              undertake.
            </p>
          </div>
          <div className="tab4">
            <h1>We're here to help, always!</h1>
            <p>
              If you're unsure about whether you need a laserjet toner, or if you
              have any questions about our services, don't hesitate to reach out.
              We're here to support you and help you find the best solution for your
              needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
