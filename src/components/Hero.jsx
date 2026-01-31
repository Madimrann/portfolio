import { motion } from 'framer-motion';
import { content } from '../data/content';
import heroImage from '../assets/hero-showcase.png';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-name"><span className="text-primary">{content.hero.name}</span></h1>
          <h2 className="hero-role">{content.hero.role}</h2>

          <p className="hero-tagline">{content.hero.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </motion.div>

        {/* Visual side - Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image-container"
        >
          <img src={heroImage} alt="Showcase" className="hero-img" />
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
          background: linear-gradient(to bottom, #f1f5f9, #f8fafc);
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .hero-name {
          font-size: 3.5rem;
          line-height: 1.1;
          margin-bottom: 0.5rem;
          color: #1e293b;
        }
        .text-primary { color: var(--primary); }
        
        .hero-role {
          font-size: 1.4rem;
          color: #475569;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }
        
        .hero-tagline {
          color: #475569;
          font-size: 1.1rem;
          max-width: 600px;
          margin-bottom: 2.5rem;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
        }
        
        .hero-image-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .hero-img {
            width: 100%;
            height: auto;
            max-height: 600px;
            object-fit: contain;
            
            /* Compact & Defined Style */
            border-radius: 20px;
            border: 4px solid rgba(255, 255, 255, 0.9);
            box-shadow: 
                0 0 0 1px rgba(0,0,0,0.05),
                0 20px 40px -10px rgba(0,0,0,0.15);
        }

        @media (max-width: 900px) {
            .hero-container {
                grid-template-columns: 1fr;
                gap: 3rem;
                text-align: center;
            }
            .hero-actions { justify-content: center; }
            .hero-tagline { margin: 0 auto 2.5rem; }
            .hero-img { max-height: 400px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
