import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './_components/nav.tsx';
import Hero from './_components/hero.tsx';
import Featured from './_components/featured.tsx';
import About from './_components/about.tsx';
import Experience from './_components/experience.tsx';
import Software from './_components/software.tsx';
import Hardware from './_components/hardware.tsx';
import Contact from './_components/contact.tsx';
import "./index.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <main>
      <Hero />
      <Featured />
      <About />
      <Experience />
      <Software />
      <Hardware />
    </main>
    <Contact />
  </StrictMode>,
)
