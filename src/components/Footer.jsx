
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="copyright">© 2026 Muhammad Adib Imran. All Rights Reserved.</p>
      </div>

      <style>{`
        .footer {
          padding: 2rem 0;
          border-top: 1px solid var(--glass-border);
          background: var(--bg-darker);
        }
        .footer-content {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .copyright { color: var(--text-muted); font-size: 0.9rem; }
        .socials { display: flex; gap: 1.5rem; }
        .socials a { color: var(--text-muted); font-size: 1.2rem; transition: color 0.3s; }
        .socials a:hover { color: var(--primary); }
      `}</style>
    </footer>
  );
};

export default Footer;
