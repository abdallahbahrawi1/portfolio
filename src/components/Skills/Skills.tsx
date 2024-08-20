import './Skills.css';

function Skills() {
  const skillList = [
    'JavaScript',
    'React',
    'Node.js',
    'MySQL',
    'AWS',
    'Tawilwind CSS',
  ];

  return (
    <section className="skills">
      <h2>Technical Expertise</h2>
      <div className="skill-list">
        {skillList.map((skill, index) => (
          <span className="skill-tag" key={index}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
