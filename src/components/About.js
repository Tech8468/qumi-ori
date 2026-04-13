import AboutImage from "./img/africa2.png";

function About() {
  return (
    <main className="page-main">
      <div className="container">
        <section className="section">
          <h2>About Qumi-Ori Resources</h2>
          <p className="section-intro">
            We provide practical, cost-efficient printing solutions built for
            businesses that value reliability.
          </p>
          <div className="about-layout">
            <div className="text-stack">
              <article className="card text-block">
                <h3>What we do</h3>
                <p>
                  We supply and distribute toner cartridges and printer-related
                  products for organizations looking to improve print quality
                  while reducing total printing cost. Our support team also
                  helps clients identify the right cartridge and maintenance
                  needs for current and legacy printer models.
                </p>
              </article>
              <article className="card text-block">
                <h3>Vision statement</h3>
                <p>
                  To become a leading African brand for dependable printing
                  solutions through consistent quality, operational efficiency,
                  and trusted client relationships.
                </p>
              </article>
              <article className="card text-block">
                <h3>Brand promise</h3>
                <p>
                  Quality products, responsive support, and timely delivery at
                  competitive pricing.
                </p>
              </article>
            </div>
            <div className="card image-card">
              <img src={AboutImage} alt="Qumi-Ori service coverage" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
export default About;