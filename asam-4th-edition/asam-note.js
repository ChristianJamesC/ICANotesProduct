/* ASAM note pad — the append-only compile engine, lifted from the v1 prototype.
   Framework-free on purpose: the note is a contenteditable document that reads
   itself back to detect clinician edits, which fights React's render model. The
   DC mounts an empty div and hands it to NotePad; React never re-renders inside.

   REQ-G-1 in full:
   - a selection APPENDS; nothing is ever removed automatically
   - un-selecting leaves the line in place
   - re-saving a conduct button adds only what is not already there
   - free text freezes above the next appended entry
   - text is removed only by selecting it and deleting it, which releases the
     control behind it (via onRelease) so it can be picked again
   - one exception: a typed-entry form (Add Vital Signs) replaces its own line

   Sources are STRING KEYS, not DOM nodes — that is the only change from v1, and
   it is what lets React own the controls. */

let SEQ = 0;

export class NotePad {
  /**
   * @param {HTMLElement} root   empty div the pad owns
   * @param {object}      opts   { onRelease(srcKey), onChange(entries), placeholder }
   */
  constructor(root, opts = {}) {
    this.root = root;
    this.onRelease = opts.onRelease || (() => {});
    this.onChange = opts.onChange || (() => {});
    this.placeholder = opts.placeholder || 'Compiled note — type anywhere.';
    this.entries = [];
    this.text = '';
    this.busy = false;
    this._bind();
    this.render();
  }

  _bind() {
    this.root.addEventListener('input', (e) => {
      if (!(e.target.closest && e.target.closest('.ydoc'))) return;
      const man = this.root.querySelector('.ymanual');
      if (man) this.text = man.innerHTML;
      if (this._sync()) this.render();
      else this.onChange(this.entries.slice());
    });
    // The prompt clears the moment the clinician puts a caret in the note.
    this.root.addEventListener('focusin', () => this.root.setAttribute('data-focus', 'true'));
    this.root.addEventListener('focusout', () => this.root.setAttribute('data-focus', 'false'));
    // Clicking the empty area drops the caret into the free-text block.
    this.root.addEventListener('mousedown', (e) => {
      if (e.target.closest && (e.target.closest('.ymanual') || e.target.closest('.yline')
        || e.target.closest('.ynarr') || e.target.closest('.ytext'))) return;
      const m = this.root.querySelector('.ymanual');
      if (!m) return;
      e.preventDefault();
      m.focus();
      const r = document.createRange();
      r.selectNodeContents(m); r.collapse(false);
      const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    });
  }

  /* ---------- entries ---------- */

  _add(entry) {
    this.busy = true;
    if (this.root.querySelector('.ydoc')) { this._sync(); this._captureStray(); }
    const t = this.text || '';
    if (t.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim()) {
      this.entries.push({ id: 'e' + (++SEQ), kind: 'text', html: t });
      this.text = '';
    }
    entry.id = 'e' + (++SEQ);
    this.entries.push(entry);
    this.busy = false;
    this.render();
  }

  /** A key/value line — rating chip, Y/N answer, checkbox. */
  addLine(srcKey, k, v) { this._add({ kind: 'line', src: srcKey, k, v }); }

  /** Narrative HTML from a conduct button. Append-only: only new paragraphs land. */
  addNarrative(srcKey, html) {
    if (!html) return;
    const i = this.entries.map((e) => e.src === srcKey && e.kind === 'narr').lastIndexOf(true);
    if (i < 0) { this._add({ kind: 'narr', src: srcKey, html }); return; }
    const ex = this.entries[i];
    const add = newPieces(this.entries.filter((e) => e.src === srcKey && e.kind === 'narr')
      .map((e) => e.html || '').join(''), html);
    if (!add.length) return;                      // deselected only — leave the note alone
    // Merge in place only while this button is still the newest entry. Once the
    // clinician has worked elsewhere (a rating, another button), the new
    // paragraphs append at the end in the order they were actually picked.
    if (ex.override == null && i === this.entries.length - 1) {
      ex.html = pieces(ex.html || '').concat(add).join('');
      this.render();
    } else {
      this._add({ kind: 'narr', src: srcKey, html: add.join('') });
    }
  }

  /** Typed-entry form: replaces its own line, unless the clinician edited it. */
  replaceLine(srcKey, k, v) {
    // Newest matching line, not the oldest — a rating re-picked three times must
    // rewrite the line it last wrote rather than append past its own history.
    const i = this.entries.map((e) => e.src === srcKey && e.kind === 'line').lastIndexOf(true);
    const ex = i < 0 ? null : this.entries[i];
    if (ex && ex.override == null) { ex.k = k; ex.v = v; this.render(); return; }
    this._add({ kind: 'line', src: srcKey, k, v });
  }

  has(srcKey) { return this.entries.some((e) => e.src === srcKey); }

  _drop(id) {
    const i = this.entries.findIndex((e) => e.id === id);
    if (i < 0) return null;
    return this.entries.splice(i, 1)[0];
  }

  _release(entry) {
    if (!entry || !entry.src) return;
    // A rating chip is never released by deleting its note line — the chip is the
    // clinical answer and only the clinician un-selects it.
    if (/^code:/.test(entry.src)) return;
    if (this.entries.some((x) => x.src === entry.src)) return;
    this.onRelease(entry.src);
  }

  /* ---------- render ---------- */

  render() {
    if (!this.busy && this.root.querySelector('.ydoc')) {
      this.busy = true; this._sync(); this._captureStray(); this.busy = false;
    }
    const body = this.entries.map((e) => {
      e.rendered = true;
      const cls = e.kind === 'narr' ? 'ynarr' : (e.kind === 'text' ? 'ytext' : 'yline');
      let inner;
      if (e.override != null) inner = e.override;
      else if (e.kind === 'text') inner = e.html;
      else if (e.kind === 'narr') inner = '<div class="ynarr-b">' + e.html + '</div>';
      else inner = '<span class="yl-k">' + e.k + ':</span> <span class="yl-v">' + e.v + '</span>';
      e.markup = inner;
      return '<div class="' + cls + '" data-ye="' + e.id + '">' + inner + '</div>';
    }).join('');
    const t = this.text || '';
    const filled = t.replace(/<[^>]*>/g, '').trim() ? ' filled' : '';
    this.root.innerHTML = '<div class="ydoc" contenteditable="true">' + body
      + '<div class="ymanual' + filled + '" contenteditable="true"></div></div>';
    const man = this.root.querySelector('.ymanual');
    if (man) man.innerHTML = t;
    this.root.setAttribute('data-empty', this.entries.length || filled ? 'false' : 'true');
    this.onChange(this.entries.slice());
  }

  /* Keep what the clinician typed; an entry they emptied is gone (and released). */
  _sync() {
    const doc = this.root.querySelector('.ydoc');
    if (!doc) return false;
    let removed = false;
    this.entries.slice().forEach((e) => {
      const node = doc.querySelector('[data-ye="' + e.id + '"]');
      if (!node) { if (!e.rendered) return; this._drop(e.id); this._release(e); removed = true; return; }
      if (!node.textContent.trim()) { this._drop(e.id); this._release(e); removed = true; return; }
      const got = node.innerHTML;
      const was = e.markup == null ? null : e.markup;
      // Compare through the DOM's own serialiser: authored markup writes a raw
      // "&" ("Intoxication & Associated Risks") where innerHTML reads back
      // "&amp;", and that difference alone used to count as a clinician edit —
      // which froze the entry and made every replaceLine append instead.
      const same = was != null && norm(got) === norm(was);
      if (!same) e.override = got;
    });
    return removed;
  }

  /* Anything typed outside a compiled entry — including a div the browser cloned
     on Enter — belongs to the free-text note. */
  _captureStray() {
    const doc = this.root.querySelector('.ydoc');
    if (!doc) return;
    const man = doc.querySelector('.ymanual');
    if (man) this.text = man.innerHTML;
    let extra = '';
    const seen = {};
    [...doc.childNodes].forEach((n) => {
      if (n.nodeType === 3) { const t = n.textContent.trim(); if (t) extra += '<p>' + t + '</p>'; return; }
      if (n.nodeType !== 1 || n.classList.contains('ymanual')) return;
      const ye = n.getAttribute('data-ye');
      if (ye != null && !seen[ye]) { seen[ye] = 1; return; }
      if (n.textContent.trim()) extra += '<p>' + n.innerHTML + '</p>';
    });
    if (extra) this.text = (this.text || '') + extra;
  }
}

/* ---------- paragraph diffing (append-only re-save) ---------- */

/** Round-trip HTML through the DOM so entity spelling can't fake a difference. */
function norm(html) {
  const d = document.createElement('div');
  d.innerHTML = html || '';
  return d.innerHTML.replace(/\s+/g, ' ').trim();
}

function pieces(html) {
  const d = document.createElement('div');
  d.innerHTML = html || '';
  return [...d.children].map((n) => n.outerHTML)
    .filter((s) => s.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim());
}

function pieceText(p) {
  const d = document.createElement('div');
  d.innerHTML = p;
  return (d.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
}

function newPieces(oldHtml, nextHtml) {
  const seen = pieces(oldHtml).map(pieceText);
  return pieces(nextHtml).filter((p) => seen.indexOf(pieceText(p)) < 0);
}

/* ---------- shrub tree -> note narrative ---------- */

/** Turn picked shrub ids into the paragraph HTML the note shows. */
export function narrativeFor(picks, D) {
  if (!picks || !picks.length || !D) return '';
  const out = [];
  picks.forEach((id) => {
    const s = D.getShrub && D.getShrub(id);
    if (!s) return;
    const txt = (D.contentsFor && D.contentsFor(id)) || s.label;
    if (txt) out.push('<p style="margin:0 0 8px">' + esc(txt) + '</p>');
  });
  return out.join('');
}

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
