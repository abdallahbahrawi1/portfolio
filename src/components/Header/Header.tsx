import './Header.css'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; 
import { particlesOption } from './particlesOption';

function Header() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
      await console.log(container);
  }, []);
 

  return (
    <header>

      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOption}
        />
      <div className="header-content">
        <h1>Abdallah  Bahrawi</h1>
        <p className="subtitle">Innovative Software Engineer</p>
      </div>
    </header>
  )
}

export default Header
