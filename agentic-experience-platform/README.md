# Concept Experience v0.5.1

This directory contains the portable visual narrative for the Agentic Experience Platform.

## Current surfaces

- `index.html` — primary bilingual Executive / Nerd concept experience
- `architecture.html` — bilingual web-native visual projection of Reference Architecture v0.1.1
- `nerdy.html` — German-only colleague narrative, reached through the quiet One More Thing entry
- `design.html` — English-only Design Grammar Specimen: typefaces, type scale, color roles, surfaces, semantic states, diagram vocabulary, space and motion, all read from `tokens.css` at runtime

Shared foundations live in `tokens.css` (see `design/EXPERIENCE-DESIGN-LANGUAGE.md` §3.6). Press `G` on any page for the spec-grid overlay (`spec-grid.js`): content edges from `--max` / `--gutter`, 12 editorial columns, 8 px baseline.

`architecture.html` reuses the same visual system while keeping canonical architecture truth in Markdown. It also hosts the current rapid naming experiment, “Life of a Sparklet”, which tests Sparkery / Sparklet as human-facing language without changing the canonical Experience / Deployment model. The Nerd page is not a translation of the primary page; it uses the same visual system with a deliberately rougher internal tone.

## Interaction model

### DE / EN

The primary Concept Experience and Reference Architecture share one quiet language rail.

- English remains the default and canonical source wording.
- German is a presentation translation of the same DOM, not a second page copy.
- The selected language is remembered locally across the two surfaces.
- Canonical product / API terms remain intentionally stable where translation would blur the model.

### Executive / Nerd

Executive is the default reading depth.

The `Executive / Nerd` control toggles additional inline technical depth. When Nerd is enabled, the nearest revealed depth block is brought into view so the mode change is perceptible.

Keyboard:

- `N` — toggle Executive / Nerd depth

### Story mode

Story mode presents one chapter at a time.

Keyboard:

- `P` — enter / leave Story mode
- `← / →` or `Page Up / Page Down` — navigate chapters
- `Esc` — leave Story mode

Touch controls are available in Story mode as well.

## Current visual vocabulary

Each diagram type answers one question:

- **Publish path** — how does a local artifact become a protected URL?
- **Use case** — who invokes which capability?
- **Activity / graduation** — where can software stay, loop, retire or graduate?
- **Sequence** — what happens over time between human, agent, platform and preview?
- **Component** — where does responsibility sit?

The lilac accent is reserved for active paths, hypotheses and deliberate emphasis.

## Responsive rule

Do not force relationship-heavy diagrams into the viewport if doing so makes their geometry false.

Use a bounded horizontal diagram canvas when relationships or time-order need width. Recompose when panning would fragment the mental model. The graduation map therefore uses a dedicated vertical mobile composition rather than a miniature or 1520px-wide desktop canvas.

## Graduation rule

The lifecycle is not a conveyor belt.

```text
Explore ↺
  ├─ retire
  └─ Share ↺
      ├─ stay shared
      └─ Operate ↺
          ├─ stay operational
          └─ Validate when required → Enterprise Service
```

Every stage can be a valid destination.

## Technical stance

The site deliberately remains:

- plain HTML,
- plain CSS,
- plain JavaScript,
- no build framework,
- no external runtime dependency,
- deployable as static files.

This is part of the dogfooding experiment.

## Run locally

Open `site/index.html` directly, or use any static server.

Example:

```bash
python3 -m http.server 8080 --directory site
```

Then open `http://localhost:8080`.

## Validation

CI checks:

- required site files,
- JavaScript syntax,
- duplicate HTML IDs,
- local `href` / `src` targets,
- merge markers,
- the German language boundary of `nerdy.html`.

Run locally with:

```bash
node --check site/i18n.js
node --check site/app.js
node .github/scripts/validate-site.mjs
```

## Source of truth

The site is a communication artifact.

Canonical product truth remains in:

- `docs/`,
- `research/`,
- `state/`.

Do not allow polished visual language to silently turn a hypothesis into a decision.

## Known implementation debt

`styles.css` accumulated several override layers during rapid v0.2–v0.5 visual iteration.

The current output is stable, so this baseline deliberately does **not** refactor it.

Before adding another substantial visual feature:

1. consolidate the stylesheet into canonical sections,
2. remove superseded selectors and media-query overrides,
3. re-run visual/mobile regression checks.

Do not append another version-specific CSS layer first.


## Presentation runtime spike

`presentation-lab.html` is an isolated experiment that presents the existing Concept Experience through a small frameworkless presenter runtime.

It intentionally does not change the main Experience.

The lab tests whether common presentation behavior can remain a thin artifact adapter before adopting an authoring framework:

- fixed 16:9 stage,
- previous / next,
- overview,
- fullscreen,
- notes,
- timer,
- presenter window,
- cross-window synchronization,
- deep links.

Research rationale: `research/presentation-runtime-spike-2026-10.md`.
