import Nav from "../Nav";
import Footer from "../Footer";
import Home from "../Home";

function HomePage() {
  return (
    <div className="site-shell">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default HomePage;