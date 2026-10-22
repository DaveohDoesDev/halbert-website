# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for Halbert Insurance Services, LLC, an independent health and life insurance broker in Melbourne, FL. It replaces the old WordPress site at halbertins.com. The design brief is **Simple, Clean, Sharp**: navy for structure, white space, and teal used only for actions.

## Tech Stack

- **HTML/CSS/JavaScript:** no build tools or frameworks.
- **Hosting:** GitHub Pages, deployed from the `main` branch.
- **Forms:** Formspree. The form ID is still a placeholder.

## Project Structure

```
index.html / services.html / team.html / contact.html
css/styles.css     # All styles; design tokens (colors, radius) at the top
js/main.js         # Mobile nav, footer year, Formspree fetch submit
images/            # logo, team/ headshots, carriers/ logos
```

## Conventions

- The header and footer are duplicated in all 4 pages. Keep them in sync, and set `aria-current="page"` on the active nav link.
- Every image needs meaningful `alt` text, and icon-only links need labels.
- Placeholder content is marked with `<!-- TODO -->` comments and listed in README.md.
- Visitors have three equal calls to action: call/text, book a consultation, and the quote form.

## Context

- The developer is a beginner learning web development, so explain concepts while building.
