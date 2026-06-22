import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './_components/nav';
import Hero from './_components/hero';
import Software from './_components/software';
import Hardware from './_components/hardware';
import About from './_components/about';
import Contact from './_components/contact';
import "./index.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <main>
      <Hero />
      <Software />
      <Hardware />
      <About />
    </main>
    <Contact />
  </StrictMode>,
)
