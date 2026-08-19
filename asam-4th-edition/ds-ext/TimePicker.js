const {
  useState,
  useRef,
  useEffect
} = window.React;

/**
 * TimePicker — mirrors ica-timepicker (Kendo kendo-timepicker + .ica-timepicker-popup):
 * filled input with clear button + "Toggle time list" clock button, and a
 * Hour / Minute / AM-PM column popup with Set / Cancel.
 * Value is a display string like "10:45 AM"; "" is empty.
 */

const HOURS = Array.from({
  length: 12
}, (_, i) => String(i + 1).padStart(2, '0'));
const MERIDIEM = ['AM', 'PM'];
const ROW = 32;
const VISIBLE = 3;
function parse(v) {
  const m = /^\s*(\d{1,2}):(\d{2})\s*([AP]M)\s*$/i.exec(String(v || ''));
  if (!m) return null;
  return {
    h: String(+m[1] % 12 === 0 ? 12 : +m[1] % 12).padStart(2, '0'),
    m: m[2],
    ap: m[3].toUpperCase()
  };
}

/** One scroll column. The selected item is parked on the top row so all three columns line up. */
function Column({
  label,
  items,
  value,
  onPick,
  divider
}) {
  const ref = useRef(null);
  useEffect(() => {
    const i = items.indexOf(value);
    if (!ref.current || i < 0) return;
    const el = ref.current;
    const put = () => {
      el.scrollTop = i * ROW;
    };
    put();
    const r = requestAnimationFrame(put);
    return () => cancelAnimationFrame(r);
  }, [value, items]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minWidth: 0,
      borderLeft: divider ? '1px solid var(--ica-color-border, rgba(0,0,0,.08))' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'var(--font-size-12, 12px)',
      color: 'var(--ica-color-subtle, #6b747c)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      height: ROW * VISIBLE,
      overflowY: 'auto',
      scrollbarWidth: 'none',
      scrollSnapType: 'y mandatory'
    }
  }, /*#__PURE__*/React.createElement("div", null, items.map(it => {
    const on = it === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      type: "button",
      onClick: () => onPick(it),
      style: {
        display: 'block',
        width: '100%',
        height: ROW,
        padding: 0,
        border: 0,
        cursor: 'pointer',
        scrollSnapAlign: 'start',
        fontFamily: "var(--font-lato, 'Lato', sans-serif)",
        fontSize: 'var(--font-size-14, 14px)',
        background: on ? 'var(--ica-primary-opacity-active, rgba(16,126,173,.08))' : 'transparent',
        color: on ? 'var(--ica-primary, #107ead)' : 'var(--ica-color-on-app-surface, #3d3d3d)',
        fontWeight: on ? 700 : 400
      }
    }, it);
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: ROW * (VISIBLE - 1)
    }
  }))));
}
function TimePicker({
  value = '',
  onChange,
  onOpenChange,
  step = 5,
  width = 150,
  placeholder = 'hh:mm AM/PM',
  dataTestId
}) {
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const [draft, setDraft] = useState(null);
  const wrap = useRef(null);
  const minutes = Array.from({
    length: Math.ceil(60 / step)
  }, (_, i) => String(i * step).padStart(2, '0'));
  const parsed = parse(value);
  const d = draft || parsed || {
    h: '12',
    m: '00',
    ap: 'AM'
  };
  useEffect(() => {
    if (onOpenChange) onOpenChange(open);
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const away = e => {
      if (wrap.current && !wrap.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', away);
    return () => document.removeEventListener('mousedown', away);
  }, [open]);
  const commit = () => {
    onChange && onChange(`${d.h}:${d.m} ${d.ap}`);
    setDraft(null);
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: wrap,
    style: {
      position: 'relative',
      width,
      fontFamily: "var(--font-lato, 'Lato', sans-serif)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 40,
      boxSizing: 'border-box',
      borderRadius: 'var(--ica-border-radius-8, 8px)',
      background: 'var(--ica-color-surface-alt, #f5f5f5)',
      border: `1px solid ${focus ? 'var(--ica-success, #7fb942)' : 'var(--ica-color-border, rgba(61,61,61,.5))'}`,
      boxShadow: focus ? '0 0 0 2px rgba(127,185,66,.35)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: value,
    placeholder: placeholder,
    "data-testid": dataTestId,
    onChange: e => onChange && onChange(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        setOpen(false);
      }
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onDoubleClick: () => {
      const n = new Date();
      const h = n.getHours();
      onChange && onChange(`${String(h % 12 === 0 ? 12 : h % 12).padStart(2, '0')}:${String(n.getMinutes()).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`);
    },
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      padding: '0 var(--ica-spacing-10, 10px)',
      border: 0,
      background: 'transparent',
      fontFamily: 'inherit',
      fontSize: 'var(--font-size-14, 14px)',
      color: 'var(--ica-color-on-app-surface, #3d3d3d)',
      outline: 'none'
    }
  }), value ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    title: "Clear",
    onClick: () => onChange && onChange(''),
    style: {
      width: 28,
      height: 28,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      opacity: .7,
      color: 'var(--ica-color-on-app-surface, #3d3d3d)',
      fontSize: 13,
      lineHeight: 1,
      borderRadius: 'var(--ica-border-radius-2, 2px)'
    }
  }, "\u2715") : null, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: '70%',
      background: 'var(--ica-color-border-alt, rgba(61,61,61,.1))'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    title: "Toggle time list",
    onClick: () => setOpen(o => !o),
    style: {
      width: 34,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      opacity: .7,
      color: 'var(--ica-color-on-app-surface, #3d3d3d)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9.5V13l2.5 1.5M5 4l2 2M19 4l-2 2"
  })))), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 4px)',
      left: 0,
      zIndex: 30,
      width: '100%',
      minWidth: 0,
      background: 'var(--ica-color-app-surface, #fff)',
      borderRadius: 'var(--ica-border-radius-8, 8px)',
      boxShadow: 'var(--ica-elevation-4, 0 6px 20px rgba(0,0,0,.2))',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Column, {
    label: "Hour",
    items: HOURS,
    value: d.h,
    onPick: h => setDraft({
      ...d,
      h
    })
  }), /*#__PURE__*/React.createElement(Column, {
    label: "Minute",
    items: minutes,
    value: d.m,
    onPick: m => setDraft({
      ...d,
      m
    }),
    divider: true
  }), /*#__PURE__*/React.createElement(Column, {
    label: "AM/PM",
    items: MERIDIEM,
    value: d.ap,
    onPick: ap => setDraft({
      ...d,
      ap
    }),
    divider: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ica-spacing-8, 8px)',
      padding: 'var(--ica-spacing-8, 8px)',
      borderTop: '1px solid var(--ica-color-border, rgba(0,0,0,.12))'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: commit,
    style: {
      flex: 1,
      height: 32,
      border: '1px solid var(--ica-primary, #107ead)',
      borderRadius: 'var(--ica-border-radius-4, 4px)',
      background: 'var(--ica-primary, #107ead)',
      color: '#fff',
      fontFamily: 'inherit',
      fontSize: 'var(--font-size-14, 14px)',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Set"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setDraft(null);
      setOpen(false);
    },
    style: {
      flex: 1,
      height: 32,
      border: '1px solid var(--ica-color-border, rgba(61,61,61,.5))',
      borderRadius: 'var(--ica-border-radius-4, 4px)',
      background: 'transparent',
      color: 'var(--ica-color-on-app-surface, #3d3d3d)',
      fontFamily: 'inherit',
      fontSize: 'var(--font-size-14, 14px)',
      cursor: 'pointer'
    }
  }, "Cancel"))) : null);
}
module.exports = {
  TimePicker
};