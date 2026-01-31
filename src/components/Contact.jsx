import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { content } from '../data/content';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container contact-container">
        <div className="contact-card">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-text">
            I'm currently looking for new opportunities as a Full Stack Developer.
            Whether you have a question or just want to say hi, my inbox is always open!
          </p>

          <div className="contact-grid">
            <div className="contact-item">
              <div className="icon-box">
                <FaEnvelope />
              </div>
              <span className="label">Email</span>
              <a href={content.hero.socials.email} className="value">{content.hero.socials.email.replace('mailto:', '')}</a>
            </div>
            <div className="contact-item">
              <div className="icon-box">
                <FaPhone />
              </div>
              <span className="label">Phone</span>
              <span className="value">{content.hero.socials.phone}</span>
            </div>
            <div className="contact-item">
              <div className="icon-box">
                <FaMapMarkerAlt />
              </div>
              <span className="label">Location</span>
              <span className="value">Selangor, Malaysia</span>
            </div>
          </div>

          <div className="social-connect">
            <span className="connect-label">Find me on</span>
            <div className="social-icons">
              <a href={content.hero.socials.github} target="_blank" className="social-icon github"><FaGithub /></a>
              <a href={content.hero.socials.linkedin} target="_blank" className="social-icon linkedin"><FaLinkedin /></a>
            </div>
          </div>


        </div>
      </div>

      <style>{`
        .contact-container { display: flex; justify-content: center; }
        .contact-card {
          padding: 3rem;
          text-align: center;
          max-width: 800px;
          width: 100%;
          background: white;
          border-radius: 20px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
          border: 1px solid #e2e8f0;
        }
        .contact-text {
          color: #64748b;
          margin-bottom: 3rem;
          font-size: 1.1rem;
          line-height: 1.6;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .contact-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            margin-bottom: 2.5rem;
            text-align: center;
        }
        
        .contact-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1.5rem;
            background: #f8fafc;
            border-radius: 12px;
            transition: transform 0.2s;
        }
        .contact-item:hover { transform: translateY(-5px); }
        
        .icon-box {
            font-size: 1.5rem;
            color: var(--primary);
            margin-bottom: 0.8rem;
            background: #eff6ff;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
        }
        .label { font-size: 0.9rem; color: #94a3b8; font-weight: 500; margin-bottom: 0.25rem; }
        .value { color: #1e293b; font-weight: 600; font-size: 1rem; text-decoration: none; }
        a.value:hover { color: var(--primary); }

        .social-connect {
            margin-bottom: 2.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }
        .connect-label {
            font-size: 0.85rem;
            color: #94a3b8;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .social-icons {
            display: flex;
            gap: 1.5rem;
        }
        .social-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: #f1f5f9;
            color: #334155;
            font-size: 1.3rem;
            transition: all 0.3s ease;
            text-decoration: none;
        }
        .social-icon:hover { transform: scale(1.1); color: white; }
        .social-icon.github:hover { background: #333; }
        .social-icon.linkedin:hover { background: #0077b5; }

        @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr; gap: 1rem; }
            .contact-card { padding: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
