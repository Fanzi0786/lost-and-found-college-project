import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="home-page"
      style={{
        backgroundImage:
          "url('https://tse1.mm.bing.net/th/id/OIP.gDyei4X3HW1RK2aQHqkFiwHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <section className="hero">
        <div className="hero-content">
          <p className="hero-university">INVERTIS UNIVERSITY</p>

          <h1>Campus Lost & Found Portal</h1>

          <p className="hero-text">
            A New platform for Invertis University students to
            report lost items and help return found belongings to their rightful
            owners.
          </p>

          <div className="hero-buttons">
            <Link to="/lost-items">
              <button className="primary-btn">Find Lost Items</button>
            </Link>

            <Link to="/found-items">
              <button className="secondary-btn">View Found Items</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>How It Works</h2>

        <p className="section-subtitle">
          Helping students connect with their lost belongings.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">01</div>
            <h3>Report Lost</h3>
            <p>Submit details about an item you have lost on campus.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">02</div>
            <h3>Report Found</h3>
            <p>Report an item you found so the owner can identify it.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">03</div>
            <h3>Reconnect</h3>
            <p>Search reported items and help belongings reach their owners.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
