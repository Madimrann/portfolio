
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { content } from '../data/content';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ background: '#f8fafc' }}>
            <div className="container">
                <h2 className="section-title">{content.about.title}</h2>

                {/* Bio Card - The "Place" for About Me */}
                {/* Bio Card - The "Place" for About Me */}
                <div className="about-card bio-card">
                    <div className="bio-content">
                        <p className="about-description">{content.about.description}</p>
                    </div>

                </div>

                <div className="about-grid">
                    <div className="about-card">
                        <h3 className="card-title">Experience</h3>
                        <div className="timeline">
                            {content.experience.map((exp, index) => (
                                <div key={index} className={`timeline-item ${index === 0 ? 'latest' : ''}`}>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <span className="period">{exp.period}</span>
                                        </div>
                                        <h4 className="role">{exp.role}</h4>
                                        <span className="company">{exp.company}</span>
                                        <ul className="description-list">
                                            {exp.details.map((detail, i) => (
                                                <li key={i}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about-card">
                        <h3 className="card-title">Education</h3>
                        <div className="timeline">
                            {content.education.map((edu, index) => (
                                <div key={index} className={`timeline-item ${index === 0 ? 'latest' : ''}`}>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <span className="period">{edu.period}</span>
                                        </div>
                                        <h4 className="role">{edu.institution}</h4>
                                        <span className="company">{edu.degree}</span>
                                        <span className="grade">CGPA: {edu.cgpa}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .section-title {
            font-size: 2.5rem;
            color: #1e293b;
            margin-bottom: 2rem;
            font-weight: 700;
            text-align: center;
        }

        /* Bio Card Styles */
        .bio-card {
            margin-bottom: 3rem;
            display: flex;
            justify-content: center;
            text-align: center;
        }
        .bio-content {
            max-width: 900px;
            margin: 0 auto;
        }
        .about-description {
            font-size: 1.2rem;
            color: #475569;
            line-height: 1.8;
            margin: 0;
        }

        .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }
        .about-card {
            background: white;
            padding: 2.5rem;
            border-radius: 16px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
            border: 1px solid #e2e8f0;
        }
        .card-title {
            font-size: 1.5rem;
            color: #1e293b;
            margin-bottom: 2rem;
            border-bottom: 2px solid #f1f5f9;
            padding-bottom: 1rem;
        }
        
        .timeline {
             padding-left: 10px;
        }
        .timeline-item {
            position: relative;
            padding-left: 2rem;
            border-left: 2px solid #e2e8f0;
            padding-bottom: 2.5rem;
        }
        .timeline-item:last-child { 
            border-left: 2px solid transparent;
            padding-bottom: 0;
        }
        
        .timeline-marker {
            position: absolute;
            left: -6px;
            top: 0;
            width: 10px;
            height: 10px;
            background: #cbd5e1;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 0 0 2px #cbd5e1;
            transition: all 0.3s ease;
        }
        
        /* Highlight Latest Item */
        .timeline-item.latest .timeline-marker {
            background: var(--primary);
            box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.2);
            width: 12px;
            height: 12px;
            left: -7px;
        }
        .timeline-item.latest {
            border-left-color: var(--primary);
        }

        .timeline-header {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            margin-bottom: 0.3rem;
        }
        
        .role {
            font-size: 1.15rem;
            color: #1e293b;
            font-weight: 700;
            margin-bottom: 0.2rem;
        }
        .company {
            display: block;
            color: #475569;
            font-size: 1rem;
            margin-bottom: 0.8rem;
            font-weight: 500;
        }
        .period {
            font-size: 0.85rem;
            color: #64748b;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .badge-latest {
            background: #eff6ff;
            color: var(--primary);
            font-size: 0.7rem;
            font-weight: 700;
            padding: 2px 8px;
            border-radius: 12px;
            text-transform: uppercase;
        }
        
        .grade {
            display: inline-block;
            background: #f1f5f9;
            color: #475569;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 0.85rem;
            font-weight: 600;
            margin-top: 0.5rem;
        }
        .description-list {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
        .description-list li {
            position: relative;
            padding-left: 1rem;
            margin-bottom: 0.5rem;
            font-size: 0.95rem;
            color: #64748b;
            line-height: 1.6;
        }
        .description-list li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: var(--primary);
            font-weight: bold;
        }

        @media (max-width: 900px) {
            .about-grid { grid-template-columns: 1fr; }
            .bio-card { 
                grid-template-columns: 1fr; 
                gap: 2rem;
                text-align: center;
            }
            .bio-content { 
                border-right: none; 
                border-bottom: 1px solid #e2e8f0;
                padding-right: 0;
                padding-bottom: 2rem;
            }
        }
      `}</style>
        </section>
    );
};

export default About;
