import { Link } from 'react-router-dom';
import './Nav.css';

const Nav: React.FC = () => (
  <nav className="nav">
    <ul>
      <li><Link to="/portfolio">Portfolio</Link></li>
      <li><Link to="/portfolio/blog">Blog</Link></li>
    </ul>
  </nav>
);

export default Nav;
