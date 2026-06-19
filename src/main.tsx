import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import Nav from './nav.tsx';
import Hero from './hero.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <main>
      <Hero />
    </main>
  </StrictMode>,
)
