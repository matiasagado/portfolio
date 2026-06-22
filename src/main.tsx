import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './_components/nav';
import Contact from './_components/contact';
import "./index.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <main>
    </main>
    <Contact />
  </StrictMode>,
)
