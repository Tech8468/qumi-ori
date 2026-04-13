import { Link } from "react-router-dom";
import Pix1 from "./img/toner1.jpg";
import Pix2 from "./img/astaBrand.jpg";
import Pix3 from "./img/tonerPr.jpg";
import Pix4 from "./img/Hp-printer.png";

const products = [
  {
    name: "Black Toner Cartridges",
    description:
      "High-precision monochrome toner designed for clear text, clean graphics, and dependable page yield.",
    image: Pix1,
  },
  {
    name: "Color Toner Cartridges",
    description:
      "OEM-compatible CMYK options for reports, presentations, and marketing materials that need color accuracy.",
    image: Pix2,
  },
  {
    name: "LaserJet Printer Series",
    description:
      "Efficient black and color laser printers for home offices, SMEs, and enterprise print workflows.",
    image: Pix4,
  },
];

function Product() {
  return (
    <main className="page-main">
      <div className="container">
        <section className="section">
          <h2>Products</h2>
          <p className="section-intro">
            We stock reliable print products designed for professional output
            and predictable running costs.
          </p>
          <div className="grid product-grid">
            {products.map((product) => (
              <article className="card product-card" key={product.name}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section card">
          <div className="about-layout">
            <div className="text-block">
              <h3>Managed supply support</h3>
              <p>
                Need recurring fulfillment for multiple branches or departments?
                We can structure periodic delivery based on your consumption
                pattern and supported printer models.
              </p>
              <div className="hero-cta">
                <Link to="/contact" className="btn btn-primary">
                  Make an order
                </Link>
              </div>
            </div>
            <div className="card image-card">
              <img src={Pix3} alt="Printer consumable products" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
export default Product;
