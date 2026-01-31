
import { content } from '../data/content';

const Skills = () => {
  // Categorize skills based on Repo Stack
  const frontend = content.skills.filter(s => ['React Native', 'React', 'TypeScript', 'JavaScript'].includes(s.name));
  const backend = content.skills.filter(s => ['Node.js', 'Firebase', 'GCP', '.NET', 'PHP', 'SQL'].includes(s.name));
  const tools = content.skills.filter(s => ['Git'].includes(s.name));

  // Helper to render a group
  const SkillGroup = ({ title, skills }) => (
    <div className="skill-category">
      <h3 className="category-title">{title}</h3>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <skill.icon size={20} color={skill.color} />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-padding" style={{ background: '#f1f5f9' }}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <SkillGroup title="Frontend" skills={frontend} />
          <SkillGroup title="Backend" skills={backend} />
          <SkillGroup title="Tools" skills={tools} />
        </div>
      </div>

      <style>{`
        .section-title {
            font-size: 2rem;
            color: #1e293b;
            margin-bottom: 3rem;
        }
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }
        .skill-category {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
            border: 1px solid #e2e8f0;
        }
        .category-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid #f1f5f9;
        }
        .skills-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .skill-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.5rem;
            border-radius: 8px;
            transition: background 0.2s;
        }
        .skill-item:hover {
            background: #f8fafc;
        }
        .skill-name {
            color: #475569;
            font-weight: 500;
        }

        @media (max-width: 768px) {
            .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
