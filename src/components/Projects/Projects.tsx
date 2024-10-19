import './Projects.css';
import CORAL from '../../assets/img/CORAl.png';
import Masar from '../../assets/img/Masar.png';
import FHIR from '../../assets/img/FHIR.png';

function Projects() {
  const projectData = [
    {
      title: 'CORAL An E-commerce Website',
      description: 'Developed scalable and secure server-side features utilizing Node.js, Express.js, and MySQL. Effectively managed tasks within an Agile Scrum framework, ensuring seamless integration between backend and frontend components.',
      imgSrc: CORAL,
      githubLink: 'https://github.com/abdallahbahrawi1/CORAL', 
    },
    {
      title: 'Masar A Travel Website',
      description: 'Developed user authentication and an admin panel with secure data handling. Designed and implemented responsive home, profile, and admin pages using Vue.js and Nuxt.js, adhering to security best practices in user data management.',
      imgSrc: Masar,
      githubLink: 'https://github.com/abdallahbahrawi1/Masar',
    },
    {
      title: 'FHIR Resources Management Tool',
      description: 'Managed asynchronous processes for loading JSON schemas into app memory. Implemented functionalities for project creation, loading, and editing, and designed UI components for displaying and editing resources with custom validation rules. Enhanced user experience through efficient resource and bundle management.',
      imgSrc: FHIR,
      githubLink: '', 
    },
  ];

  return (
    <>
      <h2 className="section-title">More Projects</h2>
      <section className="projects">
        {projectData.map((project, index) => (
          <div className="project-card floating" key={index}>
            <img src={project.imgSrc} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              {project.githubLink &&
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <button className="github-button">View on GitHub</button>
                </a>
              }
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Projects;
