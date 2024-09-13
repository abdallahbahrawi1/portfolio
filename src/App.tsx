
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Blog from './components/Blog/Blog';
import BlogPost from './components/Blog/BlogPost/BlogPost';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/portfolio" element={
            <>
            <Projects />
              <Skills />
              <AboutMe />
            </>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
