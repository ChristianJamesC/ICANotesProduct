/* Feature status page. Loaded as plain scripts, not ES modules, so the
   page still opens by double-clicking it — Chrome blocks module loads over
   file://. Shared helpers live on the global scope by design. */

/* ---------------------------------------------------------------- theme */

const THEMES = [
  { id: "dark",    icon: "◐", label: "Dark" },
  { id: "light",   icon: "○", label: "Light" },
  { id: "sparkle", icon: "✦", label: "Sparkle" },
  { id: "metal",   icon: "\u{1F918}", label: "Metal" },
];

const root = document.documentElement;
const themeBtn = $("#theme");
const modeName = $("#mode-name");
const calm = window.matchMedia("(prefers-reduced-motion: reduce)");

const saved = localStorage.getItem("status-theme");
if (saved && THEMES.some((t) => t.id === saved)) root.dataset.theme = saved;
else if (window.matchMedia("(prefers-color-scheme: light)").matches)
  root.dataset.theme = "light";

let fxLayer = null;
function fx() {
  if (!fxLayer) {
    fxLayer = el("div", "fx");
    document.body.append(fxLayer);
  }
  return fxLayer;
}

function sparkleBurst() {
  const layer = fx();
  const glyphs = ["✦", "✧", "★", "✶", "❋"];
  const hues = ["#f043a6", "#a855f7", "#3fa9f5", "#21c8a4", "#ffb020"];
  for (let i = 0; i < 26; i++) {
    const s = el("span", "spark", glyphs[i % glyphs.length]);
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";
    s.style.color = hues[i % hues.length];
    s.style.animationDelay = Math.random() * 420 + "ms";
    s.style.fontSize = 12 + Math.random() * 18 + "px";
    layer.append(s);
    setTimeout(() => s.remove(), 2200);
  }
}

/* Ambient twinklers persist for as long as sparkle mode is on. */
function setAmbient(on) {
  const layer = fx();
  layer.querySelectorAll(".twinkle").forEach((n) => n.remove());
  if (!on || calm.matches) return;
  for (let i = 0; i < 14; i++) {
    const t = el("span", "twinkle", "✦");
    t.style.left = Math.random() * 100 + "vw";
    t.style.top = Math.random() * 100 + "vh";
    t.style.animationDelay = Math.random() * 3600 + "ms";
    t.style.fontSize = 8 + Math.random() * 9 + "px";
    layer.append(t);
  }
}

function metalStrike() {
  const layer = fx();
  const s = el("div", "strike");
  layer.append(s);
  setTimeout(() => s.remove(), 800);
  const stage = $(".wrap");
  stage.classList.remove("quake");
  void stage.offsetWidth;          /* restart the animation on repeat clicks */
  stage.classList.add("quake");
  setTimeout(() => stage.classList.remove("quake"), 500);
}

/* Embers drift up for as long as metal mode is on. */
function setEmbers(on) {
  const layer = fx();
  layer.querySelectorAll(".ember").forEach((n) => n.remove());
  if (!on || calm.matches) return;
  for (let i = 0; i < 18; i++) {
    const e = el("span", "ember");
    e.style.left = Math.random() * 100 + "vw";
    e.style.setProperty("--drift", (Math.random() * 80 - 40) + "px");
    e.style.animationDuration = 6 + Math.random() * 7 + "s";
    e.style.animationDelay = Math.random() * 9 + "s";
    layer.append(e);
  }
}

/* Click feedback, themed. Sparkle throws stars on a soft ring; metal throws
   shards on a hard diamond shockwave. Dark and light stay quiet. */
const CLICKABLE = "a, button, .node, .icon-btn, .tickets li, .chip";

function clickFx(x, y) {
  const theme = root.dataset.theme;
  if (calm.matches || (theme !== "sparkle" && theme !== "metal")) return;
  const layer = fx();
  const metal = theme === "metal";

  const ring = el("div", metal ? "fx-ring hard" : "fx-ring");
  ring.style.left = x + "px";
  ring.style.top = y + "px";
  layer.append(ring);
  setTimeout(() => ring.remove(), 620);

  const glyphs = ["✦", "✧", "★"];
  const hues = ["#f043a6", "#a855f7", "#3fa9f5", "#21c8a4", "#ffb020"];
  const n = metal ? 10 : 8;
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n + Math.random() * 0.5;
    const dist = (metal ? 34 : 26) + Math.random() * (metal ? 44 : 34);
    const bit = metal ? el("i", "fx-bit shard") : el("span", "fx-bit", glyphs[i % glyphs.length]);
    if (!metal) {
      bit.style.color = hues[i % hues.length];
      bit.style.fontSize = 9 + Math.random() * 8 + "px";
    }
    bit.style.left = x + "px";
    bit.style.top = y + "px";
    bit.style.setProperty("--dx", Math.cos(angle) * dist + "px");
    bit.style.setProperty("--dy", Math.sin(angle) * dist + "px");
    bit.style.setProperty("--spin", (metal ? 40 : 200) + Math.random() * 160 + "deg");
    layer.append(bit);
    setTimeout(() => bit.remove(), 700);
  }
}

document.addEventListener("pointerdown", (e) => {
  if (e.button !== 0) return;
  if (!e.target.closest(CLICKABLE)) return;
  clickFx(e.clientX, e.clientY);
});

/* Replay an animation class that may already be on the element. */
function replay(node, cls, ms) {
  if (calm.matches) return;
  node.classList.remove(cls);
  void node.offsetWidth;
  node.classList.add(cls);
  setTimeout(() => node.classList.remove(cls), ms);
}

function announce(label) {
  if (!modeName) return;
  modeName.textContent = label;
  modeName.classList.add("show");
  clearTimeout(announce.t);
  announce.t = setTimeout(() => modeName.classList.remove("show"), 1300);
}

function paint(theme) {
  root.dataset.theme = theme.id;
  localStorage.setItem("status-theme", theme.id);
  themeBtn.textContent = theme.icon;
  themeBtn.setAttribute("aria-label", `Theme: ${theme.label}. Click to change.`);
  setAmbient(theme.id === "sparkle");
  setEmbers(theme.id === "metal");
  announce(theme.label);
}

function applyTheme(theme, origin) {
  if (calm.matches || !document.startViewTransition) {
    paint(theme);
    return;
  }
  /* Reveal the new theme as a circle expanding out of the button. */
  const r = origin.getBoundingClientRect();
  const x = r.left + r.width / 2, y = r.top + r.height / 2;
  const reach = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );
  root.style.setProperty("--vt-x", x + "px");
  root.style.setProperty("--vt-y", y + "px");
  root.style.setProperty("--vt-r", reach + "px");
  root.classList.add("vt-run");

  const vt = document.startViewTransition(() => paint(theme));
  vt.finished.finally(() => root.classList.remove("vt-run"));
  /* Fire the flourish partway through the wipe so it lands with the reveal. */
  if (theme.id === "sparkle") setTimeout(sparkleBurst, 190);
  if (theme.id === "metal") setTimeout(metalStrike, 120);
}

/* Set the initial icon without announcing or animating. */
(function initTheme() {
  const current = THEMES.find((t) => t.id === root.dataset.theme) || THEMES[0];
  themeBtn.textContent = current.icon;
  themeBtn.setAttribute("aria-label", `Theme: ${current.label}. Click to change.`);
  setAmbient(current.id === "sparkle");
  setEmbers(current.id === "metal");
})();

themeBtn.addEventListener("click", () => {
  const i = THEMES.findIndex((t) => t.id === root.dataset.theme);
  applyTheme(THEMES[(i + 1) % THEMES.length], themeBtn);
});
