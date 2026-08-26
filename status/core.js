/* Feature status page. Loaded as plain scripts, not ES modules, so the
   page still opens by double-clicking it — Chrome blocks module loads over
   file://. Shared helpers live on the global scope by design. */

const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

const RING_R = 15;
const RING_C = 2 * Math.PI * RING_R;

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
