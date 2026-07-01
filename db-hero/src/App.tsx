import React, { useEffect, useRef } from 'react';
import { Bot, ChevronDown, ArrowRight, Play } from 'lucide-react';
import './index.css';

const ROBOT_IMG = 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920&q=80';

const App: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let targetParallax = 0;
    let currentParallax = 0;
    let targetRx = 0, targetRy = 0;
    let currentRx = 0, currentRy = 0;

    const onScroll = () => {
      targetParallax = window.scrollY * 0.38;
    };

    const onMouseMove = (e: MouseEvent) => {
      const cx = e.clientX / window.innerWidth - 0.5;
      const cy = e.clientY / window.innerHeight - 0.5;
      targetRy = cx * 10;
      targetRx = cy * -7;
    };

    const onMouseLeave = () => {
      targetRx = 0;
      targetRy = 0;
    };

    const tick = () => {
      // Smooth lerp toward targets
      currentParallax += (targetParallax - currentParallax) * 0.07;
      currentRx += (targetRx - currentRx) * 0.05;
      currentRy += (targetRy - currentRy) * 0.05;

      if (imgRef.current) {
        imgRef.current.style.transform =
          `perspective(1200px) rotateX(${currentRx}deg) rotateY(${currentRy}deg) translateY(${currentParallax}px) scale(1.18)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="app-container">

      {/* Background Robot Image — 3D parallax target */}
      <img
        ref={imgRef}
        className="bg-image"
        src={ROBOT_IMG}
        alt="Photorealistic 3D Robot Head"
      />
      <div className="video-overlay" aria-hidden="true" />

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo-container">
            <div className="logo-icon-wrapper">
              <Bot size={28} className="logo-icon" />
            </div>
            <div className="logo-text-stack">
              <span className="logo-text-primary">DB</span>
              <span className="logo-text-secondary">ROBOTICS</span>
            </div>
          </div>
        </div>

        <div className="nav-center">
          <a href="#solutions" className="nav-link">
            Solutions <ChevronDown size={16} />
          </a>
          <a href="#technology" className="nav-link">Technology</a>
          <a href="#research" className="nav-link">Research</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#careers" className="nav-link">Careers</a>
        </div>

        <div className="nav-right">
          <button className="btn btn-primary nav-btn">
            Contact Us <ArrowRight size={18} />
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="hero-content">
        <div className="chip animate-fade-up" style={{ animationDelay: '0s' }}>
          <span className="chip-dot" />
          INNOVATING AI & ROBOTICS
        </div>

        <h1 className="hero-title animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Advancing AI.<br />
          <span className="text-highlight">Transforming</span> futures.
        </h1>

        <p className="hero-description animate-fade-up" style={{ animationDelay: '0.2s' }}>
          DB is at the forefront of artificial intelligence and robotics,
          developing innovative solutions for a smarter tomorrow.
        </p>

        <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <button className="btn btn-primary btn-lg">
            Explore Our Solutions <ArrowRight size={20} />
          </button>
          <button className="btn btn-secondary btn-lg">
            <div className="icon-circle">
              <Play size={16} fill="currentColor" />
            </div>
            Watch Our Story
          </button>
        </div>
      </main>

    </div>
  );
};

export default App;
