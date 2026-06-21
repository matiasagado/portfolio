import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './_components/nav.tsx';
import Hero from './_components/hero.tsx';
import Overview from './_components/overview.tsx';
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
      <Overview />
      <Experience />
      <Software />
      <Hardware />
    </main>
    <Contact />
  </StrictMode>,
)
