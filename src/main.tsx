import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './_components/nav.tsx';
import Hero from './_components/hero.tsx';
import About from './_components/about.tsx';
import "./index.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <main>
      <Hero />
      <About />
    </main>
  </StrictMode>,
)
