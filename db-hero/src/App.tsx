import { Dna, ChevronDown, ArrowRight, Play } from 'lucide-react'
import './index.css'

export default function App() {
  return (
    <div className="app-container">

      {/* ── Background Video ── */}
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source
          src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/dna_video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* ── Gradient Overlay ── */}
      <div className="video-overlay" aria-hidden="true" />

      {/* ── Navbar ── */}
      <nav className="navbar" aria-label="Main navigation">

        {/* Logo */}
        <a href="/" className="nav-logo" aria-label="Genova Biosciences home">
          <div className="logo-icon" aria-hidden="true">
            <Dna size={22} color="#1a56db" strokeWidth={2} />
          </div>
          <div className="logo-text-stack">
            <span className="logo-name">Genova</span>
            <span className="logo-sub">BIOSCIENCES</span>
          </div>
        </a>

        {/* Nav Links */}
        <ul className="nav-links" role="list">
          <li>
            <a href="#solutions" className="nav-link">
              Solutions
              <ChevronDown size={14} strokeWidth={2.5} aria-hidden="true" />
            </a>
          </li>
          <li><a href="#technology" className="nav-link">Technology</a></li>
          <li><a href="#research" className="nav-link">Research</a></li>
          <li><a href="#about" className="nav-link">About Us</a></li>
          <li><a href="#careers" className="nav-link">Careers</a></li>
        </ul>

        {/* CTA */}
        <button className="btn btn-primary nav-cta" type="button">
          Contact Us
          <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
        </button>

      </nav>

      {/* ── Hero ── */}
      <main className="hero" aria-label="Hero section">
        <div className="hero-content">

          {/* Chip / Badge */}
          <div className="chip" role="note">
            <span className="chip-dot" aria-hidden="true" />
            INNOVATING LIFE SCIENCES
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            Advancing science.<br />
            <span className="highlight">Transforming</span> lives.
          </h1>

          {/* Description */}
          <p className="hero-desc">
            Genova Biosciences is at the forefront of biotechnology,
            developing innovative solutions for a healthier tomorrow.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <button className="btn btn-primary" type="button">
              Explore Our Solutions
              <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
            </button>

            <button className="btn btn-secondary" type="button">
              <span className="play-icon" aria-hidden="true">
                <Play size={12} fill="currentColor" strokeWidth={0} />
              </span>
              Watch Our Story
            </button>
          </div>

        </div>
      </main>

    </div>
  )
}
