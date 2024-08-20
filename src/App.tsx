import './App.css'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {
  return (
    <>
      <Header />
      <div className="container">
          <Projects />
          <Skills />
      </div>
      <Contact />
    </>
  )
}

export default App
