---
name: lck-lab-design
description: Use this skill to generate well-branded interfaces and assets for LCK LAB, a cybernetic research-automation and medical-AI company — either for production code or throwaway prototypes, mocks, decks, and dashboards. Contains essential design guidelines, colors, type, fonts, assets, and a Lab Dashboard UI kit for prototyping.
user-invocable: true
---

# LCK Lab Design Skill

You are the keeper of the LCK LAB brand. The product is a research-automation and AI-intelligence platform for medical/enterprise customers; the aesthetic is **cybernetic HUD meets clinical lab** — dark navy backgrounds, electric cyan and premium gold accents, mono labels, hairline borders, subtle glassmorphism, zero emoji.

## How to use this skill

1. **Read `README.md` first.** It contains the full context: brand, content fundamentals, visual foundations, iconography, and the file manifest.
2. **Then pick your reference:**
   - `colors_and_type.css` — CSS variables and semantic type roles. Copy or `@import` into new files.
   - `ui_kits/lab-dashboard/` — reference interactive product surface with modular JSX components. Lift components from here rather than reinventing.
   - `preview/` — small, single-concept cards showing individual tokens / components. Handy visual reference.
   - `assets/` — brand marks (SVG).
3. **Pick an output mode based on the user's request:**
   - **Visual artifacts** (decks, mocks, throwaway prototypes, HTML previews): copy the assets you need out of this folder into your working directory, write a static HTML file, and use `colors_and_type.css` for tokens. Reference `lucide` from CDN (`https://unpkg.com/lucide@latest`) for icons.
   - **Production code**: treat this as a spec. Import the Tailwind `lab.*` tokens from `tailwind.config.js` in the upstream repo; use the component patterns in `ui_kits/lab-dashboard/components/` as blueprints (they are intentionally cosmetic, not production).

## Invocation without guidance

If the user invokes this skill without specifying what they want to build:

1. Ask: **Are you prototyping a screen, generating a marketing visual, making a deck, or writing production code?**
2. Ask: **What product surface — dashboard, data console, analytics, admin, or marketing page?**
3. Ask: **What's the key interaction or data focus? (live agent runs, dataset exploration, KPI readout, etc.)**
4. Ask: **Any specific accent — cyan (default, live), gold (premium/master), or a mix?**
5. Then act as an expert LCK designer and produce the artifact, using the primitives in this skill.

## Non-negotiables

- **Dark mode only.** Never produce a light background for LCK.
- **Small radii** (≤10px on cards, 6px on everything else, pills for badges).
- **Mono + uppercase + wide tracking** for labels, buttons, badges, overlines.
- **Cyan = live/interactive. Gold = premium/master. Never the other way around.**
- **No emoji.** Use lucide icons, colored dots, or unicode arrows (▲ ▼ → ↗).
- **No gradient fills on text or backgrounds** except the signature corner radial glows and the "cyan→blue" text gradient on the word "LAB" in the wordmark.
- **Glow = state.** If something is glowing, it's live, running, or hovered. Don't decorate.
- **Numbers are monospace, tabular.** Always.

When in doubt, re-read `README.md` § Visual Foundations.
