import './App.css';
import logo from './assets/logo.png';
import car1 from '/car1.png';
import car2 from '/car2.png';
import car3 from '/car3.png';

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <img src={logo} alt="Kope's Kustomz Logo" className="logo" />
        <h1 className="site-title">Kope's Kustomz</h1>
        <div className="social-links">
          <a href="https://www.instagram.com/kopeskustomz" target="_blank" rel="noopener noreferrer">
            <button className="instagram-btn">Instagram</button>
          </a>
          </div>
        {/* <button className="book-btn" onClick={() => window.location.href='https://kopes-kustomz.square.site'}>
          Book Appointment</button> */}
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Premium Auto Detailing</h2>
        <p>Experience professional detailing with a sleek, modern touch.</p>
        <p>STOCKTON CA</p>
      </section>
      <div className="book-container">
      <button className="book-btn" onClick={() => window.location.href='https://kopes-kustomz.square.site'}>
      Book Appointment
      </button>
      </div>
      <div className="gradient-divider"></div>
      {/* Showcase / Gallery */}
      <section className="gallery">
        <h2>Recent Work</h2>
        <div className="gallery-grid">
          <img src="/car1.png" alt="Detailed Car 1" className="gallery-img" />
          <img src="/car2.png" alt="Detailed Car 2" className="gallery-img" />
          <img src="/car3.png" alt="Detailed Car 3" className="gallery-img" />
        </div>
      </section>
      <div className="gradient-divider"></div>
      {/* Packages & Pricing */}
      <section className="pricing">
        <h2>Our Packages</h2>
        <div className="pricing-grid">
          <div className="package">
            <h3>Basic Package</h3>
            <p>$50</p>
            <p>•	Hand Wash (Exterior)</p>
            <p>•	Quick Exterior Wax (Spray Wax for Shine & Protection)</p>
	          <p>•	Interior Vacuuming (Seats, Floors, & Mats)</p>
	          <p>•	Interior Wipe Down (Dashboard, Console, & Door Panels)</p>
	          <p>•	Window Cleaning (Inside & Outside)</p>
          </div>
          <div className="package">
            <h3>Premium Package</h3>
            <p>$100</p>
            <p>Everything in the Basic package PLUS</p>
            <p>•Shampoo & Spot Cleaning (Carpets & Seats)</p>
            <p>•Leather Cleaning & Conditioning (If applicable)</p>
            <p>•Air Freshener Treatment</p>
            <p></p>
            <p></p>
          </div>
          <div className="package">
            <h3>Executive Package</h3>
            <p>$300</p>
            <p>Everything From Previous Packages PLUS</p>
            <p>•Engine Bay Cleaning</p>
            <p>•Paint Decontamination (Clay Bar)</p>
            <p>•Paint Correction + Polish + Protectant</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Kope's Kustomz - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
