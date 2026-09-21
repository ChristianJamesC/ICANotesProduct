# ICANotes Design System

The design system for **ICANotes+** — a cloud-based **Behavioral Health EHR** (electronic health record) used by mental-health and psychiatric practices to run charts, clinical notes, assessments, treatment plans, scheduling, e-prescribing, messaging, and billing.

This system captures the product's modern **Odyssey** UI: a Figma-exported token system (colors, type, spacing, radii, elevation) and a Kendo-based component library, recreated here as framework-agnostic React + CSS so agents can design on-brand ICANotes screens, prototypes, and assets.

## Sources

Everything here was derived by reading the ICANotes **Odyssey** monorepo (attached read-only codebase `odyssey-system-master/`):

- **Design tokens** — `icanotes-odyssey/libs/frontend/ui-components/src/styles/design-tokens/` (`_colors.scss`, `_swatch.scss`, `_typography.scss`, `_spacing.scss`, `_border-radii.scss`, `_effects.scss`). These carry a "THESE VALUES ARE EXPORTED FROM FIGMA" header — the Figma library is the upstream source of truth (not linked in the repo).
- **Component library** — `icanotes-odyssey/libs/frontend/ui-components/src/lib/` (Angular components prefixed `ica-`, built on Kendo UI for Angular + PrimeNG). Component styling (`_theme.scss`, per-component `.scss`) was read for exact values.
- **Legacy styles & assets** — `icanotes-odyssey/libs/frontend/odyssey-styles/` (`_colors.scss`, typography, SVG/icon assets, logos).
- **Product shell & screens** — `icanotes-odyssey/apps/ui/` (the main Angular app: header + sidebar + charts / calendar / dashboard / notes / messages / billing).
- **Icon set** — 83 `ica-*` glyphs parsed from `ui-components/.../icon-list.const.ts` (Kendo SVG icon format), embedded in `components/feedback/Icon.jsx`.

> No Figma URL or live design file was provided — token values were lifted from the committed SCSS exports. If you have the upstream Figma, share it and this system can be reconciled against it.

## Font note

The single brand typeface is **Lato**. The product loads it from Google Fonts; `tokens/fonts.css` does the same via `@import`. No local Lato binaries ship in the repo, so there is nothing to bundle — consumers get Lato from Google Fonts. Lato ships 400/700/900 + italics; the 500/600 token weights fall back gracefully. **If you want self-hosted Lato binaries, provide them and they'll be wired into `@font-face`.**

---

## CONTENT FUNDAMENTALS

How ICANotes writes copy.

- **Voice:** clinical, plain, and calm — this is professional software for licensed clinicians handling PHI. No hype, no emoji, no exclamation marks in product copy.
- **Person:** address the user directly in the second person ("You will be logged off in 30 seconds", "Keep me logged in").
- **Casing:** sentence case for body and buttons; **UPPERCASE** for section headers, drawer titles, and nav destinations (e.g. `NOTIFICATIONS`, `MESSAGE CENTER`). Titles like slideout headers are uppercase + bold.
- **Terminology:** domain-accurate behavioral-health / EHR language — *chart, encounter, progress note, intake, assessment, treatment plan (Tx Plan), clinician, e-prescribing (eRx), signed / in-progress, MRN, NPI, ICD-10, CPT*. Prefer the real clinical term over a euphemism.
- **Status language:** notes read as `Signed`, `In progress`, `Completed via Chart` / `via Portal`. Statuses are short and factual.
- **Buttons:** verb-first and specific — "Sign & lock note", "Keep me logged in", "Add diagnosis", "Save". Destructive actions name the object ("Delete document").
- **Tone examples:**
  - ✅ "You will be logged off in 30 seconds."
  - ✅ "Sign & lock note"
  - ❌ "Oops! Something went wrong 😬"
  - ❌ "Click here to continue!!"

---

## VISUAL FOUNDATIONS

- **Two-color brand.** **ICA Blue** (`--ica-primary` `#107ead`, dark stops toward `#082f43`/`#104d6a`) is the primary — buttons, links, active tabs, headers. **ICA Green** (`--ica-tertiary-active` `#9de056`, text-on `#465c2f`) is the signature accent: it marks **checked / on / selected / confirm** states — checkboxes, radios, toggles, calendar selection, and the "Sign & lock" button are all green. This green-for-affirmation pattern is the most recognizable trait of the UI. The logo pairs the same blue + green with a small medical cross and document pages.
- **Color system.** Raw hues are 15-step ramps (`tokens/colors.css`); components consume a semantic swatch layer (`tokens/swatch.css`) with roles: `primary, secondary (neutral grey), tertiary (green), success (green), warning (yellow), error (red), info (blue)`, each with `subtle / hover / active / emphasis / on-*` variants. Six categorical `series-a…f` colors for charts.
- **Type.** Lato throughout. Big display ramp (96→18) for marketing/empty states; UI text is tight — **14px default body/controls, 12px labels & hints, 10px chips**. Headings are 700; body 400. Letter-spacing ~0.
- **Spacing.** Dense 2px steps at the low end (form controls live on 2/4/8/12/16) widening to 24/32/40/64 layout gutters.
- **Corner radii — small and tight.** Controls 6px (sm) / 8px (md, lg); toasts 12px; **panels/cards 16px**; pills/switches full. Nothing is heavily rounded.
- **Cards & surfaces.** App background is white/`#fbfbfb`; content sits in **Panels** — white, 16px radius, padding 24px (16 top), and a soft composite shadow `0 2px 3px rgba(0,0,0,.04), 0 4px 16px rgba(0,0,0,.12)`. No borders on cards; separation is by shadow + whitespace. Borders elsewhere are hairline `rgba(0,0,0,.24)`.
- **Elevation.** A 9-step soft shadow scale (blur/offset grow, alpha 0.04→0.32). Dialogs use mid elevation; toasts a lighter composite.
- **Controls.** Inputs: solid fill on `#fbfbfb`, 1px `rgba(61,61,61,.5)` border, 8px radius; **focus = dark border + a green glow** `0 0 2px 2px rgba(134,208,56,.48)` (the green accent again). Error = red border, red focus glow. Flat and outline input variants exist.
- **Buttons.** 4 fill modes — `solid`, `outline`, `flat`, and a glossy **`ghost`** (top-lit vertical gradient with split light/dark hairline borders and a drop shadow) — across 8 theme colors, 3 sizes (h24/32/40). Hover darkens the fill; focus adds a 2px themed ring.
- **Hover / press.** Hover shifts one step darker (solid) or adds a low-alpha tint (flat/outline); focus rings are 2px themed glows; disabled is `opacity: .6` + `not-allowed`. Transitions are short (~120ms) color/shadow fades — restrained, no bounces or springs.
- **Imagery.** Utilitarian: logos, a neutral grey avatar placeholder, document-type SVG icons, telehealth glyphs. No photography, gradients-as-decoration, or illustration in-product (the marketing gradient/hero style is out of scope here).
- **Transparency / blur.** Used sparingly — modal backdrops at `rgba(0,0,0,.32)`, tinted action-bar backgrounds using `*-opacity-active` role tokens; no glassmorphism/backdrop-blur.

---

## ICONOGRAPHY

- **Primary set:** a bespoke **83-glyph icon set** (`ica-*`), authored in the product as Kendo SVG icon definitions and embedded here in `components/feedback/Icon.jsx` (import `Icon` + `ICON_NAMES`). Line-weight, 16px-grid glyphs; single-path, `currentColor`-fillable. Covers editor (bold/italic/align/lists), navigation (carets/arrows), status (check, warning-triangle, information), and actions (plus, trash, pencil, copy, more-vertical). **Use these first.**
- **Product nav icons:** the app's main-menu glyphs (Dashboard, Charts, Calendar, Message Center, Reports, Billing, Settings) plus document-type icons (note / assessment / Tx plan) and telehealth are copied as standalone SVGs in `assets/svg/` and used by the UI kit.
- **Emoji:** never used in-product.
- **Unicode:** a few UI affordances use plain glyphs (× for remove/close, ▾ caret, ▲▼ steppers) rather than icons — mirrored here.
- **Substitutions:** none. All icons are the real product assets, copied or parsed from the codebase.

---

## Index — what's in here

**Global**
- `styles.css` — the single entry point consumers link; `@import`s everything below.
- `tokens/` — `fonts.css`, `colors.css`, `swatch.css` (semantic roles), `typography.css`, `spacing.css`, `radii.css`, `effects.css`.
- `assets/` — logos (`ICANotes_Logo_Color/Blue/White/small.png`), product nav & document SVGs (`assets/svg/`), grey avatar (`assets/img/`).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups).
- `thumbnail.html` — the homepage tile.

**Components** (React; `window.ICANotesDesignSystem_94514a`)
- **Actions** (`components/actions/`): `Button`, `IconButton`, `ButtonGroup`, `Chip`.
- **Forms** (`components/forms/`): `FormField`, `TextInput`, `TextArea`, `NumericInput`, `Select`, `MultiSelect`, `Checkbox`, `RadioGroup`, `Toggle`, `DatePicker`.
- **Layout** (`components/layout/`): `Panel`, `PanelHeading`, `Divider`, `Tabs`, `FloatingActionsBar`, `Widget`, `NoteWidget`.
- **Feedback** (`components/feedback/`): `Icon`, `Label`, `Toast`, `Tooltip`, `Dialog`, `ConfirmationDialog`, `SideDialog`.

**UI kits** (`ui_kits/`)
- `provider-app/` — recreation of the ICANotes+ provider web app (header + sidebar shell, dashboard, a patient chart with the note list, and a calendar). See `ui_kits/provider-app/README.md`.
- `support-portal/` — recreation of the internal **Support Portal** staff admin tool (Angular Material + Kendo Grid): navy toolbar, login, the Practice Users data grid with a right-click admin context menu, and the password-gated Feature Flags grid. See `ui_kits/support-portal/README.md`.

### Notes on scope

- The source component families map closely 1:1. A few consolidations: the source's `Dropdown` / `ComboBox` are represented by `Select`; `DropdownMultiple` / `DropdownMultipleButton` by `MultiSelect`; `Timepicker` / `Calendar` are covered by `DatePicker` (add a dedicated TimePicker on request).
- **Intentional additions:** `Tooltip` (the app uses `kendoTooltip` everywhere but exposes no standalone component) and `IconButton` (a convenience wrapper over `Button`). Both are flagged here so consumers know they're conveniences, not upstream primitives.
