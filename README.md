# LCK Lab — Design System

> A cybernetic, dark-mode-first design system for **LCK LAB** — a research-automation and AI-intelligence company building dashboards and analysis tools for hospitals, labs, and enterprises.

The brand speaks two languages at once: **rigorous clinical precision** and **cyberpunk HUD**. Deep navy voids, hairline grids, and sparse neon accents; never decorative glow for its own sake. Every glow means *"something is live, something is running, something is important."*

---

## Sources

- **Primary:** `sunjongos/lck-design-system` on GitHub (React + Vite + Tailwind v4, TypeScript).
  - `DESIGN.md` — brand identity, color meaning, typography, glassmorphism rules (Korean).
  - `tailwind.config.js` — canonical `lab.*` color tokens.
  - `src/index.css` — glass / glow utility classes.
  - `src/components/ui/{Button,Badge,GlassCard}.tsx` — reference components.
  - `src/App.tsx` — reference showcase layout (palette, typography, buttons, data widget).
- **Notes from user:** dark-theme + neon accents; data visualization; high contrast; Tailwind; consistent rounded corners; subtle glassmorphism; clear padding/margin.

---

## Brand in one line

**LCK LAB** is an AI-agents and research-automation platform for medical and enterprise customers, with a tone that is *futuristic, cold, precise, and premium* — the visual equivalent of an oscilloscope rendering a perfect sine wave in a dark lab.

Services covered:

| Surface | Purpose | Primary colors used |
|---|---|---|
| **Lab Dashboard** | Live ops / AI agent status / runs | navy ▪ cyan ▪ gray |
| **Data Console** | Dataset exploration, logs, queries | dark ▪ cyan ▪ green |
| **Analytics Workbench** | Charts, reports, comparisons | navy ▪ cyan ▪ gold |
| **Admin / Premium Tier** | Master controls, premium features | navy ▪ **gold** |

---

## Index (manifest of this project)

```
README.md                    ← you are here
SKILL.md                     ← Agent Skill entry point (Claude Code compatible)
colors_and_type.css          ← all CSS variables + typography roles

assets/                      ← brand marks (svg)
  lck-logo.svg               ← square mark (120×120)
  lck-mark.svg               ← horizontal lockup (200×48)

preview/                     ← design-system preview cards (registered assets)
  palette-*.html             ← color swatches
  type-*.html                ← typography specimens
  spacing-*.html             ← radius, shadow, spacing tokens
  component-*.html           ← buttons, badges, inputs, cards
  brand-*.html               ← logos, iconography

ui_kits/lab-dashboard/       ← interactive UI kit: Lab Dashboard product
  index.html                 ← click-thru prototype
  README.md                  ← what's inside
  components/*.jsx           ← modular React components
```

---

## Content fundamentals

### Voice

- **Precise, calm, technical.** Think SRE on a night shift. No exclamation marks, no hype words ("amazing", "awesome"). Prefer verbs of *observation* and *execution*.
- **Bilingual-aware.** Copy is written assuming it may appear in Korean or English. English strings use **terse, technical-sounding phrases** (`EXECUTE NODE`, `DEPLOY MASTER`, `AI.READY`, `QPS`, `LATENCY`). Korean body copy uses formal, written-Korean register (문어체) — *"초정밀 데이터 분석 및 AI 모델링 플랫폼"*.
- **Person.** Avoid 1st person singular. Use *the system / the agent / the run* as subjects; address the user as *you* sparingly, mostly in onboarding and empty states.
- **Emoji:** **never.** Status is communicated through colored badges, dots, and icons.

### Casing & punctuation

- **ALL-CAPS with extra letter-spacing** for labels, buttons, badges, overlines, status. Pair with monospace.
- **Dot-separated terse tokens** for status: `AI.READY`, `PREMIUM.TIER`, `NODE.LIVE`, `SYS.OFFLINE`. Feels like a command namespace.
- **Title case** for headings in marketing and docs.
- **Sentence case** for long-form body copy.
- **Square-bracket prefixes** for log-style lines: `[12:04:33] agent.run id=0x8AF1 status=ok`.

### Numbers & units

- Monospace, tabular-nums, always. Units in `var(--fg-2)` gray, smaller — e.g. **`1,402`** `QPS`, **`12`**`ms`, **`99.8`**`%`.
- Hex IDs, UUIDs, run IDs styled with `.t-code` — cyan on a thin cyan ring.
- Never round silently; if a value is truncated, show an ellipsis or ▲/▼ delta.

### Microcopy examples (preferred → avoid)

| Preferred | Avoid |
|---|---|
| `EXECUTE NODE` | `Run it!` |
| `OFFLINE` | `Sorry, not available 😢` |
| `PREMIUM.TIER` | `Pro ✨` |
| `12 rows / 1.2s` | `Loaded some stuff!` |
| `Confirm deploy?` | `Are you sure?? This is a big deal!!` |

---

## Visual foundations

### Color

- **Base:** deep navy (`#0A192F`) and near-black (`#020C1B`). All surfaces are dark; there is no "light mode."
- **Primary accent:** electric cyan (`#00E5FF`) — reserved for interactive / live / AI things. If cyan is on screen, it is almost always signaling *runnable intent* or *current state*.
- **Premium accent:** gold (`#D4AF37`) — master / admin / premium / high-value result. Use sparingly — gold loses its value if it's everywhere.
- **Secondary accents:** acid green (`#92C118`) for positive signals, amber (`#F29D00`) for warnings, red (`#FF3B6B`) for critical.
- **Text:** pure white for primary, blue-gray `#8892B0` for secondary, lower opacity gray for tertiary/disabled.

### Type

- **Sans:** `Inter` (Latin) + `Pretendard` (Korean), stacked.
- **Mono:** `Roboto Mono` for labels, HUD readouts, overlines, buttons, badges, logs. Mono is the *voice of the lab*.
- Display/hero type is almost always **mono bold, tight-tracked, often with a subtle cyan glow on the key word**.
- Body text is sans. Never use mono for paragraphs of body content.
- Tracking: tight (−0.02em) on display; **extra-wide (+0.22em) on uppercase mono labels** — this is a signature move.

### Spacing & layout

- **4-point grid** (4/8/12/16/24/32/48/64/80).
- **Hairline rules** (`rgba(255,255,255,0.1)`) separate regions. No thick dividers.
- Heavy **negative space** around key HUD readouts and hero numbers — the data should feel like it's floating in dark space.
- Fixed max content width on dashboards ~1280–1440px; marketing can go to 1200px.

### Corners

- **Small radii only.** `--r-md: 6px` is the default. `--r-lg: 10px` for cards. Pills for badges.
- No 20px+ "friendly" rounded corners. Feels rational, industrial, not consumer-cute.

### Borders

- Hairline **white @ 10% alpha** on virtually everything (cards, inputs, buttons).
- On interactive / accent components, 30%-alpha cyan or gold border.
- On hover, border alpha lifts to ~50% and shadow lights up (see Glow).

### Glassmorphism

- **Subtle**, never maximalist. Two styles:
  - `.glass` — `bg-white/3 + backdrop-blur-xl + border-white/10` — lightweight overlay surfaces.
  - `.glass-panel` — `bg-dark/60 + backdrop-blur-2xl + border-cyan/20` — primary card treatment on the dashboard.
- Panels always sit over the dark page background, not over each other — avoid stacked glass.

### Shadows

- **No drop shadows in the "floating card" sense.** Elevation is communicated through **border alpha** and **glow**.
- Two canonical glows:
  - **Cyan glow** `0 0 20px rgba(0,229,255,0.5) + inset 0 0 10px rgba(0,229,255,0.18)` — for primary / active / hovered interactive elements.
  - **Gold glow** same shape, gold tint — for premium / master elements.
- A third subtle `0 4px 30px rgba(0,0,0,0.35)` is allowed on modals to separate from the page.

### Backgrounds

- Page background: `--lab-navy` with **two giant radial gradients** — cyan at top, gold at bottom-right, each at ~3–5% opacity, blurred 120px. They give the dark background subtle *depth* without reading as colored.
- Dashboards sometimes include a very faint **grid** (1px lines @ 4% alpha, 40px spacing) behind the hero region.
- Never full-bleed photography. If imagery is used, it's diagrammatic: waveforms, scatter plots, sci-fi renders of molecules — always tinted cyan or gold.

### Transparency & blur

- Transparency is **only** used for glass panels and hover overlays. Never for plain text.
- Blur is only used on glass + the bg radial gradients. Never on imagery.

### Motion

- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease-out`) for entries; `cubic-bezier(0.4, 0, 0.2, 1)` for snap.
- **Durations:** 150ms for hover, 240ms for state changes, 420ms for panel entries, 1500ms for scanline sweeps.
- **Signature motion:** a **scanline sweep** inside buttons and hero headers — a white-at-5% band that translates top → bottom over 1.5s on hover. Subtle.
- **Pulsing cyan dot** on live badges (`animate-pulse`).
- **No bounces, no spring overshoots.** This system is calm.

### Hover & press states

- **Hover (interactive primary):** border alpha 30% → 50%, glow lights up, scanline sweeps.
- **Hover (ghost):** background to `rgba(255,255,255,0.08)`, text color lifts to `fg-0`.
- **Press:** no scale (important — no 0.96 shrinks). Instead, glow fades briefly and background-alpha deepens.
- **Focus:** 2px cyan outline, 2px offset, always visible for keyboard users.

### Iconography

See the **ICONOGRAPHY** section below.

---

## Iconography

- **Primary icon set: `lucide-react`** (already used in the codebase: `Activity`, `Cpu`, `Database`, `Fingerprint`, `Sparkles`, `ChevronRight`, etc.).
  - Stroke-only, 1.5–2px weight, rounded joints. Matches the clinical/HUD aesthetic.
  - Render at 16/20/24px, aligned to 4-point grid.
  - Color by role: `--lab-cyan` for live/interactive, `--fg-2` (gray) for default, `--lab-gold` for premium, `--success/warning/danger` for state.
- **On the web / HTML surfaces**, load from CDN:
  ```html
  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
  ```
  then `<i data-lucide="activity"></i>` + `lucide.createIcons()`.
- **No emoji.** State is a colored dot, a badge, or a lucide icon.
- **No hand-rolled SVG icons** beyond the LCK logo/mark.
- **Unicode characters** used as micro-icons: `▲ ▼` for deltas, `•` for separators, `→ ↗ ↘` for flows, `◯ ●` for status dots. Monospace context only.
- **Brand marks** (`assets/lck-logo.svg`, `assets/lck-mark.svg`) are the only custom SVGs in the system. They are diagrammatic: an L-shaped flask silhouette paired with a gold "C" ring — research × cybernetics.

> **Flagged substitution:** the upstream repo references `lck_lab_logo.png` but does not include it. The SVG marks in `assets/` are **placeholder logos** designed to match the described aesthetic (digital flask + L/C combination). **Please provide the real `lck_lab_logo.png`** and we'll swap it in.

---

## Fonts — substitution note

The repo specifies **Inter**, **Roboto Mono**, and **Pretendard**. These are all freely available and loaded via Google Fonts / jsDelivr CDN in `colors_and_type.css`:

- Inter — Google Fonts ✓
- Roboto Mono — Google Fonts ✓
- Pretendard — jsDelivr CDN ✓ (official source)

**No font-file substitutions were needed.** If you want the ttf/woff2 files bundled locally instead of CDN, upload them to `fonts/` and we'll swap the `@import`s for `@font-face` rules.

---

## Further reading

- `colors_and_type.css` — single source of truth for tokens
- `preview/` — each card is a single concept, registered for the Design System tab
- `ui_kits/lab-dashboard/` — the reference product surface
- `SKILL.md` — how an agent (Claude Code or otherwise) should use this system

---

## Status

- ✅ Tokens (`colors_and_type.css`), fonts via Google Fonts / jsDelivr (no substitution needed).
- ✅ 17 preview cards registered across Colors / Type / Spacing / Components / Brand.
- ✅ Lab Dashboard UI kit: Login → Overview → Agents → Analytics click-thru.
- ⚠️ Logo marks in `assets/` are **placeholders** — the upstream repo references `lck_lab_logo.png` but does not include it. Please provide the real file.
- ⚠️ `Datasets`, `Logs`, `Admin`, `Settings` screens in the UI kit are stubs — wire up if needed.

---

*Maintainers: iterate liberally. Neon fades fast; precision doesn't.*
