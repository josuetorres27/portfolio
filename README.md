# Josue Torres Sibaja — Software Engineering Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live_Site-josuetorressibaja.com-3b82f6?style=flat-square&logo=google-chrome&logoColor=white)](https://josuetorressibaja.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38bdf8?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Bilingual](https://img.shields.io/badge/i18n-English%20%7C%20Espa%C3%B1ol-8b5cf6?style=flat-square)](#features)
[![Web Audio API](https://img.shields.io/badge/Web_Audio-8--Bit_Synth-f59e0b?style=flat-square)](#features)
[![CI Test Suite](https://img.shields.io/github/actions/workflow/status/josuetorres27/portfolio/ci.yml?style=flat-square&logo=githubactions&logoColor=white&label=CI)](https://github.com/josuetorres27/portfolio/actions/workflows/ci.yml)
[![Automated Tests](https://img.shields.io/badge/Tests-313%20Passing-success?style=flat-square&logo=python&logoColor=white)](#testing)
[![Production Pipeline](https://img.shields.io/badge/Deployed%20with-CI%2FCD%20Pipeline-22c55e?style=flat-square&logo=githubactions&logoColor=white)](https://josuetorressibaja.com/)

This repository contains the source of a personal software engineering portfolio. The website presents academic background, featured software engineering projects, production experience in Information Technology infrastructure and web administration, applied AI workflows, and personal interests, in a custom retro gaming and terminal style.

**Live:** [https://josuetorressibaja.com](https://josuetorressibaja.com)

---

## About Me

I am a Computer Science Graduating Senior (Software Engineering emphasis) at the University of Costa Rica (UCR), with all coursework completed in Dec 2026 and the degree expected in Apr 2027. I build scalable, full-stack, systems-level, and distributed software using modern engineering practices and AI agentic workflows, backed by solid foundations in data structures, algorithms, object-oriented design, and practical university infrastructure and software engineering experience.

- **Education:** B.Sc. in Computer Science (Software Engineering emphasis), University of Costa Rica (UCR), Mar 2023 – Dec 2026; coursework completed, degree expected Apr 2027.
- **Languages:** Spanish (Native), English (CEFR B2–C1 Bilingual Working Proficiency; National University of Costa Rica (UNA), 2019 – 2021; 13 levels / 520 hours).
- **Work Experience:** Information Technology Support Assistant at the University of Costa Rica (Orientation Office), Aug 2026 – Dec 2026 (fixed-term contract).
- **Availability:** Full-time entry-level and junior Software Engineering roles, available immediately.

---

## Tech Stack

| Category | Technologies and Tools |
| :--- | :--- |
| **Languages** | Python, C++, TypeScript, JavaScript (ES6+), C#, Java, SQL, HTML5, CSS3 |
| **Frameworks and Libraries** | Next.js 16, React 19, ASP.NET Core, Node.js, Tailwind CSS |
| **Databases** | Microsoft SQL Server, PostgreSQL |
| **Developer Tools and Infrastructure** | Git, GitHub Actions (CI/CD), Linux, Windows, Docker, Visual Studio, VS Code |
| **Applied AI and Agentic Workflows** | Multi-Agent Systems, Autonomous Coding Agents, Google Antigravity, Claude Code, GitHub Copilot, Tool & Function Calling, Prompt & Context Engineering |

---

## Featured Projects

### [LASCE — Institutional Scientific Web Platform](https://lasce.ucr.ac.cr) (Institutional Project · Concludes Dec 2026)

Full-stack institutional and scientific-data platform developed for the Solar Astrophysics and Space Weather Laboratory (LASCE) at the University of Costa Rica.

- **Live Platform:** [https://lasce.ucr.ac.cr](https://lasce.ucr.ac.cr).
- **Repository:** [LasceUCR/lasce](https://github.com/LasceUCR/lasce).
- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL, Redis, BullMQ, Python 3.13 Worker, MinIO, Docker, Playwright E2E, Vitest.
- **Contributions:** Complete CMS suite for scientific news and the ROSAC radio observatory (optimistic concurrency control, Prisma transactions, MinIO asset pipelines), accessible WCAG UI components, and automated E2E testing suites.

### [CS Interactive Workshop](https://workshop.josuetorressibaja.com/) (Sep 2024 – Present)

Interactive web workshop for Computer Science students at the University of Costa Rica, built on visual simulations backed by real C and C++ engines.

- **Live App:** [https://workshop.josuetorressibaja.com/](https://workshop.josuetorressibaja.com/).
- **Repository:** [josuetorres27/cs-interactive-workshop](https://github.com/josuetorres27/cs-interactive-workshop).
- **Stack:** C11, C++17, POSIX Threads, OpenMP, BSD Sockets (TCP/IP), JavaScript, Firebase (Hosting, Auth, Firestore), GitHub Actions.
- **Highlights:** Twelve stations on sorting, algorithm races, data structures, concurrency, networking, classic interview problems, and SQL; step-by-step code tracers; a 2D heat diffusion solver in serial, pthreads, and OpenMP versions with bit-for-bit identical results; a multi-threaded TCP server; Google sign-in with cloud-saved progress; and a CI pipeline running 1,376 automated tests before every deployment.

### [PAdES-LTA Renewer](https://github.com/josuetorres27/pades-lta-renewer) (Oct 2026 – Present · UCR)

Research project for CI-0140 Software Quality: an engine and web service that renews timestamps on digitally signed PDF documents for long-term preservation (PAdES-B-LTA / ETSI EN 319 142), in line with Costa Rica's Law 8454.

- **Repository:** [josuetorres27/pades-lta-renewer](https://github.com/josuetorres27/pades-lta-renewer).
- **Stack:** Python, Flask, cryptography, asn1crypto, pypdf, RFC 3161, X.509, OCSP, CRL, pytest.
- **Highlights:** RFC 3161 client for the SINPE Time Stamping Authority (BCCR), X.509 chain reconstruction up to the national root CA with OCSP/CRL revocation checks, and incremental PDF updates that add `/DSS` evidence and `/DocTimeStamp` seals without invalidating existing signatures.
- **Co-Author:** Gabriel Serrano Rojas.

### ¿Quién controla nuestra atención? (Ethical Vodcast)

Audiovisual ethical investigation analyzing algorithmic recommendation engines, the attention economy, and the professional responsibilities of computing engineers.

- **Episodes:** [Episode 1 (YouTube)](https://youtu.be/ltSKzyDhLzY) · [Episode 2 — Behind the Scenes (YouTube)](https://youtu.be/MKMLW2HJ6zo).
- **Co-Creators:** [Gabriel Serrano](https://www.linkedin.com/in/gabrielserranor/) & [Rolando Villavicencio González](https://www.linkedin.com/in/rolando-villavicencio-gonzalez/).
- **Production:** Multi-camera setup, scriptwriting, professional sound engineering, and post-production editing.

### [Virtual Microscope Administration Panel](https://github.com/RolandoVillavicencio013/biological-microscope-administration-panel) (UCR)

Desktop administration platform that digitizes microscopy workflows and manages biological specimen collections.

- **Repository:** [RolandoVillavicencio013/biological-microscope-administration-panel](https://github.com/RolandoVillavicencio013/biological-microscope-administration-panel).
- **Stack:** C#, ASP.NET Core, .NET, PostgreSQL, Desktop Architecture, Visual Studio.
- **Highlights:** Hierarchical data organization (Groups, Boxes, Slides), high-fidelity microscopy imaging, and offline-capable workstation data persistence.

### ThemePark UCR — Virtual University Simulation (UCR)

Virtual campus simulation built in Unity with a decoupled backend architecture.

- **Stack:** C#, ASP.NET Core, RESTful APIs, SQL Server, Unity Integration, Scrum.
- **Highlights:** Decoupled REST services for real-time interaction with virtual campus buildings, facilities, and interactive learning objects.

---

## Features

- **Retro Gaming Aesthetic and Interactive Adventure Mode:** Custom stepped pixel-art frames, arcade CRT/terminal window headers, quest tags, and an interactive pixel companion with animated checkpoints, responsive dialogue engine, and smooth section navigation.
- **Procedural 8-Bit Audio Synthesis:** Real-time retro sound effects (blip, coin, jump, level-up, exit) synthesized on the fly using native Web Audio API oscillators, with zero external audio files or dependencies.
- **Zero-Build Static Site:** Built with clean HTML5, Tailwind CSS, and vanilla ES6+ JavaScript, with zero framework bundle overhead.
- **Dual-Language Architecture (EN / ES):** Complete client-side internationalization system (`I18N`) with persistent language preference, `?lang=en|es` URL parameter support, and translated `aria-label` and tooltip bindings.
- **Adaptive Theme Engine:** Dark and Light theme switching with custom retro color palettes, system preference detection, and smooth color transitions.
- **Cross-Platform Responsive and Accessible:** Optimized for devices ranging from mobile (360px – 414px) and tablet (768px – 834px) to widescreen desktop, adhering to semantic HTML, keyboard navigation, and WCAG contrast guidelines.
- **Interactive Galleries and Lightbox:** Custom carousels and a full-screen image inspection modal with geolocation metadata and photography details.

---

## Testing

The repository includes an automated test suite of 313 tests, executed on Python 3.12+ and integrated into GitHub Actions CI, so that no component or translation breaks silently:

- **Internationalization Suite (`tests/test_i18n.py`):** 264 tests validating symmetry across all 254 translation keys between English and Spanish, strict parity, array lengths, absence of encoding mojibake, and synchronization with all `data-i18n`, `data-i18n-html`, `data-i18n-aria` and `data-i18n-title` DOM bindings.
- **DOM and Semantic Integrity (`tests/test_dom_integrity.py`):** 33 tests verifying HTML5 compliance, OpenGraph metadata, Twitter cards, Schema.org JSON-LD graphs, absence of duplicate element IDs, presence of all interactive target IDs, the `?lang=` URL parameter, and UI regression guards for the preloader, hero layout, buttons, and adventure mode (sprites, compositor-only motion, and intro cancellation).
- **Assets Integrity (`tests/test_assets_integrity.py`):** 10 tests verifying that every image, sprite sheet, icon, PDF document, and modular script referenced across the codebase physically exists on disk with non-zero size.
- **JavaScript Syntax and Scope Hygiene (`tests/test_js_syntax.py`):** 6 tests performing lexical scope tracking to prevent variable redeclaration collisions (e.g. duplicate `const`/`let`), delimiter balancing (`{}`, `[]`, `()`), and absence of debugger leftovers.

Run the suite locally:

```bash
python tests/run_tests.py
```

---

## Hosting & Deployment

The site is fully static (no build step), so every push to `main` goes live without a bundler:

- **Primary:** [josuetorressibaja.com](https://josuetorressibaja.com) on GitHub Pages, with HTTPS enforced and DNS managed on Cloudflare (`www` redirects to the apex domain).
- **Mirror:** [josuetorres.tech](https://josuetorres.tech), redeployed on a Coolify server by `deploy.yml`.
- **Search Engines:** The page declares `josuetorressibaja.com` as its canonical address, so every copy points to one URL.
- **Quality Gate:** `ci.yml` runs the full test suite on every push and pull request.

---

## Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       ├── ci.yml                               # GitHub Actions automated test runner
│       └── deploy.yml                           # Triggers the josuetorres.tech mirror on Coolify
├── css/
│   └── styles.css                               # Custom retro, CRT scanlines & pixel styling
├── docs/
│   ├── Josue_Torres_Resume.pdf                  # English Resume (PDF)
│   ├── Josue_Torres_CV.pdf                      # Spanish Curriculum Vitae (PDF)
│   └── Josue_Torres_English_Certificate_UNA.pdf # UNA Conversational English Certificate (PDF)
├── img/
│   ├── portfolio.jpeg                           # Professional profile photograph
│   ├── icons/                                   # Custom retro pixel-art icon suite
│   ├── character-sprites/                       # Pixel companion animation sprite sheets
│   ├── experience/                              # Workplace & Information Technology operations photographic evidence
│   ├── handicrafts/                             # Foamy clay sculpting & TCU workshop creations
│   └── photography/                             # Costa Rica landscape & nature gallery
├── js/
│   ├── modules/
│   │   ├── audio.js                             # Native Web Audio API 8-bit retro sound synthesizer
│   │   ├── theme.js                             # Dark/Light mode engine & icon synchronization
│   │   ├── ui.js                                # Dropdowns, mobile menu & clipboard manager
│   │   ├── i18n.js                              # Bilingual translation engine & hero typewriter
│   │   ├── lightbox.js                          # Touch carousel & full-screen photo viewer
│   │   └── adventure.js                         # 8-bit companion, rail map & scrollytelling
│   ├── translations.js                          # Bilingual (EN/ES) dictionaries (254 keys)
│   └── main.js                                  # Application orchestrator (window.Portfolio)
├── tests/
│   ├── test_i18n.py                             # Symmetry, encoding, non-emptiness & DOM checks
│   ├── test_dom_integrity.py                    # DOCTYPE, OpenGraph, JSON-LD, IDs & A11y
│   ├── test_assets_integrity.py                 # Images, sprites, icons, documents & scripts
│   ├── test_js_syntax.py                        # Balanced tokens, lexical scopes & syntax
│   └── run_tests.py                             # Master CLI runner with formatted report
├── CNAME                                        # Custom domain for GitHub Pages
├── index.html                                   # Semantic, accessible HTML markup structure
└── README.md                                    # Repository documentation & presentation
```

---

## Resume & Certifications

The latest resumes and certifications are available in `docs/`:

- [English Resume (PDF)](./docs/Josue_Torres_Resume.pdf)
- [Curriculum Vitae in Spanish (PDF)](./docs/Josue_Torres_CV.pdf)
- [UNA Conversational English Certificate (PDF)](./docs/Josue_Torres_English_Certificate_UNA.pdf)

---

## Contact

- **LinkedIn:** [linkedin.com/in/josue-torres-sibaja](https://www.linkedin.com/in/josue-torres-sibaja/)
- **GitHub:** [github.com/josuetorres27](https://github.com/josuetorres27)
- **Email:** [dev.josue.torres@gmail.com](mailto:dev.josue.torres@gmail.com)

---

Created by **Josue Torres Sibaja** · [Portfolio](https://josuetorressibaja.com/) · [LinkedIn](https://www.linkedin.com/in/josue-torres-sibaja/) · [GitHub](https://github.com/josuetorres27)
