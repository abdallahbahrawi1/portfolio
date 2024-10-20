import { useEffect, useRef } from 'react';
import './PortfolioSection.css'; // Import the updated CSS file
import lexilearn from '../../assets/img/lexilearn.png';

const PortfolioSection = () => {
  const projectHighlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const projectHighlight = projectHighlightRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectHighlight) {
      observer.observe(projectHighlight);
      projectHighlight.style.opacity = '0';
      projectHighlight.style.transform = 'translateY(50px)';
      projectHighlight.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    }

    return () => {
      if (projectHighlight) observer.unobserve(projectHighlight);
    };
  }, []);

  return (
    <section className="portfolio-section-custom">
      <div className="project-highlight-custom" ref={projectHighlightRef}>
        <div className="project-content-custom">
          <div className="project-info-custom">
            <h2 className="project-title-custom">Transforming Learning with LexiLearn</h2>
            <p className="project-description-custom">
              Introducing LexiLearn, a revolutionary Chrome extension designed to enhance your learning experience. With smart AI-powered features and a user-friendly interface, LexiLearn simplifies language learning and makes studying more engaging and efficient.
            </p>
            <a href="https://lexilearn-website.onrender.com/" target="_blank" className="cta-button-custom">View Project</a>
          </div>
          <div className="project-image-custom">
            <img src={lexilearn} alt="Modern UI design showcasing intuitive navigation and sleek aesthetics" />
            <div className="image-overlay-custom">
              <p className="overlay-text-custom">A modern extension with simple navigation, for effective language learning.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
