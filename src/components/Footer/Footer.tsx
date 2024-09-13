import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Abdallah Bahrawi. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/abdallahbahrawi1" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/abdallahbahrawi/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
