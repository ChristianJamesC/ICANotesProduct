/* Feature status page. Loaded as plain scripts, not ES modules, so the
   page still opens by double-clicking it — Chrome blocks module loads over
   file://. Shared helpers live on the global scope by design. */

/* --------------------------------------------------------------- landing */

/* One compact card per feature. Everything here is a summary of what the
   detail view shows in full -- no fact appears on the landing page that the
   feature page contradicts. */
function summaryCard(feature, index) {
  const card = el("a", "card");
  card.href = `#/${feature.key}`;
  card.style.animationDelay = (index * 70) + "ms";

  const head = el("div", "card-head");
  head.append(el("span", `dot ${feature.rag}`), el("h3", null, feature.name));
  card.append(head);

  const ms = feature.milestones[feature.current];
  const line = el("p", "card-claim");
  if (ms) {
    line.append(el("b", null, ms.id + " "), document.createTextNode(ms.claim));
  } else {
    line.className = "card-claim muted";
    line.textContent = "No milestones — tracked by epic rollup";
  }
  card.append(line);

  /* Ticket state, from the milestone when there is one, else the whole epic. */
  const t = ms ? ms.tickets : feature.tickets;
  const stats = el("div", "card-stats");
  if (t && t.total) {
    stats.append(stat(t.done, "done"), stat(t.in_progress, "in progress"),
                 stat(t.todo, "to do"));
  } else if (ms && ms.reqs.work) {
    stats.append(stat(ms.reqs.work, "defined"), stat(0, "ticketed"));
  } else {
    stats.append(el("span", "card-stat muted", "no tickets"));
  }
  card.append(stats);

  const foot = el("div", "card-foot");
  if (ms && ms.target) {
    foot.append(el("span", null, when(ms.target, ms.days_left)));
  } else if (feature.epic) {
    foot.append(el("span", null, feature.epic));
  }
  const bugs = (feature.open_tickets || []).filter((i) => i.type === "Bug").length;
  if (bugs) foot.append(el("span", "chip red", `${bugs} open bug${bugs === 1 ? "" : "s"}`));
  if (feature.owner) foot.append(el("span", "who", feature.owner));
  card.append(foot);

  return card;
}

function stat(n, label) {
  const s = el("span", "card-stat");
  s.append(el("b", null, String(n)), el("span", null, label));
  return s;
}

function renderLanding(host, data) {
  const grid = el("div", "grid");
  data.features.forEach((f, i) => grid.append(summaryCard(f, i)));
  host.append(grid);

  if (typeof renderTimeline === "function" && data.timeline) {
    host.append(renderTimeline(data));
  }
}

/* ---------------------------------------------------------------- router */

const VIEWS = { landing: "Where we are", detail: null };

function routeKey() {
  const m = location.hash.match(/^#\/(.+)$/);
  return m ? decodeURIComponent(m[1]) : null;
}

function render(data) {
  const host = $("#features");
  host.textContent = "";

  const key = routeKey();
  const feature = key && data.features.find((f) => f.key === key);

  /* An unknown key falls back to the landing page rather than a blank screen. */
  if (key && !feature) {
    location.replace("#/");
    return;
  }

  const back = $("#back");
  if (feature) {
    back.hidden = false;
    $("#title").textContent = feature.name;
    $("#note").textContent = feature.blurb || "";
    document.title = `${feature.name} — Feature Status`;
    host.append(renderFeature(feature, 0));
  } else {
    back.hidden = true;
    $("#title").textContent = VIEWS.landing;
    $("#note").textContent = data.note || "";
    document.title = `Feature Status — ${data.quarter || "ICANotes"}`;
    renderLanding(host, data);
  }
  window.scrollTo(0, 0);
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

    const sync = $("#sync"), synced = $("#synced");
    sync.hidden = false;
    const tick = () => { synced.textContent = "Synced " + ago(data.generated_at); };
    tick();
    setInterval(tick, 30000);

    render(data);
    window.addEventListener("hashchange", () => render(data));

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
