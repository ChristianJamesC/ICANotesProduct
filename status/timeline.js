/* Quarter timeline — one lane per feature, plus a PTO lane.

   Hand-rolled rather than pulled from a chart library: nothing external loads
   on this page and that stays true. Everything positions by percentage across
   the window, so the whole thing reflows on resize with no JS. */

function toDate(s) { return new Date(s + "T00:00:00"); }

/* Where a date sits across the window, 0–100. */
function pct(dateStr, t0, t1) {
  const span = t1 - t0;
  if (span <= 0) return 0;
  return Math.max(0, Math.min(100, ((toDate(dateStr) - t0) / span) * 100));
}

function monthTicks(t0, t1) {
  const out = [];
  const d = new Date(t0.getFullYear(), t0.getMonth(), 1);
  while (d <= t1) {
    if (d >= t0) {
      out.push({
        label: d.toLocaleDateString(undefined, { month: "short" }),
        left: ((d - t0) / (t1 - t0)) * 100,
      });
    }
    d.setMonth(d.getMonth() + 1);
  }
  return out;
}

function mark(kind, leftPct, opts = {}) {
  const m = el("span", `mark ${kind}`);
  m.style.left = leftPct + "%";
  if (opts.title) m.title = opts.title;
  if (opts.text != null) m.textContent = opts.text;
  if (opts.firm === false) m.classList.add("soft");
  return m;
}

function renderTimeline(data) {
  const tl = data.timeline;
  const t0 = toDate(tl.start), t1 = toDate(tl.end);

  const section = el("section", "tl");
  const head = el("div", "tl-head");
  head.append(el("h2", null, "In flight"));
  head.append(el("p", "tl-sub",
    "When each feature started, when bugs arrived, and when milestones land. "
    + "Bars begin at the first ticket created — when work actually began, not when it was planned."));
  section.append(head);

  const scroll = el("div", "tl-scroll");
  const chart = el("div", "tl-chart");

  /* Month gridlines and labels. */
  const axis = el("div", "tl-axis");
  monthTicks(t0, t1).forEach((t) => {
    const g = el("span", "tl-month");
    g.style.left = t.left + "%";
    g.append(el("i"), el("b", null, t.label));
    axis.append(g);
  });
  chart.append(axis);

  const lanes = el("div", "tl-lanes");

  data.features.forEach((f) => {
    const lane = el("a", "lane");
    lane.href = `#/${f.key}`;

    const label = el("span", "lane-label");
    label.append(el("span", `dot ${f.rag}`), document.createTextNode(f.short || f.name));
    label.title = f.name;
    lane.append(label);

    const track = el("span", "lane-track");

    if (f.span) {
      const bar = el("span", `lane-bar ${f.rag}`);
      const a = pct(f.span.start, t0, t1);
      const b = pct(f.span.end, t0, t1);
      bar.style.left = a + "%";
      bar.style.width = Math.max(0.6, b - a) + "%";
      if (f.span.planned) bar.classList.add("planned");
      bar.title = f.span.planned
        ? "No tickets yet — bar shows the planned window"
        : `Active since ${f.span.start}`;
      track.append(bar);
    } else {
      track.append(el("span", "lane-none", "no dated activity"));
    }

    (f.events || []).forEach((e) => {
      const left = pct(e.date, t0, t1);
      if (e.kind === "bug") {
        const title = e.count > 1
          ? `${e.count} bugs, ${e.date} to ${e.through}\n${e.keys.join(", ")}`
          : `${e.key} — ${e.label} (${e.date})`;
        track.append(mark("bug", left, { title, text: e.count > 1 ? e.count : "" }));
      } else if (e.kind === "milestone") {
        track.append(mark("ms", left, {
          title: `${e.key}: ${e.label} — target ${e.date}`
                 + (e.firm ? "" : " (placeholder)"),
          text: e.key, firm: e.firm,
        }));
      } else if (e.kind === "resolved") {
        track.append(mark("done", left, { title: `${e.key} closed ${e.date}` }));
      }
    });

    lane.append(track);
    lanes.append(lane);
  });

  /* PTO. One row per person, name in the label column -- at a seven-month
     scale a three-day absence is a couple of pixels wide, far too narrow to
     hold a name inline. Putting the name in the gutter keeps it readable and
     turns the track into plain blocks. */
  if (tl.pto && tl.pto.length) {
    const byPerson = new Map();
    tl.pto.forEach((p) => {
      if (!byPerson.has(p.who)) byPerson.set(p.who, []);
      byPerson.get(p.who).push(p);
    });
    const heading = el("div", "lane pto-head");
    heading.append(el("span", "lane-label", "Zen PTO"), el("span", "lane-track"));
    lanes.append(heading);

    [...byPerson.keys()].sort().forEach((who) => {
      const lane = el("div", "lane pto");
      lane.append(el("span", "lane-label pto-name", who));

      const track = el("span", "lane-track");
      byPerson.get(who).forEach((p) => {
        const seg = el("span", "pto-seg");
        const a = pct(p.start, t0, t1);
        const b = pct(p.end, t0, t1);
        seg.style.left = a + "%";
        seg.style.width = Math.max(0.5, b - a) + "%";
        seg.title = `${who} out ${p.start} to ${p.end}`;
        track.append(seg);
      });
      lane.append(track);
      lanes.append(lane);
    });
  }

  chart.append(lanes);

  /* Today line. Lives inside the axis, which is already inset past the label
     gutter -- a percentage measured against the full chart would land in the
     wrong place. */
  if (tl.today >= tl.start && tl.today <= tl.end) {
    const now = el("span", "tl-today");
    now.style.left = pct(tl.today, t0, t1) + "%";
    now.append(el("b", null, "today"));
    axis.append(now);
  }

  scroll.append(chart);
  section.append(scroll);

  const key = el("p", "tl-key");
  [["bug", "bug filed"], ["done", "ticket closed"], ["ms", "milestone target"]]
    .forEach(([k, label]) => {
      const s = el("span");
      s.append(el("i", `mark ${k}`), document.createTextNode(label));
      key.append(s);
    });
  section.append(key);

  /* Never let a failed attribution disappear quietly. */
  if (tl.pto_unresolved && tl.pto_unresolved.length) {
    const n = tl.pto_unresolved.length;
    section.append(el("p", "tl-note",
      `${n} calendar entr${n === 1 ? "y" : "ies"} named someone the roster `
      + `could not identify unambiguously and ${n === 1 ? "was" : "were"} left off.`));
  }

  return section;
}
