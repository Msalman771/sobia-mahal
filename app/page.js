"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 20,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            } else if (days > 0) {
              hours = 23;
              days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="site-wrapper">

      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="header-container">

          <div className="logo">
            <span className="logo-main">Sobia Mahal</span>
            <span className="logo-sub">A Heritage of Elegance</span>
          </div>

          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#story">Our Story</a>
            <a href="#collection">Collection</a>
            <a href="#gallery">Gallery</a>
            <a href="#visit">Visit</a>
          </nav>

          <a href="#visit" className="header-button">
            Discover More
          </a>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <section
        id="home"
        className="hero"
        style={{ backgroundImage: "url('/images/hero.webp')" }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="eyebrow">A NEW CHAPTER BEGINS</p>

          <h1>
            Sobia
            <span>Mahal</span>
          </h1>

          <p className="hero-description">
            A timeless space where heritage, architecture and
            elegance come together.
          </p>

          <div className="hero-line"></div>

          <p className="coming-text">COMING SOON</p>

        </div>

        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-line"></div>
        </div>

      </section>


      {/* ================= COUNTDOWN ================= */}
      <section className="countdown-section">

        <div className="section-small-title">
          SOMETHING SPECIAL IS ARRIVING
        </div>

        <h2>Opening Soon</h2>

        <p className="section-description">
          We are preparing an experience inspired by heritage,
          culture and timeless beauty.
        </p>

        <div className="countdown">

          <div className="time-box">
            <strong>{String(timeLeft.days).padStart(2, "0")}</strong>
            <span>Days</span>
          </div>

          <div className="time-box">
            <strong>{String(timeLeft.hours).padStart(2, "0")}</strong>
            <span>Hours</span>
          </div>

          <div className="time-box">
            <strong>{String(timeLeft.minutes).padStart(2, "0")}</strong>
            <span>Minutes</span>
          </div>

          <div className="time-box">
            <strong>{String(timeLeft.seconds).padStart(2, "0")}</strong>
            <span>Seconds</span>
          </div>

        </div>

      </section>


      {/* ================= STORY ================= */}
      <section id="story" className="story-section">

        <div className="story-image">
          <img
            src="/images/mahal.webp"
            alt="Sobia Mahal"
          />
        </div>

        <div className="story-content">

          <p className="section-small-title">
            THE STORY
          </p>

          <h2>
            Where Heritage
            <br />
            Meets Elegance
          </h2>

          <div className="gold-line"></div>

          <p>
            Sobia Mahal is envisioned as a destination where
            architecture, culture and refined experiences meet.
          </p>

          <p>
            Every detail is designed to celebrate timeless
            craftsmanship while creating a space that feels
            elegant, welcoming and memorable.
          </p>

          <a href="#collection" className="text-link">
            Explore the collection →
          </a>

        </div>

      </section>


      {/* ================= COLLECTION ================= */}
      <section id="collection" className="collection-section">

        <div className="section-heading">

          <p className="section-small-title">
            THE COLLECTION
          </p>

          <h2>A Glimpse Into Our World</h2>

          <p>
            Discover the elements that make Sobia Mahal
            an expression of timeless elegance.
          </p>

        </div>


        <div className="collection-grid">

          <article className="collection-card">
            <div className="card-image">
              <img
                src="/images/architecture.jpg"
                alt="Sobia Mahal architecture"
              />
            </div>
            <div className="card-content">
              <span className="card-number">01</span>
              <h3>Architecture</h3>
              <p>
                Elegant spaces inspired by traditional
                craftsmanship and refined design.
              </p>
            </div>
          </article>


          <article className="collection-card">
            <div className="card-image">
              <img
                src="/images/architecture.jpg"
                alt="Sobia Mahal architecture"
              />
            </div>

            <div className="card-content">
              <span className="card-number">02</span>
              <h3>Heritage</h3>
              <p>
                A celebration of culture, history and
                timeless artistic expression.
              </p>
            </div>
          </article>


          <article className="collection-card">
             <div className="card-image">
              <img
                src="/images/architecture.jpg"
                alt="Sobia Mahal architecture"
              />
            </div>
            <div className="card-content">
              <span className="card-number">03</span>
              <h3>Experience</h3>
              <p>
                An atmosphere created to leave a lasting
                impression on every visitor.
              </p>
            </div>
          </article>

        </div>

      </section>


      {/* ================= GALLERY ================= */}
      <section id="gallery" className="gallery-section">

        <div className="section-heading">

          <p className="section-small-title">
            VISUAL JOURNEY
          </p>

          <h2>Gallery</h2>

          <p>
            A preview of the world we are creating.
          </p>

        </div>


        <div className="gallery-grid">

          <div
            className="gallery-item large"
            style={{ backgroundImage: "url('/images/gallery-1.webp')" }}
          ></div>
            <div
  className="gallery-item"
  style={{ backgroundImage: "url('/images/gallery-2.webp')" }}
></div>

         <div
  className="gallery-item"
  style={{ backgroundImage: "url('/images/gallery-2.webp')" }}
></div>

          <div
  className="gallery-item"
  style={{ backgroundImage: "url('/images/gallery-2.webp')" }}
></div>

            <div
            className="gallery-item large"
            style={{ backgroundImage: "url('/images/gallery-1.webp')" }}
          ></div>
        </div>

      </section>


      {/* ================= VISIT ================= */}
      <section id="visit" className="visit-section">

        <div className="visit-content">

          <p className="section-small-title">
            STAY CONNECTED
          </p>

          <h2>
            Be The First
            <br />
            To Experience It
          </h2>

          <p>
            Something extraordinary is taking shape.
            Stay connected and be among the first to
            discover Sobia Mahal.
          </p>

          <div className="visit-buttons">
            <a href="mailto:info@example.com" className="primary-button">
              Get In Touch
            </a>

            <a href="#home" className="secondary-button">
              Back To Top
            </a>
          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-logo">
          <span>Sobia Mahal</span>
          <small>A Heritage of Elegance</small>
        </div>

        <p>
          © 2026 Sobia Mahal. All rights reserved.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#story">Story</a>
          <a href="#gallery">Gallery</a>
          <a href="#visit">Contact</a>
        </div>

      </footer>

    </main>
  );
}