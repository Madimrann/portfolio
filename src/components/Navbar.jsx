
import { useState, useEffect } from 'react';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import '../index.css';

import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '#hero' },
    { name: 'About Me', to: '#about' },
    { name: 'Skills', to: '#skills' },
    { name: 'Projects', to: '#projects' },
    { name: 'Contact', to: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo-link">
          <img src={logo} alt="Madimran Logo" className="nav-logo" />
        </a>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.to}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="https://github.com/Madimrann" target="_blank" className="nav-social">
            <FaGithub size={20} />
          </a>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo-link {
            display: flex;
            align-items: center;
        }
        .nav-logo {
          height: 45px;
          width: auto;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        .nav-logo:hover {
          transform: scale(1.1);
        }
        .nav-menu {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-link {
          color: #f1f5f9;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s;
          font-size: 1rem;
        }
        .nav-link:hover {
          color: var(--primary);
        }
        .nav-social {
          color: white;
          transition: transform 0.3s;
        }
        .nav-social:hover { transform: scale(1.1); }
        .hamburger { display: none; color: white; font-size: 1.5rem; cursor: pointer; }

        @media (max-width: 768px) {
          .hamburger { display: block; }
          .nav-menu {
            position: fixed;
            top: 70px;
            left: -100%;
            flex-direction: column;
            background: var(--bg-dark);
            width: 100%;
            height: 100vh;
            padding-top: 2rem;
            transition: 0.3s ease-in-out;
          }
          .nav-menu.active { left: 0; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
