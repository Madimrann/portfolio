
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-grid">
                    <AnimatePresence>
                        {content.projects.map((project, index) => (
                            <div key={index} className="project-card">
                                <div className="card-content">
                                    <div className="card-header">
                                        <h3 className="project-title">{project.title}</h3>
                                    </div>

                                    <p className="project-desc">{project.description}</p>

                                    <div className="project-tech">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="tech-tag">{t}</span>
                                        ))}
                                    </div>

                                    <div className="card-footer">
                                        <a href={project.links.github !== '#' ? project.links.github : '#'} target="_blank" className="btn-view-project">
                                            View Project <span>→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
        }

        .card-content {
            padding: 2rem; 
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.8rem;
        }
        .project-title { font-size: 1.35rem; color: #1e293b; font-weight: 700; }
        
        .project-desc { 
          color: #475569; 
          font-size: 0.95rem; 
          margin-bottom: 1.5rem; 
          flex-grow: 1; 
          line-height: 1.6;
        }
        
        .project-tech { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem; }
        .tech-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          background: #e0f2fe; 
          color: #0369a1;
          border-radius: 20px;
          font-weight: 600;
          border: 1px solid #bae6fd;
        }
        
        .card-footer {
            margin-top: auto;
        }
        
        .btn-view-project {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            width: 100%;
            padding: 0.8rem;
            background: #f1f5f9;
            color: #334155;
            text-decoration: none;
            font-weight: 600;
            border-radius: 8px;
            transition: all 0.3s ease;
        }
        
        .btn-view-project:hover {
            background: var(--primary);
            color: white;
        }
        .btn-view-project span { transition: transform 0.3s; }
        .btn-view-project:hover span { transform: translateX(5px); }
      `}</style>
        </section>
    );
};

export default Projects;
