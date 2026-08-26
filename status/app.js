/* Feature status page.
   data.json is machine-written nightly; everything here is hand-built and
   only ever reads it. Keep the two apart -- the nightly diff should stay
   small enough to read in git history. */

const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

const RING_R = 15;
const RING_C = 2 * Math.PI * RING_R;

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

/* ----------------------------------------------------------------- time */

function ago(iso) {
  const mins = Math.max(0, Math.round((Date.now() - new Date(iso)) / 60000));
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.round(hrs / 24);
  return `${days}d ago`;
}

function when(target, daysLeft) {
  if (!target) return "No target set";
  const pretty = new Date(target + "T00:00:00").toLocaleDateString(undefined, {
    month: "short", day: "numeric", year: "numeric",
  });
  if (daysLeft == null) return pretty;
  if (daysLeft < 0) return `${pretty} · ${Math.abs(daysLeft)} days ago`;
  if (daysLeft === 0) return `${pretty} · today`;
  return `${pretty} · in ${daysLeft} days`;
}

/* ------------------------------------------------------------ rendering */

function countUp(node, to, suffix = "") {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || to === 0) {
    node.textContent = to + suffix;
    return;
  }
  const start = performance.now(), dur = 900;
  const step = (now) => {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    node.textContent = Math.round(to * eased) + suffix;
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function ring(percent, rag) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "ring");
  svg.setAttribute("viewBox", "0 0 34 34");
  svg.innerHTML =
    `<circle class="track" cx="17" cy="17" r="${RING_R}"></circle>` +
    `<circle class="val" cx="17" cy="17" r="${RING_R}"` +
    ` stroke-dasharray="${RING_C}" stroke-dashoffset="${RING_C}"></circle>`;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      $(".val", svg).style.strokeDashoffset = RING_C * (1 - percent / 100);
    });
  });
  return svg;
}

function flagList(flags) {
  const box = el("div", "flags");
  flags.forEach((f) => {
    const row = el("div", `flag ${f.level}`);
    row.append(el("span", null, f.level === "info" ? "ℹ" : "▲"), el("span", null, f.text));
    box.append(row);
  });
  return box;
}

function bar(title, summary, segments, emptyText) {
  const box = el("div");
  const label = el("div", "bar-label");
  label.append(el("span", null, title));
  const n = el("span", "n");
  label.append(n);
  box.append(label);

  if (summary.total === 0) {
    box.append(el("div", "bar"), el("p", "bar-empty", emptyText));
    n.textContent = "none yet";
    return box;
  }

  n.textContent = `${summary.percent}% · ${summary.total} total`;
  const track = el("div", "bar");
  const key = el("div", "bar-key");
  segments.forEach((seg) => {
    if (!seg.count) return;
    /* seg.fill === false means it is counted and named but NOT shaded in --
       outstanding work must never look like progress. */
    if (seg.fill !== false) {
      const s = el("span", seg.cls);
      track.append(s);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          s.style.width = (100 * seg.count / summary.total) + "%";
        });
      });
    }
    const k = el("span", null);
    const swatch = el("i");
    if (seg.fill === false) {
      swatch.style.background = "transparent";
      swatch.style.boxShadow = `inset 0 0 0 1.5px ${seg.color}`;
    } else {
      swatch.style.background = seg.color;
    }
    k.append(swatch, document.createTextNode(`${seg.count} ${seg.label}`));
    key.append(k);
  });
  box.append(track, key);
  return box;
}

/* Scope breakdown. Deliberately has no bar and no percentage -- the
   requirement set describes what the work IS, never how much of it is done. */
function scope(title, reqs) {
  const box = el("div");
  const label = el("div", "bar-label");
  label.append(el("span", null, title));
  label.append(el("span", "n", reqs.total ? `${reqs.work} to do` : "none yet"));
  box.append(label);

  if (!reqs.total) {
    box.append(el("p", "bar-empty", "No requirements mapped to this milestone."));
    return box;
  }

  const rows = [
    { n: reqs.open, label: "to build" },
    { n: reqs.removal, label: "to move or retire" },
    { n: reqs.no_work, label: "need no work", muted: true },
  ].filter((r) => r.n);

  const ul = el("ul", "scope");
  rows.forEach((r) => {
    const li = el("li", r.muted ? "muted" : null);
    li.append(el("b", null, String(r.n)), el("span", null, r.label));
    ul.append(li);
  });
  box.append(ul);
  return box;
}

const TICKET_CAP = 12;

/* Shared by the milestone view and the epic-rollup view. */
function ticketList(issues, epicUrl, epicKey) {
  const ul = el("ul", "tickets");
  issues.slice(0, TICKET_CAP).forEach((t) => {
    const li = el("li");
    const a = el("a", "k", t.key);
    a.href = t.url; a.target = "_blank"; a.rel = "noopener";
    li.append(a, el("span", null, t.summary));
    if (t.assignee) li.append(el("span", "who", t.assignee));
    li.append(el("span", `s chip ${t.category === "indeterminate" ? "info" : ""}`, t.status));
    ul.append(li);
  });
  const box = el("div");
  box.append(ul);
  /* Never truncate silently -- say what was left out and where to see it. */
  if (issues.length > TICKET_CAP) {
    const more = el("p", "bar-empty");
    const link = el("a", null, epicKey || "the epic");
    if (epicUrl) { link.href = epicUrl; link.target = "_blank"; link.rel = "noopener"; }
    more.append(
      document.createTextNode(`Showing ${TICKET_CAP} of ${issues.length} open — the rest are in `),
      link, document.createTextNode("."),
    );
    box.append(more);
  }
  return box;
}

/* A feature with delivery data but no milestone narrative. */
function renderRollup(host, feature) {
  host.textContent = "";
  host.className = "detail";

  const t = feature.tickets;
  host.append(el("h3", "claim rollup", "Epic rollup"));
  host.append(el("p", "why",
    "No milestones are defined for this feature, so this is what the team has "
    + "ticketed and closed under the epic — activity, not progress toward a plan."));

  const bars = el("div", "bars");
  bars.append(bar("Built (Jira)", t, [
    { count: t.done, cls: "s-done", color: "var(--green)", label: "done" },
    { count: t.in_progress, cls: "s-prog", color: "var(--accent)", label: "in progress" },
    { count: t.todo, color: "var(--text-faint)", label: "to do", fill: false },
  ], "No tickets under this epic."));
  host.append(bars);

  const block = el("div", "block");
  block.append(el("h3", null, "Open now"));
  if (feature.open_tickets && feature.open_tickets.length) {
    block.append(ticketList(feature.open_tickets, feature.epic_url, feature.epic));
  } else {
    block.append(el("div", "empty", "Nothing open."));
  }
  host.append(block);
}

function renderDetail(host, feature, ms, animate) {
  host.textContent = "";
  host.className = "detail" + (animate ? " swap" : "");

  host.append(el("h3", "claim", ms.claim));
  if (ms.why) host.append(el("p", "why", ms.why));

  const whenRow = el("div", "when");
  whenRow.append(el("span", null, "Target"), el("b", null, when(ms.target, ms.days_left)));
  const state = el("span", `chip ${ms.rag}`, ms.complete ? "Complete" : ms.rag === "green" ? "On track" : ms.rag === "amber" ? "At risk" : "Off track");
  whenRow.append(state);
  host.append(whenRow);

  /* Two independent sources, side by side. The gap between them is the point. */
  const bars = el("div", "bars");

  /* Scope, not progress. The requirement set has no "done" state, so nothing
     here is ever shaded in -- a filled bar would read as work completed. */
  bars.append(scope("Scope defined", ms.reqs));

  /* The only real progress measure on this page. */
  bars.append(bar("Built (Jira)", ms.tickets, [
    { count: ms.tickets.done, cls: "s-done", color: "var(--green)", label: "done" },
    { count: ms.tickets.in_progress, cls: "s-prog", color: "var(--accent)", label: "in progress" },
    { count: ms.tickets.todo, color: "var(--text-faint)", label: "to do", fill: false },
  ], "No tickets created yet — nothing is being tracked as built."));
  host.append(bars);

  if (ms.must_be_true && ms.must_be_true.length) {
    const block = el("div", "block");
    block.append(el("h3", null, "What has to be true"));
    const ul = el("ul", "checks");
    ms.must_be_true.forEach((t) => ul.append(el("li", null, t)));
    block.append(ul);
    host.append(block);
  }

  const block = el("div", "block");
  block.append(el("h3", null, "Next two weeks"));
  if (ms.open_tickets && ms.open_tickets.length) {
    block.append(ticketList(ms.open_tickets, feature.epic_url, feature.epic));
  } else if (ms.reqs.work) {
    const box = el("div", "empty");
    box.append(
      el("b", null, `${ms.reqs.work} requirements are defined and none are ticketed. `),
      document.createTextNode("The next move is grooming these into Jira — until then this milestone has no measurable progress."),
    );
    block.append(box);
  } else {
    block.append(el("div", "empty", "Nothing open."));
  }
  host.append(block);

  if (ms.open_questions && ms.open_questions.length) {
    const block = el("div", "block");
    block.append(el("h3", null, "Open in this milestone"));
    const ul = el("ul", "checks");
    ms.open_questions.forEach((q) => ul.append(el("li", "q", q)));
    block.append(ul);
    host.append(block);
  }

  if (ms.flags.length) host.append(flagList(ms.flags));

  if (ms.notes && ms.notes.length) {
    const ul = el("ul", "notes");
    ms.notes.forEach((t) => ul.append(el("li", null, t)));
    host.append(ul);
  }
}

/* Feature-level notes that sit below whichever body was rendered.
   Returns an empty fragment when there is nothing to say. */
function renderTail(feature) {
  const has = feature.flags.length || (feature.risks && feature.risks.length);
  if (!has) return document.createDocumentFragment();
  const tail = el("div", "detail");

  if (feature.flags.length) {
    const drift = el("div", "block");
    drift.append(el("h3", null, "Drift"), flagList(feature.flags));
    tail.append(drift);
  }
  if (feature.risks && feature.risks.length) {
    const block = el("div", "block");
    block.append(el("h3", null, "Open risks"));
    const ul = el("ul", "risks");
    feature.risks.forEach((r) => {
      const li = el("li");
      li.append(el("span", `chip ${r.severity === "high" ? "red" : "amber"}`, r.severity));
      li.append(el("span", r.redacted ? "redacted" : null,
        r.redacted ? "Tracked internally — not published here." : r.text));
      if (r.owner) li.append(el("span", "who", r.owner));
      ul.append(li);
    });
    block.append(ul);
    tail.append(block);
  }
  return tail;
}

function renderFeature(feature, index) {
  const card = el("article", "feature");
  card.style.animationDelay = (index * 90) + "ms";

  /* head */
  const head = el("div", "feature-head");
  const title = el("div", "feature-title");
  title.append(el("span", `dot ${feature.rag}`), el("h2", null, feature.name));
  if (feature.status) title.append(el("span", "chip", feature.status));
  head.append(title);
  if (feature.blurb) head.append(el("p", "blurb", feature.blurb));

  const meta = el("div", "meta");
  if (feature.owner) {
    const w = el("span", "who");
    w.append(document.createTextNode("PM "), el("b", null, feature.owner));
    meta.append(w);
  }
  if (feature.eng) {
    const w = el("span", "who");
    w.append(document.createTextNode("Eng "), el("b", null, feature.eng));
    meta.append(w);
  }
  const links = el("div", "links");
  const add = (label, href) => {
    if (!href) return;
    const a = el("a", null, label);
    a.href = href; a.target = "_blank"; a.rel = "noopener";
    links.append(a);
  };
  add("PRD", feature.prd && feature.prd.url);
  add("Prototype", feature.prototype);
  add(feature.epic, feature.epic_url);
  meta.append(links);
  head.append(meta);
  card.append(head);

  /* No milestones -- epic rollup instead of the milestone rail. */
  if (!feature.milestones.length) {
    const only = el("div", "detail");
    renderRollup(only, feature);
    card.append(only);
    card.append(renderTail(feature));
    return card;
  }

  /* rail */
  const rail = el("div", "rail");
  const detail = el("div", "detail");
  const nodes = [];

  feature.milestones.forEach((ms, i) => {
    const btn = el("button", `node ${ms.rag}`);
    btn.type = "button";
    btn.setAttribute("aria-selected", String(i === feature.current));

    const top = el("div", "node-top");
    top.append(ring(ms.tickets.percent, ms.rag), el("span", "node-id", ms.id));
    top.append(el("span", "node-pct", ms.tickets.total ? ms.tickets.percent + "%" : "—"));
    btn.append(top, el("div", "node-claim", ms.claim));

    btn.addEventListener("click", () => {
      nodes.forEach((n) => n.setAttribute("aria-selected", "false"));
      btn.setAttribute("aria-selected", "true");
      renderDetail(detail, feature, ms, true);
      /* Sparkle bounces the panel in; metal takes the hit. */
      const theme = root.dataset.theme;
      if (theme === "sparkle") replay(detail, "pop", 460);
      else if (theme === "metal") replay(detail, "jolt", 300);
    });

    nodes.push(btn);
    rail.append(btn);
  });
  card.append(rail);

  renderDetail(detail, feature, feature.milestones[feature.current], false);
  card.append(detail);

  card.append(renderTail(feature));
  return card;
}

/* ------------------------------------------------------------------ boot */

/* data.js assigns window.STATUS_DATA. Loading it as a script rather than
   fetching JSON means this page also works opened straight off disk. */
Promise.resolve()
  .then(() => {
    if (!window.STATUS_DATA) throw new Error("data.js did not load");
    return window.STATUS_DATA;
  })
  .then((data) => {
    $("#quarter").textContent = data.quarter ? data.quarter.replace("-", " ") : "";
    $("#note").textContent = data.note || "";
    document.title = `Feature Status — ${data.quarter || "ICANotes"}`;

    const sync = $("#sync"), synced = $("#synced");
    sync.hidden = false;
    const tick = () => { synced.textContent = "Synced " + ago(data.generated_at); };
    tick();
    setInterval(tick, 30000);

    const host = $("#features");
    data.features.forEach((f, i) => host.append(renderFeature(f, i)));

    const rag = $("#rag");
    [["green", "Green"], ["amber", "Amber"], ["red", "Red"]].forEach(([k, label]) => {
      const dt = el("dt");
      dt.append(el("span", `dot ${k}`), document.createTextNode(label));
      rag.append(dt, el("dd", null, data.rag_rule[k]));
    });

    $("#sources").textContent = data.jira_connected
      ? "Requirements come from the PRD requirement set; ticket counts come live from Jira. Nothing on this page is hand-typed status."
      : "This build ran without Jira, so ticket counts are omitted. Requirement progress is current.";
    $("#foot").hidden = false;
  })
  .catch((err) => {
    const box = el("div", "err");
    box.append(el("b", null, "Could not load status data. "),
      document.createTextNode(String(err.message || err)));
    $("#features").append(box);
  });
