/* Feature status page. Loaded as plain scripts, not ES modules, so the
   page still opens by double-clicking it — Chrome blocks module loads over
   file://. Shared helpers live on the global scope by design. */

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
