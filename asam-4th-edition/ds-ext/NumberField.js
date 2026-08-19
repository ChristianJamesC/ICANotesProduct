const {
  useState
} = window.React;

/**
 * NumberField — NumericInput's chrome, but the text is freely editable:
 * the value can be cleared to empty and retyped (NumericInput coerces '' to 0).
 * Value in/out is a string so an empty field stays empty.
 */
function NumberField({
  value = '',
  onChange,
  min = 0,
  max = 999,
  step = 5,
  width = 110,
  suffix,
  placeholder,
  dataTestId
}) {
  const [focus, setFocus] = useState(false);
  const clamp = n => Math.min(max, Math.max(min, n));
  const bump = d => {
    const n = String(value).trim() === '' ? 0 : Number(value);
    onChange && onChange(String(clamp((Number.isFinite(n) ? n : 0) + d * step)));
  };
  const btn = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'var(--ica-color-subtle, #6b747c)',
    fontSize: 8,
    lineHeight: '8px',
    height: 8,
    width: 14,
    userSelect: 'none'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      width,
      height: 40,
      boxSizing: 'border-box',
      paddingRight: 6,
      borderRadius: 'var(--ica-border-radius-8, 8px)',
      background: 'var(--ica-color-surface-alt, #f5f5f5)',
      border: `1px solid ${focus ? 'var(--ica-success, #7fb942)' : 'var(--ica-color-border, rgba(61,61,61,.5))'}`,
      boxShadow: focus ? '0 0 0 2px rgba(127,185,66,.35)' : 'none',
      fontFamily: "var(--font-lato, 'Lato', sans-serif)"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "numeric",
    value: value,
    placeholder: placeholder,
    "data-testid": dataTestId,
    onChange: e => {
      const raw = e.target.value;
      if (raw === '' || /^\d{0,4}$/.test(raw)) onChange && onChange(raw);
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
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
  }), suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      paddingRight: 6,
      fontSize: 'var(--font-size-12, 12px)',
      color: 'var(--ica-color-subtle, #6b747c)'
    }
  }, suffix) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...btn,
      marginBottom: 2
    },
    onClick: () => bump(1)
  }, "\u25B2"), /*#__PURE__*/React.createElement("span", {
    style: btn,
    onClick: () => bump(-1)
  }, "\u25BC")));
}
module.exports = {
  NumberField
};