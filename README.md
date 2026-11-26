<div align="center">
  <h1>matiasagado.com</h1>
  <p>My personal portfolio: a dark, single-page site built with Vite, React and TypeScript.</p>
</div>

<p align="center">
  <img src="docs/demo.gif" alt="The portfolio loading: the hero types out the role line, then the page scrolls down to the project showcase" width="960" />
</p>

<p align="center"><a href="docs/demo.mp4">Watch the demo in full quality (MP4)</a></p>

## What's on the page

- **Hero**: "Hi, I'm Matias" with a typed role line under a floating pill nav.
- **At a glance**: a card grid with socials, how I work, my stack, education, a copy-email card, live GitHub stats and a "Founder of Foothold" card with laptop and phone mockups.
- **Project showcase**: stacking sticky cards for Foothold, Groot, ShiftGrid and Polaris. Foothold's phone screens and the ShiftGrid schedule are drawn in code, not screenshots.
- **About**: one panel on going from problem to production.
- **Experience**: a sticky scroll where the pinned card follows whichever role is in view.
- **Footer**: contact, links and a full-width wordmark.

## Built with

- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- CSS Modules, no UI framework
- GitHub's public REST API for live repo stats (no token)
- Inter, Montserrat and JetBrains Mono from Google Fonts

## Project structure

```
src/
  App.tsx                 page layout, section order
  data.ts                 copy, links, focus areas and experience
  index.css               design tokens and shared classes
  lib/                    useSfTime, useGithub
  _components/            one component per section, styles in _components/styles
public/                   images, resume PDF, favicon
docs/                     demo GIF and MP4
```

To change what the site says, start with `src/data.ts`.

## Set-up

Install the dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

## Build and run for production

Generate a static production build

```bash
npm run build
```

Preview the production build locally

```bash
npm run preview
```

## Checks

```bash
npm run lint
```
