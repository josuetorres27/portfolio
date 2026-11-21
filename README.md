# Josue Torres Sibaja — Software Engineering Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live_Site-josuetorressibaja.com-3b82f6?style=flat-square&logo=google-chrome&logoColor=white)](https://josuetorressibaja.com/)
[![Astro](https://img.shields.io/badge/Astro-bc52ee?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38bdf8?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Bilingual](https://img.shields.io/badge/i18n-English%20%7C%20Espa%C3%B1ol-8b5cf6?style=flat-square)](#features)
[![Web Audio API](https://img.shields.io/badge/Web_Audio-8--Bit_Synth-f59e0b?style=flat-square)](#features)
[![CI Test Suite](https://img.shields.io/github/actions/workflow/status/josuetorres27/portfolio/ci.yml?style=flat-square&logo=githubactions&logoColor=white&label=CI)](https://github.com/josuetorres27/portfolio/actions/workflows/ci.yml)
[![Automated Tests](https://img.shields.io/badge/Tests-342%20Passing-success?style=flat-square&logo=python&logoColor=white)](#testing)
[![Production Pipeline](https://img.shields.io/badge/Deployed%20with-CI%2FCD%20Pipeline-22c55e?style=flat-square&logo=githubactions&logoColor=white)](https://josuetorressibaja.com/)

This repository contains the source of a personal software engineering portfolio. The website presents academic background, featured software engineering projects, production experience in Information Technology infrastructure and web administration, applied AI workflows, and personal interests, in a custom retro gaming and terminal style.

**Live:** [https://josuetorressibaja.com](https://josuetorressibaja.com)

---

## About Me

I am a Computer Science Graduating Senior (Software Engineering emphasis) at the University of Costa Rica (UCR), with all coursework completed in Dec 2026 and the degree expected in Apr 2027. I build scalable, full-stack, systems-level, and distributed software using modern engineering practices and AI agentic workflows, backed by solid foundations in data structures, algorithms, object-oriented design, and practical university infrastructure and software engineering experience.

- **Education:** B.Sc. in Computer Science (Software Engineering emphasis), University of Costa Rica (UCR), Mar 2023 – Dec 2026; coursework completed, degree expected Apr 2027.
- **Languages:** Spanish (Native), English (CEFR B2–C1 Bilingual Working Proficiency; National University of Costa Rica (UNA), 2019 – 2021; 13 levels / 520 hours).
- **Work Experience:** Full-Stack Developer (Professional Practicum) at the Solar Astrophysics and Space Weather Laboratory (LASCE) and Information Technology Support Assistant at the Orientation Office, both at the University of Costa Rica (UCR), Aug 2026 – Dec 2026.
- **Availability:** Full-time entry-level and junior Software Engineering roles, available immediately.

---

## Tech Stack

| Category | Technologies and Tools |
| :--- | :--- |
| **Languages** | Python, C++, C, C#, Java, TypeScript, JavaScript, SQL, HTML/CSS |
| **Frameworks and Libraries** | Next.js, React, Node.js, Flask, ASP.NET Core, Prisma, Tailwind CSS |
| **Data and Infrastructure** | PostgreSQL, SQL Server, Redis, MinIO, Firebase, Docker, GitHub Actions, Linux, Playwright |
| **Applied AI** | Claude Code, GitHub Copilot, Google Antigravity, Multi-Agent Systems, Prompt & Context Engineering |
| **Specialized** | Applied Cryptography (PKI, X.509, RFC 3161, OCSP), Pthreads, OpenMP, TCP/IP Sockets |
| **Practices** | Data Structures & Algorithms, OOP, SOLID, REST APIs, CI/CD, Agile/Scrum |

---

## Work Experience

### Full-Stack Developer · Professional Practicum

**Solar Astrophysics and Space Weather Laboratory (LASCE), University of Costa Rica (UCR)** · Aug 2026 – Dec 2026

Professional practicum on the production web platform of the laboratory: a bilingual public portal and an admin CMS for its research, publications, news, and the ROSAC radio observatory, built in a team.

- Built the news, research, publications, gallery, and academic-activities modules, with research-area detail pages and research-group filters.
- Developed content management for the ROSAC radio observatory and migrated it from local storage to the database, with file uploads to object storage and optimistic concurrency control.
- Implemented Spanish and English support for scientific and institutional content.
- Built reusable modal, confirmation, and skeleton-loading components, and improved keyboard and multimedia accessibility.
- Wrote unit, end-to-end, and Storybook tests, including cross-browser fixes for WebKit.
- Worked across frontend, backend, and database through the full cycle: implementation, testing, fixes, documentation, and maintenance.

- **Live Platform:** [https://lasce.ucr.ac.cr](https://lasce.ucr.ac.cr).
- **Repository:** [LasceUCR/lasce](https://github.com/LasceUCR/lasce).
- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL, Redis, BullMQ, Python 3.13 Worker, MinIO, Docker, Playwright E2E, Vitest, Storybook.

### Information Technology Support Assistant

**Orientation Office, University of Costa Rica (UCR)** · Aug 2026 – Dec 2026

- Diagnosed and upgraded 50+ institutional workstations (HDD to SSD migration), reducing boot times by about 60%.
- Automated Windows imaging and disk cloning, cutting per-machine setup from about 2 hours to under 20 minutes.
- Maintained academic WordPress sites through secure remote hosts, supporting 99%+ uptime during enrollment periods.

---

## Featured Projects

### [CS Interactive Workshop](https://workshop.josuetorressibaja.com/)

Interactive web workshop for Computer Science students at the University of Costa Rica, built on visual simulations backed by real C and C++ engines.

- **Live App:** [https://workshop.josuetorressibaja.com/](https://workshop.josuetorressibaja.com/).
- **Repository:** [josuetorres27/cs-interactive-workshop](https://github.com/josuetorres27/cs-interactive-workshop).
- **Stack:** C11, C++17, POSIX Threads, OpenMP, BSD Sockets (TCP/IP), JavaScript, Firebase (Hosting, Auth, Firestore), GitHub Actions.
- **Highlights:** Thirteen stations on sorting, algorithm races, data structures, concurrency, networking, classic interview problems, SQL, and Git; step-by-step code tracers; a 2D heat diffusion solver in serial, pthreads, and OpenMP versions with bit-for-bit identical results; a multi-threaded TCP server; a Git station that hashes objects exactly like real Git; Google sign-in with cloud-saved progress; and a CI pipeline running 1,538 automated tests before every deployment.

### [Mi VuelTica](https://github.com/MiVuelticaApp)

Mobile app (iOS, Android, and web) for discovering free and low-cost places and events in Costa Rica, with community reviews, verifications, and vote-based moderation. It started as a course project for a team of five, which keeps developing it.

- **Repositories:** [App](https://github.com/MiVuelticaApp/mi-vueltica-app), [API](https://github.com/MiVuelticaApp/mi-vueltica-api), [Website](https://github.com/MiVuelticaApp/mi-vueltica-web).
- **Stack:** TypeScript, React Native, Expo, Node.js, Express, Prisma, MySQL/MariaDB, OpenAI Moderation API, Docker, Jest, Playwright, GitHub Actions, EAS.
- **Role:** Full-stack integrator: connected the app to the full REST API (reputation, community moderation, reviews, reports, blocking, and photos), implemented privacy consent under Costa Rica's Law 8968, designed fail-open AI pre-moderation (OpenAI moderation plus a local spam check), fixed a rate-limit bypass and a default JWT secret in production, built push notifications end to end and an itinerary builder, and set up CI and EAS release builds, reviewing and merging 26 pull requests.
- **Team:** Rolando Villavicencio (the API's base), Aaron Santana, Gabriel Serrano, and contributors; built with AI-assisted development (Claude Code) under my own review.

### [PAdES-LTA Renewer](https://github.com/josuetorres27/pades-lta-renewer)

Research project for CI-0140 Software Quality: an engine and web service that renews timestamps on digitally signed PDF documents for long-term preservation (PAdES-B-LTA / ETSI EN 319 142), in line with Costa Rica's Law 8454.

- **Repository:** [josuetorres27/pades-lta-renewer](https://github.com/josuetorres27/pades-lta-renewer).
- **Stack:** Python, Flask, cryptography, asn1crypto, pypdf, RFC 3161, X.509, OCSP, CRL, pytest.
- **Highlights:** RFC 3161 client for the SINPE Time Stamping Authority (BCCR), X.509 chain reconstruction up to the national root CA with OCSP/CRL revocation checks, and incremental PDF updates that add `/DSS` evidence and `/DocTimeStamp` seals without invalidating existing signatures.
- **Co-Author:** Gabriel Serrano Rojas.

### [Virtual Microscope Administration Panel](https://github.com/RolandoVillavicencio013/biological-microscope-administration-panel)

Desktop administration platform that digitizes microscopy workflows and manages biological specimen collections.

- **Repository:** [RolandoVillavicencio013/biological-microscope-administration-panel](https://github.com/RolandoVillavicencio013/biological-microscope-administration-panel).
- **Stack:** C#, ASP.NET Core, PostgreSQL, JavaScript, HTML/CSS, Desktop Architecture, Visual Studio.
- **Highlights:** Hierarchical data organization (Groups, Boxes, Slides), high-fidelity microscopy imaging, and offline-capable workstation data persistence.

### ThemePark UCR — Virtual University Simulation

Virtual campus simulation built in Unity with a decoupled backend architecture.

- **Stack:** C#, ASP.NET Core, REST APIs, SQL Server, Unity, Scrum.
- **Highlights:** Decoupled REST services for real-time interaction with virtual campus buildings, facilities, and interactive learning objects.

---

## Features

- **Retro Gaming Aesthetic and Interactive Adventure Mode:** Custom stepped pixel-art frames, arcade CRT/terminal window headers, quest tags, and an interactive pixel companion with animated checkpoints, responsive dialogue engine, and smooth section navigation.
- **Procedural 8-Bit Audio Synthesis:** Real-time retro sound effects (blip, coin, jump, level-up, exit) synthesized on the fly using native Web Audio API oscillators, with zero external audio files or dependencies.
- **Static Site Built with Astro:** One Astro component per section, Tailwind CSS compiled at build time, and the interactive features in vanilla ES6+ JavaScript modules, so the browser receives plain HTML, one stylesheet, and no framework runtime.
- **Dual-Language Architecture (EN / ES):** Each language is pre-rendered as its own page, English at `/` and Spanish at `/es/`, with its own title, description, canonical address, and `hreflang` alternates. The language switch, the saved preference, and the `?lang=en|es` URL parameter take visitors to the matching page, and every `aria-label`, tooltip, and alt text is translated.
- **Adaptive Theme Engine:** Dark and Light themes with custom retro color palettes, a remembered choice (dark by default), and a light mode built on soft cool-gray surfaces instead of pure white, so it is easy on the eyes.
- **Cross-Platform Responsive and Accessible:** Optimized for devices ranging from mobile (360px – 414px) and tablet (768px – 834px) to widescreen desktop, adhering to semantic HTML, keyboard navigation, and WCAG contrast guidelines.
- **Interactive Galleries and Lightbox:** Custom carousels and a full-screen image inspection modal with geolocation metadata and photography details. Cards load 1000 px copies from each photo folder's `thumbs/` and decode them asynchronously; the modal opens the full-resolution photo.

---

## Testing

The repository includes an automated test suite of 342 tests, executed on Python 3.12+ against the built site and integrated into GitHub Actions CI, so that no component or translation breaks silently:

- **Internationalization Suite (`tests/test_i18n.py`):** 279 tests validating symmetry across all 269 translation keys between English and Spanish, strict parity, array lengths, absence of encoding mojibake, and synchronization with all `data-i18n`, `data-i18n-html`, `data-i18n-aria` and `data-i18n-title` bindings on both pages.
- **Localized Pages (`tests/test_localized_pages.py`):** 13 tests verifying that `/` and `/es/` each declare their language, title, description, canonical address, and `hreflang` alternates, render every translated element and attribute in that language, ship only that language to the scripts, link to each other from the language switch, and appear in the sitemap.
- **DOM and Semantic Integrity (`tests/test_dom_integrity.py`):** 33 tests verifying HTML5 compliance, OpenGraph metadata, Schema.org JSON-LD graphs, absence of duplicate element IDs, presence of all interactive target IDs, the `?lang=` URL parameter, and UI regression guards for the preloader, hero layout, buttons, and adventure mode (sprites, compositor-only motion, and intro cancellation).
- **Assets Integrity (`tests/test_assets_integrity.py`):** 11 tests verifying that every image, sprite sheet, icon, PDF document, and modular script referenced across the codebase physically exists on disk with non-zero size.
- **JavaScript Syntax and Scope Hygiene (`tests/test_js_syntax.py`):** 6 tests performing lexical scope tracking to prevent variable redeclaration collisions (e.g. duplicate `const`/`let`), delimiter balancing (`{}`, `[]`, `()`), and absence of debugger leftovers.

Build the site, then run the suite locally:

```bash
npm run build
python tests/run_tests.py
```

---

## Local Development

The site needs Node.js 22.23.4 or newer (CI uses Node.js 26) and Python 3.12+ for the tests:

```bash
npm install        # Install Astro, Tailwind CSS and PostCSS
npm run dev        # Start the dev server at http://localhost:4321 (Spanish at /es/)
npm run build      # Write the static site to dist/
npm run preview    # Serve dist/ locally
```

---

## Hosting & Deployment

The site is fully static: Astro builds it into `dist/`, and every push to `main` publishes that folder:

- **Primary:** [josuetorressibaja.com](https://josuetorressibaja.com) on GitHub Pages, with HTTPS enforced and DNS managed on Cloudflare (`www` redirects to the apex domain). `pages.yml` builds the site, runs the test suite, and deploys `dist/`.
- **Search Engines:** Each page declares its own canonical address (`/` and `/es/`) with `hreflang` alternates, and the site publishes a `sitemap.xml` listing both languages and a `robots.txt`.
- **Quality Gate:** `ci.yml` builds the site and runs the full test suite on every push and pull request.

---

## Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       ├── ci.yml                               # Builds the site and runs the test suite
│       └── pages.yml                            # Builds, tests and deploys dist/ to GitHub Pages
├── public/                                      # Copied as is to the root of the built site
│   ├── docs/
│   │   ├── Josue_Torres_Sibaja_Resume.pdf                  # English Resume (PDF)
│   │   ├── Josue_Torres_Sibaja_CV.pdf                      # Spanish Curriculum Vitae (PDF)
│   │   └── Josue_Torres_Sibaja_English_Certificate_UNA.pdf # UNA Conversational English Certificate (PDF)
│   ├── img/
│   │   ├── portfolio.jpeg                       # Professional profile photograph
│   │   ├── icons/                               # Custom retro pixel-art icon suite (favicon.png is the navbar copy of favicon.ico)
│   │   ├── character-sprites/                   # Pixel companion animation sprite sheets
│   │   ├── experience/                          # Workplace & Information Technology operations photographic evidence
│   │   ├── handicrafts/                         # Foamy clay sculpting & TCU workshop creations
│   │   └── photography/                         # Costa Rica landscape & nature gallery
│   ├── js/
│   │   ├── modules/
│   │   │   ├── audio.js                         # Native Web Audio API 8-bit retro sound synthesizer
│   │   │   ├── theme.js                         # Dark/Light mode engine & icon synchronization
│   │   │   ├── ui.js                            # Dropdowns, mobile menu, clipboard & preloader
│   │   │   ├── i18n.js                          # Language switch between pages & hero typewriter
│   │   │   ├── lightbox.js                      # Touch carousel & full-screen photo viewer
│   │   │   └── adventure.js                     # 8-bit companion, rail map & scrollytelling
│   │   └── main.js                              # Application orchestrator (window.Portfolio)
│   ├── CNAME                                    # Custom domain for GitHub Pages
│   ├── apple-touch-icon.png                     # 180x180 home-screen icon
│   ├── favicon.ico                              # Site favicon (16, 32, 48 and 96 px)
│   ├── favicon.svg                              # Vector favicon, rebuilt from the pixel-art grid
│   ├── robots.txt                               # Crawler rules and sitemap location
│   ├── site.webmanifest                         # Web app manifest (name and icons)
│   └── sitemap.xml                              # Sitemap with the English and Spanish pages
├── src/
│   ├── components/
│   │   ├── sections/                            # Hero, About, Experience, Education, Skills, Projects, AI, Mindset, Interests, Contact
│   │   ├── Portfolio.astro                      # The whole page, composed from the sections
│   │   ├── Navbar.astro                         # Navigation, theme toggle & language switch
│   │   ├── LanguageSwitch.astro                 # EN/ES links between / and /es/
│   │   ├── AdventureMode.astro                  # Level rail, companion dialogue & sprite cache
│   │   └── ...                                  # Preloader, pixel sprites, lightbox & footer
│   ├── i18n/
│   │   ├── translations.js                      # Bilingual (EN/ES) dictionaries (269 keys)
│   │   └── index.js                             # Language helpers used by the components
│   ├── layouts/
│   │   └── BaseLayout.astro                     # <head>, SEO tags, styles & scripts
│   ├── pages/
│   │   ├── index.astro                          # English page (/)
│   │   └── es/index.astro                       # Spanish page (/es/)
│   └── styles/
│       ├── styles.css                           # Custom retro, CRT scanlines & pixel styling
│       └── tailwind.css                         # Tailwind CSS entry point
├── tests/
│   ├── test_i18n.py                             # Symmetry, encoding, non-emptiness & DOM checks
│   ├── test_localized_pages.py                  # Per-language pages, SEO tags & rendered strings
│   ├── test_dom_integrity.py                    # DOCTYPE, OpenGraph, JSON-LD, IDs & A11y
│   ├── test_assets_integrity.py                 # Images, sprites, icons, documents & scripts
│   ├── test_js_syntax.py                        # Balanced tokens, lexical scopes & syntax
│   └── run_tests.py                             # Master CLI runner with formatted report
├── astro.config.mjs                             # Site address, i18n routes & build options
├── tailwind.config.mjs                          # Tailwind theme (fonts, brand & accent colors)
├── postcss.config.mjs                           # Runs Tailwind CSS and Autoprefixer
├── package.json                                 # Scripts and dependencies
└── README.md                                    # Repository documentation & presentation
```

---

## Resume & Certifications

The latest resumes and certifications are available in `public/docs/`:

- [English Resume (PDF)](./public/docs/Josue_Torres_Sibaja_Resume.pdf)
- [Curriculum Vitae in Spanish (PDF)](./public/docs/Josue_Torres_Sibaja_CV.pdf)
- [UNA Conversational English Certificate (PDF)](./public/docs/Josue_Torres_Sibaja_English_Certificate_UNA.pdf)
