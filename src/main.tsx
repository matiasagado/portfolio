import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './_components/nav';
import Hero from './_components/hero';
import Contact from './_components/contact';
import "./index.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <main>
      <Hero />
    </main>
    <Contact />
  </StrictMode>,
)
