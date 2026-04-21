import React from "react";
import { Link } from "react-router-dom";
import Pix1 from "./img/bp-icon.png";
import Pix2 from "./img/fast-delivery.png";
import Pix3 from "./img/integrity-icon.png";
import Pix4 from "./img/Brand_Efficiency.png";
import Pix5 from "./img/BUA.png";
import Pix6 from "./img/Interstyle.png";
import Pix7 from "./img/Titan.jpg";
import Pix8 from "./img/Raumplus.png";
import Pix9 from "./img/TOFA.jpg";
import HeroPrinter from "./img/backdrop3.png";

const features = [
  {
    title: "Great value, reliable quality",
    text: "We provide tested toner and printer consumables that help reduce print cost without compromising output quality.",
    icon: Pix1,
  },
  {
    title: "Fast and dependable fulfillment",
    text: "Orders are processed quickly and delivered on schedule so your teams can keep operations running smoothly.",
    icon: Pix2,
  },
  {
    title: "Integrity in service delivery",
    text: "We prioritize transparent communication and practical guidance to help you choose the right print solution.",
    icon: Pix3,
  },
  {
    title: "Support that scales with you",
    text: "Whether you need one cartridge or recurring enterprise support, our team is ready to help.",
    icon: Pix4,
  },
];

const clients = [Pix5, Pix6, Pix7, Pix8, Pix9];
const marqueeClients = [...clients, ...clients, ...clients];

function Home() {
  return (
    <main className="page-main">
      <div className="container">
        <section className="hero">
          <div className="hero-copy">
            <span className="hero-kicker">Business print supply partner</span>
            <h1>Modern printing supplies for growing teams.</h1>
            <p>
              Qumi-Ori Resources helps businesses across industries maintain
              consistent print performance with dependable toner cartridges,
              printers, and responsive support.
            </p>
            <div className="hero-cta">
              <Link to="/product" className="btn btn-primary">
                Browse products
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Request a quote
              </Link>
            </div>
          </div>
          <div className="hero-media">
            <img src={HeroPrinter} alt="HP laser printer" />
          </div>
        </section>

        <section className="section">
          <h2>Why teams choose Qumi-Ori</h2>
          <p className="section-intro">
            We combine quality products with practical support from ordering to
            delivery.
          </p>
          <div className="grid feature-grid">
            {features.map((feature) => (
              <article className="card feature-card" key={feature.title}>
                <img src={feature.icon} alt={feature.title} />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Trusted by businesses</h2>
          <p className="section-intro">
            We are proud to support these organizations with their print supply
            needs.
          </p>
          <div className="logo-marquee">
            <div className="logo-track">
              {marqueeClients.map((logo, index) => (
                <div className="logo-item" key={`${logo}-${index}`}>
                  <img src={logo} alt="Client logo" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section card">
          <h2>Need help choosing the right printer supplies?</h2>
          <p className="section-intro">
            Tell us your printer model and monthly print volume, and we will
            recommend the best-fit toner solution.
          </p>
          <div className="hero-cta">
            <Link to="/about" className="btn btn-ghost">
              Learn about us
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Contact sales
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
export default Home;
