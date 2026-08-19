# ASAM 4th Edition prototype — static export

Everything in this folder is a plain file served over plain HTTP. No bundler, no
build step, no CDN, no iframe, no blob URLs, no host runtime. Drop the folder on
any static host and open `index.html`.

## GitHub Pages

1. Commit this folder to a repo (keep it named `docs/`, or move its contents to
   the repo root / a `gh-pages` branch).
2. Settings → Pages → Source: *Deploy from a branch*, folder `/docs`.
3. The URL is `https://<user>.github.io/<repo>/`.

`.nojekyll` is included so Pages serves the files verbatim. Nothing here lives in
an underscore-prefixed path, so it would survive Jekyll anyway.

Also works from S3, Netlify, nginx, `python3 -m http.server`, or any other file
server. It does **not** work from a bare `file://` open — the page loads two ES
modules (`asam-screens.js`, `asam-note.js`), which browsers refuse over
`file://`. Any local server fixes it.

## What is in here

| Path | What it is |
| --- | --- |
| `index.html` | The prototype (markup + logic, single file) |
| `support.js` | Component runtime that renders `index.html` |
| `vendor/` | React 18.3.1 + ReactDOM UMD builds, self-hosted |
| `ds/` | ICANotes design-system CSS + component bundle |
| `ds-ext/` | Time-picker / number-field controls, pre-compiled to plain JS |
| `fonts/` | Lato woff2, self-hosted (no Google Fonts request) |
| `asam-*.js`, `shrub-data.js` | Screen definitions, requirements, shrub content, note engine |
| `assets/` | Logos, nav icons, v3 screenshots, note examples |

Zero network requests leave the origin — verified in the browser's resource
timing. Offline after first load, apart from normal HTTP caching.

## Notes

- Nothing persists server-side; the prototype keeps its state in the page (and
  the concept-mode flag in `localStorage`). Reload resets the note.
- The buttons-variant risk ratings stay behind `?ratings=buttons` (or Shift+B).
- Regenerating: this folder was produced from `ASAM 4th Edition -standalone-src-.dc.html`.
  If that file changes, the export has to be rebuilt — `index.html` here is a
  copy with local paths, not a live reference.
