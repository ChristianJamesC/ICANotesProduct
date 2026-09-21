/* @ds-bundle: {"format":4,"namespace":"ICANotesDesignSystem_94514a","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"ButtonGroup","sourcePath":"components/actions/ButtonGroup.jsx"},{"name":"Chip","sourcePath":"components/actions/Chip.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"ConfirmationDialog","sourcePath":"components/feedback/ConfirmationDialog.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ICON_NAMES","sourcePath":"components/feedback/Icon.jsx"},{"name":"Icon","sourcePath":"components/feedback/Icon.jsx"},{"name":"Label","sourcePath":"components/feedback/Label.jsx"},{"name":"SideDialog","sourcePath":"components/feedback/SideDialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"DatePicker","sourcePath":"components/forms/DatePicker.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"MultiSelect","sourcePath":"components/forms/MultiSelect.jsx"},{"name":"NumericInput","sourcePath":"components/forms/NumericInput.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"TextArea","sourcePath":"components/forms/TextArea.jsx"},{"name":"INPUT_CSS","sourcePath":"components/forms/TextInput.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"Divider","sourcePath":"components/layout/Divider.jsx"},{"name":"FloatingActionsBar","sourcePath":"components/layout/FloatingActionsBar.jsx"},{"name":"NoteWidget","sourcePath":"components/layout/NoteWidget.jsx"},{"name":"Panel","sourcePath":"components/layout/Panel.jsx"},{"name":"PanelHeading","sourcePath":"components/layout/PanelHeading.jsx"},{"name":"Tabs","sourcePath":"components/layout/Tabs.jsx"},{"name":"Widget","sourcePath":"components/layout/Widget.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"75aa0b6bec57","components/actions/ButtonGroup.jsx":"d4671652d09f","components/actions/Chip.jsx":"080134ae755c","components/actions/IconButton.jsx":"63d42bf14e94","components/feedback/ConfirmationDialog.jsx":"fde3b65aefac","components/feedback/Dialog.jsx":"665e60469a9b","components/feedback/Icon.jsx":"92e1f63b6eca","components/feedback/Label.jsx":"ff47ccdff55b","components/feedback/SideDialog.jsx":"762e8ba91bcd","components/feedback/Toast.jsx":"42c1bc70e236","components/feedback/Tooltip.jsx":"3470c8346d88","components/forms/Checkbox.jsx":"54d42b87c0a4","components/forms/DatePicker.jsx":"4dc7d3556d7e","components/forms/FormField.jsx":"63fc46aeea54","components/forms/MultiSelect.jsx":"6f7400837258","components/forms/NumericInput.jsx":"bfb99c32d7a6","components/forms/RadioGroup.jsx":"9b225a18efa7","components/forms/Select.jsx":"73baa5bc7a9a","components/forms/TextArea.jsx":"1d20fd2c67de","components/forms/TextInput.jsx":"23f93e03d989","components/forms/Toggle.jsx":"b8e7b087d58a","components/layout/Divider.jsx":"1abb8169755b","components/layout/FloatingActionsBar.jsx":"7a1b8ac11f83","components/layout/NoteWidget.jsx":"cbe9af1f1384","components/layout/Panel.jsx":"c61fd4e9c695","components/layout/PanelHeading.jsx":"433fcde368ed","components/layout/Tabs.jsx":"adef2e6140ef","components/layout/Widget.jsx":"4cc1d1b3a9a6","ui_kits/provider-app/screens.jsx":"f3e148678236","ui_kits/provider-app/shell.jsx":"0f539b270875","ui_kits/support-portal/screens.jsx":"0092efed4802","ui_kits/support-portal/shell.jsx":"2597d9c17e75"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ICANotesDesignSystem_94514a = window.ICANotesDesignSystem_94514a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect
} = React;
/* Inject a component stylesheet once, keyed by id. */
function useCss(id, css) {
  useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const CSS = `
.ica-btn{--h:32px;--r:8px;--fs:14px;--pad:4px 8px;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;gap:4px;height:var(--h);border-radius:var(--r);font-size:var(--fs);padding:var(--pad);font-family:var(--font-lato);font-weight:400;line-height:1.4;border:1px solid transparent;cursor:pointer;text-align:center;white-space:nowrap;transition:background-color .12s,border-color .12s,box-shadow .12s;position:relative}
.ica-btn:focus{outline:none}
.ica-btn:disabled{opacity:.6;cursor:not-allowed}
.ica-btn.sz-sm{--h:24px;--r:6px;--fs:12px;--pad:2px 8px}
.ica-btn.sz-md{--h:32px;--r:8px;--fs:14px;--pad:4px 8px}
.ica-btn.sz-lg{--h:40px;--r:8px;--fs:16px;--pad:8px 8px}
.ica-btn.icon-only{gap:0}
.ica-btn.icon-only.sz-sm,.ica-btn.icon-only.sz-md{padding:6px}
.ica-btn.icon-only.sz-lg{padding:12px}
.ica-btn .ica-btn-count{position:absolute;top:-6px;right:-6px;min-width:16px;height:16px;padding:0 4px;border-radius:9999px;background:var(--ica-error);color:#fff;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center}
.ica-btn .ica-btn-spin{width:14px;height:14px;border:2px solid currentColor;border-right-color:transparent;border-radius:50%;animation:ica-btn-spin .6s linear infinite}
@keyframes ica-btn-spin{to{transform:rotate(360deg)}}

/* solid */
.ica-btn.solid.primary{background:var(--ica-primary);border-color:var(--ica-primary);color:var(--ica-primary-on-primary)}
.ica-btn.solid.primary:hover:not(:disabled){background:var(--ica-primary-hover);border-color:var(--ica-primary-hover)}
.ica-btn.solid.primary:focus-visible{background:var(--ica-primary-active);box-shadow:var(--ica-shadow-focus-primary)}
.ica-btn.solid.secondary{background:var(--ica-secondary);border-color:var(--ica-secondary);color:var(--ica-secondary-on-secondary)}
.ica-btn.solid.secondary:hover:not(:disabled){background:var(--ica-secondary-hover);border-color:var(--ica-secondary-hover)}
.ica-btn.solid.tertiary{background:var(--ica-tertiary);border-color:var(--ica-tertiary);color:var(--ica-tertiary-on-tertiary)}
.ica-btn.solid.tertiary:hover:not(:disabled){background:var(--ica-tertiary-subtle-hover);border-color:var(--ica-tertiary-subtle-hover)}
.ica-btn.solid.success{background:var(--ica-success);border-color:var(--ica-success);color:var(--ica-success-on-success)}
.ica-btn.solid.success:hover:not(:disabled){background:var(--ica-success-hover);border-color:var(--ica-success-hover)}
.ica-btn.solid.warning{background:var(--ica-warning);border-color:var(--ica-warning);color:var(--ica-warning-on-warning)}
.ica-btn.solid.warning:hover:not(:disabled){background:var(--ica-warning-hover);border-color:var(--ica-warning-hover)}
.ica-btn.solid.error{background:var(--ica-error);border-color:var(--ica-error);color:var(--ica-error-on-error)}
.ica-btn.solid.error:hover:not(:disabled){background:var(--ica-error-hover);border-color:var(--ica-error-hover)}
.ica-btn.solid.info{background:var(--ica-info);border-color:var(--ica-info);color:var(--ica-info-on-info)}
.ica-btn.solid.info:hover:not(:disabled){background:var(--ica-info-hover);border-color:var(--ica-info-hover)}
.ica-btn.solid.base{background:var(--ica-color-base);border-color:var(--ica-color-base-opacity-on-base-50,rgba(61,61,61,.5));color:var(--ica-color-base-on-base)}
.ica-btn.solid.base:hover:not(:disabled){background:var(--ica-color-base-subtle-hover);border-color:var(--ica-color-border)}

/* outline */
.ica-btn.outline.primary{background:var(--ica-color-app-surface);border-color:var(--ica-primary-on-surface);color:var(--ica-primary)}
.ica-btn.outline.primary:hover:not(:disabled){background:var(--ica-primary-opacity-active);border-color:var(--ica-primary-subtle-hover)}
.ica-btn.outline.secondary{background:var(--ica-secondary-subtle);border-color:var(--ica-color-subtle);color:var(--ica-secondary)}
.ica-btn.outline.secondary:hover:not(:disabled){background:var(--ica-secondary-opacity-focus)}
.ica-btn.outline.tertiary{background:var(--ica-color-app-surface);border-color:var(--ica-tertiary-emphasis);color:var(--ica-tertiary-emphasis)}
.ica-btn.outline.tertiary:hover:not(:disabled){background:var(--ica-tertiary-opacity-hover)}
.ica-btn.outline.success{background:transparent;border-color:var(--ica-success-on-surface);color:var(--ica-success-on-surface)}
.ica-btn.outline.success:hover:not(:disabled){background:var(--ica-success-on-surface);color:#fff}
.ica-btn.outline.warning{background:transparent;border-color:var(--ica-warning-on-surface);color:var(--ica-warning-on-surface)}
.ica-btn.outline.warning:hover:not(:disabled){background:var(--ica-warning-on-surface);color:var(--ica-warning-on-warning)}
.ica-btn.outline.error{background:transparent;border-color:var(--ica-error-on-surface);color:var(--ica-error-on-surface)}
.ica-btn.outline.error:hover:not(:disabled){background:var(--ica-error-on-surface);color:#fff}
.ica-btn.outline.info{background:transparent;border-color:var(--ica-info-on-surface);color:var(--ica-info-on-surface)}
.ica-btn.outline.info:hover:not(:disabled){background:var(--ica-info-on-surface);color:#fff}
.ica-btn.outline.base{background:var(--ica-color-app-surface);border-color:var(--ica-color-base-opacity-on-base-50,rgba(61,61,61,.5));color:var(--ica-color-base-on-base)}
.ica-btn.outline.base:hover:not(:disabled){background:var(--ica-color-base-subtle-hover);border-color:var(--ica-color-base-on-surface,#3d3d3d)}

/* flat */
.ica-btn.flat{border-color:transparent}
.ica-btn.flat.primary{background:var(--ica-primary-opacity-hover);color:var(--ica-primary)}
.ica-btn.flat.primary:hover:not(:disabled){background:var(--ica-primary-opacity-focus)}
.ica-btn.flat.secondary{background:var(--ica-secondary-subtle-active);color:var(--ica-secondary)}
.ica-btn.flat.secondary:hover:not(:disabled){background:var(--ica-secondary-subtle-hover)}
.ica-btn.flat.tertiary{background:var(--ica-tertiary-opacity-hover);color:var(--ica-tertiary-emphasis)}
.ica-btn.flat.tertiary:hover:not(:disabled){background:var(--ica-tertiary-subtle)}
.ica-btn.flat.success{background:transparent;color:var(--ica-success-on-surface)}
.ica-btn.flat.success:hover:not(:disabled){background:var(--ica-success-subtle)}
.ica-btn.flat.warning{background:transparent;color:var(--ica-warning-on-surface)}
.ica-btn.flat.warning:hover:not(:disabled){background:var(--ica-warning-subtle)}
.ica-btn.flat.error{background:transparent;color:var(--ica-error-on-surface)}
.ica-btn.flat.error:hover:not(:disabled){background:var(--ica-error-subtle)}
.ica-btn.flat.info{background:transparent;color:var(--ica-info-on-surface)}
.ica-btn.flat.info:hover:not(:disabled){background:var(--ica-info-subtle)}
.ica-btn.flat.base{background:var(--ica-color-base-subtle);color:var(--ica-color-base-on-base)}
.ica-btn.flat.base:hover:not(:disabled){background:var(--ica-color-base-hover)}

/* ghost — glossy gradient chrome */
.ica-btn.ghost{border-left:none;border-right:none;box-shadow:0px 2px 6px 0px rgba(0,0,0,.18)}
.ica-btn.ghost:hover:not(:disabled){box-shadow:0px 4px 8px 0px rgba(0,0,0,.22)}
.ica-btn.ghost.primary{color:#fff;border-top:.5px solid var(--ica-blue-light-2);border-bottom:.5px solid var(--ica-primary-active);background:linear-gradient(180deg,#208ab8 0%,#0d6e98 100%)}
.ica-btn.ghost.primary:hover:not(:disabled){background:linear-gradient(180deg,#299cce 0%,#0f75a1 100%)}
.ica-btn.ghost.tertiary{color:var(--ica-tertiary-on-tertiary);border-top:.5px solid var(--ica-tertiary-subtle);border-bottom:.5px solid var(--ica-tertiary-hover);background:linear-gradient(180deg,#c6f595 0%,#afe973 100%)}
.ica-btn.ghost.tertiary:hover:not(:disabled){background:linear-gradient(180deg,#e8ffcf 0%,#b0e975 100%)}
.ica-btn.ghost.base,.ica-btn.ghost.secondary{color:var(--ica-color-base-on-base);border-top:.5px solid #fff;border-bottom:.5px solid var(--ica-color-base-subtle);background:linear-gradient(180deg,#fbfbfb 0%,#f5f5f5 100%)}
.ica-btn.ghost.base:hover:not(:disabled),.ica-btn.ghost.secondary:hover:not(:disabled){background:linear-gradient(180deg,#e8e8e8 0%,#e3e3e3 100%)}
`;

/**
 * Button — the primary action control. Wraps a native <button> with the
 * ICANotes theme system: 8 theme colors × 4 fill modes × 3 sizes, plus
 * optional leading icon, loading spinner, and a notification count badge.
 */
function Button({
  children,
  title,
  themeColor = 'primary',
  fillMode = 'solid',
  size = 'medium',
  icon = null,
  iconOnly = false,
  isLoading = false,
  disabled = false,
  stretch = false,
  count = 0,
  onClick,
  type = 'button',
  style = {},
  ...rest
}) {
  useCss('ica-btn-css', CSS);
  const sz = size === 'small' ? 'sm' : size === 'large' ? 'lg' : 'md';
  const label = title || children;
  const only = iconOnly || icon && !label;
  const cls = ['ica-btn', fillMode, themeColor, 'sz-' + sz, only ? 'icon-only' : ''].join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled || isLoading,
    onClick: onClick,
    style: {
      width: stretch ? '100%' : undefined,
      ...style
    }
  }, rest), count > 0 && /*#__PURE__*/React.createElement("span", {
    className: "ica-btn-count"
  }, count), isLoading && /*#__PURE__*/React.createElement("span", {
    className: "ica-btn-spin"
  }), !isLoading && icon, !only && label != null && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/ButtonGroup.jsx
try { (() => {
const {
  useEffect
} = React;
function useCss(id, css) {
  useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const CSS = `
.ica-btn-group{display:inline-flex}
.ica-btn-group .ica-bg-item{box-sizing:border-box;height:32px;padding:4px 12px;font-family:var(--font-lato);font-size:14px;line-height:1.4;display:inline-flex;align-items:center;gap:6px;cursor:pointer;border:1px solid var(--ica-color-border);background:var(--ica-color-base);color:var(--ica-color-base-on-base);margin-left:-1px;transition:background-color .12s,color .12s,border-color .12s}
.ica-btn-group .ica-bg-item:first-child{margin-left:0;border-radius:8px 0 0 8px}
.ica-btn-group .ica-bg-item:last-child{border-radius:0 8px 8px 0}
.ica-btn-group .ica-bg-item:hover:not(.selected){color:var(--ica-tertiary-on-tertiary);border-color:var(--ica-tertiary-on-tertiary);background:var(--ica-tertiary-opacity-hover);z-index:1}
.ica-btn-group .ica-bg-item.selected{border-color:var(--ica-tertiary-opacity-border);background:var(--ica-tertiary);color:var(--ica-tertiary-on-tertiary);z-index:2}
`;

/**
 * ButtonGroup — a segmented control of mutually-exclusive options. Selection
 * uses the ICANotes tertiary (green) treatment; borders collapse between items.
 */
function ButtonGroup({
  items = [],
  value,
  onChange,
  style = {}
}) {
  useCss('ica-btn-group-css', CSS);
  return /*#__PURE__*/React.createElement("div", {
    className: "ica-btn-group",
    role: "group",
    style: style
  }, items.map(it => {
    const val = typeof it === 'string' ? it : it.value;
    const label = typeof it === 'string' ? it : it.label;
    const icon = typeof it === 'string' ? null : it.icon;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      type: "button",
      className: 'ica-bg-item' + (val === value ? ' selected' : ''),
      onClick: () => onChange && onChange(val)
    }, icon, label);
  }));
}
Object.assign(__ds_scope, { ButtonGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/ButtonGroup.jsx", error: String((e && e.message) || e) }); }

// components/actions/Chip.jsx
try { (() => {
const {
  useEffect
} = React;
function useCss(id, css) {
  useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const CSS = `
.ica-chip{box-sizing:border-box;display:inline-flex;align-items:center;gap:4px;font-family:var(--font-lato);font-weight:400;color:var(--ica-color-base-on-base);cursor:default;white-space:nowrap;border:1px solid transparent}
.ica-chip.clickable{cursor:pointer}
.ica-chip.sz-sm{height:16px;border-radius:4px;padding:0 4px;font-size:9px}
.ica-chip.sz-md{height:20px;border-radius:6px;padding:2px 6px;font-size:10px}
.ica-chip.sz-lg{height:24px;border-radius:8px;padding:2px 8px;font-size:12px}
.ica-chip.base{border-color:var(--ica-color-border);background:var(--ica-color-base)}
.ica-chip.base.clickable:hover{background:var(--ica-color-base-hover)}
.ica-chip.info{border-color:var(--ica-info-emphasis);background:var(--ica-info-subtle);color:var(--ica-info-on-surface)}
.ica-chip.success{border-color:var(--ica-success-emphasis);background:var(--ica-success-subtle);color:var(--ica-success-on-surface)}
.ica-chip.warning{border-color:var(--ica-warning-emphasis);background:var(--ica-warning-subtle);color:var(--ica-warning-on-surface)}
.ica-chip.error{border-color:var(--ica-error-emphasis);background:var(--ica-error-subtle);color:var(--ica-error-on-surface)}
.ica-chip .ica-chip-x{margin-left:2px;cursor:pointer;opacity:.7;font-size:1.1em;line-height:1}
.ica-chip .ica-chip-x:hover{opacity:1}
`;

/**
 * Chip — a compact status/label token. Five themes (base, info, success,
 * warning, error) in three sizes; optionally removable and clickable.
 */
function Chip({
  label,
  children,
  themeColor = 'base',
  size = 'medium',
  icon = null,
  removable = false,
  clickable = false,
  onRemove,
  onClick,
  style = {}
}) {
  useCss('ica-chip-css', CSS);
  const sz = size === 'small' ? 'sm' : size === 'large' ? 'lg' : 'md';
  return /*#__PURE__*/React.createElement("span", {
    className: ['ica-chip', themeColor, 'sz-' + sz, clickable ? 'clickable' : ''].join(' '),
    onClick: onClick,
    style: style
  }, icon, label || children, removable && /*#__PURE__*/React.createElement("span", {
    className: "ica-chip-x",
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Chip.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a Button that shows only an icon. Thin wrapper over Button with
 * iconOnly forced on; defaults to the flat/base treatment used in toolbars.
 */
function IconButton({
  icon,
  themeColor = 'base',
  fillMode = 'flat',
  size = 'medium',
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Button, _extends({
    icon: icon,
    iconOnly: true,
    themeColor: themeColor,
    fillMode: fillMode,
    size: size
  }, rest));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ICANotes icon set — 83 line/solid glyphs exported from the product's Kendo
 * SVG icon registry. All names are prefixed `ica-`. Icons inherit `color`
 * via `fill`, so set color on the icon or a parent.
 */
const ICON_NAMES = ["ica-information-solid", "ica-align-justify", "ica-question", "ica-checkmark", "ica-undo", "ica-eye", "ica-sort-desc-sm", "ica-notification-off", "ica-marker-pin-target", "ica-bold", "ica-plus", "ica-gear", "ica-gear2", "ica-user", "ica-calendar", "ica-arrow-end-left", "ica-align-center", "ica-star", "ica-redo", "ica-check-circle-1", "ica-list-checks-1", "ica-align-left", "ica-paste-markdown", "ica-eye-slash", "ica-paste-plain-text", "ica-information", "ica-more-vertical", "ica-italic", "ica-clock", "ica-delete-backspace", "ica-cut", "ica-chat-circle-text", "ica-copy", "ica-caret-left", "ica-warning-triangle", "ica-warning-circle", "ica-warning-circle-20", "ica-arrow-end-right", "ica-underline", "ica-more-horizontal", "ica-sort-asc-sm", "ica-paste-html", "ica-align-right", "ica-cross", "ica-minus", "ica-zoom", "ica-caret-up", "ica-caret-down", "ica-paste", "ica-notification", "ica-caret-right", "ica-caret-alt-to-left", "ica-caret-alt-to-right", "ica-sort-asc-small", "ica-sort-desc-small", "ica-filter", "ica-filter-clear", "ica-magnifier", "ica-handle-resize", "ica-printer", "ica-inbox", "ica-draft", "ica-sent", "ica-trash", "ica-reply-all", "ica-pencil", "ica-mark-as-unread", "ica-location", "ica-location2", "ica-in-person", "ica-phone-call", "ica-telehealth", "ica-group", "ica-folder", "ica-icon-ribbon-badge", "ica-plus-minus", "ica-doctor", "ica-big-calendar", "ica-invoice", "ica-billing-note", "ica-claim-submitted-icon", "ica-arrow-left-right", "ica-checked-circle"];
const ICONS = {
  "ica-information-solid": {
    vb: "0 0 16 16",
    p: `<path d="M8 14.75C9.33502 14.75 10.6401 14.3541 11.7501 13.6124C12.8601 12.8707 13.7253 11.8165 14.2362 10.5831C14.7471 9.34971 14.8807 7.99251 14.6203 6.68314C14.3598 5.37377 13.717 4.17103 12.773 3.22703C11.829 2.28303 10.6262 1.64015 9.31686 1.3797C8.00748 1.11925 6.65028 1.25292 5.41688 1.76381C4.18348 2.27471 3.12928 3.13987 2.38758 4.2499C1.64588 5.35993 1.25 6.66498 1.25 8C1.25198 9.7896 1.96378 11.5053 3.22922 12.7708C4.49466 14.0362 6.21039 14.748 8 14.75ZM8.75 7.75L8.75 11C8.75 11.1989 8.67098 11.3897 8.53033 11.5303C8.38967 11.671 8.19891 11.75 8 11.75C7.80108 11.75 7.61032 11.671 7.46967 11.5303C7.32901 11.3897 7.25 11.1989 7.25 11L7.25 7.75C7.25 7.55109 7.32901 7.36032 7.46967 7.21967C7.61032 7.07902 7.80108 7 8 7C8.19891 7 8.38967 7.07902 8.53033 7.21967C8.67098 7.36032 8.75 7.55109 8.75 7.75ZM7 5.25C7 5.05222 7.05865 4.85888 7.16853 4.69443C7.27841 4.52998 7.43459 4.40181 7.61731 4.32612C7.80004 4.25043 8.00111 4.23063 8.19509 4.26922C8.38907 4.3078 8.56725 4.40304 8.7071 4.54289C8.84696 4.68275 8.9422 4.86093 8.98078 5.05491C9.01937 5.24889 8.99956 5.44996 8.92388 5.63268C8.84819 5.81541 8.72002 5.97159 8.55557 6.08147C8.39112 6.19135 8.19778 6.25 8 6.25C7.73478 6.25 7.48043 6.14464 7.29289 5.95711C7.10535 5.76957 7 5.51522 7 5.25Z""/>`
  },
  "ica-align-justify": {
    vb: "0 0 16 16",
    p: `<path d="M1.75 4C1.75 3.80109 1.82902 3.61032 1.96967 3.46967C2.11032 3.32902 2.30109 3.25 2.5 3.25H13.5C13.6989 3.25 13.8897 3.32902 14.0303 3.46967C14.171 3.61032 14.25 3.80109 14.25 4C14.25 4.19891 14.171 4.38968 14.0303 4.53033C13.8897 4.67098 13.6989 4.75 13.5 4.75H2.5C2.30109 4.75 2.11032 4.67098 1.96967 4.53033C1.82902 4.38968 1.75 4.19891 1.75 4ZM13.5 5.75H2.5C2.30109 5.75 2.11032 5.82902 1.96967 5.96967C1.82902 6.11032 1.75 6.30109 1.75 6.5C1.75 6.69891 1.82902 6.88968 1.96967 7.03033C2.11032 7.17098 2.30109 7.25 2.5 7.25H13.5C13.6989 7.25 13.8897 7.17098 14.0303 7.03033C14.171 6.88968 14.25 6.69891 14.25 6.5C14.25 6.30109 14.171 6.11032 14.0303 5.96967C13.8897 5.82902 13.6989 5.75 13.5 5.75ZM13.5 8.25H2.5C2.30109 8.25 2.11032 8.32902 1.96967 8.46967C1.82902 8.61032 1.75 8.80109 1.75 9C1.75 9.19891 1.82902 9.38968 1.96967 9.53033C2.11032 9.67098 2.30109 9.75 2.5 9.75H13.5C13.6989 9.75 13.8897 9.67098 14.0303 9.53033C14.171 9.38968 14.25 9.19891 14.25 9C14.25 8.80109 14.171 8.61032 14.0303 8.46967C13.8897 8.32902 13.6989 8.25 13.5 8.25ZM13.5 10.75H2.5C2.30109 10.75 2.11032 10.829 1.96967 10.9697C1.82902 11.1103 1.75 11.3011 1.75 11.5C1.75 11.6989 1.82902 11.8897 1.96967 12.0303C2.11032 12.171 2.30109 12.25 2.5 12.25H13.5C13.6989 12.25 13.8897 12.171 14.0303 12.0303C14.171 11.8897 14.25 11.6989 14.25 11.5C14.25 11.3011 14.171 11.1103 14.0303 10.9697C13.8897 10.829 13.6989 10.75 13.5 10.75Z" />`
  },
  "ica-question": {
    vb: "0 0 16 16",
    p: `<path d="M9 11.2589C9 11.4567 8.94135 11.65 8.83147 11.8144C8.72159 11.9789 8.56541 12.1071 8.38269 12.1828C8.19996 12.2584 7.99889 12.2782 7.80491 12.2397C7.61093 12.2011 7.43275 12.1058 7.2929 11.966C7.15304 11.8261 7.0578 11.6479 7.01922 11.454C6.98063 11.26 7.00044 11.0589 7.07612 10.8762C7.15181 10.6935 7.27998 10.5373 7.44443 10.4274C7.60888 10.3175 7.80222 10.2589 8 10.2589C8.26522 10.2589 8.51957 10.3642 8.70711 10.5518C8.89465 10.7393 9 10.9937 9 11.2589ZM14.75 8.00887C14.75 9.3439 14.3541 10.6489 13.6124 11.759C12.8707 12.869 11.8165 13.7342 10.5831 14.2451C9.34971 14.756 7.99252 14.8896 6.68314 14.6292C5.37377 14.3687 4.17104 13.7258 3.22703 12.7818C2.28303 11.8378 1.64015 10.6351 1.3797 9.32573C1.11925 8.01636 1.25292 6.65916 1.76382 5.42576C2.27471 4.19236 3.13987 3.13815 4.2499 2.39645C5.35994 1.65475 6.66498 1.25887 8 1.25887C9.78961 1.26086 11.5053 1.97265 12.7708 3.23809C14.0362 4.50353 14.748 6.21927 14.75 8.00887ZM13.25 8.00887C13.25 6.97052 12.9421 5.95549 12.3652 5.09213C11.7883 4.22877 10.9684 3.55586 10.0091 3.1585C9.04978 2.76114 7.99418 2.65718 6.97578 2.85975C5.95738 3.06232 5.02192 3.56234 4.28769 4.29656C3.55347 5.03079 3.05345 5.96625 2.85088 6.98465C2.64831 8.00305 2.75228 9.05865 3.14964 10.018C3.547 10.9773 4.2199 11.7972 5.08326 12.3741C5.94662 12.951 6.96165 13.2589 8 13.2589C9.39193 13.2574 10.7264 12.7038 11.7107 11.7195C12.6949 10.7353 13.2485 9.4008 13.25 8.00887ZM8 4.00887C6.48375 4.00887 5.25 5.13012 5.25 6.50887V6.75887C5.25 6.95778 5.32902 7.14855 5.46967 7.2892C5.61032 7.42985 5.80109 7.50887 6 7.50887C6.19892 7.50887 6.38968 7.42985 6.53033 7.2892C6.67099 7.14855 6.75 6.95778 6.75 6.75887V6.50887C6.75 5.95762 7.3125 5.50887 8 5.50887C8.6875 5.50887 9.25 5.95762 9.25 6.50887C9.25 7.06012 8.6875 7.50887 8 7.50887C7.80109 7.50887 7.61032 7.58789 7.46967 7.72854C7.32902 7.86919 7.25 8.05996 7.25 8.25887V8.75887C7.24956 8.94417 7.31772 9.12307 7.44135 9.26109C7.56498 9.39911 7.73533 9.48648 7.91956 9.50635C8.10378 9.52623 8.28885 9.4772 8.43907 9.36872C8.58929 9.26025 8.69404 9.1 8.73313 8.91887C9.89438 8.62637 10.75 7.657 10.75 6.50887C10.75 5.13012 9.51625 4.00887 8 4.00887Z" />`
  },
  "ica-checkmark": {
    vb: "0 0 12 12",
    p: `<path d="M11.7976 1.61817L4.42066 11.7224C4.15077 12.0925 3.71095 12.0925 3.44107 11.7224L0.202416 7.30054C-0.0674719 6.93039 -0.0674719 6.33014 0.202416 5.95998C0.472303 5.58983 0.91212 5.58983 1.18201 5.95998L3.92087 9.71155L10.818 0.277616C11.0879 -0.0925386 11.5277 -0.0925386 11.7976 0.277616C12.0675 0.64777 12.0675 1.24802 11.7976 1.61817Z" />`
  },
  "ica-undo": {
    vb: "0 0 16 16",
    p: `<path d="M14.7501 12.5C14.7501 12.6989 14.6711 12.8897 14.5304 13.0303C14.3898 13.171 14.199 13.25 14.0001 13.25C13.8012 13.25 13.6104 13.171 13.4698 13.0303C13.3291 12.8897 13.2501 12.6989 13.2501 12.5C13.2486 11.1081 12.695 9.77357 11.7108 8.78933C10.7265 7.80509 9.39203 7.25149 8.0001 7.25H3.8126L5.5326 8.96937C5.6735 9.11027 5.75265 9.30136 5.75265 9.50062C5.75265 9.69988 5.6735 9.89098 5.5326 10.0319C5.39171 10.1728 5.20061 10.2519 5.00135 10.2519C4.8021 10.2519 4.611 10.1728 4.4701 10.0319L1.4701 7.03187C1.40018 6.96219 1.34471 6.8794 1.30685 6.78824C1.269 6.69707 1.24951 6.59933 1.24951 6.50062C1.24951 6.40191 1.269 6.30417 1.30685 6.21301C1.34471 6.12184 1.40018 6.03905 1.4701 5.96937L4.4701 2.96937C4.53987 2.89961 4.62269 2.84427 4.71384 2.80651C4.80499 2.76875 4.90269 2.74932 5.00135 2.74932C5.10001 2.74932 5.19771 2.76875 5.28886 2.80651C5.38002 2.84427 5.46284 2.89961 5.5326 2.96937C5.60237 3.03914 5.65771 3.12196 5.69546 3.21311C5.73322 3.30426 5.75265 3.40196 5.75265 3.50062C5.75265 3.59928 5.73322 3.69698 5.69546 3.78813C5.65771 3.87928 5.60237 3.96211 5.5326 4.03187L3.8126 5.75H8.0001C9.78971 5.75198 11.5054 6.46378 12.7709 7.72922C14.0363 8.99466 14.7481 10.7104 14.7501 12.5Z" />`
  },
  "ica-eye": {
    vb: "0 0 15 10",
    p: `<path d="M14.9569 4.7975C14.935 4.74813 14.4056 3.57375 13.2287 2.39687C11.6606 0.82875 9.67999 0 7.49999 0C5.31999 0 3.33937 0.82875 1.77124 2.39687C0.594369 3.57375 0.062494 4.75 0.043119 4.7975C0.0146897 4.86144 0 4.93064 0 5.00062C0 5.0706 0.0146897 5.1398 0.043119 5.20375C0.064994 5.25312 0.594369 6.42688 1.77124 7.60375C3.33937 9.17125 5.31999 10 7.49999 10C9.67999 10 11.6606 9.17125 13.2287 7.60375C14.4056 6.42688 14.935 5.25312 14.9569 5.20375C14.9853 5.1398 15 5.0706 15 5.00062C15 4.93064 14.9853 4.86144 14.9569 4.7975ZM7.49999 9C5.57624 9 3.89562 8.30062 2.50437 6.92188C1.93352 6.35418 1.44786 5.70685 1.06249 5C1.44776 4.29309 1.93343 3.64574 2.50437 3.07812C3.89562 1.69938 5.57624 1 7.49999 1C9.42374 1 11.1044 1.69938 12.4956 3.07812C13.0676 3.6456 13.5543 4.29295 13.9406 5C13.49 5.84125 11.5269 9 7.49999 9ZM7.49999 2C6.90665 2 6.32663 2.17595 5.83328 2.50559C5.33994 2.83524 4.95542 3.30377 4.72836 3.85195C4.50129 4.40013 4.44188 5.00333 4.55764 5.58527C4.67339 6.16721 4.95912 6.70176 5.37867 7.12132C5.79823 7.54088 6.33278 7.8266 6.91472 7.94236C7.49667 8.05811 8.09987 7.9987 8.64804 7.77164C9.19622 7.54458 9.66476 7.16006 9.9944 6.66671C10.324 6.17336 10.5 5.59334 10.5 5C10.4992 4.2046 10.1828 3.44202 9.6204 2.87959C9.05797 2.31716 8.29539 2.00083 7.49999 2ZM7.49999 7C7.10443 7 6.71775 6.8827 6.38885 6.66294C6.05996 6.44318 5.80361 6.13082 5.65224 5.76537C5.50086 5.39991 5.46125 4.99778 5.53842 4.60982C5.61559 4.22186 5.80608 3.86549 6.08578 3.58579C6.36549 3.30608 6.72185 3.1156 7.10981 3.03843C7.49778 2.96126 7.89991 3.00087 8.26536 3.15224C8.63081 3.30362 8.94317 3.55996 9.16293 3.88886C9.3827 4.21776 9.49999 4.60444 9.49999 5C9.49999 5.53043 9.28928 6.03914 8.91421 6.41421C8.53913 6.78929 8.03043 7 7.49999 7Z" />`
  },
  "ica-sort-desc-sm": {
    vb: "0 0 8 10",
    p: `<path d="M7.83198 5.38331C7.77891 5.32739 7.71585 5.28301 7.64641 5.25274C7.57697 5.22246 7.50252 5.20687 7.42734 5.20687C7.35215 5.20687 7.27771 5.22246 7.20827 5.25274C7.13883 5.28301 7.07577 5.32739 7.0227 5.38331L4.57153 7.9573V0.608755C4.57153 0.449656 4.51134 0.297074 4.40421 0.184575C4.29708 0.0720749 4.15178 0.00887299 4.00027 0.00887299C3.84876 0.00887299 3.70346 0.0720749 3.59633 0.184575C3.4892 0.297074 3.42901 0.449656 3.42901 0.608755V7.9573L0.976889 5.38331C0.869572 5.27062 0.724018 5.20731 0.572249 5.20731C0.420479 5.20731 0.274925 5.27062 0.167608 5.38331C0.0602904 5.49601 0 5.64885 0 5.80823C0 5.9676 0.0602904 6.12045 0.167608 6.23314L3.59515 9.83243C3.64822 9.88836 3.71129 9.93273 3.78072 9.96301C3.85016 9.99329 3.92461 10.0089 3.99979 10.0089C4.07498 10.0089 4.14943 9.99329 4.21886 9.96301C4.2883 9.93273 4.35136 9.88836 4.40443 9.83243L7.83198 6.23314C7.88524 6.17741 7.92749 6.11119 7.95633 6.03827C7.98516 5.96536 8 5.88718 8 5.80823C8 5.72928 7.98516 5.6511 7.95633 5.57818C7.92749 5.50527 7.88524 5.43904 7.83198 5.38331Z" />`
  },
  "ica-notification-off": {
    vb: "0 0 12 14",
    p: `<path d="M11.8076 12.0052L1.80756 1.00522C1.7417 0.930976 1.66175 0.870543 1.57236 0.827424C1.48297 0.784304 1.38591 0.759355 1.2868 0.754023C1.1877 0.748692 1.08852 0.763083 0.99502 0.796364C0.901519 0.829644 0.815552 0.881151 0.742103 0.947901C0.668654 1.01465 0.609184 1.09531 0.567139 1.18522C0.525094 1.27512 0.501311 1.37247 0.497168 1.47163C0.493025 1.57079 0.508604 1.66979 0.543003 1.76289C0.577402 1.85598 0.629937 1.94133 0.697562 2.01397L1.62256 3.0321C1.21409 3.79391 1.00106 4.64518 1.00256 5.5096C1.00256 7.10835 0.715687 8.44709 0.173187 9.38022C0.0626781 9.57065 0.00421453 9.78681 0.00366601 10.007C0.00311748 10.2272 0.0605034 10.4436 0.170062 10.6346C0.278535 10.8257 0.436054 10.9844 0.626352 11.0942C0.81665 11.2041 1.03283 11.2612 1.25256 11.2596H9.10256L10.6976 13.014C10.832 13.1584 11.018 13.244 11.2152 13.2523C11.4124 13.2605 11.6049 13.1907 11.7509 13.058C11.897 12.9253 11.9848 12.7403 11.9954 12.5432C12.006 12.3462 11.9385 12.1529 11.8076 12.0052ZM1.67006 9.75959C2.22256 8.63459 2.50256 7.20585 2.50256 5.5096C2.50206 5.07735 2.5765 4.64829 2.72256 4.24147L7.73881 9.75959H1.67006ZM9.00256 13.0096C9.00256 13.2085 8.92354 13.3993 8.78289 13.5399C8.64224 13.6806 8.45147 13.7596 8.25256 13.7596H4.25256C4.05365 13.7596 3.86288 13.6806 3.72223 13.5399C3.58158 13.3993 3.50256 13.2085 3.50256 13.0096C3.50256 12.8107 3.58158 12.6199 3.72223 12.4793C3.86288 12.3386 4.05365 12.2596 4.25256 12.2596H8.25256C8.45147 12.2596 8.64224 12.3386 8.78289 12.4793C8.92354 12.6199 9.00256 12.8107 9.00256 13.0096ZM3.80819 1.65647C3.76977 1.56578 3.7496 1.4684 3.74882 1.36991C3.74804 1.27142 3.76666 1.17374 3.80363 1.08245C3.8406 0.991159 3.89519 0.908043 3.96428 0.837848C4.03338 0.767654 4.11562 0.711756 4.20631 0.673345C5.00465 0.335461 5.87424 0.200527 6.73743 0.280591C7.60063 0.360654 8.43056 0.653223 9.15314 1.13218C9.87571 1.61113 10.4684 2.26156 10.8784 3.02539C11.2884 3.78923 11.5028 4.6427 11.5026 5.5096C11.5026 6.6771 11.6513 7.69272 11.9444 8.52709C11.9773 8.62 11.9915 8.71847 11.9863 8.81687C11.981 8.91527 11.9565 9.01168 11.914 9.1006C11.8715 9.18951 11.8119 9.26918 11.7387 9.33507C11.6654 9.40096 11.5798 9.45177 11.4869 9.4846C11.394 9.51743 11.2956 9.53163 11.1972 9.52641C11.0988 9.52119 11.0023 9.49663 10.9134 9.45415C10.8245 9.41167 10.7448 9.35209 10.679 9.27881C10.6131 9.20554 10.5623 9.12 10.5294 9.02709C10.1794 8.02959 10.0026 6.8471 10.0026 5.5096C10.0028 4.89038 9.84969 4.28075 9.55692 3.73512C9.26414 3.18949 8.84081 2.72486 8.32472 2.3827C7.80863 2.04053 7.21584 1.83149 6.59928 1.77424C5.98272 1.71699 5.36158 1.81331 4.79131 2.0546C4.70062 2.09301 4.60325 2.11318 4.50476 2.11396C4.40627 2.11474 4.30859 2.09612 4.21729 2.05915C4.126 2.02218 4.04288 1.96759 3.97269 1.8985C3.9025 1.82941 3.8466 1.74717 3.80819 1.65647Z" />`
  },
  "ica-marker-pin-target": {
    vb: "0 0 12 16",
    p: `<path d="M6 3.75893C5.4561 3.75893 4.92442 3.92021 4.47218 4.22239C4.01995 4.52456 3.66747 4.95405 3.45933 5.45655C3.25119 5.95905 3.19673 6.51198 3.30284 7.04543C3.40895 7.57888 3.67086 8.06888 4.05546 8.45347C4.44005 8.83807 4.93005 9.09998 5.4635 9.20609C5.99695 9.3122 6.54988 9.25774 7.05238 9.0496C7.55488 8.84146 7.98437 8.48898 8.28654 8.03675C8.58871 7.58451 8.75 7.05283 8.75 6.50893C8.74917 5.77984 8.45918 5.08085 7.94363 4.5653C7.42808 4.04975 6.72909 3.75976 6 3.75893ZM6 7.75893C5.75277 7.75893 5.5111 7.68562 5.30554 7.54827C5.09998 7.41092 4.93976 7.21569 4.84515 6.98728C4.75054 6.75888 4.72579 6.50754 4.77402 6.26507C4.82225 6.02259 4.9413 5.79986 5.11612 5.62505C5.29093 5.45023 5.51366 5.33118 5.75614 5.28295C5.99861 5.23472 6.24995 5.25947 6.47835 5.35408C6.70676 5.44869 6.90199 5.60891 7.03934 5.81447C7.17669 6.02003 7.25 6.2617 7.25 6.50893C7.25 6.84045 7.1183 7.15839 6.88388 7.39281C6.64946 7.62723 6.33152 7.75893 6 7.75893ZM6 0.75893C4.47551 0.760585 3.01394 1.36692 1.93596 2.44489C0.857987 3.52287 0.251654 4.98444 0.25 6.50893C0.25 11.3439 5.3525 14.9714 5.57 15.1233C5.69604 15.2115 5.84616 15.2588 6 15.2588C6.15384 15.2588 6.30396 15.2115 6.43 15.1233C7.39642 14.4111 8.2806 13.5935 9.06625 12.6858C10.8219 10.6696 11.75 8.53205 11.75 6.50893C11.7483 4.98444 11.142 3.52287 10.064 2.44489C8.98606 1.36692 7.52449 0.760585 6 0.75893ZM7.95625 11.6783C7.36033 12.3628 6.70576 12.994 6 13.5646C5.29424 12.994 4.63967 12.3628 4.04375 11.6783C3 10.4696 1.75 8.59081 1.75 6.50893C1.75 5.38176 2.19777 4.30076 2.9948 3.50373C3.79183 2.7067 4.87283 2.25893 6 2.25893C7.12717 2.25893 8.20817 2.7067 9.0052 3.50373C9.80223 4.30076 10.25 5.38176 10.25 6.50893C10.25 8.59081 9 10.4696 7.95625 11.6783Z" />`
  },
  "ica-bold": {
    vb: "0 0 10 12",
    p: `<path d="M7.81823 5.41262C8.17884 4.97344 8.40729 4.44088 8.47701 3.87692C8.54672 3.31296 8.45483 2.74079 8.21202 2.22702C7.96922 1.71325 7.58548 1.27901 7.10549 0.974838C6.6255 0.670665 6.06899 0.509074 5.50073 0.508873H1.25073C1.05182 0.508873 0.861055 0.587891 0.720402 0.728543C0.57975 0.869195 0.500732 1.05996 0.500732 1.25887V10.7589C0.500732 10.9578 0.57975 11.1486 0.720402 11.2892C0.861055 11.4299 1.05182 11.5089 1.25073 11.5089H6.25073C6.97157 11.5086 7.67185 11.2686 8.24141 10.8268C8.81096 10.385 9.21747 9.76633 9.39698 9.0682C9.57648 8.37008 9.5188 7.63208 9.233 6.97032C8.94721 6.30856 8.44952 5.76059 7.81823 5.41262ZM2.00073 2.00887H5.50073C5.89856 2.00887 6.28009 2.16691 6.56139 2.44821C6.8427 2.72952 7.00073 3.11105 7.00073 3.50887C7.00073 3.9067 6.8427 4.28823 6.56139 4.56953C6.28009 4.85084 5.89856 5.00887 5.50073 5.00887H2.00073V2.00887ZM6.25073 10.0089H2.00073V6.50887H6.25073C6.71486 6.50887 7.15998 6.69325 7.48817 7.02144C7.81636 7.34962 8.00073 7.79474 8.00073 8.25887C8.00073 8.723 7.81636 9.16812 7.48817 9.49631C7.15998 9.8245 6.71486 10.0089 6.25073 10.0089Z" />`
  },
  "ica-plus": {
    vb: "0 0 10 10",
    p: `<path d="M8.84693 4.42897C8.99869 4.42897 9.14423 4.48926 9.25154 4.59657C9.35885 4.70388 9.41914 4.84942 9.41914 5.00118C9.41914 5.15294 9.35885 5.29848 9.25154 5.40579C9.14423 5.5131 8.99869 5.57339 8.84693 5.57339L5.57218 5.57272L5.57151 8.84746C5.57151 8.99922 5.51123 9.14476 5.40392 9.25207C5.29661 9.35938 5.15106 9.41967 4.9993 9.41967C4.84754 9.41967 4.702 9.35938 4.59469 9.25207C4.48738 9.14476 4.42709 8.99922 4.42709 8.84746L4.42776 5.57272L1.15302 5.57204C1.00126 5.57204 0.855717 5.51176 0.748407 5.40445C0.641097 5.29713 0.580811 5.15159 0.580811 4.99983C0.580811 4.84807 0.641097 4.70253 0.748407 4.59522C0.855717 4.48791 1.00126 4.42762 1.15302 4.42762L4.42776 4.4283L4.42743 1.15254C4.42743 1.00078 4.48771 0.855238 4.59502 0.747928C4.70233 0.640618 4.84788 0.580332 4.99964 0.580332C5.1514 0.580332 5.29694 0.640618 5.40425 0.747928C5.51156 0.855238 5.57185 1.00078 5.57185 1.15254L5.57218 4.4283L8.84693 4.42897Z" />`
  },
  "ica-gear": {
    vb: "0 0 16 16",
    p: `<path d="M8.00008 4.75C7.35729 4.75 6.72894 4.94061 6.19448 5.29772C5.66002 5.65484 5.24346 6.16242 4.99747 6.75628C4.75149 7.35014 4.68713 8.00361 4.81253 8.63404C4.93793 9.26448 5.24746 9.84358 5.70198 10.2981C6.15651 10.7526 6.7356 11.0622 7.36604 11.1876C7.99648 11.313 8.64994 11.2486 9.2438 11.0026C9.83766 10.7566 10.3452 10.3401 10.7024 9.8056C11.0595 9.27114 11.2501 8.64279 11.2501 8C11.2491 7.13835 10.9064 6.31228 10.2971 5.703C9.68781 5.09372 8.86173 4.75099 8.00008 4.75ZM8.00008 9.75C7.65396 9.75 7.31562 9.64736 7.02783 9.45507C6.74005 9.26278 6.51575 8.98947 6.38329 8.6697C6.25084 8.34993 6.21618 7.99806 6.28371 7.65859C6.35123 7.31913 6.5179 7.00731 6.76265 6.76256C7.00739 6.51782 7.31921 6.35115 7.65867 6.28363C7.99814 6.2161 8.35001 6.25076 8.66978 6.38321C8.98955 6.51566 9.26286 6.73997 9.45515 7.02775C9.64745 7.31554 9.75008 7.65388 9.75008 8C9.75008 8.46413 9.56571 8.90925 9.23752 9.23744C8.90933 9.56563 8.46421 9.75 8.00008 9.75ZM13.7501 8.04938V7.95063L14.6251 6.85625C14.6985 6.76455 14.7494 6.65688 14.7736 6.54192C14.7978 6.42695 14.7947 6.30791 14.7645 6.19438C14.6066 5.59882 14.3706 5.02677 14.0626 4.49313C14.0033 4.39136 13.9208 4.30501 13.8219 4.24105C13.7229 4.17709 13.6104 4.13734 13.4932 4.125L12.1007 3.96875L12.0313 3.89938L11.8751 2.50625C11.8627 2.38921 11.8229 2.27675 11.7589 2.17794C11.6949 2.07914 11.6086 1.99677 11.507 1.9375C10.9733 1.62856 10.401 1.3917 9.80508 1.23313C9.69145 1.20334 9.57241 1.20066 9.45756 1.2253C9.3427 1.24994 9.23524 1.30122 9.14383 1.375L8.04946 2.25H7.95071L6.85633 1.375C6.76463 1.30155 6.65696 1.25067 6.542 1.22646C6.42703 1.20225 6.30799 1.20539 6.19446 1.23563C5.59874 1.39451 5.02669 1.63157 4.49321 1.94063C4.39184 1.99965 4.30573 2.08162 4.2418 2.17997C4.17786 2.27831 4.13789 2.39028 4.12508 2.50688L3.96883 3.89938L3.89946 3.96875L2.50633 4.125C2.38929 4.13743 2.27683 4.17723 2.17802 4.24118C2.07922 4.30514 1.99685 4.39144 1.93758 4.49313C1.62951 5.02694 1.39349 5.59921 1.23571 6.195C1.20558 6.30844 1.20249 6.42736 1.2267 6.54221C1.25091 6.65706 1.30173 6.76462 1.37508 6.85625L2.25008 7.95063V8.04938L1.37508 9.14375C1.30163 9.23545 1.25075 9.34312 1.22654 9.45808C1.20234 9.57305 1.20547 9.6921 1.23571 9.80563C1.39479 10.4014 1.63206 10.9734 1.94133 11.5069C2.00029 11.6082 2.08217 11.6942 2.1804 11.7582C2.27863 11.8221 2.39047 11.8621 2.50696 11.875L3.89946 12.03L3.96883 12.0994L4.12508 13.4938C4.13751 13.6108 4.17731 13.7233 4.24127 13.8221C4.30522 13.9209 4.39152 14.0032 4.49321 14.0625C5.02689 14.3714 5.59916 14.6083 6.19508 14.7669C6.30871 14.7967 6.42775 14.7993 6.54261 14.7747C6.65746 14.7501 6.76492 14.6988 6.85633 14.625L7.95071 13.75H8.04946L9.14383 14.625C9.23553 14.6985 9.3432 14.7493 9.45817 14.7735C9.57313 14.7977 9.69218 14.7946 9.80571 14.7644C10.4013 14.6065 10.9733 14.3705 11.507 14.0625C11.6086 14.0036 11.6949 13.9217 11.7591 13.8234C11.8232 13.725 11.8634 13.613 11.8763 13.4963L12.0313 12.1038L12.1007 12.0344L13.4938 11.875C13.6105 11.8621 13.7226 11.8219 13.8209 11.7577C13.9193 11.6936 14.0012 11.6072 14.0601 11.5056C14.369 10.9719 14.6059 10.3997 14.7645 9.80375C14.7944 9.6905 14.7974 9.57181 14.7732 9.4572C14.749 9.34258 14.6982 9.23524 14.6251 9.14375L13.7501 8.04938ZM12.2426 7.74375C12.2526 7.91444 12.2526 8.08556 12.2426 8.25625C12.2314 8.4418 12.2895 8.62488 12.4057 8.77L13.2082 9.77313C13.1325 9.99736 13.042 10.2164 12.9376 10.4288L11.6607 10.5706C11.4758 10.5918 11.3054 10.6809 11.1826 10.8206C11.069 10.9485 10.948 11.0696 10.8201 11.1831C10.6803 11.306 10.5912 11.4764 10.5701 11.6613L10.4288 12.9375C10.2165 13.0424 9.99747 13.1332 9.77321 13.2094L8.77008 12.4063C8.63696 12.3 8.47164 12.2423 8.30133 12.2425C8.28633 12.2425 8.27133 12.2425 8.25633 12.2425C8.08565 12.2525 7.91452 12.2525 7.74383 12.2425C7.55841 12.2315 7.37546 12.2894 7.23008 12.405L6.22696 13.2081C6.00273 13.1324 5.78371 13.042 5.57133 12.9375L5.42946 11.6606C5.40832 11.4758 5.31922 11.3053 5.17946 11.1825C5.05154 11.069 4.93049 10.9479 4.81696 10.82C4.69411 10.6802 4.5237 10.5911 4.33883 10.57L3.06258 10.4288C2.95769 10.2164 2.86687 9.99739 2.79071 9.77313L3.59321 8.77C3.70937 8.62488 3.7675 8.4418 3.75633 8.25625C3.74633 8.08556 3.74633 7.91444 3.75633 7.74375C3.7675 7.5582 3.70937 7.37512 3.59321 7.23L2.79196 6.22688C2.86771 6.00264 2.95811 5.78363 3.06258 5.57125L4.33946 5.42938C4.52433 5.40824 4.69474 5.31913 4.81758 5.17938C4.93112 5.05146 5.05217 4.93041 5.18008 4.81688C5.31984 4.69403 5.40894 4.52362 5.43008 4.33875L5.57133 3.0625C5.78368 2.95761 6.00269 2.86679 6.22696 2.79063L7.23008 3.59375C7.37546 3.70937 7.55841 3.76724 7.74383 3.75625C7.91452 3.74625 8.08565 3.74625 8.25633 3.75625C8.4418 3.7676 8.62488 3.70969 8.77008 3.59375L9.77321 2.79063C9.99747 2.86679 10.2165 2.95761 10.4288 3.0625L10.5707 4.33938C10.5918 4.52424 10.6809 4.69466 10.8207 4.8175C10.9486 4.93104 11.0697 5.05209 11.1832 5.18C11.3061 5.31976 11.4765 5.40886 11.6613 5.43L12.9376 5.57125C13.0425 5.7836 13.1333 6.00261 13.2095 6.22688L12.407 7.23C12.2903 7.37494 12.2318 7.55804 12.2426 7.74375Z" />`
  },
  "ica-gear2": {
    vb: "0 0 14 14",
    p: `<path d="M7.95984 6.97322C7.26195 7.37615 6.69922 7.97697 6.3428 8.69972C5.98638 9.42247 5.85228 10.2347 5.95747 11.0336C6.06265 11.8326 6.40239 12.5824 6.93373 13.1883C7.46506 13.7942 8.16413 14.2289 8.94252 14.4374C9.72092 14.646 10.5437 14.6191 11.3068 14.36C12.0698 14.101 12.739 13.6215 13.2296 12.9822C13.7201 12.3429 14.0101 11.5724 14.0628 10.7683C14.1155 9.96416 13.9286 9.16247 13.5257 8.46458C12.9845 7.52968 12.0946 6.84761 11.0511 6.56803C10.0077 6.28844 8.89597 6.43416 7.95984 6.97322ZM11.6639 13.3888C11.0929 13.7185 10.437 13.8714 9.77904 13.8283C9.12112 13.7852 8.49076 13.5479 7.96767 13.1466C7.44459 12.7452 7.05227 12.1977 6.84034 11.5734C6.6284 10.949 6.60636 10.2759 6.77701 9.639C6.94766 9.00213 7.30333 8.43016 7.79904 7.99544C8.29475 7.56071 8.90825 7.28274 9.56194 7.19668C10.2156 7.11062 10.8802 7.22033 11.4715 7.51195C12.0628 7.80356 12.5544 8.26398 12.8841 8.83498C13.3262 9.60067 13.446 10.5106 13.2171 11.3646C12.9883 12.2186 12.4296 12.9468 11.6639 13.3888ZM17.5717 3.99003C17.536 3.94991 17.492 3.91805 17.4427 3.89665C17.3934 3.87525 17.3401 3.86483 17.2863 3.8661L13.9942 3.8849C13.9438 3.85557 13.892 3.82769 13.839 3.80128L12.2232 1.00454C12.1964 0.958761 12.1598 0.9194 12.1162 0.889203C12.0725 0.859005 12.0228 0.838699 11.9705 0.8297C10.7249 0.604488 9.44793 0.618203 8.20752 0.870116C8.15679 0.880176 8.10872 0.90075 8.06642 0.930513C8.02412 0.960276 7.98852 0.998569 7.96192 1.04292L6.27459 3.86908L6.1142 3.96168L2.82437 4.00481C2.77264 4.00551 2.72162 4.01704 2.67462 4.03865C2.62761 4.06027 2.58565 4.09149 2.55145 4.13031C1.71468 5.08043 1.06584 6.18072 0.639357 7.37279C0.621549 7.42266 0.614639 7.47576 0.619094 7.52853C0.62355 7.58129 0.639266 7.63249 0.665183 7.67866L2.26825 10.4849L2.26306 10.6611L0.597729 13.5013C0.571761 13.5472 0.555887 13.5981 0.551169 13.6506C0.546451 13.7031 0.552997 13.756 0.57037 13.8058C0.971634 14.986 1.6009 16.076 2.4224 17.0136C2.45748 17.0536 2.50077 17.0856 2.54933 17.1074C2.59789 17.1292 2.65057 17.1402 2.70379 17.1398L5.99591 17.121C6.04666 17.1509 6.09839 17.1788 6.15111 17.2046L7.77524 19.9955C7.80212 20.0413 7.83866 20.0806 7.88232 20.1108C7.92598 20.141 7.9757 20.1613 8.02802 20.1703C9.27356 20.3955 10.5506 20.3818 11.791 20.1299C11.8417 20.1199 11.8898 20.0993 11.9321 20.0695C11.9744 20.0398 12.01 20.0015 12.0366 19.9571L13.7196 17.1345L13.8799 17.0419L17.1698 16.9988C17.2215 16.9981 17.2725 16.9866 17.3195 16.965C17.3665 16.9433 17.4085 16.9121 17.4427 16.8733C18.2795 15.9232 18.9283 14.8229 19.3548 13.6308C19.3726 13.581 19.3795 13.5279 19.375 13.4751C19.3706 13.4223 19.3549 13.3711 19.329 13.325L17.7259 10.5187L17.7311 10.3425L19.3964 7.50233C19.4244 7.45632 19.4421 7.40475 19.4481 7.35122C19.4541 7.2977 19.4484 7.2435 19.4313 7.1924C19.0272 6.01347 18.3953 4.92541 17.5717 3.99003ZM18.6697 7.27712L17.0412 10.0533C17.0072 10.1117 16.9898 10.1783 16.991 10.2459C16.9925 10.3615 16.9912 10.4778 16.9878 10.5942C16.9849 10.663 17.0017 10.7312 17.0361 10.7908L18.6045 13.5369C18.2294 14.5289 17.6863 15.449 16.9991 16.2569L13.7741 16.3011C13.7093 16.3022 13.6459 16.32 13.5901 16.3528L13.5893 16.3533C13.4866 16.4125 13.3832 16.4723 13.2813 16.5311C13.2233 16.5633 13.1748 16.6101 13.1405 16.6669L11.4857 19.4401C10.4416 19.6331 9.37203 19.6455 8.32368 19.4768L6.73428 16.7461C6.6998 16.6861 6.64894 16.6372 6.58766 16.6051C6.48844 16.5555 6.38433 16.4937 6.28494 16.4345C6.22698 16.3997 6.1606 16.3815 6.09301 16.3817L2.86934 16.4005C2.20085 15.6075 1.67821 14.7023 1.32568 13.7268L2.95293 10.9503C2.98694 10.8919 3.00432 10.8253 3.00318 10.7577C3.00163 10.6421 3.00295 10.5258 3.0068 10.4103C3.00929 10.3412 2.99239 10.2728 2.95803 10.2128L1.38969 7.46674C1.76476 6.47467 2.3078 5.55457 2.99502 4.74673L6.22007 4.70251C6.28638 4.70123 6.3512 4.68261 6.40808 4.64849C6.51073 4.58923 6.61418 4.5295 6.71603 4.4707C6.77428 4.43886 6.82291 4.39195 6.85682 4.33488L8.51165 1.56171C9.55486 1.36967 10.6233 1.35788 11.6705 1.52685L13.2599 4.25756C13.2943 4.31752 13.3452 4.36642 13.4065 4.39852C13.5057 4.44816 13.6098 4.50995 13.7092 4.56912C13.7672 4.6039 13.8335 4.62215 13.9011 4.6219L17.1248 4.60307C17.794 5.39549 18.3175 6.30026 18.6709 7.27539L18.6697 7.27712Z"/>`
  },
  "ica-user": {
    vb: "0 0 14 13",
    p: `<path d="M12.9388 11.7517C11.9869 10.1061 10.52 8.92607 8.80815 8.3667C9.65492 7.86261 10.3128 7.0945 10.6808 6.18032C11.0488 5.26614 11.1065 4.25645 10.8451 3.3063C10.5836 2.35615 10.0176 1.51807 9.23376 0.920778C8.44994 0.323485 7.49173 0 6.50627 0C5.52082 0 4.5626 0.323485 3.77879 0.920778C2.99497 1.51807 2.42889 2.35615 2.16749 3.3063C1.90608 4.25645 1.96379 5.26614 2.33176 6.18032C2.69974 7.0945 3.35763 7.86261 4.2044 8.3667C2.49252 8.92545 1.02565 10.1055 0.0737727 11.7517C0.0388658 11.8086 0.0157123 11.872 0.00567824 11.938C-0.00435578 12.004 -0.00106704 12.0713 0.0153504 12.136C0.0317679 12.2008 0.0609815 12.2615 0.101268 12.3148C0.141554 12.368 0.192096 12.4127 0.249913 12.4461C0.30773 12.4795 0.371651 12.5009 0.437903 12.5092C0.504155 12.5175 0.571397 12.5125 0.635661 12.4943C0.699925 12.4762 0.759911 12.4454 0.812077 12.4038C0.864244 12.3621 0.907536 12.3104 0.939398 12.2517C2.1169 10.2167 4.19815 9.0017 6.50627 9.0017C8.8144 9.0017 10.8956 10.2167 12.0731 12.2517C12.105 12.3104 12.1483 12.3621 12.2005 12.4038C12.2526 12.4454 12.3126 12.4762 12.3769 12.4943C12.4411 12.5125 12.5084 12.5175 12.5746 12.5092C12.6409 12.5009 12.7048 12.4795 12.7626 12.4461C12.8204 12.4127 12.871 12.368 12.9113 12.3148C12.9516 12.2615 12.9808 12.2008 12.9972 12.136C13.0136 12.0713 13.0169 12.004 13.0069 11.938C12.9968 11.872 12.9737 11.8086 12.9388 11.7517ZM3.00627 4.5017C3.00627 3.80947 3.21154 3.13278 3.59613 2.5572C3.98071 1.98163 4.52734 1.53303 5.16688 1.26812C5.80642 1.00322 6.51016 0.933903 7.18909 1.06895C7.86802 1.204 8.49166 1.53734 8.98115 2.02683C9.47063 2.51631 9.80397 3.13995 9.93902 3.81888C10.0741 4.49782 10.0048 5.20155 9.73985 5.84109C9.47494 6.48063 9.02634 7.02726 8.45077 7.41184C7.8752 7.79643 7.19851 8.0017 6.50627 8.0017C5.57832 8.00071 4.68866 7.63164 4.0325 6.97548C3.37633 6.31932 3.00727 5.42965 3.00627 4.5017Z" />`
  },
  "ica-calendar": {
    vb: "0 0 19 18",
    p: `<path d="M15.125 2.25H13.4375V1.6875C13.4375 1.53832 13.3782 1.39524 13.2727 1.28975C13.1673 1.18426 13.0242 1.125 12.875 1.125C12.7258 1.125 12.5827 1.18426 12.4773 1.28975C12.3718 1.39524 12.3125 1.53832 12.3125 1.6875V2.25H6.6875V1.6875C6.6875 1.53832 6.62824 1.39524 6.52275 1.28975C6.41726 1.18426 6.27418 1.125 6.125 1.125C5.97582 1.125 5.83274 1.18426 5.72725 1.28975C5.62176 1.39524 5.5625 1.53832 5.5625 1.6875V2.25H3.875C3.57663 2.25 3.29048 2.36853 3.0795 2.5795C2.86853 2.79048 2.75 3.07663 2.75 3.375V14.625C2.75 14.9234 2.86853 15.2095 3.0795 15.4205C3.29048 15.6315 3.57663 15.75 3.875 15.75H15.125C15.4234 15.75 15.7095 15.6315 15.9205 15.4205C16.1315 15.2095 16.25 14.9234 16.25 14.625V3.375C16.25 3.07663 16.1315 2.79048 15.9205 2.5795C15.7095 2.36853 15.4234 2.25 15.125 2.25ZM5.5625 3.375V3.9375C5.5625 4.08668 5.62176 4.22976 5.72725 4.33525C5.83274 4.44074 5.97582 4.5 6.125 4.5C6.27418 4.5 6.41726 4.44074 6.52275 4.33525C6.62824 4.22976 6.6875 4.08668 6.6875 3.9375V3.375H12.3125V3.9375C12.3125 4.08668 12.3718 4.22976 12.4773 4.33525C12.5827 4.44074 12.7258 4.5 12.875 4.5C13.0242 4.5 13.1673 4.44074 13.2727 4.33525C13.3782 4.22976 13.4375 4.08668 13.4375 3.9375V3.375H15.125V5.625H3.875V3.375H5.5625ZM15.125 14.625H3.875V6.75H15.125V14.625ZM10.3438 9.28125C10.3438 9.44813 10.2943 9.61126 10.2016 9.75001C10.1088 9.88877 9.97706 9.99691 9.82289 10.0608C9.66871 10.1246 9.49906 10.1413 9.33539 10.1088C9.17172 10.0762 9.02138 9.99587 8.90338 9.87787C8.78538 9.75987 8.70502 9.60953 8.67246 9.44586C8.63991 9.28219 8.65662 9.11254 8.72048 8.95836C8.78434 8.80419 8.89248 8.67241 9.03124 8.5797C9.16999 8.48698 9.33312 8.4375 9.5 8.4375C9.72378 8.4375 9.93839 8.52639 10.0966 8.68463C10.2549 8.84286 10.3438 9.05747 10.3438 9.28125ZM13.4375 9.28125C13.4375 9.44813 13.388 9.61126 13.2953 9.75001C13.2026 9.88877 13.0708 9.99691 12.9166 10.0608C12.7625 10.1246 12.5928 10.1413 12.4291 10.1088C12.2655 10.0762 12.1151 9.99587 11.9971 9.87787C11.8791 9.75987 11.7988 9.60953 11.7662 9.44586C11.7337 9.28219 11.7504 9.11254 11.8142 8.95836C11.8781 8.80419 11.9862 8.67241 12.125 8.5797C12.2637 8.48698 12.4269 8.4375 12.5938 8.4375C12.8175 8.4375 13.0321 8.52639 13.1904 8.68463C13.3486 8.84286 13.4375 9.05747 13.4375 9.28125ZM7.25 12.0938C7.25 12.2606 7.20052 12.4238 7.1078 12.5625C7.01509 12.7013 6.88331 12.8094 6.72914 12.8733C6.57496 12.9371 6.40531 12.9538 6.24164 12.9213C6.07797 12.8887 5.92763 12.8084 5.80963 12.6904C5.69163 12.5724 5.61127 12.422 5.57871 12.2584C5.54616 12.0947 5.56287 11.925 5.62673 11.7709C5.69059 11.6167 5.79873 11.4849 5.93749 11.3922C6.07624 11.2995 6.23937 11.25 6.40625 11.25C6.63003 11.25 6.84464 11.3389 7.00287 11.4971C7.16111 11.6554 7.25 11.87 7.25 12.0938ZM10.3438 12.0938C10.3438 12.2606 10.2943 12.4238 10.2016 12.5625C10.1088 12.7013 9.97706 12.8094 9.82289 12.8733C9.66871 12.9371 9.49906 12.9538 9.33539 12.9213C9.17172 12.8887 9.02138 12.8084 8.90338 12.6904C8.78538 12.5724 8.70502 12.422 8.67246 12.2584C8.63991 12.0947 8.65662 11.925 8.72048 11.7709C8.78434 11.6167 8.89248 11.4849 9.03124 11.3922C9.16999 11.2995 9.33312 11.25 9.5 11.25C9.72378 11.25 9.93839 11.3389 10.0966 11.4971C10.2549 11.6554 10.3438 11.87 10.3438 12.0938ZM13.4375 12.0938C13.4375 12.2606 13.388 12.4238 13.2953 12.5625C13.2026 12.7013 13.0708 12.8094 12.9166 12.8733C12.7625 12.9371 12.5928 12.9538 12.4291 12.9213C12.2655 12.8887 12.1151 12.8084 11.9971 12.6904C11.8791 12.5724 11.7988 12.422 11.7662 12.2584C11.7337 12.0947 11.7504 11.925 11.8142 11.7709C11.8781 11.6167 11.9862 11.4849 12.125 11.3922C12.2637 11.2995 12.4269 11.25 12.5938 11.25C12.8175 11.25 13.0321 11.3389 13.1904 11.4971C13.3486 11.6554 13.4375 11.87 13.4375 12.0938Z" />`
  },
  "ica-arrow-end-left": {
    vb: "0 0 8 10",
    p: `<path d="M7.29241 0.656895C7.153 0.579575 6.99542 0.540991 6.83606 0.545152C6.67669 0.549313 6.52135 0.596066 6.38616 0.680556L1.32143 3.84797V1.08011C1.32143 0.938029 1.26499 0.801768 1.16452 0.701303C1.06406 0.600837 0.927795 0.544395 0.785714 0.544395C0.643634 0.544395 0.507373 0.600837 0.406907 0.701303C0.306441 0.801768 0.25 0.938029 0.25 1.08011V8.93725C0.25 9.07933 0.306441 9.21559 0.406907 9.31606C0.507373 9.41652 0.643634 9.47297 0.785714 9.47297C0.927795 9.47297 1.06406 9.41652 1.16452 9.31606C1.26499 9.21559 1.32143 9.07933 1.32143 8.93725V6.16939L6.38616 9.33904C6.52102 9.42277 6.67576 9.46905 6.83444 9.47308C6.99313 9.47712 7.15002 9.43878 7.28896 9.36201C7.4279 9.28524 7.54386 9.17282 7.6249 9.03633C7.70594 8.89983 7.74912 8.7442 7.75 8.58547V1.4319C7.74984 1.27363 7.70732 1.1183 7.62685 0.982016C7.54639 0.845735 7.43091 0.733477 7.29241 0.656895ZM6.67857 8.25556L1.48661 5.00868L6.67857 1.76181V8.25556Z"/>`
  },
  "ica-align-center": {
    vb: "0 0 16 16",
    p: `<path d="M1.75 4C1.75 3.80109 1.82902 3.61032 1.96967 3.46967C2.11032 3.32902 2.30109 3.25 2.5 3.25H13.5C13.6989 3.25 13.8897 3.32902 14.0303 3.46967C14.171 3.61032 14.25 3.80109 14.25 4C14.25 4.19891 14.171 4.38968 14.0303 4.53033C13.8897 4.67098 13.6989 4.75 13.5 4.75H2.5C2.30109 4.75 2.11032 4.67098 1.96967 4.53033C1.82902 4.38968 1.75 4.19891 1.75 4ZM4 5.75C3.80109 5.75 3.61032 5.82902 3.46967 5.96967C3.32902 6.11032 3.25 6.30109 3.25 6.5C3.25 6.69891 3.32902 6.88968 3.46967 7.03033C3.61032 7.17098 3.80109 7.25 4 7.25H12C12.1989 7.25 12.3897 7.17098 12.5303 7.03033C12.671 6.88968 12.75 6.69891 12.75 6.5C12.75 6.30109 12.671 6.11032 12.5303 5.96967C12.3897 5.82902 12.1989 5.75 12 5.75H4ZM13.5 8.25H2.5C2.30109 8.25 2.11032 8.32902 1.96967 8.46967C1.82902 8.61032 1.75 8.80109 1.75 9C1.75 9.19891 1.82902 9.38968 1.96967 9.53033C2.11032 9.67098 2.30109 9.75 2.5 9.75H13.5C13.6989 9.75 13.8897 9.67098 14.0303 9.53033C14.171 9.38968 14.25 9.19891 14.25 9C14.25 8.80109 14.171 8.61032 14.0303 8.46967C13.8897 8.32902 13.6989 8.25 13.5 8.25ZM12 10.75H4C3.80109 10.75 3.61032 10.829 3.46967 10.9697C3.32902 11.1103 3.25 11.3011 3.25 11.5C3.25 11.6989 3.32902 11.8897 3.46967 12.0303C3.61032 12.171 3.80109 12.25 4 12.25H12C12.1989 12.25 12.3897 12.171 12.5303 12.0303C12.671 11.8897 12.75 11.6989 12.75 11.5C12.75 11.3011 12.671 11.1103 12.5303 10.9697C12.3897 10.829 12.1989 10.75 12 10.75Z" />`
  },
  "ica-star": {
    vb: "0 0 12 12",
    p: `<path d="M11.4512 4.68048C11.3924 4.49906 11.2811 4.33916 11.1314 4.22102C10.9817 4.10287 10.8003 4.0318 10.6102 4.01679L7.92752 3.80015L6.89218 1.29664C6.81942 1.1197 6.69571 0.968379 6.53678 0.861887C6.37784 0.755396 6.19084 0.69854 5.99952 0.69854C5.80821 0.69854 5.62121 0.755396 5.46227 0.861887C5.30334 0.968379 5.17963 1.1197 5.10687 1.29664L4.07247 3.80062L1.38977 4.01679C1.1993 4.0325 1.01773 4.10415 0.867864 4.22275C0.717998 4.34134 0.606528 4.50159 0.547463 4.68334C0.488397 4.8651 0.48437 5.06026 0.535888 5.2443C0.587406 5.42834 0.692171 5.59304 0.837017 5.71772L2.88401 7.48312L2.25825 10.1236C2.21261 10.3098 2.2234 10.5053 2.28926 10.6853C2.35512 10.8654 2.47306 11.0217 2.62807 11.1345C2.78307 11.2472 2.96813 11.3113 3.15967 11.3185C3.35122 11.3258 3.54058 11.2758 3.70365 11.1751L5.99952 9.76192L8.29539 11.1751C8.45842 11.2752 8.64747 11.3246 8.83862 11.3172C9.02976 11.3097 9.2144 11.2457 9.36916 11.1333C9.52392 11.0209 9.64185 10.8651 9.708 10.6856C9.77416 10.5061 9.78557 10.311 9.7408 10.125L9.11504 7.48454L11.162 5.71914C11.3077 5.59416 11.413 5.4287 11.4645 5.24377C11.516 5.05884 11.5114 4.86277 11.4512 4.68048ZM8.11051 6.84693C8.03158 6.91498 7.97286 7.0034 7.94075 7.10255C7.90865 7.2017 7.9044 7.30776 7.92847 7.40916L8.53953 9.98994L6.29771 8.61138C6.20804 8.55619 6.10482 8.52697 5.99952 8.52697C5.89423 8.52697 5.79101 8.55619 5.70134 8.61138L3.45951 9.98994L4.07058 7.41106C4.09465 7.30966 4.0904 7.2036 4.05829 7.10445C4.02619 7.0053 3.96747 6.91687 3.88854 6.84882L1.88469 5.11851L4.51098 4.9066C4.61549 4.89821 4.71565 4.86109 4.80039 4.79935C4.88514 4.73761 4.95117 4.65365 4.9912 4.55675L5.99952 2.11534L7.00785 4.55675C7.04788 4.65365 7.11391 4.73761 7.19866 4.79935C7.2834 4.86109 7.38356 4.89821 7.48807 4.9066L10.1144 5.11851L8.11051 6.84693Z" />`
  },
  "ica-redo": {
    vb: "0 0 16 16",
    p: `<path d="M14.5306 7.03063L11.5306 10.0306C11.3897 10.1715 11.1986 10.2507 10.9994 10.2507C10.8001 10.2507 10.609 10.1715 10.4681 10.0306C10.3272 9.88973 10.2481 9.69864 10.2481 9.49938C10.2481 9.30012 10.3272 9.10902 10.4681 8.96813L12.1875 7.25H8C6.60807 7.25149 5.27358 7.80509 4.28933 8.78934C3.30509 9.77358 2.75149 11.1081 2.75 12.5C2.75 12.6989 2.67098 12.8897 2.53033 13.0303C2.38968 13.171 2.19891 13.25 2 13.25C1.80109 13.25 1.61032 13.171 1.46967 13.0303C1.32902 12.8897 1.25 12.6989 1.25 12.5C1.25199 10.7104 1.96378 8.99466 3.22922 7.72922C4.49466 6.46378 6.2104 5.75199 8 5.75H12.1875L10.4694 4.03C10.3285 3.88911 10.2493 3.69801 10.2493 3.49875C10.2493 3.2995 10.3285 3.1084 10.4694 2.9675C10.6103 2.82661 10.8014 2.74745 11.0006 2.74745C11.1999 2.74745 11.391 2.82661 11.5319 2.9675L14.5319 5.9675C14.6018 6.03727 14.6573 6.12017 14.6951 6.21144C14.7329 6.3027 14.7523 6.40054 14.7522 6.49933C14.752 6.59811 14.7324 6.6959 14.6944 6.78708C14.6564 6.87825 14.6007 6.96102 14.5306 7.03063Z" />`
  },
  "ica-check-circle-1": {
    vb: "0 0 12 12",
    p: `<path d="M8.63423 4.28885C8.67714 4.33171 8.71119 4.38261 8.73441 4.43864C8.75764 4.49467 8.76959 4.55473 8.76959 4.61538C8.76959 4.67604 8.75764 4.7361 8.73441 4.79213C8.71119 4.84816 8.67714 4.89906 8.63423 4.94192L5.40346 8.17269C5.3606 8.2156 5.3097 8.24965 5.25367 8.27287C5.19764 8.2961 5.13758 8.30805 5.07692 8.30805C5.01627 8.30805 4.95621 8.2961 4.90018 8.27287C4.84415 8.24965 4.79325 8.2156 4.75039 8.17269L3.36577 6.78808C3.27917 6.70147 3.23051 6.58401 3.23051 6.46154C3.23051 6.33906 3.27917 6.2216 3.36577 6.135C3.45237 6.0484 3.56983 5.99974 3.69231 5.99974C3.81479 5.99974 3.93224 6.0484 4.01885 6.135L5.07692 7.19365L7.98115 4.28885C8.02402 4.24593 8.07492 4.21189 8.13095 4.18866C8.18698 4.16544 8.24704 4.15348 8.30769 4.15348C8.36835 4.15348 8.4284 4.16544 8.48444 4.18866C8.54047 4.21189 8.59137 4.24593 8.63423 4.28885ZM12 6C12 7.18669 11.6481 8.34672 10.9888 9.33342C10.3295 10.3201 9.39246 11.0891 8.2961 11.5433C7.19975 11.9974 5.99335 12.1162 4.82946 11.8847C3.66557 11.6532 2.59648 11.0818 1.75736 10.2426C0.918247 9.40352 0.346802 8.33443 0.115291 7.17054C-0.11622 6.00666 0.00259971 4.80025 0.456725 3.7039C0.910851 2.60754 1.67989 1.67047 2.66658 1.01118C3.65328 0.351894 4.81331 0 6 0C7.59078 0.0016799 9.11593 0.63436 10.2408 1.75921C11.3656 2.88407 11.9983 4.40922 12 6ZM11.0769 6C11.0769 4.99588 10.7792 4.01431 10.2213 3.17941C9.66345 2.34452 8.87054 1.69379 7.94286 1.30953C7.01517 0.925274 5.99437 0.824734 5.00954 1.02063C4.02472 1.21652 3.1201 1.70005 2.41008 2.41007C1.70006 3.12009 1.21653 4.02471 1.02063 5.00954C0.824737 5.99437 0.925277 7.01517 1.30954 7.94285C1.6938 8.87054 2.34452 9.66345 3.17941 10.2213C4.01431 10.7792 4.99588 11.0769 6 11.0769C7.34602 11.0754 8.63646 10.54 9.58824 9.58824C10.54 8.63646 11.0754 7.34601 11.0769 6Z" />`
  },
  "ica-list-checks-1": {
    vb: "0 0 12 11",
    p: `<path d="M12.0003 5.50028C12.0003 5.63289 11.9476 5.76006 11.8538 5.85383C11.7601 5.9476 11.6329 6.00028 11.5003 6.00028H6.00028C5.86767 6.00028 5.74049 5.9476 5.64672 5.85383C5.55296 5.76006 5.50028 5.63289 5.50028 5.50028C5.50028 5.36767 5.55296 5.24049 5.64672 5.14672C5.74049 5.05296 5.86767 5.00028 6.00028 5.00028H11.5003C11.6329 5.00028 11.7601 5.05296 11.8538 5.14672C11.9476 5.24049 12.0003 5.36767 12.0003 5.50028ZM6.00028 2.00028H11.5003C11.6329 2.00028 11.7601 1.9476 11.8538 1.85383C11.9476 1.76006 12.0003 1.63289 12.0003 1.50028C12.0003 1.36767 11.9476 1.24049 11.8538 1.14672C11.7601 1.05296 11.6329 1.00028 11.5003 1.00028H6.00028C5.86767 1.00028 5.74049 1.05296 5.64672 1.14672C5.55296 1.24049 5.50028 1.36767 5.50028 1.50028C5.50028 1.63289 5.55296 1.76006 5.64672 1.85383C5.74049 1.9476 5.86767 2.00028 6.00028 2.00028ZM11.5003 9.00028H6.00028C5.86767 9.00028 5.74049 9.05296 5.64672 9.14672C5.55296 9.24049 5.50028 9.36767 5.50028 9.50028C5.50028 9.63289 5.55296 9.76006 5.64672 9.85383C5.74049 9.9476 5.86767 10.0003 6.00028 10.0003H11.5003C11.6329 10.0003 11.7601 9.9476 11.8538 9.85383C11.9476 9.76006 12.0003 9.63289 12.0003 9.50028C12.0003 9.36767 11.9476 9.24049 11.8538 9.14672C11.7601 9.05296 11.6329 9.00028 11.5003 9.00028ZM3.14653 0.146528L1.50028 1.7934L0.854028 1.14653C0.760208 1.05271 0.63296 1 0.500278 1C0.367596 1 0.240348 1.05271 0.146528 1.14653C0.0527077 1.24035 9.88558e-10 1.3676 0 1.50028C-9.88558e-10 1.63296 0.0527077 1.76021 0.146528 1.85403L1.14653 2.85403C1.19296 2.90052 1.24811 2.9374 1.30881 2.96256C1.36951 2.98772 1.43457 3.00067 1.50028 3.00067C1.56599 3.00067 1.63105 2.98772 1.69175 2.96256C1.75245 2.9374 1.80759 2.90052 1.85403 2.85403L3.85403 0.854028C3.94785 0.760208 4.00056 0.63296 4.00056 0.500278C4.00056 0.367596 3.94785 0.240348 3.85403 0.146528C3.76021 0.0527077 3.63296 0 3.50028 0C3.3676 0 3.24035 0.0527077 3.14653 0.146528ZM3.14653 4.14653L1.50028 5.7934L0.854028 5.14653C0.760208 5.05271 0.63296 5 0.500278 5C0.367596 5 0.240348 5.05271 0.146528 5.14653C0.0527077 5.24035 0 5.3676 0 5.50028C0 5.56598 0.0129401 5.63103 0.0380814 5.69173C0.0632227 5.75242 0.100073 5.80757 0.146528 5.85403L1.14653 6.85403C1.19296 6.90052 1.24811 6.9374 1.30881 6.96256C1.36951 6.98772 1.43457 7.00067 1.50028 7.00067C1.56599 7.00067 1.63105 6.98772 1.69175 6.96256C1.75245 6.9374 1.80759 6.90052 1.85403 6.85403L3.85403 4.85403C3.94785 4.76021 4.00056 4.63296 4.00056 4.50028C4.00056 4.3676 3.94785 4.24035 3.85403 4.14653C3.76021 4.05271 3.63296 4 3.50028 4C3.3676 4 3.24035 4.05271 3.14653 4.14653ZM3.14653 8.14653L1.50028 9.7934L0.854028 9.14653C0.807573 9.10007 0.752423 9.06322 0.691726 9.03808C0.63103 9.01294 0.565975 9 0.500278 9C0.434581 9 0.369526 9.01294 0.30883 9.03808C0.248133 9.06322 0.192983 9.10007 0.146528 9.14653C0.100073 9.19298 0.0632227 9.24813 0.0380814 9.30883C0.0129401 9.36953 0 9.43458 0 9.50028C0 9.56598 0.0129401 9.63103 0.0380814 9.69173C0.0632227 9.75242 0.100073 9.80757 0.146528 9.85403L1.14653 10.854C1.19296 10.9005 1.24811 10.9374 1.30881 10.9626C1.36951 10.9877 1.43457 11.0007 1.50028 11.0007C1.56599 11.0007 1.63105 10.9877 1.69175 10.9626C1.75245 10.9374 1.80759 10.9005 1.85403 10.854L3.85403 8.85403C3.94785 8.76021 4.00056 8.63296 4.00056 8.50028C4.00056 8.3676 3.94785 8.24035 3.85403 8.14653C3.76021 8.05271 3.63296 8 3.50028 8C3.3676 8 3.24035 8.05271 3.14653 8.14653Z" />`
  },
  "ica-align-left": {
    vb: "0 0 16 16",
    p: `<path d="M1.75 4C1.75 3.80109 1.82902 3.61032 1.96967 3.46967C2.11032 3.32902 2.30109 3.25 2.5 3.25H13.5C13.6989 3.25 13.8897 3.32902 14.0303 3.46967C14.171 3.61032 14.25 3.80109 14.25 4C14.25 4.19891 14.171 4.38968 14.0303 4.53033C13.8897 4.67098 13.6989 4.75 13.5 4.75H2.5C2.30109 4.75 2.11032 4.67098 1.96967 4.53033C1.82902 4.38968 1.75 4.19891 1.75 4ZM2.5 7.25H10.5C10.6989 7.25 10.8897 7.17098 11.0303 7.03033C11.171 6.88968 11.25 6.69891 11.25 6.5C11.25 6.30109 11.171 6.11032 11.0303 5.96967C10.8897 5.82902 10.6989 5.75 10.5 5.75H2.5C2.30109 5.75 2.11032 5.82902 1.96967 5.96967C1.82902 6.11032 1.75 6.30109 1.75 6.5C1.75 6.69891 1.82902 6.88968 1.96967 7.03033C2.11032 7.17098 2.30109 7.25 2.5 7.25ZM13.5 8.25H2.5C2.30109 8.25 2.11032 8.32902 1.96967 8.46967C1.82902 8.61032 1.75 8.80109 1.75 9C1.75 9.19891 1.82902 9.38968 1.96967 9.53033C2.11032 9.67098 2.30109 9.75 2.5 9.75H13.5C13.6989 9.75 13.8897 9.67098 14.0303 9.53033C14.171 9.38968 14.25 9.19891 14.25 9C14.25 8.80109 14.171 8.61032 14.0303 8.46967C13.8897 8.32902 13.6989 8.25 13.5 8.25ZM10.5 10.75H2.5C2.30109 10.75 2.11032 10.829 1.96967 10.9697C1.82902 11.1103 1.75 11.3011 1.75 11.5C1.75 11.6989 1.82902 11.8897 1.96967 12.0303C2.11032 12.171 2.30109 12.25 2.5 12.25H10.5C10.6989 12.25 10.8897 12.171 11.0303 12.0303C11.171 11.8897 11.25 11.6989 11.25 11.5C11.25 11.3011 11.171 11.1103 11.0303 10.9697C10.8897 10.829 10.6989 10.75 10.5 10.75Z" />`
  },
  "ica-paste-markdown": {
    vb: "0 0 16 16",
    p: `<path d="M6.25 9.5V13C6.25 13.1989 6.17098 13.3897 6.03033 13.5303C5.88968 13.671 5.69891 13.75 5.5 13.75C5.30109 13.75 5.11032 13.671 4.96967 13.5303C4.82902 13.3897 4.75 13.1989 4.75 13V11.8794L4.36438 12.43C4.29522 12.5288 4.20327 12.6094 4.09632 12.6651C3.98937 12.7208 3.87057 12.7498 3.75 12.7498C3.62943 12.7498 3.51063 12.7208 3.40368 12.6651C3.29673 12.6094 3.20478 12.5288 3.13562 12.43L2.75 11.8794V13C2.75 13.1989 2.67098 13.3897 2.53033 13.5303C2.38968 13.671 2.19891 13.75 2 13.75C1.80109 13.75 1.61032 13.671 1.46967 13.5303C1.32902 13.3897 1.25 13.1989 1.25 13V9.5C1.25004 9.34051 1.30091 9.18518 1.39524 9.05658C1.48957 8.92798 1.62244 8.83279 1.77456 8.78485C1.92667 8.73691 2.09011 8.73871 2.24113 8.78999C2.39216 8.84126 2.5229 8.93935 2.61438 9.07L3.75 10.6919L4.88562 9.07C4.9771 8.93935 5.10785 8.84126 5.25887 8.78999C5.40989 8.73871 5.57333 8.73691 5.72544 8.78485C5.87756 8.83279 6.01043 8.92798 6.10476 9.05658C6.19909 9.18518 6.24996 9.34051 6.25 9.5ZM11.5 11.25C11.5 11.5783 11.4353 11.9034 11.3097 12.2067C11.1841 12.51 10.9999 12.7856 10.7678 13.0178C10.5356 13.2499 10.26 13.4341 9.95671 13.5597C9.65339 13.6853 9.3283 13.75 9 13.75H8C7.80109 13.75 7.61032 13.671 7.46967 13.5303C7.32902 13.3897 7.25 13.1989 7.25 13V9.5C7.25 9.30109 7.32902 9.11032 7.46967 8.96967C7.61032 8.82902 7.80109 8.75 8 8.75H9C9.3283 8.75 9.65339 8.81466 9.95671 8.9403C10.26 9.06594 10.5356 9.25009 10.7678 9.48223C10.9999 9.71438 11.1841 9.98998 11.3097 10.2933C11.4353 10.5966 11.5 10.9217 11.5 11.25ZM10 11.25C10 10.9848 9.89464 10.7304 9.70711 10.5429C9.51957 10.3554 9.26522 10.25 9 10.25H8.75V12.25H9C9.26522 12.25 9.51957 12.1446 9.70711 11.9571C9.89464 11.7696 10 11.5152 10 11.25ZM13.75 5.5V14C13.75 14.1989 13.671 14.3897 13.5303 14.5303C13.3897 14.671 13.1989 14.75 13 14.75C12.8011 14.75 12.6103 14.671 12.4697 14.5303C12.329 14.3897 12.25 14.1989 12.25 14V6.5H9.25C9.05109 6.5 8.86032 6.42098 8.71967 6.28033C8.57902 6.13968 8.5 5.94891 8.5 5.75V2.75H3.75V6.75C3.75 6.94891 3.67098 7.13968 3.53033 7.28033C3.38968 7.42098 3.19891 7.5 3 7.5C2.80109 7.5 2.61032 7.42098 2.46967 7.28033C2.32902 7.13968 2.25 6.94891 2.25 6.75V2.5C2.25 2.16848 2.3817 1.85054 2.61612 1.61612C2.85054 1.3817 3.16848 1.25 3.5 1.25H9.5C9.59856 1.25 9.69616 1.26944 9.78721 1.30719C9.87826 1.34494 9.96097 1.40026 10.0306 1.47L13.5306 4.97C13.6711 5.11062 13.75 5.30124 13.75 5.5ZM10 5H11.4375L10 3.5625V5Z" />`
  },
  "ica-eye-slash": {
    vb: "0 0 15 12",
    p: `<path d="M2.86999 0.168186C2.82608 0.11869 2.77279 0.0784019 2.71319 0.0496554C2.6536 0.0209089 2.58889 0.00427645 2.52282 0.00072202C2.45675 -0.00283241 2.39063 0.00676183 2.3283 0.0289488C2.26597 0.0511357 2.20865 0.085474 2.15969 0.129973C2.11072 0.174473 2.07108 0.228248 2.04305 0.288183C2.01502 0.348118 1.99916 0.41302 1.9964 0.479128C1.99364 0.545236 2.00402 0.611234 2.02696 0.673298C2.04989 0.735362 2.08491 0.792258 2.12999 0.840687L3.33249 2.16381C1.06249 3.55694 0.086244 5.70444 0.043119 5.80194C0.0146897 5.86588 0 5.93508 0 6.00506C0 6.07504 0.0146897 6.14424 0.043119 6.20819C0.064994 6.25756 0.594369 7.43131 1.77124 8.60819C3.33937 10.1757 5.31999 11.0044 7.49999 11.0044C8.62038 11.0108 9.72944 10.7801 10.7544 10.3276L12.1294 11.8407C12.1733 11.8902 12.2266 11.9305 12.2862 11.9592C12.3458 11.988 12.4105 12.0046 12.4765 12.0082C12.5426 12.0117 12.6087 12.0021 12.6711 11.9799C12.7334 11.9577 12.7907 11.9234 12.8397 11.8789C12.8886 11.8344 12.9283 11.7806 12.9563 11.7207C12.9843 11.6608 13.0002 11.5959 13.003 11.5297C13.0057 11.4636 12.9953 11.3976 12.9724 11.3356C12.9495 11.2735 12.9145 11.2166 12.8694 11.1682L2.86999 0.168186ZM5.82812 4.90819L8.43249 7.77381C8.0403 7.98014 7.59069 8.05036 7.15426 7.97346C6.71783 7.89656 6.31931 7.67689 6.02126 7.34894C5.72321 7.02099 5.54252 6.60334 5.50756 6.16157C5.4726 5.7198 5.58536 5.27893 5.82812 4.90819ZM7.49999 10.0044C5.57624 10.0044 3.89562 9.30506 2.50437 7.92631C1.93332 7.3588 1.44763 6.71143 1.06249 6.00444C1.35562 5.45506 2.29124 3.91756 4.02187 2.91819L5.14687 4.15256C4.71133 4.71038 4.48702 5.40421 4.51358 6.11142C4.54014 6.81863 4.81586 7.49368 5.29202 8.01725C5.76817 8.54083 6.41409 8.87921 7.11561 8.9726C7.81713 9.06598 8.52908 8.90835 9.12562 8.52756L10.0462 9.54006C9.23374 9.85178 8.37023 10.0093 7.49999 10.0044ZM7.87499 4.04006C7.74471 4.0152 7.62963 3.9396 7.55509 3.82989C7.48054 3.72018 7.45263 3.58535 7.47749 3.45506C7.50236 3.32477 7.57796 3.2097 7.68767 3.13515C7.79738 3.06061 7.93221 3.0327 8.06249 3.05756C8.69975 3.1811 9.27999 3.50734 9.71667 3.98762C10.1534 4.46789 10.4231 5.07646 10.4856 5.72256C10.498 5.85459 10.4574 5.98611 10.3727 6.0882C10.2881 6.19029 10.1664 6.25458 10.0344 6.26694C10.0188 6.26785 10.0031 6.26785 9.98749 6.26694C9.86252 6.26747 9.74188 6.22119 9.64934 6.1372C9.55679 6.05322 9.49905 5.93762 9.48749 5.81319C9.44541 5.38343 9.26575 4.97874 8.97522 4.65928C8.6847 4.33981 8.29883 4.12264 7.87499 4.04006ZM14.955 6.20819C14.9287 6.26694 14.2956 7.66881 12.87 8.94569C12.8213 8.99071 12.7641 9.02558 12.7018 9.04829C12.6395 9.07099 12.5732 9.08107 12.507 9.07793C12.4407 9.07479 12.3758 9.0585 12.3159 9.03001C12.256 9.00152 12.2023 8.96139 12.1581 8.91197C12.1138 8.86255 12.0799 8.80482 12.0582 8.74214C12.0365 8.67946 12.0274 8.61309 12.0316 8.5469C12.0358 8.4807 12.0531 8.416 12.0826 8.35656C12.112 8.29712 12.153 8.24413 12.2031 8.20069C12.9025 7.57232 13.4901 6.82967 13.9406 6.00444C13.5546 5.2968 13.0679 4.64899 12.4956 4.08131C11.1044 2.70381 9.42374 2.00444 7.49999 2.00444C7.09465 2.00394 6.68996 2.03676 6.28999 2.10256C6.22495 2.11406 6.15828 2.11257 6.09382 2.09815C6.02936 2.08374 5.96839 2.0567 5.91444 2.01859C5.8605 1.98048 5.81463 1.93206 5.7795 1.87613C5.74437 1.82019 5.72067 1.75785 5.70978 1.6927C5.69888 1.62756 5.70099 1.5609 5.716 1.49658C5.73101 1.43225 5.75862 1.37154 5.79723 1.31795C5.83583 1.26436 5.88468 1.21894 5.94094 1.18433C5.99719 1.14973 6.05975 1.12661 6.12499 1.11631C6.57947 1.04127 7.03936 1.00385 7.49999 1.00444C9.67999 1.00444 11.6606 1.83319 13.2287 3.40131C14.4056 4.57819 14.935 5.75256 14.9569 5.80194C14.9853 5.86588 15 5.93508 15 6.00506C15 6.07504 14.9853 6.14424 14.9569 6.20819H14.955Z" />`
  },
  "ica-paste-plain-text": {
    vb: "0 0 16 16",
    p: `<path d="M10.75 10.25C10.75 10.4489 10.671 10.6397 10.5303 10.7803C10.3897 10.921 10.1989 11 10 11H6C5.80109 11 5.61032 10.921 5.46967 10.7803C5.32902 10.6397 5.25 10.4489 5.25 10.25C5.25 10.0511 5.32902 9.86032 5.46967 9.71967C5.61032 9.57902 5.80109 9.5 6 9.5H10C10.1989 9.5 10.3897 9.57902 10.5303 9.71967C10.671 9.86032 10.75 10.0511 10.75 10.25ZM10 7H6C5.80109 7 5.61032 7.07902 5.46967 7.21967C5.32902 7.36032 5.25 7.55109 5.25 7.75C5.25 7.94891 5.32902 8.13968 5.46967 8.28033C5.61032 8.42098 5.80109 8.5 6 8.5H10C10.1989 8.5 10.3897 8.42098 10.5303 8.28033C10.671 8.13968 10.75 7.94891 10.75 7.75C10.75 7.55109 10.671 7.36032 10.5303 7.21967C10.3897 7.07902 10.1989 7 10 7ZM13.75 3V13.5C13.75 13.8315 13.6183 14.1495 13.3839 14.3839C13.1495 14.6183 12.8315 14.75 12.5 14.75H3.5C3.16848 14.75 2.85054 14.6183 2.61612 14.3839C2.3817 14.1495 2.25 13.8315 2.25 13.5V3C2.25 2.66848 2.3817 2.35054 2.61612 2.11612C2.85054 1.88169 3.16848 1.75 3.5 1.75H5.65812C5.9608 1.43393 6.32433 1.1824 6.72681 1.01056C7.12928 0.838724 7.56238 0.750137 8 0.750137C8.43762 0.750137 8.87072 0.838724 9.2732 1.01056C9.67567 1.1824 10.0392 1.43393 10.3419 1.75H12.5C12.8315 1.75 13.1495 1.88169 13.3839 2.11612C13.6183 2.35054 13.75 2.66848 13.75 3ZM6.26813 3.75H9.73188C9.6715 3.33375 9.46322 2.95317 9.14518 2.67794C8.82714 2.4027 8.4206 2.25121 8 2.25121C7.5794 2.25121 7.17286 2.4027 6.85482 2.67794C6.53678 2.95317 6.3285 3.33375 6.26813 3.75ZM12.25 3.25H11.1619C11.2202 3.49574 11.2498 3.74743 11.25 4V4.5C11.25 4.69891 11.171 4.88968 11.0303 5.03033C10.8897 5.17098 10.6989 5.25 10.5 5.25H5.5C5.30109 5.25 5.11032 5.17098 4.96967 5.03033C4.82902 4.88968 4.75 4.69891 4.75 4.5V4C4.75021 3.74743 4.77978 3.49574 4.83813 3.25H3.75V13.25H12.25V3.25Z" />`
  },
  "ica-information": {
    vb: "0 0 14 14",
    p: `<path d="M7 13.75C8.33502 13.75 9.64006 13.3541 10.7501 12.6124C11.8601 11.8707 12.7253 10.8165 13.2362 9.58311C13.7471 8.34971 13.8807 6.99251 13.6203 5.68314C13.3598 4.37377 12.717 3.17103 11.773 2.22703C10.829 1.28303 9.62623 0.64015 8.31686 0.3797C7.00748 0.11925 5.65028 0.252922 4.41688 0.763814C3.18348 1.27471 2.12928 2.13987 1.38758 3.2499C0.645877 4.35993 0.249996 5.66498 0.249997 7C0.251982 8.7896 0.963777 10.5053 2.22922 11.7708C3.49466 13.0362 5.21039 13.748 7 13.75ZM7 1.75C8.03835 1.75 9.05338 2.05791 9.91674 2.63479C10.7801 3.21166 11.453 4.0316 11.8504 4.99091C12.2477 5.95022 12.3517 7.00582 12.1491 8.02422C11.9465 9.04262 11.4465 9.97809 10.7123 10.7123C9.97808 11.4465 9.04262 11.9466 8.02422 12.1491C7.00582 12.3517 5.95022 12.2477 4.99091 11.8504C4.0316 11.453 3.21166 10.7801 2.63478 9.91674C2.0579 9.05339 1.75 8.03835 1.75 7C1.75149 5.60807 2.30509 4.27358 3.28933 3.28934C4.27357 2.30509 5.60807 1.75149 7 1.75ZM7.75 6.75L7.75 10C7.75 10.1989 7.67098 10.3897 7.53033 10.5303C7.38967 10.671 7.19891 10.75 7 10.75C6.80108 10.75 6.61032 10.671 6.46967 10.5303C6.32901 10.3897 6.25 10.1989 6.25 10L6.25 6.75C6.25 6.55109 6.32901 6.36032 6.46967 6.21967C6.61032 6.07902 6.80108 6 7 6C7.19891 6 7.38967 6.07902 7.53033 6.21967C7.67098 6.36032 7.75 6.55109 7.75 6.75ZM6 4.25C6 4.05222 6.05865 3.85888 6.16853 3.69443C6.27841 3.52998 6.43459 3.40181 6.61731 3.32612C6.80004 3.25043 7.00111 3.23063 7.19509 3.26922C7.38907 3.3078 7.56725 3.40304 7.7071 3.54289C7.84696 3.68275 7.9422 3.86093 7.98078 4.05491C8.01937 4.24889 7.99956 4.44996 7.92388 4.63268C7.84819 4.81541 7.72002 4.97159 7.55557 5.08147C7.39112 5.19135 7.19778 5.25 7 5.25C6.73478 5.25 6.48043 5.14464 6.29289 4.95711C6.10535 4.76957 6 4.51522 6 4.25Z"/>`
  },
  "ica-more-vertical": {
    vb: "0 0 3 13",
    p: `<path d="M1.5 3.00887C2.325 3.00887 3 2.33387 3 1.50887C3 0.683873 2.325 0.00887299 1.5 0.00887299C0.675 0.00887299 0 0.683873 0 1.50887C0 2.33387 0.675 3.00887 1.5 3.00887Z" /> <path d="M1.5 5.00887C0.675 5.00887 0 5.68387 0 6.50887C0 7.33387 0.675 8.00887 1.5 8.00887C2.325 8.00887 3 7.33387 3 6.50887C3 5.68387 2.325 5.00887 1.5 5.00887Z" /> <path d="M1.5 10.0089C0.675 10.0089 0 10.6839 0 11.5089C0 12.3339 0.675 13.0089 1.5 13.0089C2.325 13.0089 3 12.3339 3 11.5089C3 10.6839 2.325 10.0089 1.5 10.0089Z" />`
  },
  "ica-italic": {
    vb: "0 0 16 17",
    p: `<path d="M12.75 4.5C12.75 4.69891 12.671 4.88968 12.5303 5.03033C12.3897 5.17098 12.1989 5.25 12 5.25H10.0406L7.54063 12.75H9C9.19891 12.75 9.38968 12.829 9.53033 12.9697C9.67098 13.1103 9.75 13.3011 9.75 13.5C9.75 13.6989 9.67098 13.8897 9.53033 14.0303C9.38968 14.171 9.19891 14.25 9 14.25H4C3.80109 14.25 3.61032 14.171 3.46967 14.0303C3.32902 13.8897 3.25 13.6989 3.25 13.5C3.25 13.3011 3.32902 13.1103 3.46967 12.9697C3.61032 12.829 3.80109 12.75 4 12.75H5.95937L8.45938 5.25H7C6.80109 5.25 6.61032 5.17098 6.46967 5.03033C6.32902 4.88968 6.25 4.69891 6.25 4.5C6.25 4.30109 6.32902 4.11032 6.46967 3.96967C6.61032 3.82902 6.80109 3.75 7 3.75H12C12.1989 3.75 12.3897 3.82902 12.5303 3.96967C12.671 4.11032 12.75 4.30109 12.75 4.5Z" />`
  },
  "ica-clock": {
    vb: "0 0 16 16",
    p: `<path d="M8.00003 2.5C6.81335 2.5 5.65331 2.8519 4.66661 3.51119C3.67992 4.17047 2.91088 5.10755 2.45676 6.2039C2.00263 7.30026 1.88381 8.50666 2.11532 9.67055C2.34683 10.8344 2.91828 11.9035 3.75739 12.7426C4.59651 13.5818 5.66561 14.1532 6.82949 14.3847C7.99338 14.6162 9.19978 14.4974 10.2961 14.0433C11.3925 13.5892 12.3296 12.8201 12.9889 11.8334C13.6481 10.8467 14 9.68669 14 8.5C13.9982 6.90926 13.3655 5.3842 12.2407 4.25937C11.1158 3.13455 9.59077 2.50182 8.00003 2.5ZM8.00003 13.5C7.01113 13.5 6.04443 13.2068 5.22218 12.6574C4.39994 12.1079 3.75907 11.3271 3.38064 10.4134C3.0022 9.49979 2.90318 8.49446 3.09611 7.52455C3.28903 6.55465 3.76524 5.66373 4.4645 4.96447C5.16376 4.26521 6.05468 3.789 7.02458 3.59608C7.99449 3.40315 8.99982 3.50217 9.91345 3.88061C10.8271 4.25904 11.608 4.89991 12.1574 5.72215C12.7068 6.5444 13 7.5111 13 8.5C12.9985 9.82563 12.4713 11.0965 11.5339 12.0339C10.5966 12.9713 9.32566 13.4985 8.00003 13.5ZM3.85378 2.35375L1.85378 4.35375C1.75996 4.44757 1.63272 4.50028 1.50003 4.50028C1.36735 4.50028 1.2401 4.44757 1.14628 4.35375C1.05246 4.25993 0.999756 4.13269 0.999756 4C0.999756 3.86732 1.05246 3.74007 1.14628 3.64625L3.14628 1.64625C3.2401 1.55243 3.36735 1.49973 3.50003 1.49973C3.63272 1.49973 3.75996 1.55243 3.85378 1.64625C3.9476 1.74007 4.00031 1.86732 4.00031 2C4.00031 2.13269 3.9476 2.25993 3.85378 2.35375ZM14.8538 4.35375C14.8073 4.40024 14.7522 4.43712 14.6915 4.46228C14.6308 4.48745 14.5657 4.5004 14.5 4.5004C14.4343 4.5004 14.3693 4.48745 14.3086 4.46228C14.2479 4.43712 14.1927 4.40024 14.1463 4.35375L12.1463 2.35375C12.0525 2.25993 11.9998 2.13269 11.9998 2C11.9998 1.86732 12.0525 1.74007 12.1463 1.64625C12.2401 1.55243 12.3674 1.49973 12.5 1.49973C12.6327 1.49973 12.76 1.55243 12.8538 1.64625L14.8538 3.64625C14.9003 3.69269 14.9372 3.74783 14.9623 3.80853C14.9875 3.86923 15.0004 3.9343 15.0004 4C15.0004 4.06571 14.9875 4.13077 14.9623 4.19147C14.9372 4.25217 14.9003 4.30732 14.8538 4.35375ZM11.5 8C11.6326 8 11.7598 8.05268 11.8536 8.14645C11.9474 8.24022 12 8.36739 12 8.5C12 8.63261 11.9474 8.75979 11.8536 8.85356C11.7598 8.94733 11.6326 9 11.5 9H8.00003C7.86743 9 7.74025 8.94733 7.64648 8.85356C7.55271 8.75979 7.50003 8.63261 7.50003 8.5V5C7.50003 4.8674 7.55271 4.74022 7.64648 4.64645C7.74025 4.55268 7.86743 4.5 8.00003 4.5C8.13264 4.5 8.25982 4.55268 8.35359 4.64645C8.44736 4.74022 8.50003 4.8674 8.50003 5V8H11.5Z"/>`
  },
  "ica-delete-backspace": {
    vb: "0 0 12 10",
    p: `<path d="M0.875147 4.77011C0.831824 4.84222 0.808936 4.92476 0.808936 5.00888C0.808936 5.09299 0.831814 5.17551 0.875119 5.24761C0.875129 5.24762 0.875138 5.24764 0.875147 5.24765L2.95103 8.70715L2.95116 8.70738C3.02491 8.82955 3.12888 8.93067 3.25305 9.00099C3.37723 9.07131 3.51742 9.10847 3.66012 9.10888H3.66041H10.3636C10.583 9.10888 10.7934 9.02172 10.9486 8.86658C11.1037 8.71143 11.1909 8.50102 11.1909 8.28161V1.73615C11.1909 1.51675 11.1037 1.30633 10.9486 1.15118C10.7934 0.996039 10.583 0.908881 10.3636 0.908881L3.66041 0.90888L3.66012 0.908881C3.51742 0.909292 3.37723 0.946449 3.25305 1.01677C3.12888 1.08709 3.02491 1.18821 2.95116 1.31038L2.95103 1.31061L0.875147 4.77011ZM0.875147 4.77011L0.960866 4.82161M0.875147 4.77011L0.875119 4.77015L0.960866 4.82161M0.960866 4.82161L3.03678 1.36206C3.10165 1.25459 3.1931 1.16565 3.30233 1.10379C3.41156 1.04193 3.53488 1.00924 3.66041 1.00888H10.3636C10.5565 1.00888 10.7415 1.0855 10.8779 1.22189C11.0142 1.35828 11.0909 1.54327 11.0909 1.73615V8.28161C11.0909 8.47449 11.0142 8.65948 10.8779 8.79587C10.7415 8.93226 10.5565 9.00888 10.3636 9.00888H3.66041C3.53488 9.00852 3.41156 8.97583 3.30233 8.91397C3.1931 8.85212 3.10165 8.76317 3.03678 8.6557L0.960866 5.19615C0.926887 5.1396 0.908936 5.07486 0.908936 5.00888C0.908936 4.9429 0.926887 4.87816 0.960866 4.82161ZM5.30836 5.77179L5.30834 5.77181C5.26527 5.81488 5.2311 5.86601 5.20779 5.92229C5.18448 5.97856 5.17248 6.03888 5.17248 6.09979C5.17248 6.1607 5.18448 6.22102 5.20779 6.27729C5.2311 6.33357 5.26527 6.3847 5.30834 6.42777L5.37905 6.35706L5.30834 6.42777C5.35141 6.47085 5.40254 6.50501 5.45882 6.52832C5.51509 6.55163 5.57541 6.56363 5.63632 6.56363C5.69723 6.56363 5.75755 6.55163 5.81382 6.52832C5.8701 6.50501 5.92123 6.47085 5.9643 6.42777L5.96432 6.42775L6.72723 5.66443L7.49013 6.42775L7.49015 6.42777C7.53323 6.47085 7.58436 6.50501 7.64063 6.52832C7.69691 6.55163 7.75723 6.56363 7.81814 6.56363C7.87905 6.56363 7.93937 6.55163 7.99564 6.52832C8.05192 6.50501 8.10305 6.47085 8.14612 6.42777L8.07541 6.35706L8.14612 6.42777C8.18919 6.3847 8.22336 6.33357 8.24667 6.27729C8.26998 6.22102 8.28198 6.1607 8.28198 6.09979C8.28198 6.03888 8.26998 5.97856 8.24667 5.92229C8.22336 5.86601 8.18919 5.81488 8.14612 5.77181L8.1461 5.77179L7.38278 5.00888L8.1461 4.24597L8.14612 4.24595C8.18919 4.20288 8.22336 4.15175 8.24667 4.09548C8.26998 4.0392 8.28198 3.97888 8.28198 3.91797C8.28198 3.85706 8.26998 3.79674 8.24667 3.74047C8.22336 3.68419 8.18919 3.63306 8.14612 3.58999C8.10305 3.54692 8.05192 3.51275 7.99564 3.48944L7.95737 3.58183L7.99564 3.48944C7.93937 3.46613 7.87905 3.45413 7.81814 3.45413C7.75723 3.45413 7.69691 3.46613 7.64063 3.48944C7.58436 3.51275 7.53323 3.54692 7.49015 3.58999L7.49013 3.59001L6.72723 4.35333L5.96432 3.59001L5.9643 3.58999C5.87732 3.503 5.75934 3.45413 5.63632 3.45413C5.5133 3.45413 5.39532 3.503 5.30834 3.58999C5.22135 3.67697 5.17248 3.79495 5.17248 3.91797C5.17248 4.04099 5.22135 4.15897 5.30834 4.24596L5.30836 4.24597L6.07168 5.00888L5.30836 5.77179ZM10.2636 8.18161H3.71703L1.81339 5.00888L3.71703 1.83615H10.2636V8.18161Z"/>`
  },
  "ica-cut": {
    vb: "0 0 16 17",
    p: `<path d="M14.9236 12.4869L6.14238 6.47813C6.21378 6.24201 6.25 5.99667 6.24988 5.75C6.24995 5.18442 6.05824 4.63552 5.70605 4.19297C5.35387 3.75041 4.86203 3.44036 4.31087 3.31344C3.75971 3.18653 3.1818 3.25026 2.67153 3.49421C2.16127 3.73817 1.7488 4.14795 1.50151 4.6566C1.25422 5.16526 1.18671 5.74274 1.31002 6.29472C1.43332 6.8467 1.74015 7.34056 2.18039 7.69563C2.62063 8.0507 3.16826 8.24601 3.73383 8.24964C4.2994 8.25327 4.84949 8.06502 5.29426 7.71563L7.16926 9.00063L5.29426 10.2856C4.91545 9.98801 4.45873 9.80618 3.97902 9.762C3.49932 9.71782 3.01706 9.81318 2.59027 10.0366C2.16348 10.26 1.81034 10.602 1.57331 11.0214C1.33628 11.4408 1.22547 11.9197 1.25421 12.4006C1.28295 12.8815 1.45 13.3438 1.73529 13.732C2.02058 14.1202 2.41194 14.4176 2.8623 14.5886C3.31266 14.7597 3.80284 14.7969 4.27387 14.6959C4.7449 14.5949 5.17671 14.36 5.51738 14.0194C5.75052 13.7876 5.93532 13.5119 6.06106 13.2081C6.1868 12.9044 6.25098 12.5787 6.24988 12.25C6.25006 12.0031 6.21384 11.7576 6.14238 11.5213L8.49988 9.90875L14.0761 13.725C14.1574 13.7806 14.2489 13.8197 14.3453 13.84C14.4417 13.8603 14.5412 13.8615 14.638 13.8433C14.7348 13.8252 14.8271 13.7882 14.9097 13.7343C14.9922 13.6805 15.0633 13.611 15.1189 13.5297C15.1746 13.4484 15.2137 13.3569 15.234 13.2605C15.2543 13.1641 15.2554 13.0647 15.2373 12.9678C15.2191 12.871 15.1821 12.7787 15.1283 12.6962C15.0745 12.6136 15.0049 12.5425 14.9236 12.4869ZM4.45675 12.9581C4.29314 13.1216 4.07791 13.2234 3.84771 13.246C3.61751 13.2686 3.38659 13.2107 3.19427 13.0822C3.00195 12.9537 2.86013 12.7625 2.79297 12.5412C2.7258 12.3198 2.73744 12.082 2.82591 11.8683C2.91438 11.6546 3.0742 11.4782 3.27816 11.369C3.48211 11.2599 3.71759 11.2249 3.94447 11.2699C4.17136 11.3149 4.37562 11.4372 4.52248 11.6159C4.66934 11.7946 4.7497 12.0187 4.74988 12.25C4.74998 12.3815 4.72415 12.5117 4.67385 12.6333C4.62355 12.7548 4.54978 12.8652 4.45675 12.9581ZM3.04301 6.45625C2.90309 6.31642 2.80778 6.13824 2.76914 5.94424C2.7305 5.75025 2.75027 5.54914 2.82594 5.36638C2.90161 5.18362 3.02978 5.0274 3.19424 4.91749C3.35871 4.80758 3.55207 4.74891 3.74988 4.74891C3.94769 4.74891 4.14106 4.80758 4.30552 4.91749C4.46998 5.0274 4.59815 5.18362 4.67382 5.36638C4.74949 5.54914 4.76926 5.75025 4.73062 5.94424C4.69198 6.13824 4.59667 6.31642 4.45675 6.45625C4.26924 6.64365 4.01498 6.74891 3.74988 6.74891C3.48478 6.74891 3.23052 6.64365 3.04301 6.45625ZM10.0943 7.90875C10.0386 7.82746 9.99959 7.736 9.97933 7.63961C9.95906 7.54323 9.95798 7.44379 9.97615 7.34698C9.99431 7.25018 10.0314 7.1579 10.0852 7.07541C10.139 6.99293 10.2086 6.92186 10.2899 6.86625L14.0761 4.275C14.2403 4.16262 14.4424 4.12006 14.638 4.15668C14.8336 4.19331 15.0066 4.30613 15.1189 4.47031C15.2313 4.6345 15.2739 4.83661 15.2373 5.03217C15.2006 5.22774 15.0878 5.40074 14.9236 5.51313L11.1368 8.10438C11.0555 8.15999 10.964 8.19904 10.8676 8.2193C10.7712 8.23957 10.6718 8.24065 10.575 8.22248C10.4782 8.20432 10.3859 8.16726 10.3034 8.11343C10.2209 8.0596 10.1499 7.99005 10.0943 7.90875Z" />`
  },
  "ica-chat-circle-text": {
    vb: "0 0 14 13",
    p: `<path d="M9.5 5.50621C9.5 5.63882 9.44732 5.76599 9.35355 5.85976C9.25979 5.95353 9.13261 6.00621 9 6.00621H5C4.86739 6.00621 4.74021 5.95353 4.64645 5.85976C4.55268 5.76599 4.5 5.63882 4.5 5.50621C4.5 5.3736 4.55268 5.24642 4.64645 5.15265C4.74021 5.05889 4.86739 5.00621 5 5.00621H9C9.13261 5.00621 9.25979 5.05889 9.35355 5.15265C9.44732 5.24642 9.5 5.3736 9.5 5.50621ZM9 7.00621H5C4.86739 7.00621 4.74021 7.05889 4.64645 7.15265C4.55268 7.24642 4.5 7.3736 4.5 7.50621C4.5 7.63882 4.55268 7.76599 4.64645 7.85976C4.74021 7.95353 4.86739 8.00621 5 8.00621H9C9.13261 8.00621 9.25979 7.95353 9.35355 7.85976C9.44732 7.76599 9.5 7.63882 9.5 7.50621C9.5 7.3736 9.44732 7.24642 9.35355 7.15265C9.25979 7.05889 9.13261 7.00621 9 7.00621ZM13.5 6.50621C13.5002 7.62842 13.2099 8.73157 12.6574 9.7083C12.1048 10.685 11.3087 11.5021 10.3467 12.0798C9.38466 12.6576 8.28942 12.9765 7.16759 13.0055C6.04575 13.0344 4.93554 12.7724 3.945 12.245L1.81687 12.9543C1.64068 13.0131 1.4516 13.0216 1.27083 12.979C1.09006 12.9363 0.924742 12.8441 0.793407 12.7128C0.662072 12.5815 0.569909 12.4161 0.527248 12.2354C0.484588 12.0546 0.493115 11.8655 0.551875 11.6893L1.26125 9.56121C0.797593 8.68948 0.538623 7.72357 0.503998 6.73681C0.469374 5.75006 0.660003 4.76838 1.06142 3.86629C1.46283 2.96421 2.06448 2.16542 2.8207 1.53058C3.57691 0.89573 4.46782 0.441505 5.42579 0.202379C6.38376 -0.0367473 7.38362 -0.0544892 8.34948 0.1505C9.31533 0.355488 10.2218 0.77782 11.0001 1.38544C11.7783 1.99306 12.4079 2.76999 12.8411 3.65727C13.2743 4.54454 13.4996 5.51884 13.5 6.50621ZM12.5 6.50621C12.4998 5.66253 12.3054 4.83022 11.9321 4.07367C11.5587 3.31712 11.0163 2.6566 10.3468 2.14323C9.67726 1.62985 8.89863 1.27738 8.07111 1.11307C7.24359 0.948771 6.38936 0.977044 5.57452 1.19571C4.75968 1.41437 4.00606 1.81756 3.37197 2.37408C2.73788 2.9306 2.24032 3.62554 1.91779 4.40512C1.59525 5.18471 1.45639 6.02804 1.51193 6.86989C1.56748 7.71173 1.81595 8.52951 2.23812 9.25996C2.27356 9.32128 2.29556 9.38943 2.30267 9.4599C2.30978 9.53037 2.30184 9.60154 2.27937 9.66871L1.5 12.0062L3.8375 11.2268C3.88841 11.2095 3.94183 11.2006 3.99562 11.2006C4.08344 11.2007 4.16966 11.224 4.24562 11.2681C5.08175 11.7518 6.03054 12.0069 6.99653 12.0075C7.96251 12.0081 8.91162 11.7543 9.74836 11.2716C10.5851 10.7889 11.2799 10.0943 11.763 9.25774C12.246 8.4212 12.5002 7.47219 12.5 6.50621Z" />`
  },
  "ica-copy": {
    vb: "0 0 20 20",
    p: `<path d="M13.5 2.25H5.5C5.30109 2.25 5.11032 2.32902 4.96967 2.46967C4.82902 2.61032 4.75 2.80109 4.75 3V5.25H2.5C2.30109 5.25 2.11032 5.32902 1.96967 5.46967C1.82902 5.61032 1.75 5.80109 1.75 6V14C1.75 14.1989 1.82902 14.3897 1.96967 14.5303C2.11032 14.671 2.30109 14.75 2.5 14.75H10.5C10.6989 14.75 10.8897 14.671 11.0303 14.5303C11.171 14.3897 11.25 14.1989 11.25 14V11.75H13.5C13.6989 11.75 13.8897 11.671 14.0303 11.5303C14.171 11.3897 14.25 11.1989 14.25 11V3C14.25 2.80109 14.171 2.61032 14.0303 2.46967C13.8897 2.32902 13.6989 2.25 13.5 2.25ZM9.75 13.25H3.25V6.75H9.75V13.25ZM12.75 10.25H11.25V6C11.25 5.80109 11.171 5.61032 11.0303 5.46967C10.8897 5.32902 10.6989 5.25 10.5 5.25H6.25V3.75H12.75V10.25Z" />`
  },
  "ica-caret-left": {
    vb: "0 0 6 10",
    p: `<path d="M5.33041 9.26106C5.38416 9.2075 5.42681 9.14384 5.45592 9.07376C5.48502 9.00367 5.5 8.92853 5.5 8.85264C5.5 8.77675 5.48502 8.70161 5.45592 8.63153C5.42681 8.56144 5.38416 8.49779 5.33041 8.44422L1.89534 5.00915L5.33041 1.57311C5.43873 1.46479 5.49958 1.31788 5.49958 1.16469C5.49958 1.0115 5.43873 0.864588 5.33041 0.756267C5.22209 0.647947 5.07518 0.587093 4.92199 0.587093C4.7688 0.587093 4.62189 0.647947 4.51357 0.756267L0.66959 4.60024C0.615835 4.65381 0.573185 4.71746 0.544083 4.78755C0.514981 4.85764 0.5 4.93278 0.5 5.00867C0.5 5.08455 0.514981 5.1597 0.544083 5.22978C0.573185 5.29987 0.615835 5.36352 0.66959 5.41709L4.51357 9.26106C4.56713 9.31482 4.63079 9.35747 4.70087 9.38657C4.77096 9.41567 4.8461 9.43065 4.92199 9.43065C4.99788 9.43065 5.07302 9.41567 5.1431 9.38657C5.21319 9.35747 5.27684 9.31482 5.33041 9.26106Z" />`
  },
  "ica-warning-triangle": {
    vb: "0 0 16 16",
    p: `<path d="M15.0166 11.8902L9.55096 2.3983C9.39265 2.12756 9.16621 1.90298 8.89417 1.74692C8.62213 1.59085 8.31396 1.50874 8.00033 1.50874C7.6867 1.50874 7.37854 1.59085 7.1065 1.74692C6.83446 1.90298 6.60802 2.12756 6.44971 2.3983L0.984083 11.8902C0.83047 12.1529 0.749512 12.4518 0.749512 12.7561C0.749512 13.0605 0.83047 13.3593 0.984083 13.6221C1.14064 13.8941 1.36676 14.1197 1.63926 14.2755C1.91175 14.4314 2.22081 14.5119 2.53471 14.5089H13.466C13.7796 14.5117 14.0884 14.4311 14.3607 14.2752C14.633 14.1194 14.8589 13.894 15.0153 13.6221C15.1691 13.3594 15.2503 13.0606 15.2505 12.7563C15.2507 12.4519 15.17 12.153 15.0166 11.8902ZM13.7166 12.8714C13.6912 12.9147 13.6545 12.9504 13.6105 12.9746C13.5665 12.9988 13.5168 13.0107 13.4666 13.0089H2.53471C2.48451 13.0107 2.43479 12.9988 2.39078 12.9746C2.34678 12.9504 2.31013 12.9147 2.28471 12.8714C2.26315 12.8364 2.25173 12.796 2.25173 12.7549C2.25173 12.7137 2.26315 12.6734 2.28471 12.6383L7.75033 3.14643C7.7774 3.10477 7.81444 3.07053 7.8581 3.04683C7.90176 3.02313 7.95065 3.01072 8.00033 3.01072C8.05001 3.01072 8.0989 3.02313 8.14256 3.04683C8.18622 3.07053 8.22327 3.10477 8.25033 3.14643L13.7153 12.6383C13.7371 12.6732 13.7487 12.7135 13.7489 12.7547C13.7492 12.7958 13.738 12.8363 13.7166 12.8714ZM7.25033 8.75893V6.75893C7.25033 6.56001 7.32935 6.36925 7.47 6.2286C7.61065 6.08794 7.80142 6.00893 8.00033 6.00893C8.19924 6.00893 8.39001 6.08794 8.53066 6.2286C8.67131 6.36925 8.75033 6.56001 8.75033 6.75893V8.75893C8.75033 8.95784 8.67131 9.1486 8.53066 9.28926C8.39001 9.42991 8.19924 9.50893 8.00033 9.50893C7.80142 9.50893 7.61065 9.42991 7.47 9.28926C7.32935 9.1486 7.25033 8.95784 7.25033 8.75893ZM9.00033 11.2589C9.00033 11.4567 8.94168 11.65 8.8318 11.8145C8.72192 11.9789 8.56574 12.1071 8.38302 12.1828C8.20029 12.2585 7.99922 12.2783 7.80524 12.2397C7.61126 12.2011 7.43308 12.1059 7.29323 11.966C7.15337 11.8262 7.05813 11.648 7.01955 11.454C6.98096 11.26 7.00077 11.059 7.07645 10.8762C7.15214 10.6935 7.28031 10.5373 7.44476 10.4275C7.60921 10.3176 7.80255 10.2589 8.00033 10.2589C8.26555 10.2589 8.5199 10.3643 8.70744 10.5518C8.89498 10.7394 9.00033 10.9937 9.00033 11.2589Z" />`
  },
  "ica-warning-circle": {
    vb: "0 0 16 16",
    p: `<path d="M8 1.25887C6.66498 1.25887 5.35994 1.65475 4.2499 2.39645C3.13987 3.13815 2.27471 4.19236 1.76382 5.42576C1.25292 6.65916 1.11925 8.01636 1.3797 9.32573C1.64015 10.6351 2.28303 11.8378 3.22703 12.7818C4.17104 13.7258 5.37377 14.3687 6.68314 14.6292C7.99252 14.8896 9.34971 14.756 10.5831 14.2451C11.8165 13.7342 12.8707 12.869 13.6124 11.759C14.3541 10.6489 14.75 9.3439 14.75 8.00887C14.748 6.21927 14.0362 4.50354 12.7708 3.23809C11.5053 1.97265 9.78961 1.26086 8 1.25887ZM8 13.2589C6.96165 13.2589 5.94662 12.951 5.08326 12.3741C4.2199 11.7972 3.547 10.9773 3.14964 10.018C2.75228 9.05865 2.64831 8.00305 2.85088 6.98465C3.05345 5.96625 3.55347 5.03079 4.28769 4.29656C5.02192 3.56234 5.95738 3.06232 6.97578 2.85975C7.99418 2.65718 9.04978 2.76115 10.0091 3.15851C10.9684 3.55587 11.7883 4.22877 12.3652 5.09213C12.9421 5.95549 13.25 6.97052 13.25 8.00887C13.2485 9.4008 12.6949 10.7353 11.7107 11.7195C10.7264 12.7038 9.39193 13.2574 8 13.2589ZM7.25 8.25887V5.00887C7.25 4.80996 7.32902 4.61919 7.46967 4.47854C7.61032 4.33789 7.80109 4.25887 8 4.25887C8.19892 4.25887 8.38968 4.33789 8.53033 4.47854C8.67098 4.61919 8.75 4.80996 8.75 5.00887V8.25887C8.75 8.45779 8.67098 8.64855 8.53033 8.7892C8.38968 8.92985 8.19892 9.00887 8 9.00887C7.80109 9.00887 7.61032 8.92985 7.46967 8.7892C7.32902 8.64855 7.25 8.45779 7.25 8.25887ZM9 10.7589C9 10.9567 8.94135 11.15 8.83147 11.3144C8.72159 11.4789 8.56541 11.6071 8.38269 11.6828C8.19996 11.7584 7.99889 11.7782 7.80491 11.7397C7.61093 11.7011 7.43275 11.6058 7.2929 11.466C7.15304 11.3261 7.0578 11.1479 7.01922 10.954C6.98063 10.76 7.00044 10.5589 7.07612 10.3762C7.15181 10.1935 7.27998 10.0373 7.44443 9.9274C7.60888 9.81752 7.80222 9.75887 8 9.75887C8.26522 9.75887 8.51957 9.86423 8.70711 10.0518C8.89465 10.2393 9 10.4937 9 10.7589Z"/>`
  },
  "ica-warning-circle-20": {
    vb: "0 0 20 20",
    p: `<path d="M10 20C8.02219 20 6.08879 19.4135 4.4443 18.3147C2.79981 17.2159 1.51809 15.6541 0.761209 13.8268C0.00433282 11.9996 -0.1937 9.98891 0.192152 8.0491C0.578004 6.10929 1.53041 4.32746 2.92894 2.92894C4.32746 1.53041 6.10929 0.578004 8.0491 0.192152C9.98891 -0.1937 11.9996 0.00433282 13.8268 0.761209C15.6541 1.51809 17.2159 2.79981 18.3147 4.4443C19.4135 6.08879 20 8.02219 20 10C19.9972 12.6513 18.9427 15.1932 17.068 17.068C15.1932 18.9427 12.6513 19.9972 10 20ZM10 1.53847C8.32647 1.53847 6.69052 2.03473 5.29902 2.96449C3.90753 3.89426 2.823 5.21577 2.18256 6.76191C1.54213 8.30806 1.37456 10.0094 1.70105 11.6508C2.02754 13.2921 2.83343 14.7998 4.01679 15.9832C5.20016 17.1666 6.70786 17.9725 8.34924 18.299C9.99062 18.6254 11.6919 18.4579 13.2381 17.8174C14.7842 17.177 16.1057 16.0925 17.0355 14.701C17.9653 13.3095 18.4615 11.6735 18.4615 10C18.459 7.75664 17.5667 5.6059 15.9804 4.0196C14.3941 2.43331 12.2434 1.54101 10 1.53847ZM9.23077 9.23077V14.6154C9.23077 14.8194 9.31182 15.0151 9.45607 15.1593C9.60033 15.3036 9.79599 15.3846 10 15.3846C10.204 15.3846 10.3997 15.3036 10.5439 15.1593C10.6882 15.0151 10.7692 14.8194 10.7692 14.6154V9.23077C10.7692 9.02676 10.6882 8.8311 10.5439 8.68684C10.3997 8.54258 10.204 8.46154 10 8.46154C9.79599 8.46154 9.60033 8.54258 9.45607 8.68684C9.31182 8.8311 9.23077 9.02676 9.23077 9.23077ZM11.1538 5.76923C11.1538 5.54102 11.0862 5.31794 10.9594 5.12819C10.8326 4.93844 10.6524 4.79055 10.4416 4.70322C10.2307 4.61589 9.99872 4.59304 9.7749 4.63756C9.55107 4.68208 9.34548 4.79197 9.18411 4.95334C9.02274 5.11471 8.91285 5.32031 8.86833 5.54413C8.82381 5.76795 8.84666 5.99995 8.93399 6.21079C9.02132 6.42163 9.16921 6.60183 9.35896 6.72862C9.54871 6.85541 9.77179 6.92308 10 6.92308C10.306 6.92308 10.5995 6.80151 10.8159 6.58513C11.0323 6.36874 11.1538 6.07525 11.1538 5.76923Z"/>`
  },
  "ica-arrow-end-right": {
    vb: "0 0 8 10",
    p: `<path d="M7.21429 0.544595C7.07221 0.544595 6.93595 0.601036 6.83548 0.701502C6.73501 0.801968 6.67857 0.938229 6.67857 1.08031V3.84817L1.61384 0.678524C1.47898 0.594787 1.32424 0.548517 1.16556 0.544478C1.00687 0.54044 0.849977 0.57878 0.711038 0.65555C0.572098 0.732319 0.456137 0.844741 0.3751 0.981235C0.294063 1.11773 0.25088 1.27336 0.25 1.4321V8.58567C0.25088 8.7444 0.294063 8.90003 0.3751 9.03653C0.456137 9.17302 0.572098 9.28544 0.711038 9.36221C0.849977 9.43898 1.00687 9.47732 1.16556 9.47328C1.32424 9.46925 1.47898 9.42298 1.61384 9.33924L6.67857 6.1696V8.93745C6.67857 9.07953 6.73501 9.21579 6.83548 9.31626C6.93595 9.41673 7.07221 9.47317 7.21429 9.47317C7.35637 9.47317 7.49263 9.41673 7.59309 9.31626C7.69356 9.21579 7.75 9.07953 7.75 8.93745V1.08031C7.75 0.938229 7.69356 0.801968 7.59309 0.701502C7.49263 0.601036 7.35637 0.544595 7.21429 0.544595ZM1.32143 8.25576V1.76201L6.51339 5.00888L1.32143 8.25576Z"/>`
  },
  "ica-underline": {
    vb: "0 0 16 17",
    p: `<path d="M12.75 15C12.75 15.1989 12.671 15.3897 12.5303 15.5303C12.3897 15.671 12.1989 15.75 12 15.75H4C3.80109 15.75 3.61032 15.671 3.46967 15.5303C3.32902 15.3897 3.25 15.1989 3.25 15C3.25 14.8011 3.32902 14.6103 3.46967 14.4697C3.61032 14.329 3.80109 14.25 4 14.25H12C12.1989 14.25 12.3897 14.329 12.5303 14.4697C12.671 14.6103 12.75 14.8011 12.75 15ZM8 13.25C9.12681 13.2488 10.2071 12.8007 11.0039 12.0039C11.8007 11.2071 12.2488 10.1268 12.25 9V4.5C12.25 4.30109 12.171 4.11032 12.0303 3.96967C11.8897 3.82902 11.6989 3.75 11.5 3.75C11.3011 3.75 11.1103 3.82902 10.9697 3.96967C10.829 4.11032 10.75 4.30109 10.75 4.5V9C10.75 9.72935 10.4603 10.4288 9.94454 10.9445C9.42882 11.4603 8.72935 11.75 8 11.75C7.27065 11.75 6.57118 11.4603 6.05546 10.9445C5.53973 10.4288 5.25 9.72935 5.25 9V4.5C5.25 4.30109 5.17098 4.11032 5.03033 3.96967C4.88968 3.82902 4.69891 3.75 4.5 3.75C4.30109 3.75 4.11032 3.82902 3.96967 3.96967C3.82902 4.11032 3.75 4.30109 3.75 4.5V9C3.75116 10.1268 4.1993 11.2071 4.99608 12.0039C5.79285 12.8007 6.87319 13.2488 8 13.25Z" />`
  },
  "ica-more-horizontal": {
    vb: "0 0 14 3",
    p: `<path d="M3.5 1.50887C3.5 0.683873 2.825 0.00887299 2 0.00887299C1.175 0.00887299 0.5 0.683873 0.5 1.50887C0.5 2.33387 1.175 3.00887 2 3.00887C2.825 3.00887 3.5 2.33387 3.5 1.50887Z" /> <path d="M5.5 1.50887C5.5 2.33387 6.175 3.00887 7 3.00887C7.825 3.00887 8.5 2.33387 8.5 1.50887C8.5 0.683873 7.825 0.00887299 7 0.00887299C6.175 0.00887299 5.5 0.683873 5.5 1.50887Z" /> <path d="M10.5 1.50887C10.5 2.33387 11.175 3.00887 12 3.00887C12.825 3.00887 13.5 2.33387 13.5 1.50887C13.5 0.683873 12.825 0.00887299 12 0.00887299C11.175 0.00887299 10.5 0.683873 10.5 1.50887Z" />`
  },
  "ica-sort-asc-sm": {
    vb: "0 0 8 10",
    p: `<path d="M7.83198 4.63443C7.77891 4.69036 7.71585 4.73473 7.64641 4.76501C7.57697 4.79529 7.50252 4.81087 7.42734 4.81087C7.35215 4.81087 7.27771 4.79529 7.20827 4.76501C7.13883 4.73473 7.07577 4.69036 7.0227 4.63443L4.57153 2.06044V9.40899C4.57153 9.56809 4.51134 9.72067 4.40421 9.83317C4.29708 9.94567 4.15178 10.0089 4.00027 10.0089C3.84876 10.0089 3.70346 9.94567 3.59633 9.83317C3.4892 9.72067 3.42901 9.56809 3.42901 9.40899V2.06044L0.976889 4.63443C0.869572 4.74713 0.724018 4.81044 0.572249 4.81044C0.420479 4.81044 0.274925 4.74713 0.167608 4.63443C0.0602904 4.52174 0 4.36889 0 4.20952C0 4.05014 0.0602904 3.8973 0.167608 3.7846L3.59515 0.185311C3.64822 0.129386 3.71129 0.085013 3.78072 0.0547358C3.85016 0.0244585 3.92461 0.00887299 3.99979 0.00887299C4.07498 0.00887299 4.14943 0.0244585 4.21886 0.0547358C4.2883 0.085013 4.35136 0.129386 4.40443 0.185311L7.83198 3.7846C7.88524 3.84033 7.92749 3.90655 7.95633 3.97947C7.98516 4.05239 8 4.13056 8 4.20952C8 4.28847 7.98516 4.36665 7.95633 4.43956C7.92749 4.51248 7.88524 4.5787 7.83198 4.63443Z" />`
  },
  "ica-paste-html": {
    vb: "0 0 16 16",
    p: `<path d="M3 8C3.19891 8 3.38968 7.92098 3.53033 7.78033C3.67098 7.63968 3.75 7.44891 3.75 7.25V2.75H8.5V5.75C8.5 5.94891 8.57902 6.13968 8.71967 6.28033C8.86032 6.42098 9.05109 6.5 9.25 6.5H12.25V7.25C12.25 7.44891 12.329 7.63968 12.4697 7.78033C12.6103 7.92098 12.8011 8 13 8C13.1989 8 13.3897 7.92098 13.5303 7.78033C13.671 7.63968 13.75 7.44891 13.75 7.25V5.5C13.7501 5.40148 13.7307 5.30391 13.6931 5.21286C13.6555 5.12182 13.6003 5.03908 13.5306 4.96938L10.0306 1.46938C9.96092 1.39975 9.87818 1.34454 9.78714 1.3069C9.69609 1.26926 9.59852 1.24992 9.5 1.25H3.5C3.16848 1.25 2.85054 1.3817 2.61612 1.61612C2.3817 1.85054 2.25 2.16848 2.25 2.5V7.25C2.25 7.44891 2.32902 7.63968 2.46967 7.78033C2.61032 7.92098 2.80109 8 3 8ZM11.4375 5H10V3.5625L11.4375 5ZM4.25 10V13C4.25 13.1989 4.17098 13.3897 4.03033 13.5303C3.88968 13.671 3.69891 13.75 3.5 13.75C3.30109 13.75 3.11032 13.671 2.96967 13.5303C2.82902 13.3897 2.75 13.1989 2.75 13V12.25H2V13C2 13.1989 1.92098 13.3897 1.78033 13.5303C1.63968 13.671 1.44891 13.75 1.25 13.75C1.05109 13.75 0.860322 13.671 0.71967 13.5303C0.579018 13.3897 0.5 13.1989 0.5 13V10C0.5 9.80109 0.579018 9.61032 0.71967 9.46967C0.860322 9.32902 1.05109 9.25 1.25 9.25C1.44891 9.25 1.63968 9.32902 1.78033 9.46967C1.92098 9.61032 2 9.80109 2 10V10.75H2.75V10C2.75 9.80109 2.82902 9.61032 2.96967 9.46967C3.11032 9.32902 3.30109 9.25 3.5 9.25C3.69891 9.25 3.88968 9.32902 4.03033 9.46967C4.17098 9.61032 4.25 9.80109 4.25 10ZM8 10C8 10.1989 7.92098 10.3897 7.78033 10.5303C7.63968 10.671 7.44891 10.75 7.25 10.75H7V13C7 13.1989 6.92098 13.3897 6.78033 13.5303C6.63968 13.671 6.44891 13.75 6.25 13.75C6.05109 13.75 5.86032 13.671 5.71967 13.5303C5.57902 13.3897 5.5 13.1989 5.5 13V10.75H5.25C5.05109 10.75 4.86032 10.671 4.71967 10.5303C4.57902 10.3897 4.5 10.1989 4.5 10C4.5 9.80109 4.57902 9.61032 4.71967 9.46967C4.86032 9.32902 5.05109 9.25 5.25 9.25H7.25C7.44891 9.25 7.63968 9.32902 7.78033 9.46967C7.92098 9.61032 8 9.80109 8 10ZM12.5 10V13C12.5 13.1989 12.421 13.3897 12.2803 13.5303C12.1397 13.671 11.9489 13.75 11.75 13.75C11.5511 13.75 11.3603 13.671 11.2197 13.5303C11.079 13.3897 11 13.1989 11 13V12.415L10.9931 12.425C10.9242 12.5253 10.8319 12.6073 10.7242 12.664C10.6165 12.7206 10.4967 12.7502 10.375 12.7502C10.2533 12.7502 10.1335 12.7206 10.0258 12.664C9.91808 12.6073 9.82579 12.5253 9.75688 12.425L9.75 12.415V13C9.75 13.1989 9.67098 13.3897 9.53033 13.5303C9.38968 13.671 9.19891 13.75 9 13.75C8.80109 13.75 8.61032 13.671 8.46967 13.5303C8.32902 13.3897 8.25 13.1989 8.25 13V10C8.24995 9.83991 8.30112 9.68401 8.39604 9.55509C8.49095 9.42618 8.62462 9.33101 8.7775 9.28352C8.93039 9.23603 9.09445 9.2387 9.2457 9.29115C9.39696 9.34359 9.52746 9.44306 9.61812 9.575L10.375 10.6763L11.1319 9.575C11.2225 9.44306 11.353 9.34359 11.5043 9.29115C11.6555 9.2387 11.8196 9.23603 11.9725 9.28352C12.1254 9.33101 12.259 9.42618 12.354 9.55509C12.4489 9.68401 12.5001 9.83991 12.5 10ZM16 13C16 13.1989 15.921 13.3897 15.7803 13.5303C15.6397 13.671 15.4489 13.75 15.25 13.75H13.75C13.5511 13.75 13.3603 13.671 13.2197 13.5303C13.079 13.3897 13 13.1989 13 13V10C13 9.80109 13.079 9.61032 13.2197 9.46967C13.3603 9.32902 13.5511 9.25 13.75 9.25C13.9489 9.25 14.1397 9.32902 14.2803 9.46967C14.421 9.61032 14.5 9.80109 14.5 10V12.25H15.25C15.4489 12.25 15.6397 12.329 15.7803 12.4697C15.921 12.6103 16 12.8011 16 13Z" />`
  },
  "ica-align-right": {
    vb: "0 0 16 16",
    p: `<path d="M1.75 4C1.75 3.80109 1.82902 3.61032 1.96967 3.46967C2.11032 3.32902 2.30109 3.25 2.5 3.25H13.5C13.6989 3.25 13.8897 3.32902 14.0303 3.46967C14.171 3.61032 14.25 3.80109 14.25 4C14.25 4.19891 14.171 4.38968 14.0303 4.53033C13.8897 4.67098 13.6989 4.75 13.5 4.75H2.5C2.30109 4.75 2.11032 4.67098 1.96967 4.53033C1.82902 4.38968 1.75 4.19891 1.75 4ZM13.5 5.75H5.5C5.30109 5.75 5.11032 5.82902 4.96967 5.96967C4.82902 6.11032 4.75 6.30109 4.75 6.5C4.75 6.69891 4.82902 6.88968 4.96967 7.03033C5.11032 7.17098 5.30109 7.25 5.5 7.25H13.5C13.6989 7.25 13.8897 7.17098 14.0303 7.03033C14.171 6.88968 14.25 6.69891 14.25 6.5C14.25 6.30109 14.171 6.11032 14.0303 5.96967C13.8897 5.82902 13.6989 5.75 13.5 5.75ZM13.5 8.25H2.5C2.30109 8.25 2.11032 8.32902 1.96967 8.46967C1.82902 8.61032 1.75 8.80109 1.75 9C1.75 9.19891 1.82902 9.38968 1.96967 9.53033C2.11032 9.67098 2.30109 9.75 2.5 9.75H13.5C13.6989 9.75 13.8897 9.67098 14.0303 9.53033C14.171 9.38968 14.25 9.19891 14.25 9C14.25 8.80109 14.171 8.61032 14.0303 8.46967C13.8897 8.32902 13.6989 8.25 13.5 8.25ZM13.5 10.75H5.5C5.30109 10.75 5.11032 10.829 4.96967 10.9697C4.82902 11.1103 4.75 11.3011 4.75 11.5C4.75 11.6989 4.82902 11.8897 4.96967 12.0303C5.11032 12.171 5.30109 12.25 5.5 12.25H13.5C13.6989 12.25 13.8897 12.171 14.0303 12.0303C14.171 11.8897 14.25 11.6989 14.25 11.5C14.25 11.3011 14.171 11.1103 14.0303 10.9697C13.8897 10.829 13.6989 10.75 13.5 10.75Z" />`
  },
  "ica-cross": {
    vb: "0 0 10 10",
    p: `<path d="M9.31038 8.40134C9.43111 8.52207 9.49893 8.6858 9.49893 8.85653C9.49893 9.02726 9.43111 9.191 9.31038 9.31172C9.18966 9.43245 9.02592 9.50027 8.85519 9.50027C8.68446 9.50027 8.52073 9.43245 8.4 9.31172L5 5.91065L1.59893 9.31065C1.4782 9.43138 1.31447 9.4992 1.14374 9.4992C0.973007 9.4992 0.80927 9.43138 0.688546 9.31065C0.567822 9.18993 0.5 9.02619 0.5 8.85546C0.5 8.68473 0.567822 8.521 0.688546 8.40027L4.08962 5.00027L0.689617 1.59919C0.568893 1.47847 0.501071 1.31473 0.501071 1.144C0.501071 0.973275 0.568893 0.809538 0.689617 0.688814C0.810341 0.56809 0.974078 0.500268 1.14481 0.500268C1.31554 0.500268 1.47927 0.56809 1.6 0.688814L5 4.08989L8.40107 0.688279C8.5218 0.567555 8.68553 0.499733 8.85626 0.499733C9.02699 0.499733 9.19073 0.567555 9.31145 0.688279C9.43218 0.809003 9.5 0.972739 9.5 1.14347C9.5 1.3142 9.43218 1.47794 9.31145 1.59866L5.91038 5.00027L9.31038 8.40134Z" />`
  },
  "ica-minus": {
    vb: "0 0 12 2",
    p: `<path d="M1 0.00887299C1 0.00887299 0 0.00887299 0 1.00887C0 2.00887 1 2.00887 1 2.00887H11C11 2.00887 12 2.00887 12 1.00887C12 0.00887299 11 0.00887299 11 0.00887299H1Z" />`
  },
  "ica-zoom": {
    vb: "0 0 14 14",
    p: `<path d="M13.5354 12.4827L10.5673 9.51328C11.4572 8.35357 11.8727 6.89877 11.7295 5.44399C11.5862 3.98921 10.895 2.64338 9.79595 1.67952C8.69692 0.715658 7.2724 0.205935 5.81136 0.253751C4.35033 0.301568 2.96218 0.903343 1.92852 1.937C0.894863 2.97066 0.293088 4.35881 0.245271 5.81984C0.197455 7.28088 0.707178 8.7054 1.67104 9.80443C2.6349 10.9035 3.98073 11.5947 5.43551 11.738C6.89029 11.8812 8.34509 11.4657 9.5048 10.5758L12.4754 13.547C12.5452 13.6168 12.628 13.6721 12.7192 13.7099C12.8103 13.7476 12.908 13.7671 13.0067 13.7671C13.1053 13.7671 13.203 13.7476 13.2942 13.7099C13.3853 13.6721 13.4682 13.6168 13.5379 13.547C13.6077 13.4773 13.663 13.3944 13.7008 13.3033C13.7385 13.2121 13.758 13.1144 13.758 13.0158C13.758 12.9171 13.7385 12.8194 13.7008 12.7283C13.663 12.6371 13.6077 12.5543 13.5379 12.4845L13.5354 12.4827ZM1.7548 6.01328C1.7548 5.17271 2.00406 4.35101 2.47105 3.6521C2.93805 2.95319 3.60181 2.40846 4.37839 2.08679C5.15498 1.76512 6.00951 1.68095 6.83393 1.84494C7.65835 2.00893 8.41563 2.4137 9.01 3.00807C9.60437 3.60245 10.0091 4.35972 10.1731 5.18414C10.3371 6.00856 10.253 6.8631 9.93128 7.63968C9.60961 8.41627 9.06488 9.08003 8.36597 9.54702C7.66706 10.014 6.84537 10.2633 6.0048 10.2633C4.87798 10.2621 3.79765 9.81398 3.00087 9.0172C2.20409 8.22042 1.75596 7.14009 1.7548 6.01328Z" />`
  },
  "ica-caret-up": {
    vb: "0 0 10 6",
    p: `<path d="M9.2521 5.33928C9.19853 5.39304 9.13488 5.43569 9.06479 5.46479C8.9947 5.49389 8.91956 5.50887 8.84367 5.50887C8.76779 5.50887 8.69264 5.49389 8.62256 5.46479C8.55247 5.43569 8.48882 5.39304 8.43525 5.33928L5.00018 1.90421L1.56414 5.33928C1.45582 5.4476 1.30891 5.50846 1.15572 5.50846C1.00253 5.50846 0.85562 5.4476 0.747299 5.33928C0.638979 5.23096 0.578125 5.08405 0.578125 4.93086C0.578125 4.77767 0.638979 4.63076 0.747299 4.52244L4.59127 0.678462C4.64484 0.624708 4.7085 0.582057 4.77858 0.552955C4.84867 0.523853 4.92381 0.508873 4.9997 0.508873C5.07559 0.508873 5.15073 0.523853 5.22081 0.552955C5.2909 0.582057 5.35455 0.624708 5.40812 0.678462L9.2521 4.52244C9.30585 4.57601 9.3485 4.63966 9.3776 4.70974C9.4067 4.77983 9.42169 4.85497 9.42169 4.93086C9.42169 5.00675 9.4067 5.08189 9.3776 5.15198C9.3485 5.22206 9.30585 5.28572 9.2521 5.33928Z" />`
  },
  "ica-caret-down": {
    vb: "0 0 10 6",
    p: `<path d="M9.25198 1.48649L5.40806 5.33041C5.35449 5.38417 5.29084 5.42682 5.22075 5.45592C5.15067 5.48502 5.07553 5.5 4.99964 5.5C4.92375 5.5 4.84861 5.48502 4.77853 5.45592C4.70844 5.42682 4.64479 5.38417 4.59122 5.33041L0.747297 1.48649C0.638978 1.37817 0.578125 1.23126 0.578125 1.07807C0.578125 0.924883 0.638978 0.777971 0.747297 0.669652C0.855616 0.561333 1.00253 0.500481 1.15571 0.500481C1.3089 0.500481 1.45581 0.561333 1.56413 0.669652L5.00012 4.10564L8.43611 0.669172C8.54443 0.560853 8.69134 0.5 8.84453 0.5C8.99771 0.5 9.14462 0.560853 9.25294 0.669172C9.36126 0.777491 9.42212 0.924403 9.42212 1.07759C9.42212 1.23078 9.36126 1.37769 9.25294 1.48601L9.25198 1.48649Z" />`
  },
  "ica-paste": {
    vb: "0 0 16 17",
    p: `<path d="M12.5 2.75H10.3419C10.0392 2.43393 9.67567 2.1824 9.2732 2.01056C8.87072 1.83872 8.43762 1.75014 8 1.75014C7.56238 1.75014 7.12928 1.83872 6.72681 2.01056C6.32433 2.1824 5.9608 2.43393 5.65812 2.75H3.5C3.16848 2.75 2.85054 2.88169 2.61612 3.11612C2.3817 3.35054 2.25 3.66848 2.25 4V14.5C2.25 14.8315 2.3817 15.1495 2.61612 15.3839C2.85054 15.6183 3.16848 15.75 3.5 15.75H12.5C12.8315 15.75 13.1495 15.6183 13.3839 15.3839C13.6183 15.1495 13.75 14.8315 13.75 14.5V4C13.75 3.66848 13.6183 3.35054 13.3839 3.11612C13.1495 2.88169 12.8315 2.75 12.5 2.75ZM9.73188 4.75H6.26813C6.3285 4.33375 6.53678 3.95317 6.85482 3.67794C7.17286 3.4027 7.5794 3.25121 8 3.25121C8.4206 3.25121 8.82714 3.4027 9.14518 3.67794C9.46322 3.95317 9.6715 4.33375 9.73188 4.75ZM12.25 14.25H3.75V4.25H4.83813C4.77978 4.49574 4.75021 4.74743 4.75 5V5.5C4.75 5.69891 4.82902 5.88968 4.96967 6.03033C5.11032 6.17098 5.30109 6.25 5.5 6.25H10.5C10.6989 6.25 10.8897 6.17098 11.0303 6.03033C11.171 5.88968 11.25 5.69891 11.25 5.5V5C11.2498 4.74743 11.2202 4.49574 11.1619 4.25H12.25V14.25Z" />`
  },
  "ica-notification": {
    vb: "0 0 16 16",
    p: `<path d="M14.0809 10.3699C13.5384 9.43674 13.2503 8.09737 13.2503 6.49924C13.2503 5.10686 12.6971 3.7715 11.7126 2.78693C10.728 1.80237 9.39265 1.24924 8.00026 1.24924C6.60788 1.24924 5.27252 1.80237 4.28795 2.78693C3.30338 3.7715 2.75026 5.10686 2.75026 6.49924C2.75026 8.09799 2.46339 9.43674 1.92089 10.3699C1.81019 10.5602 1.75151 10.7763 1.75074 10.9965C1.74997 11.2166 1.80714 11.4332 1.91651 11.6242C2.02519 11.8154 2.18293 11.9742 2.37344 12.084C2.56396 12.1939 2.78034 12.2509 3.00026 12.2492H5.26151C5.32353 12.9328 5.63889 13.5684 6.14565 14.0313C6.65241 14.4941 7.31393 14.7508 8.00026 14.7508C8.68659 14.7508 9.34811 14.4941 9.85487 14.0313C10.3616 13.5684 10.677 12.9328 10.739 12.2492H13.0003C13.2199 12.2506 13.4359 12.1934 13.626 12.0836C13.8162 11.9737 13.9736 11.8152 14.0821 11.6242C14.192 11.4334 14.2497 11.2171 14.2495 10.9969C14.2492 10.7767 14.1911 10.5605 14.0809 10.3699ZM8.00026 13.2492C7.7121 13.2493 7.43277 13.1498 7.20954 12.9676C6.98631 12.7853 6.83289 12.5316 6.77526 12.2492H9.22526C9.16763 12.5316 9.01422 12.7853 8.79099 12.9676C8.56776 13.1498 8.28842 13.2493 8.00026 13.2492ZM3.41651 10.7492C3.96964 9.62424 4.25026 8.19549 4.25026 6.49924C4.25026 5.50468 4.64535 4.55086 5.34861 3.84759C6.05187 3.14433 7.0057 2.74924 8.00026 2.74924C8.99482 2.74924 9.94865 3.14433 10.6519 3.84759C11.3552 4.55086 11.7503 5.50468 11.7503 6.49924C11.7503 8.19487 12.0303 9.62424 12.5834 10.7492H3.41651Z" />`
  },
  "ica-caret-right": {
    vb: "0 0 6 10",
    p: `<path d="M0.66959 9.26106C0.615835 9.2075 0.573185 9.14384 0.544083 9.07376C0.514981 9.00367 0.5 8.92853 0.5 8.85264C0.5 8.77675 0.514981 8.70161 0.544083 8.63153C0.573185 8.56144 0.615835 8.49779 0.66959 8.44422L4.10466 5.00915L0.66959 1.57311C0.561269 1.46479 0.500416 1.31788 0.500416 1.16469C0.500416 1.0115 0.561269 0.864588 0.66959 0.756267C0.77791 0.647947 0.924824 0.587093 1.07801 0.587093C1.2312 0.587093 1.37811 0.647947 1.48643 0.756267L5.33041 4.60024C5.38416 4.65381 5.42682 4.71746 5.45592 4.78755C5.48502 4.85764 5.5 4.93278 5.5 5.00867C5.5 5.08455 5.48502 5.1597 5.45592 5.22978C5.42682 5.29987 5.38416 5.36352 5.33041 5.41709L1.48643 9.26106C1.43287 9.31482 1.36921 9.35747 1.29913 9.38657C1.22904 9.41567 1.1539 9.43065 1.07801 9.43065C1.00212 9.43065 0.926982 9.41567 0.856896 9.38657C0.78681 9.35747 0.723157 9.31482 0.66959 9.26106Z" />`
  },
  "ica-caret-alt-to-left": {
    vb: "0 0 8 10",
    p: `<path d="M7.37933 8.82615C7.41759 8.86441 7.44794 8.90982 7.46864 8.95981C7.48934 9.00979 7.5 9.06336 7.5 9.11746C7.5 9.17157 7.48934 9.22514 7.46864 9.27512C7.44794 9.32511 7.41759 9.37052 7.37933 9.40878C7.34108 9.44703 7.29566 9.47738 7.24568 9.49808C7.19569 9.51879 7.14212 9.52944 7.08802 9.52944C7.03392 9.52944 6.98035 9.51879 6.93036 9.49808C6.88038 9.47738 6.83496 9.44703 6.79671 9.40878L2.67919 5.29127C2.64091 5.25303 2.61054 5.20761 2.58982 5.15763C2.5691 5.10764 2.55843 5.05406 2.55843 4.99995C2.55843 4.94584 2.5691 4.89226 2.58982 4.84228C2.61054 4.79229 2.64091 4.74688 2.67919 4.70864L6.79671 0.591125C6.87397 0.513864 6.97876 0.470459 7.08802 0.470459C7.19728 0.470459 7.30207 0.513864 7.37933 0.591125C7.45659 0.668386 7.5 0.773175 7.5 0.882439C7.5 0.991703 7.45659 1.09649 7.37933 1.17375L3.55262 4.99995L7.37933 8.82615ZM0.911751 0.470688C0.802548 0.470688 0.697818 0.514069 0.620599 0.591287C0.543381 0.668505 0.5 0.773236 0.5 0.882439V9.11746C0.5 9.22667 0.543381 9.3314 0.620599 9.40862C0.697818 9.48584 0.802548 9.52922 0.911751 9.52922C1.02095 9.52922 1.12568 9.48584 1.2029 9.40862C1.28012 9.3314 1.3235 9.22667 1.3235 9.11746V0.882439C1.3235 0.773236 1.28012 0.668505 1.2029 0.591287C1.12568 0.514069 1.02095 0.470688 0.911751 0.470688Z"/>`
  },
  "ica-caret-alt-to-right": {
    vb: "0 0 8 10",
    p: `<path d="M5.32081 4.70864C5.35909 4.74688 5.38946 4.79229 5.41018 4.84228C5.4309 4.89226 5.44157 4.94584 5.44157 4.99995C5.44157 5.05406 5.4309 5.10764 5.41018 5.15763C5.38946 5.20761 5.35909 5.25303 5.32081 5.29127L1.20329 9.40878C1.12603 9.48604 1.02124 9.52944 0.91198 9.52944C0.802716 9.52944 0.697927 9.48604 0.620666 9.40878C0.543405 9.33152 0.5 9.22673 0.5 9.11746C0.5 9.0082 0.543405 8.90341 0.620666 8.82615L4.44738 4.99995L0.620666 1.17375C0.543405 1.09649 0.5 0.991703 0.5 0.882439C0.5 0.773175 0.543405 0.668386 0.620666 0.591125C0.697927 0.513864 0.802716 0.470459 0.91198 0.470459C1.02124 0.470459 1.12603 0.513864 1.20329 0.591125L5.32081 4.70864ZM7.08825 0.470688C6.97905 0.470688 6.87431 0.514069 6.7971 0.591287C6.71988 0.668505 6.6765 0.773236 6.6765 0.882439V9.11746C6.6765 9.22667 6.71988 9.3314 6.7971 9.40862C6.87431 9.48584 6.97905 9.52922 7.08825 9.52922C7.19745 9.52922 7.30218 9.48584 7.3794 9.40862C7.45662 9.3314 7.5 9.22667 7.5 9.11746V0.882439C7.5 0.773236 7.45662 0.668505 7.3794 0.591287C7.30218 0.514069 7.19745 0.470688 7.08825 0.470688Z" />`
  },
  "ica-sort-asc-small": {
    vb: "0 0 8 10",
    p: `<path d="M7.83198 4.62556C7.77891 4.68149 7.71585 4.72586 7.64641 4.75614C7.57697 4.78641 7.50252 4.802 7.42734 4.802C7.35215 4.802 7.27771 4.78641 7.20827 4.75614C7.13883 4.72586 7.07577 4.68149 7.0227 4.62556L4.57153 2.05157V9.40012C4.57153 9.55922 4.51134 9.7118 4.40421 9.8243C4.29708 9.9368 4.15178 10 4.00027 10C3.84876 10 3.70346 9.9368 3.59633 9.8243C3.4892 9.7118 3.42901 9.55922 3.42901 9.40012V2.05157L0.976889 4.62556C0.869572 4.73826 0.724018 4.80157 0.572249 4.80157C0.420479 4.80157 0.274925 4.73826 0.167608 4.62556C0.0602904 4.51287 0 4.36002 0 4.20064C0 4.04127 0.0602904 3.88842 0.167608 3.77573L3.59515 0.176438C3.64822 0.120513 3.71129 0.07614 3.78072 0.0458628C3.85016 0.0155855 3.92461 0 3.99979 0C4.07498 0 4.14943 0.0155855 4.21886 0.0458628C4.2883 0.07614 4.35136 0.120513 4.40443 0.176438L7.83198 3.77573C7.88524 3.83146 7.92749 3.89768 7.95633 3.9706C7.98516 4.04352 8 4.12169 8 4.20064C8 4.2796 7.98516 4.35777 7.95633 4.43069C7.92749 4.50361 7.88524 4.56983 7.83198 4.62556Z" />`
  },
  "ica-sort-desc-small": {
    vb: "0 0 8 10",
    p: `<path d="M7.83198 5.37444C7.77891 5.31851 7.71585 5.27414 7.64641 5.24386C7.57697 5.21359 7.50252 5.198 7.42734 5.198C7.35215 5.198 7.27771 5.21359 7.20827 5.24386C7.13883 5.27414 7.07577 5.31851 7.0227 5.37444L4.57153 7.94843V0.599882C4.57153 0.440784 4.51134 0.288201 4.40421 0.175702C4.29708 0.0632019 4.15178 0 4.00027 0C3.84876 0 3.70346 0.0632019 3.59633 0.175702C3.4892 0.288201 3.42901 0.440784 3.42901 0.599882V7.94843L0.976889 5.37444C0.869572 5.26174 0.724018 5.19843 0.572249 5.19843C0.420479 5.19843 0.274925 5.26174 0.167608 5.37444C0.0602904 5.48713 0 5.63998 0 5.79936C0 5.95873 0.0602904 6.11158 0.167608 6.22427L3.59515 9.82356C3.64822 9.87949 3.71129 9.92386 3.78072 9.95414C3.85016 9.98441 3.92461 10 3.99979 10C4.07498 10 4.14943 9.98441 4.21886 9.95414C4.2883 9.92386 4.35136 9.87949 4.40443 9.82356L7.83198 6.22427C7.88524 6.16854 7.92749 6.10232 7.95633 6.0294C7.98516 5.95648 8 5.87831 8 5.79936C8 5.7204 7.98516 5.64223 7.95633 5.56931C7.92749 5.49639 7.88524 5.43017 7.83198 5.37444Z" />`
  },
  "ica-filter": {
    vb: "0 0 12 12",
    p: `<path d="M1.96875 4.33469H3.38672C3.46245 4.62026 3.63446 4.87337 3.87564 5.05412C4.11682 5.23487 4.41344 5.33298 4.71875 5.33298C5.02406 5.33298 5.32068 5.23487 5.56186 5.05412C5.80304 4.87337 5.97505 4.62026 6.05078 4.33469H9.53125C9.62242 4.33469 9.70985 4.29972 9.77432 4.23748C9.83878 4.17524 9.875 4.09082 9.875 4.0028C9.875 3.91477 9.83878 3.83035 9.77432 3.76811C9.70985 3.70587 9.62242 3.6709 9.53125 3.6709H6.05078C5.97505 3.38533 5.80304 3.13222 5.56186 2.95147C5.32068 2.77072 5.02406 2.67261 4.71875 2.67261C4.41344 2.67261 4.11682 2.77072 3.87564 2.95147C3.63446 3.13222 3.46245 3.38533 3.38672 3.6709H1.96875C1.87758 3.6709 1.79015 3.70587 1.72568 3.76811C1.66122 3.83035 1.625 3.91477 1.625 4.0028C1.625 4.09082 1.66122 4.17524 1.72568 4.23748C1.79015 4.29972 1.87758 4.33469 1.96875 4.33469ZM4.71875 3.339C4.85472 3.339 4.98765 3.37793 5.1007 3.45087C5.21376 3.52381 5.30188 3.62748 5.35392 3.74877C5.40595 3.87007 5.41957 4.00353 5.39304 4.13229C5.36651 4.26106 5.30103 4.37933 5.20489 4.47217C5.10874 4.565 4.98624 4.62822 4.85287 4.65383C4.71951 4.67945 4.58128 4.6663 4.45566 4.61606C4.33003 4.56582 4.22266 4.48074 4.14711 4.37158C4.07157 4.26242 4.03125 4.13408 4.03125 4.0028C4.03125 3.82675 4.10368 3.65791 4.23261 3.53342C4.36155 3.40894 4.53641 3.339 4.71875 3.339ZM9.53125 7.65365H8.80078C8.72505 7.36808 8.55304 7.11497 8.31186 6.93422C8.07068 6.75347 7.77406 6.65536 7.46875 6.65536C7.16344 6.65536 6.86682 6.75347 6.62564 6.93422C6.38446 7.11497 6.21245 7.36808 6.13672 7.65365H1.96875C1.87758 7.65365 1.79015 7.68862 1.72568 7.75086C1.66122 7.8131 1.625 7.89752 1.625 7.98555C1.625 8.07357 1.66122 8.15799 1.72568 8.22023C1.79015 8.28248 1.87758 8.31744 1.96875 8.31744H6.13672C6.21245 8.60301 6.38446 8.85612 6.62564 9.03688C6.86682 9.21763 7.16344 9.31574 7.46875 9.31574C7.77406 9.31574 8.07068 9.21763 8.31186 9.03688C8.55304 8.85612 8.72505 8.60301 8.80078 8.31744H9.53125C9.62242 8.31744 9.70985 8.28248 9.77432 8.22023C9.83878 8.15799 9.875 8.07357 9.875 7.98555C9.875 7.89752 9.83878 7.8131 9.77432 7.75086C9.70985 7.68862 9.62242 7.65365 9.53125 7.65365ZM7.46875 8.64934C7.33278 8.64934 7.19985 8.61041 7.0868 8.53747C6.97374 8.46453 6.88562 8.36086 6.83358 8.23957C6.78155 8.11828 6.76793 7.98481 6.79446 7.85605C6.82099 7.72729 6.88647 7.60901 6.98261 7.51618C7.07876 7.42334 7.20126 7.36012 7.33463 7.33451C7.46799 7.3089 7.60622 7.32204 7.73185 7.37228C7.85747 7.42253 7.96484 7.5076 8.04039 7.61677C8.11593 7.72593 8.15625 7.85426 8.15625 7.98555C8.15625 8.1616 8.08382 8.33044 7.95489 8.45492C7.82595 8.57941 7.65109 8.64934 7.46875 8.64934Z" />`
  },
  "ica-filter-clear": {
    vb: "0 0 17 17",
    p: `<path d="M3 5.99123H5.0625C5.17265 6.42143 5.42285 6.80275 5.77365 7.07505C6.12446 7.34735 6.55591 7.49515 7 7.49515C7.44409 7.49515 7.87554 7.34735 8.22635 7.07505C8.57715 6.80275 8.82735 6.42143 8.9375 5.99123H14C14.1326 5.99123 14.2598 5.93855 14.3536 5.84478C14.4473 5.75101 14.5 5.62383 14.5 5.49123C14.5 5.35862 14.4473 5.23144 14.3536 5.13767C14.2598 5.0439 14.1326 4.99123 14 4.99123H8.9375C8.82735 4.56102 8.57715 4.17971 8.22635 3.90741C7.87554 3.63511 7.44409 3.4873 7 3.4873C6.55591 3.4873 6.12446 3.63511 5.77365 3.90741C5.42285 4.17971 5.17265 4.56102 5.0625 4.99123H3C2.86739 4.99123 2.74021 5.0439 2.64645 5.13767C2.55268 5.23144 2.5 5.35862 2.5 5.49123C2.5 5.62383 2.55268 5.75101 2.64645 5.84478C2.74021 5.93855 2.86739 5.99123 3 5.99123ZM7 4.49123C7.19778 4.49123 7.39112 4.54988 7.55557 4.65976C7.72002 4.76964 7.84819 4.92582 7.92388 5.10854C7.99957 5.29127 8.01937 5.49234 7.98079 5.68632C7.9422 5.8803 7.84696 6.05848 7.70711 6.19833C7.56725 6.33819 7.38907 6.43343 7.19509 6.47201C7.00111 6.5106 6.80004 6.49079 6.61732 6.41511C6.43459 6.33942 6.27841 6.21125 6.16853 6.0468C6.05865 5.88235 6 5.68901 6 5.49123C6 5.22601 6.10536 4.97166 6.29289 4.78412C6.48043 4.59658 6.73478 4.49123 7 4.49123ZM14 10.9912H12.9375C12.8273 10.561 12.5771 10.1797 12.2263 9.90741C11.8755 9.63511 11.4441 9.4873 11 9.4873C10.5559 9.4873 10.1245 9.63511 9.77365 9.90741C9.42285 10.1797 9.17265 10.561 9.0625 10.9912H3C2.86739 10.9912 2.74021 11.0439 2.64645 11.1377C2.55268 11.2314 2.5 11.3586 2.5 11.4912C2.5 11.6238 2.55268 11.751 2.64645 11.8448C2.74021 11.9385 2.86739 11.9912 3 11.9912H9.0625C9.17265 12.4214 9.42285 12.8027 9.77365 13.075C10.1245 13.3473 10.5559 13.4951 11 13.4951C11.4441 13.4951 11.8755 13.3473 12.2263 13.075C12.5771 12.8027 12.8273 12.4214 12.9375 11.9912H14C14.1326 11.9912 14.2598 11.9385 14.3536 11.8448C14.4473 11.751 14.5 11.6238 14.5 11.4912C14.5 11.3586 14.4473 11.2314 14.3536 11.1377C14.2598 11.0439 14.1326 10.9912 14 10.9912ZM11 12.4912C10.8022 12.4912 10.6089 12.4326 10.4444 12.3227C10.28 12.2128 10.1518 12.0566 10.0761 11.8739C10.0004 11.6912 9.98063 11.4901 10.0192 11.2961C10.0578 11.1022 10.153 10.924 10.2929 10.7841C10.4327 10.6443 10.6109 10.549 10.8049 10.5104C10.9989 10.4719 11.2 10.4917 11.3827 10.5673C11.5654 10.643 11.7216 10.7712 11.8315 10.9357C11.9414 11.1001 12 11.2934 12 11.4912C12 11.7564 11.8946 12.0108 11.7071 12.1983C11.5196 12.3859 11.2652 12.4912 11 12.4912Z" />`
  },
  "ica-magnifier": {
    vb: "0 0 17 17",
    p: `<path d="M13.7775 12.4737L10.8093 9.50431C11.6993 8.3446 12.1148 6.8898 11.9715 5.43502C11.8283 3.98024 11.137 2.63441 10.038 1.67055C8.93895 0.70669 7.51443 0.196967 6.0534 0.244783C4.59236 0.292599 3.20422 0.894374 2.17056 1.92803C1.1369 2.9617 0.535123 4.34984 0.487306 5.81087C0.43949 7.27191 0.949213 8.69643 1.91308 9.79546C2.87694 10.8945 4.22276 11.5857 5.67755 11.729C7.13233 11.8722 8.58713 11.4567 9.74683 10.5668L12.7175 13.5381C12.7872 13.6078 12.87 13.6632 12.9612 13.7009C13.0523 13.7387 13.15 13.7581 13.2487 13.7581C13.3474 13.7581 13.4451 13.7387 13.5362 13.7009C13.6274 13.6632 13.7102 13.6078 13.78 13.5381C13.8497 13.4683 13.9051 13.3855 13.9428 13.2943C13.9806 13.2032 14 13.1055 14 13.0068C14 12.9081 13.9806 12.8105 13.9428 12.7193C13.9051 12.6281 13.8497 12.5453 13.78 12.4756L13.7775 12.4737ZM1.99683 6.00431C1.99683 5.16374 2.24609 4.34204 2.71309 3.64314C3.18008 2.94423 3.84384 2.39949 4.62043 2.07782C5.39701 1.75615 6.25155 1.67198 7.07597 1.83597C7.90039 1.99996 8.65766 2.40473 9.25204 2.99911C9.84641 3.59348 10.2512 4.35076 10.4152 5.17518C10.5792 5.99959 10.495 6.85413 10.1733 7.63071C9.85165 8.4073 9.30691 9.07106 8.60801 9.53805C7.9091 10.0051 7.0874 10.2543 6.24683 10.2543C5.12002 10.2532 4.03969 9.80501 3.24291 9.00823C2.44613 8.21145 1.99799 7.13112 1.99683 6.00431Z" />`
  },
  "ica-handle-resize": {
    vb: "0 0 24 24",
    p: `<path d="M18.3189 21.7598C18.0264 22.0523 17.5521 22.0523 17.2595 21.7598C16.967 21.4672 16.967 20.9929 17.2595 20.7004L20.7002 17.2598C20.9927 16.9672 21.467 16.9672 21.7595 17.2598C22.0521 17.5523 22.0521 18.0266 21.7595 18.3192L18.3189 21.7598ZM20.9955 13.0598C21.288 12.7672 21.288 12.2929 20.9955 12.0004C20.7029 11.7079 20.2286 11.7079 19.9361 12.0004L12.0001 19.9363C11.7076 20.2289 11.7076 20.7032 12.0001 20.9957C12.2927 21.2883 12.767 21.2883 13.0595 20.9957L20.9955 13.0598Z"/>`
  },
  "ica-printer": {
    vb: "0 0 14 12",
    p: `<path d="M12.4169 2.5H11.5V0.5C11.5 0.367392 11.4473 0.240215 11.3536 0.146447C11.2598 0.0526785 11.1326 0 11 0H3C2.86739 0 2.74021 0.0526785 2.64645 0.146447C2.55268 0.240215 2.5 0.367392 2.5 0.5V2.5H1.58313C0.71 2.5 0 3.17313 0 4V9C0 9.13261 0.0526784 9.25979 0.146447 9.35355C0.240215 9.44732 0.367392 9.5 0.5 9.5H2.5V11.5C2.5 11.6326 2.55268 11.7598 2.64645 11.8536C2.74021 11.9473 2.86739 12 3 12H11C11.1326 12 11.2598 11.9473 11.3536 11.8536C11.4473 11.7598 11.5 11.6326 11.5 11.5V9.5H13.5C13.6326 9.5 13.7598 9.44732 13.8536 9.35355C13.9473 9.25979 14 9.13261 14 9V4C14 3.17313 13.29 2.5 12.4169 2.5ZM3.5 1H10.5V2.5H3.5V1ZM10.5 11H3.5V8H10.5V11ZM13 8.5H11.5V7.5C11.5 7.36739 11.4473 7.24021 11.3536 7.14645C11.2598 7.05268 11.1326 7 11 7H3C2.86739 7 2.74021 7.05268 2.64645 7.14645C2.55268 7.24021 2.5 7.36739 2.5 7.5V8.5H1V4C1 3.72438 1.26188 3.5 1.58313 3.5H12.4169C12.7381 3.5 13 3.72438 13 4V8.5ZM11.5 5.25C11.5 5.39834 11.456 5.54334 11.3736 5.66668C11.2912 5.79001 11.1741 5.88614 11.037 5.94291C10.9 5.99968 10.7492 6.01453 10.6037 5.98559C10.4582 5.95665 10.3246 5.88522 10.2197 5.78033C10.1148 5.67544 10.0434 5.5418 10.0144 5.39632C9.98547 5.25083 10.0003 5.10003 10.0571 4.96299C10.1139 4.82594 10.21 4.70881 10.3333 4.6264C10.4567 4.54399 10.6017 4.5 10.75 4.5C10.9489 4.5 11.1397 4.57902 11.2803 4.71967C11.421 4.86032 11.5 5.05109 11.5 5.25Z"/>`
  },
  "ica-inbox": {
    vb: "0 0 16 16",
    p: `<path d="M4 1H12L15 9V14C15 14.5531 14.5531 15 14 15H2C1.44687 15 1 14.5531 1 14V9L4 1ZM11.3062 2H4.69373L2.06873 9H4.99998L5.99998 11H9.99998L11 9H13.9312L11.3062 2Z"/>`
  },
  "ica-draft": {
    vb: "0 0 16 16",
    p: `<path d="M13.3538 5.15513L9.85375 1.65513C9.80728 1.60871 9.75212 1.57191 9.69143 1.54681C9.63073 1.52172 9.56568 1.50883 9.5 1.50888H3.5C3.23478 1.50888 2.98043 1.61424 2.79289 1.80177C2.60536 1.98931 2.5 2.24366 2.5 2.50888V13.5089C2.5 13.7741 2.60536 14.0285 2.79289 14.216C2.98043 14.4035 3.23478 14.5089 3.5 14.5089H12.5C12.7652 14.5089 13.0196 14.4035 13.2071 14.216C13.3946 14.0285 13.5 13.7741 13.5 13.5089V5.50888C13.5001 5.4432 13.4872 5.37815 13.4621 5.31746C13.437 5.25676 13.4002 5.2016 13.3538 5.15513ZM10 3.21576L11.7931 5.00888H10V3.21576ZM12.5 13.5089H3.5V2.50888H9V5.50888C9 5.64149 9.05268 5.76867 9.14645 5.86243C9.24021 5.9562 9.36739 6.00888 9.5 6.00888H12.5V13.5089Z"/>`
  },
  "ica-sent": {
    vb: "0 0 16 16",
    p: `<path d="M14.2074 1.80138C14.0817 1.67571 13.9247 1.58584 13.7527 1.54102C13.5807 1.4962 13.3998 1.49805 13.2287 1.54638H13.2193L1.22307 5.18638C1.02832 5.24251 0.85522 5.35649 0.726711 5.51322C0.598201 5.66995 0.52035 5.86203 0.503473 6.064C0.486597 6.26598 0.531492 6.46831 0.632209 6.6442C0.732927 6.82008 0.884711 6.96121 1.06745 7.04888L6.37495 9.63388L8.9562 14.9383C9.03648 15.1096 9.16413 15.2544 9.32405 15.3555C9.48397 15.4566 9.66949 15.5098 9.8587 15.5089C9.88745 15.5089 9.9162 15.5076 9.94495 15.5051C10.1468 15.4888 10.3388 15.4111 10.4952 15.2825C10.6516 15.1539 10.7649 14.9806 10.8199 14.7858L14.4574 2.7895C14.4574 2.78638 14.4574 2.78325 14.4574 2.78013C14.5064 2.60948 14.5091 2.42888 14.4651 2.25687C14.4212 2.08486 14.3322 1.92764 14.2074 1.80138ZM9.86432 14.4995L9.8612 14.5083V14.5039L7.35745 9.36013L10.3574 6.36013C10.4473 6.2656 10.4966 6.13972 10.4949 6.00934C10.4932 5.87896 10.4407 5.75439 10.3485 5.66219C10.2563 5.56999 10.1317 5.51745 10.0014 5.51578C9.87098 5.51411 9.7451 5.56344 9.65057 5.65325L6.65057 8.65325L1.50495 6.1495H1.50057H1.50932L13.4999 2.50888L9.86432 14.4995Z"/>`
  },
  "ica-trash": {
    vb: "0 0 16 16",
    p: `<path d="M13.5 3.00888H11V2.50888C11 2.11106 10.842 1.72953 10.5607 1.44822C10.2794 1.16692 9.89782 1.00888 9.5 1.00888H6.5C6.10218 1.00888 5.72064 1.16692 5.43934 1.44822C5.15804 1.72953 5 2.11106 5 2.50888V3.00888H2.5C2.36739 3.00888 2.24021 3.06156 2.14645 3.15533C2.05268 3.2491 2 3.37627 2 3.50888C2 3.64149 2.05268 3.76867 2.14645 3.86243C2.24021 3.9562 2.36739 4.00888 2.5 4.00888H3V13.0089C3 13.2741 3.10536 13.5285 3.29289 13.716C3.48043 13.9035 3.73478 14.0089 4 14.0089H12C12.2652 14.0089 12.5196 13.9035 12.7071 13.716C12.8946 13.5285 13 13.2741 13 13.0089V4.00888H13.5C13.6326 4.00888 13.7598 3.9562 13.8536 3.86243C13.9473 3.76867 14 3.64149 14 3.50888C14 3.37627 13.9473 3.2491 13.8536 3.15533C13.7598 3.06156 13.6326 3.00888 13.5 3.00888ZM6 2.50888C6 2.37627 6.05268 2.2491 6.14645 2.15533C6.24021 2.06156 6.36739 2.00888 6.5 2.00888H9.5C9.63261 2.00888 9.75979 2.06156 9.85355 2.15533C9.94732 2.2491 10 2.37627 10 2.50888V3.00888H6V2.50888ZM12 13.0089H4V4.00888H12V13.0089ZM7 6.50888V10.5089C7 10.6415 6.94732 10.7687 6.85355 10.8624C6.75979 10.9562 6.63261 11.0089 6.5 11.0089C6.36739 11.0089 6.24021 10.9562 6.14645 10.8624C6.05268 10.7687 6 10.6415 6 10.5089V6.50888C6 6.37627 6.05268 6.2491 6.14645 6.15533C6.24021 6.06156 6.36739 6.00888 6.5 6.00888C6.63261 6.00888 6.75979 6.06156 6.85355 6.15533C6.94732 6.2491 7 6.37627 7 6.50888ZM10 6.50888V10.5089C10 10.6415 9.94732 10.7687 9.85355 10.8624C9.75979 10.9562 9.63261 11.0089 9.5 11.0089C9.36739 11.0089 9.24021 10.9562 9.14645 10.8624C9.05268 10.7687 9 10.6415 9 10.5089V6.50888C9 6.37627 9.05268 6.2491 9.14645 6.15533C9.24021 6.06156 9.36739 6.00888 9.5 6.00888C9.63261 6.00888 9.75979 6.06156 9.85355 6.15533C9.94732 6.2491 10 6.37627 10 6.50888Z"/>`
  },
  "ica-reply-all": {
    vb: "0 0 16 16",
    p: `<path d="M5.35366 9.15513C5.44748 9.24895 5.50018 9.3762 5.50018 9.50888C5.50018 9.64157 5.44748 9.76881 5.35366 9.86263C5.25984 9.95645 5.13259 10.0092 4.99991 10.0092C4.86722 10.0092 4.73998 9.95645 4.64615 9.86263L1.64615 6.86263C1.59967 6.8162 1.56279 6.76105 1.53763 6.70035C1.51246 6.63966 1.49951 6.57459 1.49951 6.50888C1.49951 6.44318 1.51246 6.37811 1.53763 6.31741C1.56279 6.25671 1.59967 6.20157 1.64615 6.15513L4.64615 3.15513C4.73998 3.06131 4.86722 3.00861 4.99991 3.00861C5.13259 3.00861 5.25984 3.06131 5.35366 3.15513C5.44748 3.24895 5.50018 3.3762 5.50018 3.50888C5.50018 3.64157 5.44748 3.76881 5.35366 3.86263L2.70678 6.50888L5.35366 9.15513ZM7.99991 6.00888H6.20678L8.35366 3.86263C8.44748 3.76881 8.50018 3.64157 8.50018 3.50888C8.50018 3.3762 8.44748 3.24895 8.35366 3.15513C8.25984 3.06131 8.13259 3.00861 7.99991 3.00861C7.86722 3.00861 7.73997 3.06131 7.64615 3.15513L4.64615 6.15513C4.59967 6.20157 4.56279 6.25671 4.53763 6.31741C4.51246 6.37811 4.49951 6.44318 4.49951 6.50888C4.49951 6.57459 4.51246 6.63966 4.53763 6.70035C4.56279 6.76105 4.59967 6.8162 4.64615 6.86263L7.64615 9.86263C7.69261 9.90909 7.74776 9.94594 7.80846 9.97108C7.86915 9.99622 7.93421 10.0092 7.99991 10.0092C8.0656 10.0092 8.13066 9.99622 8.19135 9.97108C8.25205 9.94594 8.3072 9.90909 8.35366 9.86263C8.40011 9.81618 8.43696 9.76103 8.4621 9.70033C8.48724 9.63964 8.50018 9.57458 8.50018 9.50888C8.50018 9.44319 8.48724 9.37813 8.4621 9.31744C8.43696 9.25674 8.40011 9.20159 8.35366 9.15513L6.20678 7.00888H7.99991C9.45809 7.01054 10.8561 7.59053 11.8872 8.62162C12.9183 9.65272 13.4983 11.0507 13.4999 12.5089C13.4999 12.6415 13.5526 12.7687 13.6464 12.8624C13.7401 12.9562 13.8673 13.0089 13.9999 13.0089C14.1325 13.0089 14.2597 12.9562 14.3535 12.8624C14.4472 12.7687 14.4999 12.6415 14.4999 12.5089C14.4981 10.7855 13.8127 9.13329 12.5941 7.9147C11.3755 6.69611 9.72325 6.0107 7.99991 6.00888Z"/>`
  },
  "ica-pencil": {
    vb: "0 0 16 16",
    p: `<path d="M14.2069 4.59451L11.4144 1.80138C11.3215 1.7085 11.2113 1.63482 11.0899 1.58455C10.9686 1.53428 10.8385 1.50841 10.7072 1.50841C10.5759 1.50841 10.4458 1.53428 10.3245 1.58455C10.2031 1.63482 10.0929 1.7085 10 1.80138L2.29313 9.50888C2.19987 9.6014 2.12593 9.71154 2.0756 9.83289C2.02528 9.95424 1.99959 10.0844 2.00001 10.2158V13.0089C2.00001 13.2741 2.10536 13.5285 2.2929 13.716C2.48043 13.9035 2.73479 14.0089 3.00001 14.0089H5.79313C5.9245 14.0093 6.05464 13.9836 6.17599 13.9333C6.29735 13.883 6.40748 13.809 6.50001 13.7158L14.2069 6.00888C14.2998 5.91602 14.3734 5.80577 14.4237 5.68443C14.474 5.56309 14.4999 5.43303 14.4999 5.30169C14.4999 5.17035 14.474 5.0403 14.4237 4.91896C14.3734 4.79762 14.2998 4.68737 14.2069 4.59451ZM5.79313 13.0089H3.00001V10.2158L8.50001 4.71576L11.2931 7.50888L5.79313 13.0089ZM12 6.80138L9.20688 4.00888L10.7069 2.50888L13.5 5.30138L12 6.80138Z"/>`
  },
  "ica-mark-as-unread": {
    vb: "0 0 16 16",
    p: `<path d="M14.9231 2.23965H1.07692C0.923914 2.23965 0.777171 2.30044 0.668977 2.40863C0.560783 2.51683 0.5 2.66357 0.5 2.81658V12.6243C0.5 12.9303 0.621566 13.2238 0.837954 13.4402C1.05434 13.6566 1.34783 13.7781 1.65385 13.7781H14.3462C14.6522 13.7781 14.9457 13.6566 15.162 13.4402C15.3784 13.2238 15.5 12.9303 15.5 12.6243V2.81658C15.5 2.66357 15.4392 2.51683 15.331 2.40863C15.2228 2.30044 15.0761 2.23965 14.9231 2.23965ZM13.4397 3.3935L8 8.38028L2.56034 3.3935H13.4397ZM14.3462 12.6243H1.65385V4.12836L7.60986 9.58821C7.71629 9.68592 7.85552 9.74013 8 9.74013C8.14448 9.74013 8.28371 9.68592 8.39014 9.58821L14.3462 4.12836V12.6243Z"/>`
  },
  "ica-location": {
    vb: "0 0 16 15",
    p: `<path d="M7.38456 4.5536C7.38456 4.34169 7.4474 4.13454 7.56513 3.95834C7.68286 3.78215 7.8502 3.64482 8.04598 3.56373C8.24175 3.48263 8.45718 3.46141 8.66502 3.50276C8.87286 3.5441 9.06377 3.64614 9.21361 3.79598C9.36345 3.94583 9.46549 4.13674 9.50683 4.34457C9.54818 4.55241 9.52696 4.76784 9.44586 4.96362C9.36477 5.15939 9.22744 5.32673 9.05125 5.44446C8.87505 5.56219 8.6679 5.62503 8.45599 5.62503C8.17183 5.62503 7.89931 5.51214 7.69838 5.31121C7.49745 5.11028 7.38456 4.83776 7.38456 4.5536ZM4.17028 4.5536C4.17028 3.41696 4.62181 2.32687 5.42554 1.52314C6.22926 0.719413 7.31935 0.267883 8.45599 0.267883C9.59264 0.267883 10.6827 0.719413 11.4865 1.52314C12.2902 2.32687 12.7417 3.41696 12.7417 4.5536C12.7417 8.56811 8.8859 10.8174 8.72385 10.9119C8.64289 10.9581 8.55125 10.9825 8.458 10.9825C8.36475 10.9825 8.27311 10.9581 8.19215 10.9119C8.02608 10.8174 4.17028 8.57145 4.17028 4.5536ZM5.24171 4.5536C5.24171 7.37949 7.64171 9.25516 8.45599 9.81029C9.26961 9.25583 11.6703 7.37949 11.6703 4.5536C11.6703 3.70112 11.3316 2.88355 10.7288 2.28075C10.126 1.67796 9.30847 1.33931 8.45599 1.33931C7.60351 1.33931 6.78595 1.67796 6.18315 2.28075C5.58035 2.88355 5.24171 3.70112 5.24171 4.5536ZM13.4629 9.08239C13.3311 9.03883 13.1874 9.04817 13.0623 9.10844C12.9372 9.16871 12.8404 9.2752 12.7923 9.40546C12.7442 9.53572 12.7486 9.67958 12.8045 9.80669C12.8604 9.93381 12.9634 10.0343 13.0919 10.0869C14.1975 10.496 14.8846 11.0438 14.8846 11.5179C14.8846 12.4125 12.439 13.6607 8.45599 13.6607C4.47296 13.6607 2.02742 12.4125 2.02742 11.5179C2.02742 11.0438 2.71448 10.496 3.82006 10.0875C3.94857 10.0349 4.05163 9.93448 4.10753 9.80736C4.16342 9.68025 4.16777 9.53639 4.11966 9.40613C4.07155 9.27587 3.97474 9.16938 3.84964 9.10911C3.72454 9.04884 3.58093 9.0395 3.44907 9.08306C1.84126 9.6757 0.955994 10.5409 0.955994 11.5179C0.955994 13.6058 4.8205 14.7322 8.45599 14.7322C12.0915 14.7322 15.956 13.6058 15.956 11.5179C15.956 10.5409 15.0707 9.6757 13.4629 9.08239Z"/>`
  },
  "ica-location2": {
    vb: "0 0 14 14",
    p: `<path d="M13.5 13H12V1H12.5C12.6326 1 12.7598 0.947322 12.8536 0.853553C12.9473 0.759785 13 0.632608 13 0.5C13 0.367392 12.9473 0.240215 12.8536 0.146447C12.7598 0.0526784 12.6326 0 12.5 0H1.5C1.36739 0 1.24021 0.0526784 1.14645 0.146447C1.05268 0.240215 1 0.367392 1 0.5C1 0.632608 1.05268 0.759785 1.14645 0.853553C1.24021 0.947322 1.36739 1 1.5 1H2V13H0.5C0.367392 13 0.240215 13.0527 0.146447 13.1464C0.0526784 13.2402 0 13.3674 0 13.5C0 13.6326 0.0526784 13.7598 0.146447 13.8536C0.240215 13.9473 0.367392 14 0.5 14H13.5C13.6326 14 13.7598 13.9473 13.8536 13.8536C13.9473 13.7598 14 13.6326 14 13.5C14 13.3674 13.9473 13.2402 13.8536 13.1464C13.7598 13.0527 13.6326 13 13.5 13ZM3 1H11V13H9V10.5C9 10.3674 8.94732 10.2402 8.85355 10.1464C8.75979 10.0527 8.63261 10 8.5 10H5.5C5.36739 10 5.24021 10.0527 5.14645 10.1464C5.05268 10.2402 5 10.3674 5 10.5V13H3V1ZM8 13H6V11H8V13ZM4.5 3C4.5 2.86739 4.55268 2.74021 4.64645 2.64645C4.74021 2.55268 4.86739 2.5 5 2.5H6C6.13261 2.5 6.25979 2.55268 6.35355 2.64645C6.44732 2.74021 6.5 2.86739 6.5 3C6.5 3.13261 6.44732 3.25979 6.35355 3.35355C6.25979 3.44732 6.13261 3.5 6 3.5H5C4.86739 3.5 4.74021 3.44732 4.64645 3.35355C4.55268 3.25979 4.5 3.13261 4.5 3ZM7.5 3C7.5 2.86739 7.55268 2.74021 7.64645 2.64645C7.74021 2.55268 7.86739 2.5 8 2.5H9C9.13261 2.5 9.25979 2.55268 9.35355 2.64645C9.44732 2.74021 9.5 2.86739 9.5 3C9.5 3.13261 9.44732 3.25979 9.35355 3.35355C9.25979 3.44732 9.13261 3.5 9 3.5H8C7.86739 3.5 7.74021 3.44732 7.64645 3.35355C7.55268 3.25979 7.5 3.13261 7.5 3ZM4.5 5.5C4.5 5.36739 4.55268 5.24021 4.64645 5.14645C4.74021 5.05268 4.86739 5 5 5H6C6.13261 5 6.25979 5.05268 6.35355 5.14645C6.44732 5.24021 6.5 5.36739 6.5 5.5C6.5 5.63261 6.44732 5.75979 6.35355 5.85355C6.25979 5.94732 6.13261 6 6 6H5C4.86739 6 4.74021 5.94732 4.64645 5.85355C4.55268 5.75979 4.5 5.63261 4.5 5.5ZM7.5 5.5C7.5 5.36739 7.55268 5.24021 7.64645 5.14645C7.74021 5.05268 7.86739 5 8 5H9C9.13261 5 9.25979 5.05268 9.35355 5.14645C9.44732 5.24021 9.5 5.36739 9.5 5.5C9.5 5.63261 9.44732 5.75979 9.35355 5.85355C9.25979 5.94732 9.13261 6 9 6H8C7.86739 6 7.74021 5.94732 7.64645 5.85355C7.55268 5.75979 7.5 5.63261 7.5 5.5ZM4.5 8C4.5 7.86739 4.55268 7.74021 4.64645 7.64645C4.74021 7.55268 4.86739 7.5 5 7.5H6C6.13261 7.5 6.25979 7.55268 6.35355 7.64645C6.44732 7.74021 6.5 7.86739 6.5 8C6.5 8.13261 6.44732 8.25979 6.35355 8.35355C6.25979 8.44732 6.13261 8.5 6 8.5H5C4.86739 8.5 4.74021 8.44732 4.64645 8.35355C4.55268 8.25979 4.5 8.13261 4.5 8ZM7.5 8C7.5 7.86739 7.55268 7.74021 7.64645 7.64645C7.74021 7.55268 7.86739 7.5 8 7.5H9C9.13261 7.5 9.25979 7.55268 9.35355 7.64645C9.44732 7.74021 9.5 7.86739 9.5 8C9.5 8.13261 9.44732 8.25979 9.35355 8.35355C9.25979 8.44732 9.13261 8.5 9 8.5H8C7.86739 8.5 7.74021 8.44732 7.64645 8.35355C7.55268 8.25979 7.5 8.13261 7.5 8Z"/>`
  },
  "ica-in-person": {
    vb: "0 0 14 14",
    p: `<path d="M3.52955 3.27552C3.34833 3.27552 3.20142 3.42243 3.20142 3.60364V4.25989H2.54517C2.36395 4.25989 2.21705 4.4068 2.21705 4.58802C2.21705 4.76924 2.36395 4.91614 2.54517 4.91614H3.20142V5.57239C3.20142 5.75361 3.34833 5.90052 3.52955 5.90052C3.71077 5.90052 3.85767 5.75361 3.85767 5.57239V4.91614H4.51392C4.69514 4.91614 4.84205 4.76924 4.84205 4.58802C4.84205 4.4068 4.69514 4.25989 4.51392 4.25989H3.85767V3.60364C3.85767 3.42243 3.71077 3.27552 3.52955 3.27552Z"/><path d="M4.70425 3.33613C4.56651 3.47014 4.58785 3.69108 4.7356 3.81397C4.88335 3.93686 5.10135 3.91464 5.24281 3.78456C5.59053 3.46479 6.02041 3.24394 6.48757 3.14885C7.06897 3.0305 7.67335 3.114 8.20088 3.38555C8.72842 3.6571 9.14755 4.10047 9.38906 4.64242C9.63056 5.18436 9.67999 5.79248 9.52919 6.36631C9.37838 6.94015 9.03636 7.44539 8.55961 7.79858C8.08286 8.15177 7.49991 8.33178 6.90702 8.30889C6.31414 8.286 5.7468 8.06156 5.29871 7.67266C4.93866 7.36017 4.6729 6.95651 4.52732 6.50711C4.4681 6.32428 4.28919 6.19776 4.10011 6.23212C3.91103 6.26649 3.78382 6.44839 3.83787 6.63281C4.0152 7.23775 4.3628 7.78188 4.84255 8.19825C4.98327 8.32038 5.13327 8.42971 5.29074 8.52552H5.26536C5.27946 8.5342 5.29364 8.54279 5.30789 8.55127C4.04941 8.96203 2.97104 9.8295 2.27127 11.0397C2.24561 11.0816 2.22859 11.1281 2.22122 11.1767C2.21384 11.2252 2.21626 11.2747 2.22833 11.3223C2.2404 11.3699 2.26187 11.4145 2.29149 11.4537C2.3211 11.4928 2.35826 11.5256 2.40076 11.5502C2.44327 11.5747 2.49026 11.5905 2.53896 11.5966C2.58767 11.6027 2.6371 11.599 2.68435 11.5857C2.73159 11.5724 2.77569 11.5497 2.81404 11.5191C2.85239 11.4885 2.88421 11.4504 2.90764 11.4073C3.77327 9.91129 5.30329 9.01809 7.0001 9.01809C8.69692 9.01809 10.2269 9.91129 11.0926 11.4073C11.116 11.4504 11.1478 11.4885 11.1862 11.5191C11.2245 11.5497 11.2686 11.5724 11.3159 11.5857C11.3631 11.599 11.4125 11.6027 11.4612 11.5966C11.51 11.5905 11.5569 11.5747 11.5994 11.5502C11.6419 11.5256 11.6791 11.4928 11.7087 11.4537C11.7383 11.4145 11.7598 11.3699 11.7719 11.3223C11.784 11.2747 11.7864 11.2252 11.779 11.1767C11.7716 11.1281 11.7546 11.0816 11.7289 11.0397C11.0292 9.82996 9.9508 8.96249 8.69232 8.55127C8.70657 8.54279 8.72074 8.5342 8.73485 8.52552H8.72451C8.80985 8.47359 8.89307 8.41765 8.97389 8.35778C9.57789 7.91031 10.0112 7.27021 10.2023 6.5432C10.3933 5.81619 10.3307 5.04575 10.0247 4.35914C9.71876 3.67253 9.18775 3.11082 8.5194 2.76678C7.85105 2.42274 7.08535 2.31696 6.34876 2.4669C5.72629 2.5936 5.15608 2.89653 4.70425 3.33613Z"/>`
  },
  "ica-phone-call": {
    vb: "0 0 14 14",
    p: `<path d="M12.4855 9.22231L9.59318 7.92614C9.46213 7.86998 9.31914 7.84741 9.17717 7.86045C9.03519 7.87349 8.89871 7.92174 8.78009 8.00083C8.76805 8.00856 8.75659 8.01715 8.7458 8.02655L7.23411 9.31231C7.21843 9.32086 7.20097 9.32564 7.18311 9.32628C7.16526 9.32692 7.1475 9.32339 7.13125 9.31598C6.15958 8.84699 5.15302 7.84654 4.68218 6.88834C4.67434 6.87233 4.67027 6.85474 4.67027 6.83691C4.67027 6.81908 4.67434 6.80149 4.68218 6.78548L5.97223 5.25481C5.98149 5.24349 5.99007 5.23163 5.99794 5.2193C6.07594 5.10022 6.12305 4.96359 6.13502 4.82174C6.147 4.67989 6.12345 4.53729 6.06652 4.40682L4.77953 1.51937C4.70645 1.34892 4.58005 1.20677 4.41931 1.11426C4.25857 1.02175 4.07217 0.983865 3.88807 1.00629C3.08798 1.11148 2.35355 1.50439 1.82205 2.11162C1.29055 2.71884 0.99833 3.49882 1.00001 4.3058C1.00001 9.09985 4.90015 13 9.6942 13C10.5011 13.0015 11.2811 12.7093 11.8882 12.1778C12.4954 11.6463 12.8884 10.912 12.9937 10.1119C13.0161 9.92869 12.9787 9.74313 12.8872 9.58284C12.7956 9.42255 12.6547 9.2961 12.4855 9.22231ZM9.6942 12.2653C5.30547 12.2653 1.73473 8.69453 1.73473 4.3058C1.73268 3.67757 1.95943 3.07009 2.37262 2.59685C2.7858 2.12361 3.35715 1.81699 3.97991 1.73428H3.99399C4.01867 1.73474 4.04263 1.74264 4.06273 1.75696C4.08283 1.77127 4.09814 1.79132 4.10665 1.81448L5.39853 4.69888C5.4059 4.71491 5.40972 4.73235 5.40972 4.75C5.40972 4.76765 5.4059 4.78509 5.39853 4.80112L4.10604 6.33547C4.0964 6.34642 4.0876 6.35809 4.07971 6.37036C3.99883 6.49383 3.95121 6.63609 3.94145 6.78337C3.93169 6.93064 3.96012 7.07795 4.02399 7.21101C4.56708 8.32288 5.68752 9.43476 6.81165 9.97784C6.94549 10.0414 7.09351 10.0691 7.24127 10.0584C7.38903 10.0477 7.53148 9.99881 7.65474 9.91662C7.66637 9.90866 7.67801 9.90008 7.68903 9.8909L9.2001 8.60514C9.21502 8.59712 9.23151 8.59242 9.24841 8.59137C9.26532 8.59031 9.28226 8.59292 9.29806 8.59902L12.191 9.89519C12.2147 9.90525 12.2345 9.92249 12.2478 9.94446C12.2611 9.96644 12.2672 9.99204 12.2651 10.0176C12.1828 10.6407 11.8765 11.2125 11.4034 11.6261C10.9302 12.0398 10.3227 12.267 9.6942 12.2653Z"/>`
  },
  "ica-telehealth": {
    vb: "0 0 14 14",
    p: `<path d="M9.61825 1H4.38188C4.06362 1 3.7584 1.12643 3.53336 1.35147C3.30831 1.57652 3.18188 1.88174 3.18188 2.2V11.8C3.18188 12.1183 3.30831 12.4235 3.53336 12.6485C3.7584 12.8736 4.06362 13 4.38188 13H9.61825C9.93651 13 10.2417 12.8736 10.4668 12.6485C10.6918 12.4235 10.8182 12.1183 10.8182 11.8V2.2C10.8182 1.88174 10.6918 1.57652 10.4668 1.35147C10.2417 1.12643 9.93651 1 9.61825 1ZM10.1637 11.8C10.1637 11.9447 10.1062 12.0834 10.0039 12.1857C9.90165 12.288 9.76291 12.3455 9.61825 12.3455H4.38188C4.23722 12.3455 4.09848 12.288 3.99619 12.1857C3.8939 12.0834 3.83643 11.9447 3.83643 11.8V2.2C3.83643 2.05534 3.8939 1.9166 3.99619 1.81431C4.09848 1.71201 4.23722 1.65455 4.38188 1.65455H9.61825C9.76291 1.65455 9.90165 1.71201 10.0039 1.81431C10.1062 1.9166 10.1637 2.05534 10.1637 2.2V11.8ZM7.54552 3.29091C7.54552 3.39879 7.51353 3.50425 7.4536 3.59395C7.39366 3.68365 7.30847 3.75356 7.2088 3.79484C7.10913 3.83613 6.99946 3.84693 6.89365 3.82588C6.78785 3.80484 6.69066 3.75289 6.61437 3.6766C6.53809 3.60032 6.48614 3.50313 6.46509 3.39732C6.44405 3.29151 6.45485 3.18184 6.49613 3.08217C6.53742 2.9825 6.60733 2.89732 6.69703 2.83738C6.78673 2.77744 6.89219 2.74545 7.00007 2.74545C7.14473 2.74545 7.28347 2.80292 7.38576 2.90521C7.48805 3.00751 7.54552 3.14625 7.54552 3.29091Z"/>`
  },
  "ica-group": {
    vb: "0 0 14 14",
    p: `<path d="M1.63037 6.82842C1.699 6.8799 1.78527 6.902 1.8702 6.88987C1.95513 6.87774 2.03176 6.83236 2.08323 6.76373C2.35441 6.40216 2.70604 6.1087 3.11029 5.90657C3.51453 5.70445 3.96028 5.59922 4.41224 5.59922C4.8642 5.59922 5.30996 5.70445 5.7142 5.90657C6.11845 6.1087 6.47008 6.40216 6.74125 6.76373C6.79281 6.83228 6.86948 6.87755 6.9544 6.88958C7.03933 6.90161 7.12555 6.87942 7.19412 6.82789C7.21862 6.80986 7.24025 6.78823 7.25827 6.76373C7.52945 6.40216 7.88108 6.1087 8.28533 5.90657C8.68957 5.70445 9.13533 5.59922 9.58729 5.59922C10.0392 5.59922 10.485 5.70445 10.8892 5.90657C11.2935 6.1087 11.6451 6.40216 11.9163 6.76373C11.9678 6.83236 12.0445 6.87771 12.1295 6.88979C12.2145 6.90187 12.3008 6.8797 12.3694 6.82815C12.4381 6.77661 12.4834 6.69991 12.4955 6.61493C12.5076 6.52995 12.4854 6.44365 12.4339 6.37502C12.0266 5.82958 11.4709 5.41295 10.8332 5.17493C11.1731 4.91453 11.4229 4.55416 11.5474 4.14448C11.6719 3.7348 11.665 3.2964 11.5275 2.89088C11.39 2.48537 11.1289 2.13312 10.7809 1.88364C10.4329 1.63417 10.0155 1.5 9.58729 1.5C9.1591 1.5 8.74167 1.63417 8.39367 1.88364C8.04566 2.13312 7.78457 2.48537 7.64709 2.89088C7.50961 3.2964 7.50264 3.7348 7.62717 4.14448C7.7517 4.55416 8.00147 4.91453 8.34137 5.17493C7.83122 5.36502 7.37208 5.6708 7.00003 6.06826C6.62783 5.67074 6.1685 5.36495 5.65816 5.17493C5.99806 4.91453 6.24783 4.55416 6.37236 4.14448C6.49689 3.7348 6.48992 3.2964 6.35244 2.89088C6.21496 2.48537 5.95387 2.13312 5.60586 1.88364C5.25786 1.63417 4.84043 1.5 4.41224 1.5C3.98405 1.5 3.56663 1.63417 3.21862 1.88364C2.87062 2.13312 2.60953 2.48537 2.47205 2.89088C2.33456 3.2964 2.3276 3.7348 2.45213 4.14448C2.57666 4.55416 2.82643 4.91453 3.16633 5.17493C2.52846 5.41296 1.97273 5.82981 1.56567 6.37556C1.5142 6.44419 1.4921 6.53046 1.50423 6.61539C1.51636 6.70032 1.56173 6.77695 1.63037 6.82842ZM9.58783 2.14884C9.86506 2.14884 10.1361 2.23104 10.3666 2.38507C10.5971 2.53909 10.7768 2.75801 10.8828 3.01414C10.9889 3.27027 11.0167 3.55211 10.9626 3.82402C10.9085 4.09592 10.775 4.34569 10.579 4.54172C10.383 4.73776 10.1332 4.87126 9.86129 4.92534C9.58938 4.97943 9.30754 4.95167 9.05141 4.84558C8.79528 4.73948 8.57636 4.55982 8.42234 4.32931C8.26831 4.0988 8.1861 3.82779 8.1861 3.55056C8.1861 3.1788 8.33379 2.82226 8.59666 2.55939C8.85953 2.29652 9.21607 2.14884 9.58783 2.14884ZM4.41224 2.14884C4.68948 2.14884 4.96048 2.23104 5.191 2.38507C5.42151 2.53909 5.60117 2.75801 5.70726 3.01414C5.81336 3.27027 5.84111 3.55211 5.78703 3.82402C5.73294 4.09592 5.59944 4.34569 5.40341 4.54172C5.20737 4.73776 4.95761 4.87126 4.6857 4.92534C4.4138 4.97943 4.13196 4.95167 3.87583 4.84558C3.6197 4.73948 3.40078 4.55982 3.24676 4.32931C3.09273 4.0988 3.01052 3.82779 3.01052 3.55056C3.01052 3.1788 3.1582 2.82226 3.42108 2.55939C3.68395 2.29652 4.04048 2.14884 4.41224 2.14884ZM10.8337 10.7818C11.1736 10.5214 11.4234 10.161 11.5479 9.75136C11.6725 9.34168 11.6655 8.90328 11.528 8.49776C11.3905 8.09225 11.1294 7.74 10.7814 7.49052C10.4334 7.24105 10.016 7.10688 9.58783 7.10688C9.15964 7.10688 8.74221 7.24105 8.3942 7.49052C8.0462 7.74 7.78511 8.09225 7.64763 8.49776C7.51015 8.90328 7.50318 9.34168 7.62771 9.75136C7.75224 10.161 8.00201 10.5214 8.34191 10.7818C7.83156 10.9718 7.37224 11.2776 7.00003 11.6751C6.62783 11.2776 6.1685 10.9718 5.65816 10.7818C5.99806 10.5214 6.24783 10.161 6.37236 9.75136C6.49689 9.34168 6.48992 8.90328 6.35244 8.49776C6.21496 8.09225 5.95387 7.74 5.60586 7.49052C5.25786 7.24105 4.84043 7.10688 4.41224 7.10688C3.98405 7.10688 3.56663 7.24105 3.21862 7.49052C2.87062 7.74 2.60953 8.09225 2.47205 8.49776C2.33456 8.90328 2.3276 9.34168 2.45213 9.75136C2.57666 10.161 2.82643 10.5214 3.16633 10.7818C2.52846 11.0198 1.97273 11.4367 1.56567 11.9824C1.54019 12.0164 1.52164 12.0551 1.5111 12.0962C1.50056 12.1374 1.49822 12.1802 1.50423 12.2223C1.51024 12.2643 1.52447 12.3048 1.54611 12.3413C1.56775 12.3779 1.59638 12.4098 1.63037 12.4353C1.66435 12.4608 1.70302 12.4793 1.74417 12.4899C1.78532 12.5004 1.82815 12.5028 1.8702 12.4967C1.91225 12.4907 1.95271 12.4765 1.98926 12.4549C2.02581 12.4332 2.05774 12.4046 2.08323 12.3706C2.35441 12.009 2.70604 11.7156 3.11029 11.5135C3.51453 11.3113 3.96028 11.2061 4.41224 11.2061C4.8642 11.2061 5.30996 11.3113 5.7142 11.5135C6.11845 11.7156 6.47008 12.009 6.74125 12.3706C6.79281 12.4392 6.86948 12.4844 6.9544 12.4965C7.03933 12.5085 7.12555 12.4863 7.19412 12.4348C7.21862 12.4167 7.24025 12.3951 7.25827 12.3706C7.52945 12.009 7.88108 11.7156 8.28533 11.5135C8.68957 11.3113 9.13533 11.2061 9.58729 11.2061C10.0392 11.2061 10.485 11.3113 10.8892 11.5135C11.2935 11.7156 11.6451 12.009 11.9163 12.3706C11.9678 12.4392 12.0445 12.4846 12.1295 12.4967C12.2145 12.5088 12.3008 12.4866 12.3694 12.435C12.4381 12.3835 12.4834 12.3068 12.4955 12.2218C12.5076 12.1368 12.4854 12.0505 12.4339 11.9819C12.0268 11.4365 11.4713 11.0199 10.8337 10.7818ZM4.41224 7.75572C4.68948 7.75572 4.96048 7.83793 5.191 7.99195C5.42151 8.14597 5.60117 8.36489 5.70726 8.62102C5.81336 8.87715 5.84111 9.15899 5.78703 9.4309C5.73294 9.70281 5.59944 9.95257 5.40341 10.1486C5.20737 10.3446 4.95761 10.4781 4.6857 10.5322C4.4138 10.5863 4.13196 10.5585 3.87583 10.4525C3.6197 10.3464 3.40078 10.1667 3.24676 9.93619C3.09273 9.70568 3.01052 9.43467 3.01052 9.15744C3.01052 8.78568 3.1582 8.42914 3.42108 8.16627C3.68395 7.9034 4.04048 7.75572 4.41224 7.75572ZM9.58783 7.75572C9.86506 7.75572 10.1361 7.83793 10.3666 7.99195C10.5971 8.14597 10.7768 8.36489 10.8828 8.62102C10.9889 8.87715 11.0167 9.15899 10.9626 9.4309C10.9085 9.70281 10.775 9.95257 10.579 10.1486C10.383 10.3446 10.1332 10.4781 9.86129 10.5322C9.58938 10.5863 9.30754 10.5585 9.05141 10.4525C8.79528 10.3464 8.57636 10.1667 8.42234 9.93619C8.26831 9.70568 8.1861 9.43467 8.1861 9.15744C8.1861 8.78568 8.33379 8.42914 8.59666 8.16627C8.85953 7.9034 9.21607 7.75572 9.58783 7.75572Z"/>`
  },
  "ica-folder": {
    vb: "0 0 512 512",
    p: `<path d="m242.8 128-32-32H96v288h320V192H128v-32h288c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h128l64 64"/>`
  },
  "ica-icon-ribbon-badge": {
    vb: "0 0 18 18",
    p: `<path d="M3.94403 15.972L5.79935 10.1447C6.29583 10.1447 6.71396 11.6081 7.21046 11.8171C7.60765 11.9843 8.54317 11.5558 8.96127 11.3207L7.0798 16.965L5.95614 15.2665L3.94403 15.972Z" fill="#DF1600"/> <path d="M7.15801 0.998643C7.03248 1.14497 6.46117 2.07003 6.19121 2.51427L4.38827 3.16756V4.78772L3.31671 6.46013L4.38827 7.81897V9.67431L6.03447 10.3276L7.3933 11.791L9.01346 11.2161L10.8165 11.791L11.7835 10.1185L13.6649 9.67431L13.4558 7.81897L14.7362 6.27722L13.4558 4.78772L13.6649 2.95851L11.7835 2.51427L10.8165 0.998643L9.01346 1.62581C8.44728 1.35578 7.28353 0.852312 7.15801 0.998643Z" fill="#9DE056"/> <path d="M9.02658 9.72656C10.91 9.72656 12.4367 8.19978 12.4367 6.3164C12.4367 4.43303 10.91 2.90625 9.02658 2.90625C7.1432 2.90625 5.61642 4.43303 5.61642 6.3164C5.61642 8.19978 7.1432 9.72656 9.02658 9.72656Z" fill="#107EAD"/> <path d="M14.0174 15.972L12.162 10.1447C11.6656 10.1447 11.2475 11.6081 10.751 11.8171C10.3538 11.9843 9.41825 11.5558 9.00015 11.3207L10.8816 16.965L12.0053 15.2665L14.0174 15.972Z" fill="#DF1600"/> <path d="M14.3197 7.42375C14.6502 7.13061 15.0247 6.79841 15.0247 6.33303C15.0247 5.86764 14.6502 5.53541 14.3197 5.24226C14.1327 5.07641 13.9207 4.88842 13.8754 4.74888C13.8257 4.59595 13.8878 4.30916 13.9427 4.0561C14.0342 3.63319 14.138 3.15377 13.8742 2.79124C13.6079 2.42539 13.1169 2.37634 12.6839 2.3331C12.4284 2.30759 12.139 2.2787 12.0124 2.18664C11.8891 2.09697 11.7739 1.83317 11.6723 1.6004C11.4967 1.19864 11.2978 0.74329 10.8621 0.60187C10.7816 0.575774 10.6962 0.5625 10.6082 0.5625C10.2754 0.5625 9.95851 0.747205 9.65204 0.925881C9.42486 1.05826 9.16744 1.20832 9.00015 1.20832C8.83273 1.20832 8.57535 1.05826 8.34817 0.925881C8.04171 0.747205 7.72481 0.5625 7.39199 0.5625C7.30383 0.5625 7.21843 0.575774 7.13803 0.60187C6.70238 0.743335 6.50351 1.19869 6.32803 1.60036C6.22634 1.83312 6.11106 2.09692 5.98786 2.18659C5.86129 2.27865 5.57184 2.30754 5.31645 2.33306C4.88328 2.37629 4.39239 2.42534 4.12619 2.79119C3.8623 3.15377 3.96606 3.63314 4.05776 4.05605C4.11251 4.30911 4.17466 4.59591 4.12498 4.74884C4.07963 4.88833 3.86774 5.07631 3.68075 5.24217C3.35021 5.53536 2.97559 5.8676 2.97559 6.33298C2.97559 6.79841 3.35021 7.1307 3.68075 7.4238C3.86774 7.58965 4.07972 7.7776 4.12498 7.917C4.17466 8.07002 4.11251 8.35686 4.05776 8.60992C3.9661 9.03283 3.8623 9.51225 4.12615 9.87478C4.39216 10.2402 4.88229 10.2895 5.31501 10.3327L3.56205 15.9818C3.52285 16.108 3.56092 16.2453 3.65942 16.3333C3.75787 16.4214 3.8987 16.4439 4.01973 16.3909L5.83372 15.5964L6.8794 17.2782C6.94145 17.3781 7.05034 17.4375 7.16588 17.4375C7.1801 17.4375 7.19455 17.4366 7.20894 17.4348C7.33997 17.4179 7.44913 17.3262 7.48823 17.2L9.00015 12.3281L10.512 17.2C10.5512 17.3262 10.6603 17.4179 10.7914 17.4348C10.8058 17.4366 10.8201 17.4375 10.8344 17.4375C10.95 17.4375 11.0588 17.3781 11.1209 17.2782L12.1665 15.5964L13.9805 16.3909C14.1014 16.4439 14.2423 16.4215 14.3407 16.3333C14.4392 16.2453 14.4773 16.1079 14.4382 15.9818L12.6853 10.3329C13.118 10.2896 13.6081 10.2403 13.8742 9.87487C14.138 9.51229 14.0342 9.03292 13.9427 8.60996C13.8878 8.3569 13.8257 8.07006 13.8754 7.91709C13.9207 7.77755 14.1327 7.58961 14.3197 7.42375ZM7.06253 16.2946L6.25262 14.992C6.16403 14.8494 5.98422 14.7937 5.83061 14.861L4.42554 15.4764L5.97805 10.4732C5.9812 10.4753 5.98471 10.4773 5.98782 10.4795C6.11102 10.5692 6.22634 10.8329 6.32798 11.0657C6.50346 11.4675 6.70243 11.9227 7.13807 12.0642C7.21848 12.0903 7.30401 12.1035 7.39208 12.1035C7.72485 12.1035 8.04175 11.9188 8.34821 11.7403C8.39893 11.7107 8.45112 11.6803 8.50359 11.6508L7.06253 16.2946ZM12.1696 14.8609C12.016 14.7937 11.8362 14.8496 11.7477 14.9919L10.9376 16.2946L9.49667 11.6507C9.54905 11.6801 9.60133 11.7106 9.65204 11.7401C9.95851 11.9188 10.2754 12.1034 10.6082 12.1034C10.6963 12.1034 10.7817 12.0902 10.8622 12.0641C11.2978 11.9226 11.4968 11.4672 11.6723 11.0656C11.774 10.8328 11.8892 10.5691 12.0124 10.4794C12.0154 10.4772 12.0189 10.4752 12.0222 10.4731L13.5747 15.4763L12.1696 14.8609ZM13.2335 7.70862C13.1275 8.03483 13.2065 8.39979 13.283 8.75272C13.3416 9.02311 13.4144 9.35958 13.3284 9.47769C13.24 9.59913 12.8944 9.63365 12.6169 9.66137C12.2594 9.69704 11.8898 9.73389 11.6153 9.93372C11.344 10.1311 11.1965 10.4688 11.0538 10.7954C10.9411 11.0533 10.8008 11.3744 10.6537 11.4222C10.6405 11.4265 10.6256 11.4285 10.6081 11.4285C10.4577 11.4285 10.2102 11.2843 9.99184 11.157C9.67615 10.9731 9.34977 10.7828 9.00011 10.7828C8.65036 10.7828 8.32397 10.9731 8.00828 11.157C7.78997 11.2843 7.54249 11.4285 7.39208 11.4285C7.37457 11.4285 7.35972 11.4265 7.34654 11.4221C7.1994 11.3744 7.05916 11.0534 6.9464 10.7954C6.80376 10.4688 6.65623 10.1311 6.3849 9.93372C6.11034 9.73389 5.74076 9.69699 5.38322 9.66132C5.1056 9.6336 4.76013 9.59908 4.67171 9.47769C4.58578 9.35958 4.65862 9.02315 4.71716 8.75282C4.79361 8.39988 4.87271 8.03492 4.76674 7.70858C4.66478 7.39451 4.39212 7.1527 4.12844 6.91891C3.90433 6.72012 3.65037 6.49487 3.65037 6.33303C3.65037 6.17119 3.90433 5.9459 4.12844 5.74715C4.39207 5.51331 4.66478 5.27146 4.76683 4.9573C4.87271 4.63104 4.79365 4.26613 4.71725 3.91319C4.65862 3.64282 4.58578 3.30643 4.67171 3.18833C4.76013 3.06688 5.10569 3.03237 5.38336 3.00465C5.74076 2.96898 6.1103 2.93212 6.38485 2.73234C6.65614 2.53486 6.80371 2.19712 6.94635 1.87055C7.05911 1.6126 7.19935 1.29156 7.3464 1.24377C7.35959 1.23954 7.37453 1.23742 7.39199 1.23742C7.54244 1.23742 7.78992 1.38173 8.00828 1.50897C8.32397 1.693 8.65036 1.88324 9.00011 1.88324C9.34977 1.88324 9.67615 1.69296 9.99184 1.50897C10.2102 1.38173 10.4577 1.23742 10.6082 1.23742C10.6257 1.23742 10.6405 1.23954 10.6536 1.24381C10.8008 1.29156 10.941 1.6126 11.0538 1.87064C11.1965 2.19726 11.344 2.535 11.6153 2.73239C11.8898 2.93212 12.2593 2.96902 12.6169 3.00469C12.8944 3.03241 13.2401 3.06693 13.3284 3.18836C13.4144 3.30648 13.3416 3.64295 13.283 3.91323C13.2066 4.26618 13.1275 4.63113 13.2335 4.9573C13.3354 5.27146 13.6081 5.51331 13.8718 5.74724C14.0959 5.94594 14.3498 6.17122 14.3498 6.33307C14.3498 6.49492 14.0958 6.72017 13.8718 6.91886C13.6081 7.15266 13.3354 7.39451 13.2335 7.70862Z" fill="#3D3D3D"/> <path d="M9.00008 2.50827C6.89111 2.50827 5.17532 4.22406 5.17532 6.33303C5.17532 8.44199 6.89111 10.1578 9.00008 10.1578C11.109 10.1578 12.8249 8.44199 12.8249 6.33303C12.8249 4.22406 11.1091 2.50827 9.00008 2.50827ZM9.00008 9.48286C7.26318 9.48286 5.85024 8.06988 5.85024 6.33303C5.85024 4.59618 7.26318 3.18319 9.00008 3.18319C10.7369 3.18319 12.1499 4.59618 12.1499 6.33303C12.1499 8.06988 10.7369 9.48286 9.00008 9.48286Z" fill="#3D3D3D"/>`
  },
  "ica-plus-minus": {
    vb: "0 0 27 10",
    p: `<g> <path d="M8.84693 4.42897C8.99869 4.42897 9.14423 4.48926 9.25154 4.59657C9.35885 4.70388 9.41914 4.84942 9.41914 5.00118C9.41914 5.15294 9.35885 5.29848 9.25154 5.40579C9.14423 5.5131 8.99869 5.57339 8.84693 5.57339L5.57218 5.57272L5.57151 8.84746C5.57151 8.99922 5.51123 9.14476 5.40392 9.25207C5.29661 9.35938 5.15106 9.41967 4.9993 9.41967C4.84754 9.41967 4.702 9.35938 4.59469 9.25207C4.48738 9.14476 4.42709 8.99922 4.42709 8.84746L4.42776 5.57272L1.15302 5.57204C1.00126 5.57204 0.855717 5.51176 0.748407 5.40445C0.641097 5.29713 0.580811 5.15159 0.580811 4.99983C0.580811 4.84807 0.641097 4.70253 0.748407 4.59522C0.855717 4.48791 1.00126 4.42762 1.15302 4.42762L4.42776 4.4283L4.42743 1.15254C4.42743 1.00078 4.48771 0.855238 4.59502 0.747928C4.70233 0.640618 4.84788 0.580332 4.99964 0.580332C5.1514 0.580332 5.29694 0.640618 5.40425 0.747928C5.51156 0.855238 5.57185 1.00078 5.57185 1.15254L5.57218 4.4283L8.84693 4.42897Z" /> <path d="M26 4.00887C26 4.00887 25 4.00887 25 5.00887C25 6.00887 26 6.00887 26 6.00887H16C16 6.00887 15 6.00887 15 5.00887C15 4.00887 16 4.00887 16 4.00887H26Z" /> </g>`
  },
  "ica-doctor": {
    vb: "0 0 16 16",
    p: `<path d="M3.03771 1.9547C3.21335 1.95472 3.35562 2.09433 3.3558 2.26641V3.51328H4.62816C4.8038 3.51336 4.94616 3.65287 4.94625 3.82499C4.94625 3.99718 4.80385 4.13662 4.62816 4.13671H3.3558V5.38357C3.3558 5.5558 3.21346 5.69527 3.03771 5.69529C2.86194 5.69529 2.71962 5.55582 2.71962 5.38357V4.13671H1.44727C1.27157 4.13662 1.12918 3.99718 1.12918 3.82499C1.12927 3.65287 1.27163 3.51336 1.44727 3.51328H2.71962V2.26641C2.71981 2.09432 2.86206 1.9547 3.03771 1.9547Z"/> <path d="M5.22547 11.8575C5.36803 11.8013 5.52737 11.8535 5.609 11.9744L5.63882 12.0304L5.71586 12.1984C5.90911 12.5838 6.20134 12.9146 6.56492 13.1579C6.98056 13.4359 7.4716 13.5873 7.97479 13.5922C8.47778 13.597 8.97108 13.4552 9.39211 13.1855C9.81326 12.9156 10.1434 12.5287 10.3406 12.075C10.4094 11.9168 10.5966 11.8438 10.7581 11.9111C10.9196 11.9785 10.9949 12.161 10.9262 12.3194C10.6798 12.8865 10.2673 13.3701 9.74085 13.7075C9.2144 14.0448 8.59715 14.2217 7.96816 14.2156C7.33921 14.2095 6.72576 14.0209 6.20624 13.6734C5.75169 13.3693 5.38674 12.9553 5.14512 12.4736L5.04903 12.2634L5.0308 12.2025C5.00413 12.0599 5.08301 11.9138 5.22547 11.8575Z" /> <path d="M7.24666 0.719319C8.43007 0.552947 9.63654 0.783675 10.6694 1.3736C11.7023 1.96359 12.5012 2.87857 12.9367 3.96961C13.3721 5.06062 13.4186 6.26379 13.0684 7.38387C12.7181 8.50384 11.9917 9.47519 11.0074 10.1398C10.7001 10.3473 10.373 10.5207 10.0324 10.6593C11.0863 10.8528 12.087 11.1961 12.9714 11.6789C14.3199 12.415 15.3523 13.4508 15.8815 14.6686L15.9809 14.9154L15.9966 14.9763C16.0182 15.1196 15.9348 15.2633 15.7904 15.3148C15.6255 15.3731 15.4428 15.2896 15.3828 15.1281C14.9541 13.9737 13.9971 12.9518 12.6616 12.2228C11.3262 11.494 9.68682 11.0987 8.00047 11.0985C6.31419 11.0984 4.67492 11.4934 3.3393 12.222C2.00361 12.9507 1.04564 13.9722 0.616482 15.1264C0.556262 15.288 0.373914 15.372 0.20893 15.3131C0.0441201 15.2541 -0.0407125 15.0746 0.019236 14.9129C0.511644 13.5888 1.59093 12.4621 3.02949 11.6773C3.91347 11.195 4.91382 10.8517 5.96685 10.6585C5.40875 10.4312 4.88974 10.1116 4.43604 9.70794C3.55103 8.92044 2.96309 7.86271 2.76856 6.70686C2.74013 6.53721 2.8581 6.37706 3.03115 6.34888C3.20432 6.32102 3.36778 6.43572 3.39645 6.60539C3.56765 7.62257 4.08461 8.55386 4.86348 9.24686C5.64231 9.9398 6.63778 10.354 7.68735 10.4231C8.73691 10.4921 9.77993 10.2115 10.6462 9.62676C11.5126 9.04191 12.1521 8.18686 12.4604 7.20122C12.7686 6.2155 12.7276 5.15621 12.3444 4.19609C11.9611 3.23601 11.2578 2.43094 10.3489 1.91179C9.43994 1.39272 8.3783 1.18986 7.33695 1.33626C6.29572 1.48277 6 1.66669 5.22547 2.10577C5.10462 2.23023 4.90304 2.23613 4.77567 2.11794C4.64831 1.99967 4.62523 1.78132 4.76407 1.67716C5.66667 1.00002 6.6047 0.809572 7.24666 0.719319Z"/>`
  },
  "ica-big-calendar": {
    vb: "0 0 76 77",
    p: `<path fill-rule="evenodd" clip-rule="evenodd" d="M9.61868 7.12491C5.63555 7.12491 2.50922 10.223 2.50922 13.9197V67.169C2.50922 70.8657 5.63555 73.9638 9.61868 73.9638H66.3813C70.3644 73.9638 73.4908 70.8657 73.4908 67.169V13.9197C73.4908 10.223 70.3644 7.12491 66.3813 7.12491H9.61868ZM0 13.9197C0 8.71035 4.36312 4.58867 9.61868 4.58867H66.3813C71.6369 4.58867 76 8.71035 76 13.9197V67.169C76 72.3783 71.6369 76.5 66.3813 76.5H9.61868C4.36312 76.5 0 72.3783 0 67.169L0 13.9197Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 21.3573C0 20.6569 0.561708 20.0892 1.25461 20.0892H73.6119C74.3048 20.0892 74.8665 20.6569 74.8665 21.3573C74.8665 22.0577 74.3048 22.6254 73.6119 22.6254H1.25461C0.561708 22.6254 0 22.0577 0 21.3573Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M59.1334 0.5C59.8263 0.5 60.388 1.06776 60.388 1.76812V14.4493C60.388 15.1497 59.8263 15.7175 59.1334 15.7175C58.4405 15.7175 57.8788 15.1497 57.8788 14.4493V1.76812C57.8788 1.06776 58.4405 0.5 59.1334 0.5Z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4767 0.5C17.1696 0.5 17.7313 1.06776 17.7313 1.76812V14.4493C17.7313 15.1497 17.1696 15.7175 16.4767 15.7175C15.7838 15.7175 15.2221 15.1497 15.2221 14.4493V1.76812C15.2221 1.06776 15.7838 0.5 16.4767 0.5Z"/> <path d="M17.7313 35.1185C17.7313 35.8189 17.1696 36.3867 16.4767 36.3867C15.7838 36.3867 15.2221 35.8189 15.2221 35.1185C15.2221 34.4182 15.7838 33.8504 16.4767 33.8504C17.1696 33.8504 17.7313 34.4182 17.7313 35.1185Z"/> <path d="M17.7313 47.1657C17.7313 47.8661 17.1696 48.4338 16.4767 48.4338C15.7838 48.4338 15.2221 47.8661 15.2221 47.1657C15.2221 46.4653 15.7838 45.8976 16.4767 45.8976C17.1696 45.8976 17.7313 46.4653 17.7313 47.1657Z"/> <path d="M17.7313 59.2129C17.7313 59.9132 17.1696 60.481 16.4767 60.481C15.7838 60.481 15.2221 59.9132 15.2221 59.2129C15.2221 58.5125 15.7838 57.9448 16.4767 57.9448C17.1696 57.9448 17.7313 58.5125 17.7313 59.2129Z"/> <path d="M39.0597 35.1185C39.0597 35.8189 38.498 36.3867 37.8051 36.3867C37.1122 36.3867 36.5505 35.8189 36.5505 35.1185C36.5505 34.4182 37.1122 33.8504 37.8051 33.8504C38.498 33.8504 39.0597 34.4182 39.0597 35.1185Z"/> <path d="M39.0597 47.1657C39.0597 47.8661 38.498 48.4338 37.8051 48.4338C37.1122 48.4338 36.5505 47.8661 36.5505 47.1657C36.5505 46.4653 37.1122 45.8976 37.8051 45.8976C38.498 45.8976 39.0597 46.4653 39.0597 47.1657Z"/> <path d="M39.0597 59.2129C39.0597 59.9132 38.498 60.481 37.8051 60.481C37.1122 60.481 36.5505 59.9132 36.5505 59.2129C36.5505 58.5125 37.1122 57.9448 37.8051 57.9448C38.498 57.9448 39.0597 58.5125 39.0597 59.2129Z"/> <path d="M60.388 35.1185C60.388 35.8189 59.8263 36.3867 59.1334 36.3867C58.4405 36.3867 57.8788 35.8189 57.8788 35.1185C57.8788 34.4182 58.4405 33.8504 59.1334 33.8504C59.8263 33.8504 60.388 34.4182 60.388 35.1185Z"/> <path d="M60.388 47.1657C60.388 47.8661 59.8263 48.4338 59.1334 48.4338C58.4405 48.4338 57.8788 47.8661 57.8788 47.1657C57.8788 46.4653 58.4405 45.8976 59.1334 45.8976C59.8263 45.8976 60.388 46.4653 60.388 47.1657Z"/> <path d="M60.388 59.2129C60.388 59.9132 59.8263 60.481 59.1334 60.481C58.4405 60.481 57.8788 59.9132 57.8788 59.2129C57.8788 58.5125 58.4405 57.9448 59.1334 57.9448C59.8263 57.9448 60.388 58.5125 60.388 59.2129Z"/>`
  },
  "ica-invoice": {
    vb: "0 0 24 24",
    p: `<path d="M0 6C0 2.68629 2.68629 0 6 0H18C21.3137 0 24 2.68629 24 6V18C24 21.3137 21.3137 24 18 24H6C2.68629 24 0 21.3137 0 18V6Z" fill="#666666" fill-opacity="0.12"/> <path d="M16.7335 9.22385L13.6389 6.12931C13.5979 6.08827 13.5491 6.05572 13.4954 6.03354C13.4418 6.01135 13.3842 5.99995 13.3262 6H8.02124C7.78675 6 7.56186 6.09315 7.39605 6.25896C7.23024 6.42477 7.13708 6.64966 7.13708 6.88416L7.2036 9.47768C7.2036 9.59493 7.25017 9.70737 7.33308 9.79028C7.41598 9.87318 7.52843 9.91976 7.64567 9.91976C7.76292 9.91976 7.87537 9.87318 7.95827 9.79028C8.04118 9.70737 8.08775 9.59493 8.08775 9.47768L8.02124 6.88416H12.8841V9.53662C12.8841 9.65387 12.9307 9.76631 13.0136 9.84922C13.0965 9.93213 13.2089 9.9787 13.3262 9.9787H15.9786V16.6099L13.0358 16.6654C12.9186 16.6654 12.8061 16.712 12.7232 16.7949C12.6403 16.8778 12.5937 16.9903 12.5937 17.1075C12.5937 17.2247 12.6403 17.3372 12.7232 17.4201C12.8061 17.503 12.9186 17.5496 13.0358 17.5496L15.9786 17.494C16.2131 17.494 16.438 17.4009 16.6038 17.2351C16.7696 17.0693 16.8628 16.8444 16.8628 16.6099V9.53662C16.8628 9.47855 16.8515 9.42104 16.8293 9.36737C16.8071 9.31371 16.7745 9.26494 16.7335 9.22385ZM13.7683 7.50914L15.3537 9.09455H13.7683V7.50914Z" fill="#303030"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0487 9.10954C10.1906 9.1096 10.3275 9.1657 10.4279 9.26609C10.5283 9.36647 10.5844 9.50343 10.5845 9.64535V9.97297H10.6248C11.148 9.97365 11.6501 10.1816 12.02 10.5515C12.3436 10.8753 12.5436 11.2999 12.5889 11.7515L12.5986 11.9467C12.5986 12.0887 12.5424 12.2256 12.442 12.326C12.3416 12.4264 12.2048 12.4825 12.0628 12.4825C11.9209 12.4825 11.7847 12.4262 11.6843 12.326C11.5839 12.2255 11.527 12.0888 11.527 11.9467C11.5269 11.7075 11.4322 11.4777 11.2631 11.3084C11.0938 11.1392 10.8634 11.0438 10.624 11.0438H10.5845V12.8497H10.9121C11.4356 12.8498 11.9379 13.0581 12.3081 13.4283C12.6782 13.7984 12.8858 14.3008 12.8859 14.8243C12.8858 15.3477 12.6782 15.8501 12.3081 16.2203C11.9379 16.5904 11.4356 16.7979 10.9121 16.798H10.5845V17.1256C10.5845 17.2675 10.5282 17.4045 10.4279 17.5049C10.3275 17.6053 10.1907 17.6614 10.0487 17.6614C9.90674 17.6614 9.77063 17.6052 9.67022 17.5049C9.56979 17.4045 9.51287 17.2677 9.51287 17.1256V16.798H9.18525C8.66191 16.7975 8.16012 16.5895 7.79006 16.2195C7.46634 15.8957 7.26645 15.4712 7.22117 15.0195L7.21149 14.8243C7.21155 14.6824 7.26782 14.5462 7.36803 14.4458C7.46846 14.3455 7.60534 14.2885 7.74729 14.2885C7.88914 14.2886 8.02543 14.3455 8.12575 14.4458C8.226 14.5462 8.28223 14.6824 8.28229 14.8243C8.28232 15.0637 8.37773 15.2932 8.54697 15.4625C8.71624 15.6318 8.94588 15.7271 9.18525 15.7272H9.51287V13.9213H9.47333C8.94972 13.9213 8.44758 13.713 8.07733 13.3427C7.70713 12.9725 7.49876 12.4703 7.49876 11.9467C7.49885 11.4232 7.70717 10.9209 8.07733 10.5507C8.44755 10.1807 8.94985 9.97297 9.47333 9.97297H9.51287V9.64535C9.51293 9.50338 9.56983 9.36648 9.67022 9.26609C9.77061 9.16591 9.90685 9.10957 10.0487 9.10954ZM10.5845 13.9213V15.7272H10.9121C11.1515 15.7271 11.3811 15.6318 11.5504 15.4625C11.7196 15.2932 11.815 15.0636 11.8151 14.8243C11.815 14.5849 11.7196 14.3553 11.5504 14.186C11.3811 14.0167 11.1515 13.9214 10.9121 13.9213H10.5845ZM9.47333 11.0438C9.23396 11.0438 9.00437 11.1393 8.83504 11.3084C8.66578 11.4777 8.57046 11.7074 8.57037 11.9467C8.57037 12.1862 8.66574 12.4157 8.83504 12.585C9.00439 12.7544 9.23383 12.8497 9.47333 12.8497H9.51287V11.0438H9.47333Z" fill="#303030"/>`
  },
  "ica-billing-note": {
    vb: "0 0 24 24",
    p: `<path d="M0 6C0 2.68629 2.68629 0 6 0H18C21.3137 0 24 2.68629 24 6V18C24 21.3137 21.3137 24 18 24H6C2.68629 24 0 21.3137 0 18V6Z" fill="#666666" fill-opacity="0.12"/> <g clip-path="url(#clip0_6306_5258)"> <path d="M9.5 10C9.5 9.86739 9.55268 9.74021 9.64645 9.64645C9.74021 9.55268 9.86739 9.5 10 9.5H14C14.1326 9.5 14.2598 9.55268 14.3536 9.64645C14.4473 9.74021 14.5 9.86739 14.5 10C14.5 10.1326 14.4473 10.2598 14.3536 10.3536C14.2598 10.4473 14.1326 10.5 14 10.5H10C9.86739 10.5 9.74021 10.4473 9.64645 10.3536C9.55268 10.2598 9.5 10.1326 9.5 10ZM10 12.5H14C14.1326 12.5 14.2598 12.4473 14.3536 12.3536C14.4473 12.2598 14.5 12.1326 14.5 12C14.5 11.8674 14.4473 11.7402 14.3536 11.6464C14.2598 11.5527 14.1326 11.5 14 11.5H10C9.86739 11.5 9.74021 11.5527 9.64645 11.6464C9.55268 11.7402 9.5 11.8674 9.5 12C9.5 12.1326 9.55268 12.2598 9.64645 12.3536C9.74021 12.4473 9.86739 12.5 10 12.5ZM12 13.5H10C9.86739 13.5 9.74021 13.5527 9.64645 13.6464C9.55268 13.7402 9.5 13.8674 9.5 14C9.5 14.1326 9.55268 14.2598 9.64645 14.3536C9.74021 14.4473 9.86739 14.5 10 14.5H12C12.1326 14.5 12.2598 14.4473 12.3536 14.3536C12.4473 14.2598 12.5 14.1326 12.5 14C12.5 13.8674 12.4473 13.7402 12.3536 13.6464C12.2598 13.5527 12.1326 13.5 12 13.5ZM18 7V13.7931C18.0004 13.9245 17.9747 14.0546 17.9244 14.176C17.8741 14.2973 17.8001 14.4075 17.7069 14.5L14.5 17.7069C14.4075 17.8001 14.2973 17.8741 14.176 17.9244C14.0546 17.9747 13.9245 18.0004 13.7931 18H7C6.73478 18 6.48043 17.8946 6.29289 17.7071C6.10536 17.5196 6 17.2652 6 17V7C6 6.73478 6.10536 6.48043 6.29289 6.29289C6.48043 6.10536 6.73478 6 7 6H17C17.2652 6 17.5196 6.10536 17.7071 6.29289C17.8946 6.48043 18 6.73478 18 7ZM7 17H13.5V14C13.5 13.8674 13.5527 13.7402 13.6464 13.6464C13.7402 13.5527 13.8674 13.5 14 13.5H17V7H7V17ZM14.5 14.5V16.2937L16.2931 14.5H14.5Z" fill="#303030"/> </g> <defs> <clipPath id="clip0_6306_5258"> <rect width="12" height="12" fill="white" transform="translate(6 6)"/> </clipPath> </defs>`
  },
  "ica-claim-submitted-icon": {
    vb: "0 0 34 32",
    p: `<path d="M0 8C0 3.58172 3.58172 0 8 0H26C30.4183 0 34 3.58172 34 8V24C34 28.4183 30.4183 32 26 32H8C3.58172 32 0 28.4183 0 24V8Z" fill="#666666" fill-opacity="0.12"/> <path d="M22.7379 12.9078L18.9868 9.15674C18.937 9.107 18.8779 9.06755 18.8128 9.04065C18.7478 9.01376 18.6781 8.99994 18.6077 9H12.1772C11.893 9 11.6204 9.11292 11.4194 9.31391C11.2184 9.5149 11.1055 9.7875 11.1055 10.0717L11.1861 13.2155C11.1861 13.3576 11.2425 13.4939 11.343 13.5944C11.4435 13.6949 11.5798 13.7514 11.722 13.7514C11.8641 13.7514 12.0004 13.6949 12.1009 13.5944C12.2014 13.4939 12.2578 13.3576 12.2578 13.2155L12.1772 10.0717H18.0718V13.287C18.0718 13.4291 18.1283 13.5654 18.2288 13.6659C18.3293 13.7664 18.4656 13.8228 18.6077 13.8228H21.8229V21.8609L18.2557 21.9283C18.1136 21.9283 17.9773 21.9847 17.8768 22.0852C17.7763 22.1857 17.7198 22.322 17.7198 22.4641C17.7198 22.6063 17.7763 22.7426 17.8768 22.843C17.9773 22.9435 18.1136 23 18.2557 23L21.8229 22.9327C22.1071 22.9327 22.3798 22.8197 22.5807 22.6188C22.7817 22.4178 22.8946 22.1452 22.8946 21.8609V13.287C22.8947 13.2166 22.8809 13.1469 22.854 13.0818C22.8271 13.0168 22.7877 12.9576 22.7379 12.9078ZM19.1435 10.8293L21.0653 12.7511H19.1435V10.8293Z" fill="#303030"/> <path d="M15.0801 14.0745C15.0312 14.1209 14.9924 14.176 14.966 14.2367C14.9395 14.2974 14.9259 14.3625 14.9259 14.4282C14.9259 14.494 14.9395 14.559 14.966 14.6197C14.9924 14.6804 15.0312 14.7355 15.0801 14.7819L17.33 16.9245L12.0715 16.8669C11.9325 16.8669 11.7991 16.9195 11.7007 17.0131C11.6024 17.1068 11.5472 17.2338 11.5472 17.3662C11.5472 17.4987 11.6024 17.6257 11.7007 17.7193C11.7991 17.813 11.9325 17.8656 12.0715 17.8656L17.33 17.9231L15.0801 20.0665C14.9816 20.1603 14.9263 20.2876 14.9263 20.4202C14.9263 20.5529 14.9816 20.6801 15.0801 20.7739C15.1786 20.8677 15.3122 20.9204 15.4515 20.9204C15.5908 20.9204 15.7244 20.8677 15.8229 20.7739L18.9691 17.7779C19.0179 17.7315 19.0567 17.6764 19.0832 17.6157C19.1097 17.555 19.1233 17.4899 19.1233 17.4242C19.1233 17.3585 19.1097 17.2934 19.0832 17.2327C19.0567 17.172 19.0179 17.1169 18.9691 17.0705L15.8229 14.0745C15.7742 14.028 15.7163 13.9911 15.6526 13.9658C15.5889 13.9406 15.5205 13.9277 15.4515 13.9277C15.3825 13.9277 15.3142 13.9406 15.2504 13.9658C15.1867 13.9911 15.1288 14.028 15.0801 14.0745Z" fill="#303030"/>`
  },
  "ica-arrow-left-right": {
    vb: "0 0 16 16",
    p: `<path d="M15.7866 12.8777L12.8777 15.7866C12.7413 15.923 12.5562 15.9997 12.3632 15.9997C12.1702 15.9997 11.9851 15.923 11.8487 15.7866C11.7122 15.6501 11.6356 15.465 11.6356 15.272C11.6356 15.0791 11.7122 14.894 11.8487 14.7575L13.5168 13.0904H0.727671C0.5348 13.0904 0.349829 13.0138 0.213448 12.8774C0.0770679 12.741 0.000450093 12.556 0.000450093 12.3632C0.000450093 12.1703 0.0770679 11.9853 0.213448 11.8489C0.349829 11.7126 0.5348 11.6359 0.727671 11.6359H13.5168L11.8487 9.96878C11.7122 9.83233 11.6356 9.64725 11.6356 9.45427C11.6356 9.2613 11.7122 9.07622 11.8487 8.93977C11.9851 8.80331 12.1702 8.72665 12.3632 8.72665C12.5562 8.72665 12.7413 8.80331 12.8777 8.93977L15.7866 11.8486C15.8542 11.9162 15.9078 11.9964 15.9444 12.0847C15.981 12.173 15.9999 12.2676 15.9999 12.3632C15.9999 12.4587 15.981 12.5534 15.9444 12.6416C15.9078 12.7299 15.8542 12.8101 15.7866 12.8777ZM3.12204 7.0599C3.2585 7.19636 3.44358 7.27302 3.63655 7.27302C3.82953 7.27302 4.01461 7.19636 4.15106 7.0599C4.28752 6.92344 4.36418 6.73837 4.36418 6.54539C4.36418 6.35241 4.28752 6.16734 4.15106 6.03088L2.483 4.36373H15.2721C15.465 4.36373 15.6499 4.28711 15.7863 4.15073C15.9227 4.01435 15.9993 3.82938 15.9993 3.63651C15.9993 3.44364 15.9227 3.25867 15.7863 3.12229C15.6499 2.98591 15.465 2.90929 15.2721 2.90929H2.483L4.15106 1.24213C4.28752 1.10568 4.36418 0.920603 4.36418 0.727625C4.36418 0.534647 4.28752 0.349573 4.15106 0.213116C4.01461 0.0766602 3.82953 2.8756e-09 3.63655 0C3.44358 -2.8756e-09 3.2585 0.0766602 3.12204 0.213116L0.213162 3.122C0.145548 3.18954 0.0919088 3.26974 0.0553119 3.35803C0.0187151 3.44631 -0.00012207 3.54094 -0.00012207 3.63651C-0.00012207 3.73208 0.0187151 3.82671 0.0553119 3.91499C0.0919088 4.00327 0.145548 4.08348 0.213162 4.15102L3.12204 7.0599Z" fill="#303030"/>`
  },
  "ica-checked-circle": {
    vb: "0 0 24 24",
    p: `<path d="M17.2685 8.57769C17.3543 8.66342 17.4224 8.76522 17.4688 8.87728C17.5153 8.98934 17.5392 9.10946 17.5392 9.23077C17.5392 9.35207 17.5153 9.47219 17.4688 9.58425C17.4224 9.69631 17.3543 9.79812 17.2685 9.88384L10.8069 16.3454C10.7212 16.4312 10.6194 16.4993 10.5073 16.5457C10.3953 16.5922 10.2752 16.6161 10.1538 16.6161C10.0325 16.6161 9.91243 16.5922 9.80037 16.5457C9.68831 16.4993 9.5865 16.4312 9.50077 16.3454L6.73154 13.5762C6.55834 13.4029 6.46103 13.168 6.46103 12.9231C6.46103 12.6781 6.55834 12.4432 6.73154 12.27C6.90475 12.0968 7.13967 11.9995 7.38462 11.9995C7.62957 11.9995 7.86449 12.0968 8.0377 12.27L10.1538 14.3873L15.9623 8.57769C16.048 8.49187 16.1498 8.42378 16.2619 8.37733C16.374 8.33087 16.4941 8.30696 16.6154 8.30696C16.7367 8.30696 16.8568 8.33087 16.9689 8.37733C17.0809 8.42378 17.1827 8.49187 17.2685 8.57769ZM24 12C24 14.3734 23.2962 16.6934 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0865C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33115 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.807 0.693605 16.6689 0.230582 14.3411C-0.232441 12.0133 0.00519941 9.60051 0.913451 7.4078C1.8217 5.21508 3.35977 3.34094 5.33316 2.02236C7.30655 0.703788 9.62663 0 12 0C15.1816 0.00335979 18.2319 1.26872 20.4816 3.51843C22.7313 5.76814 23.9966 8.81843 24 12ZM22.1538 12C22.1538 9.99176 21.5583 8.02861 20.4426 6.35882C19.3269 4.68903 17.7411 3.38759 15.8857 2.61907C14.0303 1.85055 11.9887 1.64947 10.0191 2.04126C8.04943 2.43305 6.24019 3.40011 4.82015 4.82015C3.40011 6.24019 2.43305 8.04943 2.04126 10.0191C1.64947 11.9887 1.85055 14.0303 2.61907 15.8857C3.38759 17.7411 4.68904 19.3269 6.35883 20.4426C8.02862 21.5583 9.99176 22.1538 12 22.1538C14.692 22.1508 17.2729 21.08 19.1765 19.1765C21.08 17.2729 22.1508 14.692 22.1538 12Z" />`
  }
};
function Icon({
  name = 'ica-information',
  size = 16,
  color = 'currentColor',
  title,
  style = {},
  ...rest
}) {
  const def = ICONS[name];
  if (!def) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    role: title ? 'img' : 'presentation',
    "aria-label": title,
    "aria-hidden": title ? undefined : true,
    width: size,
    height: size,
    viewBox: def.vb,
    fill: color,
    style: {
      display: 'inline-block',
      flexShrink: 0,
      verticalAlign: 'middle',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: (title ? '<title>' + title + '</title>' : '') + def.p
    }
  }, rest));
}
Object.assign(__ds_scope, { ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Icon.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Dialog — a centered modal with backdrop, title bar with close, body, and an
 * optional footer action row. Controlled via `open`.
 */
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 480,
  style = {}
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1050,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0,0,0,0.32)',
      fontFamily: 'var(--font-lato)'
    },
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose && onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      maxWidth: '92vw',
      maxHeight: '88vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--ica-color-app-surface)',
      borderRadius: 'var(--ica-border-radius-16)',
      boxShadow: 'var(--ica-elevation-6)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--ica-spacing-12)',
      padding: 'var(--ica-spacing-20) var(--ica-spacing-24)',
      borderBottom: '1px solid var(--ica-color-border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-h6)',
      fontWeight: 700,
      color: 'var(--ica-color-on-app-surface)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      color: 'var(--ica-color-subtle)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ica-cross",
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--ica-spacing-24)',
      overflow: 'auto',
      fontSize: 'var(--font-size-14)',
      color: 'var(--ica-color-on-app-surface)',
      lineHeight: 1.5
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--ica-spacing-12)',
      padding: 'var(--ica-spacing-16) var(--ica-spacing-24)',
      background: 'var(--ica-primary-opacity-active)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ConfirmationDialog.jsx
try { (() => {
/**
 * ConfirmationDialog — a preset Dialog for confirm/cancel decisions. The
 * confirm button's theme keys off `variant` (danger → error, else tertiary).
 */
function ConfirmationDialog({
  open = true,
  title = 'Are you sure?',
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'default',
  onConfirm,
  onCancel
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Dialog, {
    open: open,
    title: title,
    onClose: onCancel,
    width: 420,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
      fillMode: "outline",
      themeColor: "secondary",
      onClick: onCancel
    }, cancelLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
      themeColor: variant === 'danger' ? 'error' : 'tertiary',
      onClick: onConfirm
    }, confirmLabel))
  }, message);
}
Object.assign(__ds_scope, { ConfirmationDialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ConfirmationDialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Label.jsx
try { (() => {
/**
 * Label — a form/field label. 12px Lato, on-surface color, with optional
 * required marker and a muted "secondary" variant.
 */
function Label({
  children,
  htmlFor,
  required = false,
  secondary = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-lato)',
      fontSize: 'var(--font-size-12)',
      lineHeight: 1.5,
      color: secondary ? 'var(--ica-color-subtle)' : 'var(--ica-color-on-app-surface)',
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  }, children, required && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 1
    }
  }, "*"));
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Label.jsx", error: String((e && e.message) || e) }); }

// components/feedback/SideDialog.jsx
try { (() => {
/**
 * SideDialog — a slide-out drawer from the right edge. Features the ICANotes
 * top ribbon accent and an uppercase header, matching the product's slideouts.
 */
function SideDialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 480,
  style = {}
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1050,
      display: 'flex',
      justifyContent: 'flex-end',
      background: 'rgba(0,0,0,0.32)',
      fontFamily: 'var(--font-lato)'
    },
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose && onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      maxWidth: '96vw',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--ica-color-app-surface)',
      boxShadow: 'var(--ica-elevation-7)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: 'var(--ica-classic-blue-2, #2d74da)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--ica-spacing-12)',
      padding: 'var(--ica-spacing-24) var(--ica-spacing-40)',
      borderBottom: '1px solid #dfebf8'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: 'uppercase',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--ica-color-on-app-surface)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      color: 'var(--ica-color-subtle)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ica-cross",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 'var(--ica-spacing-24) var(--ica-spacing-40)',
      fontSize: 'var(--font-size-14)',
      color: 'var(--ica-color-on-app-surface)',
      lineHeight: 1.5
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--ica-spacing-12)',
      alignItems: 'center',
      minHeight: 80,
      padding: '0 var(--ica-spacing-40)',
      background: 'var(--ica-primary-opacity-active)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { SideDialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/SideDialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const STRIP = {
  success: 'var(--ica-tertiary-hover)',
  info: 'var(--ica-primary-subtle-active)',
  error: 'var(--ica-error)',
  warning: 'var(--ica-warning)'
};

/**
 * Toast — a transient notification card with a colored top strip keyed to the
 * state (success/info/error/warning). Render one or stack several.
 */
function Toast({
  state = 'info',
  children,
  title,
  onClose,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--ica-spacing-12)',
      minWidth: 288,
      maxWidth: 600,
      minHeight: 54,
      padding: 'var(--ica-spacing-16)',
      borderRadius: 'var(--ica-border-radius-12)',
      border: '1px solid var(--ica-color-border)',
      background: 'var(--ica-color-app-surface)',
      color: 'var(--ica-color-on-app-surface)',
      boxShadow: 'var(--ica-shadow-toast)',
      fontFamily: 'var(--font-lato)',
      fontSize: 'var(--font-size-14)',
      lineHeight: 1.5,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: 4,
      background: STRIP[state],
      opacity: 0.8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      wordBreak: 'break-word'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginBottom: 2
    }
  }, title), children), onClose && /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      opacity: 0.6,
      fontSize: 16,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Tooltip — a dark hover tooltip. Wraps its children; positions above (default)
 * or on any side.
 */
function Tooltip({
  text,
  position = 'top',
  children,
  style = {}
}) {
  const [show, setShow] = useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 6
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 6
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 6
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 6
    }
  }[position];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && text && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      zIndex: 100,
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      background: 'var(--ica-color-on-app-surface)',
      color: '#fff',
      fontFamily: 'var(--font-lato)',
      fontSize: 'var(--font-size-12)',
      lineHeight: 1.4,
      padding: '4px 8px',
      borderRadius: 'var(--ica-border-radius-6)',
      boxShadow: 'var(--ica-elevation-3)',
      ...pos,
      ...style
    }
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const {
  useEffect
} = React;
function useCss(id, css) {
  useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const CSS = `
.ica-check{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-lato);cursor:pointer;user-select:none}
.ica-check.disabled{opacity:.6;pointer-events:none}
.ica-check .box{box-sizing:border-box;flex-shrink:0;display:flex;align-items:center;justify-content:center;border:1px solid var(--ica-color-border);background:var(--ica-color-app-surface);transition:background-color .12s,border-color .12s}
.ica-check .box svg{opacity:0;transition:opacity .1s}
.ica-check.sz-sm .box{width:12px;height:12px;border-radius:3px}
.ica-check.sz-md .box{width:16px;height:16px;border-radius:4px}
.ica-check.sz-lg .box{width:20px;height:20px;border-radius:6px}
.ica-check:hover .box{border-color:var(--ica-color-border-hover)}
.ica-check.checked .box{background:var(--ica-tertiary-active);border-color:var(--ica-tertiary-subtle-active)}
.ica-check.checked .box svg{opacity:1}
.ica-check.checked:hover .box{background:var(--ica-tertiary-hover);border-color:var(--ica-tertiary-hover)}
.ica-check.indeterminate .box{background:var(--ica-color-app-surface);border-color:var(--ica-color-border)}
.ica-check .lbl{color:var(--ica-color-on-app-surface);font-size:12px;line-height:1.5}
`;
const CHECK = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 12 12",
  width: "70%",
  height: "70%",
  fill: "#fff"
}, /*#__PURE__*/React.createElement("path", {
  d: "M11.7976 1.61817L4.42066 11.7224C4.15077 12.0925 3.71095 12.0925 3.44107 11.7224L0.202416 7.30054C-0.0674719 6.93039 -0.0674719 6.33014 0.202416 5.95998C0.472303 5.58983 0.91212 5.58983 1.18201 5.95998L3.92087 9.71155L10.818 0.277616C11.0879 -0.0925386 11.5277 -0.0925386 11.7976 0.277616C12.0675 0.64777 12.0675 1.24802 11.7976 1.61817Z"
}));

/**
 * Checkbox — boolean control. Checked and indeterminate states use the
 * ICANotes green (tertiary) fill with a white check. Three sizes.
 */
function Checkbox({
  checked = false,
  indeterminate = false,
  onChange,
  label,
  size = 'medium',
  disabled = false,
  style = {}
}) {
  useCss('ica-check-css', CSS);
  const sz = size === 'small' ? 'sm' : size === 'large' ? 'lg' : 'md';
  const state = indeterminate ? 'indeterminate' : checked ? 'checked' : '';
  return /*#__PURE__*/React.createElement("label", {
    className: ['ica-check', 'sz-' + sz, state, disabled ? 'disabled' : ''].join(' '),
    style: style,
    onClick: () => onChange && onChange(!checked)
  }, /*#__PURE__*/React.createElement("span", {
    className: "box"
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: '55%',
      height: 2,
      background: 'var(--ica-color-subtle)',
      borderRadius: 1
    }
  }) : CHECK), label != null && /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
/**
 * FormField — the labelled wrapper around any control. Provides the label,
 * optional required marker, an optional right-aligned action link, a hint line,
 * and an error message. Vertical (default) or horizontal orientation.
 */
function FormField({
  label,
  required = false,
  actionTitle,
  onActionClick,
  hint,
  error,
  orientation = 'vertical',
  gap = 'var(--ica-spacing-4)',
  children,
  style = {}
}) {
  const horizontal = orientation === 'horizontal';
  const labelStyle = {
    fontFamily: 'var(--font-lato)',
    fontSize: 'var(--font-size-12)',
    lineHeight: 1.5,
    color: 'var(--ica-color-on-app-surface)',
    display: 'flex',
    alignItems: 'center'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: horizontal ? 'row' : 'column',
      alignItems: horizontal ? 'center' : 'stretch',
      gap,
      ...style
    }
  }, (label || actionTitle) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--ica-spacing-8)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 1
    }
  }, "*")), actionTitle && /*#__PURE__*/React.createElement("span", {
    onClick: onActionClick,
    style: {
      ...labelStyle,
      color: 'var(--ica-primary)',
      cursor: 'pointer'
    }
  }, actionTitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: horizontal ? undefined : '100%',
      flex: horizontal ? 1 : undefined
    }
  }, children, hint && !error && /*#__PURE__*/React.createElement("div", {
    style: {
      ...labelStyle,
      height: 24,
      color: 'var(--ica-color-subtle)'
    }
  }, hint), error && /*#__PURE__*/React.createElement("div", {
    style: {
      ...labelStyle,
      height: 24,
      color: 'var(--ica-error)'
    }
  }, error)));
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
const {
  useEffect
} = React;
function useCss(id, css) {
  useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const CSS = `
.ica-radio-group{display:flex;flex-direction:column;gap:8px;font-family:var(--font-lato)}
.ica-radio-group.horizontal{flex-direction:row;gap:16px}
.ica-radio{display:inline-flex;align-items:center;gap:8px;cursor:pointer;user-select:none}
.ica-radio.disabled{opacity:.6;pointer-events:none}
.ica-radio .dot{box-sizing:border-box;flex-shrink:0;width:16px;height:16px;border-radius:9999px;border:1px solid var(--ica-color-border);background:var(--ica-color-app-surface);transition:border-width .1s,border-color .12s}
.ica-radio:hover .dot{border-color:var(--ica-color-border-hover)}
.ica-radio.checked .dot{border:4px solid var(--ica-tertiary-active);background:var(--ica-color-app-surface)}
.ica-radio.checked:hover .dot{border-color:var(--ica-tertiary-hover)}
.ica-radio .lbl{color:var(--ica-color-on-app-surface);font-size:12px;line-height:1.5}
`;

/**
 * RadioGroup — single-select from a list of options. The selected dot uses the
 * ICANotes green (tertiary) ring. Vertical (default) or horizontal.
 */
function RadioGroup({
  options = [],
  value,
  onChange,
  orientation = 'vertical',
  disabled = false,
  name,
  style = {}
}) {
  useCss('ica-radio-css', CSS);
  return /*#__PURE__*/React.createElement("div", {
    className: 'ica-radio-group ' + (orientation === 'horizontal' ? 'horizontal' : ''),
    role: "radiogroup",
    style: style
  }, options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    const checked = val === value;
    return /*#__PURE__*/React.createElement("label", {
      key: val,
      className: ['ica-radio', checked ? 'checked' : '', disabled ? 'disabled' : ''].join(' '),
      onClick: () => onChange && onChange(val)
    }, /*#__PURE__*/React.createElement("span", {
      className: "dot"
    }), /*#__PURE__*/React.createElement("span", {
      className: "lbl"
    }, label));
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect
} = React;
function useCss(id, css) {
  useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

/* Shared input chrome for TextInput / TextArea / NumericInput / Select / DatePicker */
const INPUT_CSS = `
.ica-field{box-sizing:border-box;display:flex;align-items:center;gap:6px;width:100%;font-family:var(--font-lato);color:var(--ica-color-on-app-surface);border:1px solid rgba(61,61,61,.5);background:var(--ica-secondary-subtle);transition:background-color .12s,border-color .12s,box-shadow .12s}
.ica-field.sz-sm{height:24px;font-size:12px;border-radius:6px;padding:0 8px}
.ica-field.sz-md{height:32px;font-size:14px;border-radius:8px;padding:0 8px}
.ica-field.sz-lg{height:40px;font-size:16px;border-radius:8px;padding:0 10px}
.ica-field:hover:not(.disabled){background:var(--ica-color-surface-alt)}
.ica-field.focused{border-color:var(--ica-color-on-app-surface);box-shadow:0px 0px 2px 2px rgba(134,208,56,.48);background:var(--ica-color-app-surface)}
.ica-field.error{border-color:var(--ica-error)}
.ica-field.error.focused{box-shadow:0px 0px 0px 2px rgba(243,23,0,.2)}
.ica-field.disabled{opacity:.6;pointer-events:none}
.ica-field.flat{border-color:transparent;background:var(--ica-color-surface-alt)}
.ica-field.flat.focused{background:var(--ica-tertiary-opacity-hover);box-shadow:none;border-color:transparent}
.ica-field input,.ica-field .ica-field-native{border:none;outline:none;background:transparent;width:100%;font:inherit;color:inherit;padding:0;min-width:0}
.ica-field input::placeholder{color:var(--ica-color-subtle)}
.ica-field .ica-field-x{cursor:pointer;opacity:.7;font-size:14px;line-height:1;color:var(--ica-color-on-app-surface)}
.ica-field .ica-field-x:hover{opacity:1}
`;

/**
 * TextInput — single-line text field. Solid (default) or flat fill, three
 * sizes, error state, optional prefix/suffix adornments and a clear button.
 */
function TextInput({
  value,
  onChange,
  placeholder,
  size = 'medium',
  fillMode = 'solid',
  error = false,
  disabled = false,
  clearable = false,
  prefix = null,
  suffix = null,
  type = 'text',
  style = {},
  ...rest
}) {
  useCss('ica-input-css', INPUT_CSS);
  const [focused, setFocused] = React.useState(false);
  const sz = size === 'small' ? 'sm' : size === 'large' ? 'lg' : 'md';
  const cls = ['ica-field', 'sz-' + sz, fillMode, focused ? 'focused' : '', error ? 'error' : '', disabled ? 'disabled' : ''].join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: style
  }, prefix, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: e => onChange && onChange(e.target.value, e),
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest)), clearable && value ? /*#__PURE__*/React.createElement("span", {
    className: "ica-field-x",
    onClick: () => onChange && onChange('')
  }, "\xD7") : suffix);
}
Object.assign(__ds_scope, { INPUT_CSS, TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/DatePicker.jsx
try { (() => {
const {
  useEffect,
  useRef,
  useState
} = React;
function useCss(id, css) {
  useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const CAL_CSS = `
.ica-cal{position:absolute;z-index:50;top:calc(100% + 6px);left:0;background:var(--ica-color-app-surface);border:1px solid #000;border-radius:8px;box-shadow:var(--ica-shadow-card);padding:10px;width:252px;font-family:var(--font-lato)}
.ica-cal-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}
.ica-cal-title{font-size:14px;font-weight:700;color:var(--ica-primary);padding:4px 8px;border-radius:8px;background:var(--ica-primary-opacity-hover)}
.ica-cal-nav{cursor:pointer;color:var(--ica-secondary);padding:4px 8px;border-radius:6px;user-select:none}
.ica-cal-nav:hover{background:var(--ica-color-surface-alt)}
.ica-cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:1px}
.ica-cal-dow{font-size:11px;color:var(--ica-color-subtle);text-align:center;padding:2px 0}
.ica-cal-cell{font-size:12px;color:#666;text-align:center;padding:6px 0;border-radius:8px;cursor:pointer;border:2px solid transparent}
.ica-cal-cell:hover{background:var(--ica-color-base-opacity-hover,rgba(61,61,61,.04))}
.ica-cal-cell.muted{color:var(--ica-color-subtle);opacity:.5}
.ica-cal-cell.today{color:var(--ica-primary);font-weight:700}
.ica-cal-cell.sel{border-color:var(--ica-tertiary-opacity-border);background:var(--ica-tertiary-opacity-hover)}
`;
const DOW = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const fmt = d => d ? `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}/${d.getFullYear()}` : '';

/**
 * DatePicker — text field + calendar popover. Selected day uses the ICANotes
 * green cell treatment; today is marked in primary blue.
 */
function DatePicker({
  value,
  onChange,
  placeholder = 'mm/dd/yyyy',
  size = 'medium',
  error = false,
  disabled = false,
  style = {}
}) {
  useCss('ica-input-css', __ds_scope.INPUT_CSS);
  useCss('ica-cal-css', CAL_CSS);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(value || new Date());
  const ref = useRef(null);
  useEffect(() => {
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  const sz = size === 'small' ? 'sm' : size === 'large' ? 'lg' : 'md';
  const cls = ['ica-field', 'sz-' + sz, open ? 'focused' : '', error ? 'error' : '', disabled ? 'disabled' : ''].join(' ');
  const y = view.getFullYear(),
    m = view.getMonth();
  const first = new Date(y, m, 1).getDay();
  const days = new Date(y, m + 1, 0).getDate();
  const today = new Date();
  const cells = [];
  for (let i = 0; i < first; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(new Date(y, m, d));
  const same = (a, b) => a && b && a.toDateString() === b.toDateString();
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: {
      cursor: 'pointer'
    },
    onClick: () => !disabled && setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: value ? 'inherit' : 'var(--ica-color-subtle)'
    }
  }, value ? fmt(value) : placeholder), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ica-calendar",
    size: 16,
    color: "var(--ica-color-subtle)"
  })), open && /*#__PURE__*/React.createElement("div", {
    className: "ica-cal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ica-cal-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ica-cal-nav",
    onClick: () => setView(new Date(y, m - 1, 1))
  }, "\u2039"), /*#__PURE__*/React.createElement("span", {
    className: "ica-cal-title"
  }, MONTHS[m], " ", y), /*#__PURE__*/React.createElement("span", {
    className: "ica-cal-nav",
    onClick: () => setView(new Date(y, m + 1, 1))
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    className: "ica-cal-grid"
  }, DOW.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    className: "ica-cal-dow"
  }, d)), cells.map((d, i) => d ? /*#__PURE__*/React.createElement("div", {
    key: i,
    className: ['ica-cal-cell', same(d, today) ? 'today' : '', same(d, value) ? 'sel' : ''].join(' '),
    onClick: () => {
      onChange && onChange(d);
      setOpen(false);
    }
  }, d.getDate()) : /*#__PURE__*/React.createElement("div", {
    key: i
  })))));
}
Object.assign(__ds_scope, { DatePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/DatePicker.jsx", error: String((e && e.message) || e) }); }

// components/forms/MultiSelect.jsx
try { (() => {
const {
  useEffect,
  useRef,
  useState
} = React;
function useCss(id, css) {
  useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const MENU_CSS = `
.ica-mmenu{position:absolute;z-index:50;top:calc(100% + 4px);left:0;right:0;max-height:240px;overflow:auto;background:var(--ica-color-app-surface);border:1px solid var(--ica-color-border);border-radius:8px;box-shadow:var(--ica-shadow-card);padding:4px}
.ica-mmenu .opt{display:flex;align-items:center;gap:8px;padding:6px 10px;font-family:var(--font-lato);font-size:14px;color:var(--ica-color-on-app-surface);border-radius:6px;cursor:pointer}
.ica-mmenu .opt:hover{background:var(--ica-primary-opacity-hover)}
.ica-mmenu .opt .cbx{width:14px;height:14px;border-radius:4px;border:1px solid var(--ica-color-border);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:10px;color:#fff}
.ica-mmenu .opt.on .cbx{background:var(--ica-tertiary-active);border-color:var(--ica-tertiary-active)}
`;
function normalize(options) {
  return options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
}

/**
 * MultiSelect — choose several options; selections render as removable chips
 * inside the field. Popover list uses green checkboxes.
 */
function MultiSelect({
  options = [],
  value = [],
  onChange,
  placeholder = 'Select…',
  size = 'medium',
  error = false,
  disabled = false,
  style = {}
}) {
  useCss('ica-input-css', __ds_scope.INPUT_CSS);
  useCss('ica-mmenu-css', MENU_CSS);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  const opts = normalize(options);
  const sz = size === 'small' ? 'sm' : size === 'large' ? 'lg' : 'md';
  const cls = ['ica-field', 'sz-' + sz, open ? 'focused' : '', error ? 'error' : '', disabled ? 'disabled' : ''].join(' ');
  const toggle = v => onChange && onChange(value.includes(v) ? value.filter(x => x !== v) : [...value, v]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: {
      cursor: 'pointer',
      height: 'auto',
      minHeight: 32,
      flexWrap: 'wrap',
      padding: '4px 8px',
      gap: 4
    },
    onClick: () => !disabled && setOpen(true)
  }, value.length === 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ica-color-subtle)',
      flex: 1
    }
  }, placeholder), value.map(v => {
    const o = opts.find(x => x.value === v);
    return /*#__PURE__*/React.createElement(__ds_scope.Chip, {
      key: v,
      label: o ? o.label : v,
      removable: true,
      onRemove: () => toggle(v)
    });
  })), open && /*#__PURE__*/React.createElement("div", {
    className: "ica-mmenu"
  }, opts.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.value,
    className: 'opt' + (value.includes(o.value) ? ' on' : ''),
    onClick: () => toggle(o.value)
  }, /*#__PURE__*/React.createElement("span", {
    className: "cbx"
  }, value.includes(o.value) ? '✓' : ''), /*#__PURE__*/React.createElement("span", null, o.label)))));
}
Object.assign(__ds_scope, { MultiSelect });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/MultiSelect.jsx", error: String((e && e.message) || e) }); }

// components/forms/NumericInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect
} = React;
function useCss(id, css) {
  useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

/**
 * NumericInput — number field with stepper controls. Clamps to min/max and
 * increments by step.
 */
function NumericInput({
  value = 0,
  onChange,
  min = -Infinity,
  max = Infinity,
  step = 1,
  size = 'medium',
  error = false,
  disabled = false,
  style = {},
  ...rest
}) {
  useCss('ica-input-css', __ds_scope.INPUT_CSS);
  const [focused, setFocused] = React.useState(false);
  const sz = size === 'small' ? 'sm' : size === 'large' ? 'lg' : 'md';
  const cls = ['ica-field', 'sz-' + sz, focused ? 'focused' : '', error ? 'error' : '', disabled ? 'disabled' : ''].join(' ');
  const clamp = n => Math.min(max, Math.max(min, n));
  const bump = d => onChange && onChange(clamp((Number(value) || 0) + d * step));
  const col = {
    display: 'flex',
    flexDirection: 'column',
    marginRight: -2
  };
  const btn = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'var(--ica-color-subtle)',
    fontSize: 8,
    lineHeight: '8px',
    height: 8,
    width: 14,
    userSelect: 'none'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    disabled: disabled,
    onChange: e => onChange && onChange(clamp(Number(e.target.value))),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: col
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
Object.assign(__ds_scope, { NumericInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/NumericInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const {
  useEffect,
  useRef,
  useState
} = React;
function useCss(id, css) {
  useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const MENU_CSS = `
.ica-menu{position:absolute;z-index:50;top:calc(100% + 4px);left:0;right:0;max-height:240px;overflow:auto;background:var(--ica-color-app-surface);border:1px solid var(--ica-color-border);border-radius:8px;box-shadow:var(--ica-shadow-card);padding:4px}
.ica-menu .opt{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:6px 10px;font-family:var(--font-lato);font-size:14px;color:var(--ica-color-on-app-surface);border-radius:6px;cursor:pointer;white-space:nowrap}
.ica-menu .opt:hover{background:var(--ica-primary-opacity-hover)}
.ica-menu .opt.selected{background:var(--ica-tertiary-opacity-hover);color:var(--ica-tertiary-on-tertiary)}
.ica-menu .opt .tick{color:var(--ica-tertiary-emphasis);font-weight:700}
.ica-select-ph{color:var(--ica-color-subtle)}
.ica-select-caret{color:var(--ica-color-subtle);font-size:10px;flex-shrink:0}
`;
function normalize(options) {
  return options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
}

/**
 * Select — single-choice dropdown. Field-styled trigger with a popover list;
 * the selected row is marked with a green check.
 */
function Select({
  options = [],
  value,
  onChange,
  placeholder = 'Select…',
  size = 'medium',
  error = false,
  disabled = false,
  style = {}
}) {
  useCss('ica-input-css', __ds_scope.INPUT_CSS);
  useCss('ica-menu-css', MENU_CSS);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  const opts = normalize(options);
  const sel = opts.find(o => o.value === value);
  const sz = size === 'small' ? 'sm' : size === 'large' ? 'lg' : 'md';
  const cls = ['ica-field', 'sz-' + sz, open ? 'focused' : '', error ? 'error' : '', disabled ? 'disabled' : ''].join(' ');
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: {
      cursor: 'pointer'
    },
    onClick: () => !disabled && setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", {
    className: sel ? '' : 'ica-select-ph',
    style: {
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, sel ? sel.label : placeholder), /*#__PURE__*/React.createElement("span", {
    className: "ica-select-caret"
  }, "\u25BE")), open && /*#__PURE__*/React.createElement("div", {
    className: "ica-menu"
  }, opts.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.value,
    className: 'opt' + (o.value === value ? ' selected' : ''),
    onClick: () => {
      onChange && onChange(o.value);
      setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("span", null, o.label), o.value === value && /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }, "\u2713")))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextArea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect
} = React;
function useCss(id, css) {
  useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

/**
 * TextArea — multi-line text field. Shares the input chrome with TextInput;
 * auto-sizes via the rows prop.
 */
function TextArea({
  value,
  onChange,
  placeholder,
  rows = 4,
  size = 'medium',
  error = false,
  disabled = false,
  style = {},
  ...rest
}) {
  useCss('ica-input-css', __ds_scope.INPUT_CSS);
  const [focused, setFocused] = React.useState(false);
  const sz = size === 'small' ? 'sm' : size === 'large' ? 'lg' : 'md';
  const cls = ['ica-field', 'sz-' + sz, focused ? 'focused' : '', error ? 'error' : '', disabled ? 'disabled' : ''].join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: {
      height: 'auto',
      alignItems: 'stretch',
      padding: '6px 8px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    className: "ica-field-native",
    style: {
      resize: 'vertical',
      lineHeight: 1.5,
      fontFamily: 'inherit'
    },
    rows: rows,
    value: value,
    onChange: e => onChange && onChange(e.target.value, e),
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest)));
}
Object.assign(__ds_scope, { TextArea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextArea.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
const {
  useEffect
} = React;
function useCss(id, css) {
  useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const CSS = `
.ica-toggle{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-lato);cursor:pointer;user-select:none}
.ica-toggle.disabled{opacity:.6;pointer-events:none}
.ica-toggle .track{box-sizing:border-box;position:relative;flex-shrink:0;border:1px solid var(--ica-color-subtle);background:var(--ica-color-surface-alt);border-radius:9999px;transition:background-color .15s,border-color .15s}
.ica-toggle .thumb{position:absolute;top:0;box-sizing:border-box;border:1px solid var(--ica-color-subtle);background:var(--ica-color-surface-alt);border-radius:9999px;transition:left .15s,background-color .15s,border-color .15s}
.ica-toggle.sz-sm .track{width:40px;height:24px}
.ica-toggle.sz-sm .thumb{width:24px;height:24px;left:0}
.ica-toggle.sz-sm.on .thumb{left:16px}
.ica-toggle.sz-md .track{width:48px;height:32px}
.ica-toggle.sz-md .thumb{width:32px;height:32px;left:0}
.ica-toggle.sz-md.on .thumb{left:16px}
.ica-toggle.sz-lg .track{width:64px;height:40px}
.ica-toggle.sz-lg .thumb{width:40px;height:40px;left:0}
.ica-toggle.sz-lg.on .thumb{left:24px}
.ica-toggle.on .track{background:var(--ica-tertiary-active);border-color:var(--ica-tertiary-hover)}
.ica-toggle.on .thumb{background:var(--ica-color-app-surface);border-color:var(--ica-tertiary-hover)}
.ica-toggle:hover.off .track{border-color:var(--ica-color-on-app-surface)}
.ica-toggle:hover.on .track{background:var(--ica-tertiary-hover);border-color:var(--ica-tertiary-hover)}
.ica-toggle .lbl{color:var(--ica-color-on-app-surface);font-size:14px}
`;

/**
 * Toggle — on/off switch. The "on" state uses the ICANotes green track with a
 * white thumb. Three sizes.
 */
function Toggle({
  checked = false,
  onChange,
  label,
  size = 'medium',
  disabled = false,
  style = {}
}) {
  useCss('ica-toggle-css', CSS);
  const sz = size === 'small' ? 'sm' : size === 'large' ? 'lg' : 'md';
  return /*#__PURE__*/React.createElement("label", {
    className: ['ica-toggle', 'sz-' + sz, checked ? 'on' : 'off', disabled ? 'disabled' : ''].join(' '),
    style: style,
    onClick: () => onChange && onChange(!checked)
  }, /*#__PURE__*/React.createElement("span", {
    className: "track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "thumb"
  })), label != null && /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, label));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/layout/Divider.jsx
try { (() => {
/**
 * Divider — a hairline rule. Horizontal (default) or vertical, with an optional
 * centered label for horizontal dividers.
 */
function Divider({
  orientation = 'horizontal',
  label,
  color = 'var(--ica-color-border)',
  style = {}
}) {
  if (orientation === 'vertical') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        alignSelf: 'stretch',
        background: color,
        ...style
      }
    });
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--ica-spacing-12)',
        width: '100%',
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-lato)',
        fontSize: 'var(--font-size-12)',
        color: 'var(--ica-color-subtle)'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: color
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: 1,
      background: color,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Divider.jsx", error: String((e && e.message) || e) }); }

// components/layout/FloatingActionsBar.jsx
try { (() => {
/**
 * FloatingActionsBar — a sticky action bar for forms/editors. Pins actions to
 * the bottom of its container with a tinted primary background.
 */
function FloatingActionsBar({
  children,
  align = 'flex-end',
  sticky = true,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: align,
      gap: 'var(--ica-spacing-12)',
      height: 64,
      padding: '0 var(--ica-spacing-40)',
      width: '100%',
      boxSizing: 'border-box',
      background: 'var(--ica-primary-opacity-active)',
      position: sticky ? 'sticky' : 'static',
      bottom: 0,
      fontFamily: 'var(--font-lato)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { FloatingActionsBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/FloatingActionsBar.jsx", error: String((e && e.message) || e) }); }

// components/layout/NoteWidget.jsx
try { (() => {
const {
  useState
} = React;
/**
 * NoteWidget — an expandable clinical-note row: caret, note type, date/time,
 * status, clinician-initials badge, ribbon for signed notes, and a collapsible
 * HTML preview body. The core row of a chart's document list.
 */
function NoteWidget({
  note = {},
  defaultExpanded = false,
  actions,
  style = {}
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const statusColor = note.status === 'signed' ? 'var(--ica-tertiary-on-tertiary)' : note.status === 'in-progress' ? 'var(--ica-warning-on-surface)' : 'var(--ica-color-subtle)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--ica-color-border)',
      borderRadius: 'var(--ica-border-radius-8)',
      background: 'var(--ica-color-app-surface)',
      fontFamily: 'var(--font-lato)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ica-spacing-8)',
      padding: 'var(--ica-spacing-8) var(--ica-spacing-12)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setExpanded(e => !e),
    style: {
      cursor: 'pointer',
      color: 'var(--ica-color-subtle)',
      transform: expanded ? 'rotate(90deg)' : 'none',
      transition: 'transform .12s',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ica-caret-left",
    size: 12,
    style: {
      transform: 'rotate(180deg)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 'var(--font-size-14)',
      color: 'var(--ica-color-on-app-surface)'
    }
  }, note.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-12)',
      color: 'var(--ica-color-subtle)'
    }
  }, note.date), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-12)',
      color: statusColor,
      fontStyle: note.status === 'in-progress' ? 'italic' : 'normal'
    }
  }, note.showStatus), note.initials && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'var(--ica-primary)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, note.initials), note.status === 'signed' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ica-check-circle-1",
    size: 18,
    color: "var(--ica-tertiary-emphasis)",
    style: {
      marginLeft: note.initials ? 0 : 'auto'
    }
  }), actions && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, actions)), expanded && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--ica-spacing-12) var(--ica-spacing-12) var(--ica-spacing-32)',
      fontSize: 'var(--font-size-14)',
      color: 'var(--ica-color-on-app-surface)',
      lineHeight: 1.5
    },
    dangerouslySetInnerHTML: typeof note.text === 'string' ? {
      __html: note.text
    } : undefined
  }, typeof note.text === 'string' ? undefined : note.text));
}
Object.assign(__ds_scope, { NoteWidget });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/NoteWidget.jsx", error: String((e && e.message) || e) }); }

// components/layout/Panel.jsx
try { (() => {
/**
 * Panel — the standard content card: white surface, 16px radius, soft card
 * shadow, 24px padding. The primary container for grouped content and forms.
 */
function Panel({
  children,
  padding = 'var(--ica-spacing-16) var(--ica-spacing-24) var(--ica-spacing-24)',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 'var(--ica-spacing-16)',
      padding,
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: 'var(--ica-border-radius-16)',
      background: 'var(--ica-color-app-surface)',
      boxShadow: 'var(--ica-shadow-card)',
      fontFamily: 'var(--font-lato)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Panel.jsx", error: String((e && e.message) || e) }); }

// components/layout/PanelHeading.jsx
try { (() => {
/**
 * PanelHeading — a panel's title row: title (+ optional subtitle) on the left,
 * actions on the right. Sits at the top of a Panel.
 */
function PanelHeading({
  title,
  subtitle,
  actions,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '100%',
      gap: 'var(--ica-spacing-16)',
      fontFamily: 'var(--font-lato)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--font-size-h6)',
      fontWeight: 700,
      color: 'var(--ica-color-on-app-surface)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--font-size-12)',
      color: 'var(--ica-color-subtle)'
    }
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ica-spacing-8)'
    }
  }, actions));
}
Object.assign(__ds_scope, { PanelHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PanelHeading.jsx", error: String((e && e.message) || e) }); }

// components/layout/Tabs.jsx
try { (() => {
const {
  useEffect
} = React;
function useCss(id, css) {
  useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const CSS = `
.ica-tabs{font-family:var(--font-lato)}
.ica-tabs-bar{display:flex;gap:24px;border-bottom:1px solid var(--ica-color-border)}
.ica-tabs.sz-sm .ica-tab{font-size:14px;height:32px}
.ica-tabs.sz-md .ica-tab{font-size:16px;height:40px}
.ica-tabs.sz-lg .ica-tab{font-size:20px;height:56px}
.ica-tab{position:relative;display:inline-flex;align-items:center;gap:6px;color:var(--ica-color-subtle);cursor:pointer;background:none;border:none;padding:0;font-family:inherit;white-space:nowrap}
.ica-tab:hover{color:var(--ica-secondary-hover)}
.ica-tab.active{color:var(--ica-primary)}
.ica-tab.active::after{content:'';position:absolute;bottom:2px;left:0;right:0;height:2px;background:var(--ica-primary)}
.ica-tab.error{color:var(--ica-error)}
.ica-tab .dot{width:8px;height:8px;border-radius:50%;background:var(--ica-error)}
.ica-tab .cnt{font-size:.72em;padding:0 6px;border-radius:9999px;background:var(--ica-color-base-subtle);color:var(--ica-color-on-app-surface)}
.ica-tabs-body{padding:24px 0}
`;

/**
 * Tabs — horizontal tab strip. Active tab is ICANotes blue with an underline;
 * tabs support an error state and a notification dot or count.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  size = 'medium',
  renderPanel = true,
  style = {}
}) {
  useCss('ica-tabs-css', CSS);
  const sz = size === 'small' ? 'sm' : size === 'large' ? 'lg' : 'md';
  const active = value != null ? value : tabs[0] && (tabs[0].id ?? 0);
  const current = tabs.find((t, i) => (t.id ?? i) === active);
  return /*#__PURE__*/React.createElement("div", {
    className: 'ica-tabs sz-' + sz,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ica-tabs-bar"
  }, tabs.map((t, i) => {
    const id = t.id ?? i;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      className: ['ica-tab', id === active ? 'active' : '', t.error ? 'error' : ''].join(' '),
      onClick: () => onChange && onChange(id)
    }, t.icon, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      className: "cnt"
    }, t.count), t.notification && /*#__PURE__*/React.createElement("span", {
      className: "dot"
    }));
  })), renderPanel && current && current.content != null && /*#__PURE__*/React.createElement("div", {
    className: "ica-tabs-body"
  }, current.content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/layout/Widget.jsx
try { (() => {
/**
 * Widget — a generic dashboard container: white card with a title row and an
 * optional action slot, then arbitrary body content.
 */
function Widget({
  title,
  actions,
  children,
  minHeight,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--ica-color-app-surface)',
      borderRadius: 'var(--ica-border-radius-12)',
      boxShadow: 'var(--ica-shadow-card)',
      overflow: 'hidden',
      minHeight,
      fontFamily: 'var(--font-lato)',
      ...style
    }
  }, (title || actions) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--ica-spacing-8)',
      padding: 'var(--ica-spacing-16) var(--ica-spacing-20)',
      borderBottom: '1px solid var(--ica-color-border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-16)',
      fontWeight: 700,
      color: 'var(--ica-color-on-app-surface)'
    }
  }, title), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ica-spacing-8)'
    }
  }, actions)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--ica-spacing-20)',
      flex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { Widget });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Widget.jsx", error: String((e && e.message) || e) }); }

// ui_kits/provider-app/screens.jsx
try { (() => {
/* Provider-app screens, composed from ICANotes DS components. */
const NS = window.ICANotesDesignSystem_94514a;
const {
  Panel,
  PanelHeading,
  Widget,
  NoteWidget,
  Divider,
  Tabs,
  Button,
  IconButton,
  Chip,
  Icon,
  ButtonGroup,
  Toast,
  FloatingActionsBar,
  FormField,
  Select
} = NS;
function StatTile({
  label,
  value,
  tone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: '#fff',
      borderRadius: 12,
      boxShadow: 'var(--ica-shadow-card)',
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: tone || 'var(--ica-primary)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ica-color-subtle)',
      marginTop: 2
    }
  }, label));
}
function Dashboard() {
  const appts = [['9:00 AM', 'Jordan Rivera', 'Intake — 60 min', 'info'], ['10:30 AM', 'Sam Park', 'Progress note — 30 min', 'success'], ['1:00 PM', 'DBT Skills Group', '8 clients — 90 min', 'info'], ['3:15 PM', 'Alex Chen', 'Med management — 20 min', 'warning']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Appointments today",
    value: "8"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Notes to sign",
    value: "5",
    tone: "var(--ica-warning-on-surface)"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Unread messages",
    value: "4",
    tone: "var(--ica-error)"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Open tasks",
    value: "12",
    tone: "var(--ica-tertiary-emphasis)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Widget, {
    title: "Today's schedule",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "small",
      fillMode: "flat"
    }, "View calendar")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, appts.map(([t, who, what, tone], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '10px 0',
      borderTop: i ? '1px solid var(--ica-color-border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 74,
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ica-color-on-app-surface)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: `var(--ica-${tone})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, who), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ica-color-subtle)'
    }
  }, what)), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "ica-more-vertical"
    })
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Widget, {
    title: "Notes to sign"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(NoteWidget, {
    note: {
      name: 'Progress Note',
      date: 'Today',
      status: 'in-progress',
      showStatus: 'In progress',
      initials: 'DR'
    }
  }), /*#__PURE__*/React.createElement(NoteWidget, {
    note: {
      name: 'Psychiatric Eval',
      date: 'Yesterday',
      status: 'in-progress',
      showStatus: 'In progress',
      initials: 'DR'
    }
  }))), /*#__PURE__*/React.createElement(Toast, {
    state: "warning",
    title: "5 notes need signature"
  }, "Notes older than 48 hours affect compliance."))));
}
function PatientChart() {
  const [tab, setTab] = React.useState('notes');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/grey_person.jpg",
    alt: "",
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700
    }
  }, "Jordan Rivera"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ica-color-subtle)'
    }
  }, "DOB 03/14/1991 \xB7 34y \xB7 MRN 004821 \xB7 She/Her")), /*#__PURE__*/React.createElement(Chip, {
    label: "Active",
    themeColor: "success"
  }), /*#__PURE__*/React.createElement(Chip, {
    label: "Telehealth",
    themeColor: "info"
  }), /*#__PURE__*/React.createElement(Button, {
    fillMode: "outline",
    themeColor: "secondary",
    size: "small",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "ica-pencil",
      size: 12
    })
  }, "Edit"), /*#__PURE__*/React.createElement(Button, {
    themeColor: "tertiary",
    size: "small",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "ica-plus",
      size: 12,
      color: "#465c2f"
    })
  }, "New note")), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    renderPanel: false,
    tabs: [{
      id: 'summary',
      label: 'Summary'
    }, {
      id: 'notes',
      label: 'Notes',
      count: 12
    }, {
      id: 'meds',
      label: 'Medications'
    }, {
      id: 'billing',
      label: 'Billing',
      notification: true
    }, {
      id: 'documents',
      label: 'Documents'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(NoteWidget, {
    defaultExpanded: true,
    note: {
      name: 'Progress Note',
      date: 'Mar 3, 2026 10:15 AM',
      status: 'signed',
      showStatus: 'Signed',
      initials: 'DR',
      text: '<p><b>S:</b> Client reports improved sleep and reduced anxiety over the past two weeks. Denies SI/HI.</p><p><b>A:</b> GAD, improving. <b>P:</b> Continue sertraline 50mg; follow up in 4 weeks.</p>'
    }
  }), /*#__PURE__*/React.createElement(NoteWidget, {
    note: {
      name: 'Psychiatric Assessment',
      date: 'Feb 18, 2026 2:00 PM',
      status: 'signed',
      showStatus: 'Signed, Completed via Chart',
      initials: 'DR'
    }
  }), /*#__PURE__*/React.createElement(NoteWidget, {
    note: {
      name: 'Treatment Plan',
      date: 'Feb 4, 2026 9:30 AM',
      status: 'in-progress',
      showStatus: 'In progress',
      initials: 'AL'
    }
  }), /*#__PURE__*/React.createElement(NoteWidget, {
    note: {
      name: 'Intake Assessment',
      date: 'Jan 21, 2026 11:00 AM',
      status: 'signed',
      showStatus: 'Signed',
      initials: 'AL'
    }
  }))));
}
function CalendarScreen() {
  const [view, setView] = React.useState('Week');
  const days = ['Mon 2', 'Tue 3', 'Wed 4', 'Thu 5', 'Fri 6'];
  const hours = ['8', '9', '10', '11', '12', '1', '2', '3', '4'];
  const events = {
    0: [[1, 'Jordan R.', 'info']],
    1: [[2, 'Sam P.', 'success'], [5, 'Group', 'info']],
    2: [[0, 'Alex C.', 'warning']],
    3: [[3, 'M. Diaz', 'info']],
    4: [[1, 'K. Osei', 'success'], [4, 'R. Vale', 'info']]
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(PanelHeading, {
    title: "March 2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    items: ['Day', 'Week', 'Month'],
    value: view,
    onChange: setView
  }), /*#__PURE__*/React.createElement(Button, {
    fillMode: "ghost",
    size: "small",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "ica-plus",
      color: "#fff",
      size: 12
    })
  }, "Add event"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '40px repeat(5,1fr)',
      width: '100%',
      border: '1px solid var(--ica-color-border)',
      borderRadius: 8,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--ica-color-border)',
      background: 'var(--ica-color-surface-alt)'
    }
  }), days.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      padding: '8px 6px',
      fontSize: 12,
      fontWeight: 700,
      textAlign: 'center',
      borderLeft: '1px solid var(--ica-color-border)',
      borderBottom: '1px solid var(--ica-color-border)',
      background: 'var(--ica-color-surface-alt)'
    }
  }, d)), hours.map((h, hi) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ica-color-subtle)',
      textAlign: 'right',
      padding: '2px 4px',
      borderBottom: '1px solid var(--ica-color-border)'
    }
  }, h), days.map((d, di) => {
    const ev = (events[di] || []).find(e => e[0] === hi);
    return /*#__PURE__*/React.createElement("div", {
      key: di,
      style: {
        minHeight: 34,
        borderLeft: '1px solid var(--ica-color-border)',
        borderBottom: '1px solid var(--ica-color-border)',
        padding: 2
      }
    }, ev && /*#__PURE__*/React.createElement("div", {
      style: {
        background: `var(--ica-${ev[2]}-subtle)`,
        borderLeft: `3px solid var(--ica-${ev[2]})`,
        borderRadius: 4,
        padding: '3px 6px',
        fontSize: 11,
        fontWeight: 700,
        color: 'var(--ica-color-on-app-surface)'
      }
    }, ev[1]));
  }))))));
}
function Placeholder({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(PanelHeading, {
    title: title,
    subtitle: "Screen not included in this kit"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ica-color-subtle)',
      fontSize: 14
    }
  }, "This surface exists in the ICANotes+ product but is out of scope for this UI kit sample.")));
}
Object.assign(window, {
  Dashboard,
  PatientChart,
  CalendarScreen,
  Placeholder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/provider-app/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/provider-app/shell.jsx
try { (() => {
/* Provider-app shell: Header + Sidebar. Exports to window for the kit's babel scripts. */
const {
  Icon,
  TextInput,
  Button,
  IconButton
} = window.ICANotesDesignSystem_94514a;
const NAV = [{
  id: 'dashboard',
  label: 'Dashboard',
  icon: '../../assets/svg/nav-dashboard.svg'
}, {
  id: 'charts',
  label: 'Chart Room',
  icon: '../../assets/svg/nav-charts.svg'
}, {
  id: 'calendar',
  label: 'Calendar',
  icon: '../../assets/svg/nav-calendar.svg'
}, {
  id: 'messages',
  label: 'Messages',
  icon: '../../assets/svg/nav-messages.svg'
}, {
  id: 'reports',
  label: 'Reports',
  icon: '../../assets/svg/nav-reports.svg'
}, {
  id: 'billing',
  label: 'Billing',
  icon: '../../assets/svg/nav-billing.svg'
}];
function Sidebar({
  active,
  onNavigate
}) {
  const item = (n, pinned) => {
    const on = active === n.id;
    return /*#__PURE__*/React.createElement("a", {
      key: n.id,
      onClick: () => onNavigate(n.id),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        cursor: 'pointer',
        textDecoration: 'none',
        width: 88,
        padding: '8px 0',
        borderRadius: 10,
        background: on ? 'var(--ica-primary-opacity-active)' : 'transparent',
        marginTop: pinned ? 'auto' : 0,
        marginBottom: pinned ? 8 : 0
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: n.icon,
      alt: "",
      style: {
        width: 30,
        height: 30,
        opacity: on ? 1 : 0.75,
        filter: on ? 'none' : 'grayscale(1)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '.02em',
        textAlign: 'center',
        lineHeight: 1.1,
        color: on ? 'var(--ica-primary)' : 'var(--ica-classic-blue, #082f43)'
      }
    }, n.label));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      flexShrink: 0,
      height: '100%',
      background: '#fff',
      boxShadow: 'inset -9px 0 4px -8px rgba(0,0,0,.2)',
      borderRight: '.5px solid lightgrey'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 26,
      height: '100%',
      paddingTop: 24,
      boxSizing: 'border-box'
    }
  }, NAV.map(n => item(n)), item({
    id: 'settings',
    label: 'Settings',
    icon: '../../assets/svg/nav-settings.svg'
  }, true)));
}
function Header({
  title,
  subtitle
}) {
  const [q, setQ] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      height: 64,
      padding: '0 24px',
      background: '#fff',
      borderBottom: '1px solid lightgrey',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ICANotes_Logo_Color.png",
    alt: "ICANotes",
    style: {
      height: 34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.75px',
      lineHeight: 1.1
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ica-color-subtle)'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      width: 300
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    value: q,
    onChange: setQ,
    placeholder: "Search charts, clients\u2026",
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "ica-zoom",
      size: 14,
      color: "var(--ica-color-subtle)"
    }),
    clearable: true
  })), /*#__PURE__*/React.createElement(Button, {
    fillMode: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "ica-plus",
      color: "#fff",
      size: 12
    })
  }, "New chart"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      paddingLeft: 20,
      marginLeft: 4,
      borderLeft: '1px solid rgba(151,151,151,.32)',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ica-chat-circle-text",
    size: 22,
    color: "var(--ica-color-subtle)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -6,
      right: -8,
      minWidth: 16,
      height: 16,
      padding: '0 4px',
      borderRadius: 9999,
      background: 'var(--ica-error)',
      color: '#fff',
      fontSize: 10,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "4")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--ica-primary)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 13
    }
  }, "DR"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, "Dr. Reyes \u25BE"))));
}
Object.assign(window, {
  Sidebar,
  Header,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/provider-app/shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/support-portal/screens.jsx
try { (() => {
/* Support Portal screens: Login, Practice Users grid + row context menu, Feature Flags. */
const NS = window.ICANotesDesignSystem_94514a;
const {
  TextInput,
  Button,
  Checkbox,
  Icon,
  Toast,
  Dialog,
  FormField,
  Select,
  DatePicker,
  RadioGroup,
  Panel
} = NS;

/* ---------- Login (Angular Material card style) ---------- */
function Login({
  onLogin
}) {
  const [email, setEmail] = React.useState('dana.ops@icanotes.com');
  const [pw, setPw] = React.useState('••••••••••');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--ica-color-surface-alt)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 360,
      background: '#fff',
      borderRadius: 4,
      boxShadow: 'var(--ica-elevation-4)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ICANotes_Logo_Color.png",
    alt: "ICANotes",
    style: {
      height: 32,
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      margin: '4px 0 20px'
    }
  }, "Support Portal Login"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Email"
  }, /*#__PURE__*/React.createElement(TextInput, {
    value: email,
    onChange: setEmail,
    placeholder: "email"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Password"
  }, /*#__PURE__*/React.createElement(TextInput, {
    value: pw,
    onChange: setPw,
    type: "password",
    placeholder: "password"
  })), /*#__PURE__*/React.createElement(Button, {
    themeColor: "primary",
    stretch: true,
    onClick: onLogin
  }, "Login"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--ica-color-subtle)',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--ica-color-border)'
    }
  }), "or", /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--ica-color-border)'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    fillMode: "outline",
    themeColor: "secondary",
    stretch: true,
    onClick: onLogin
  }, "Login with Google")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontSize: 11,
      color: 'var(--ica-color-subtle)',
      textAlign: 'center'
    }
  }, "MFA required \xB7 authorized staff only")));
}

/* ---------- shared mini data-grid ---------- */
function Grid({
  columns,
  rows,
  onRowMenu,
  renderCell
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--ica-color-border)',
      borderRadius: 4,
      overflow: 'auto',
      background: '#fff',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: 'collapse',
      width: '100%',
      fontSize: 13,
      fontFamily: 'var(--font-lato)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.field,
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 1,
      textAlign: 'left',
      padding: '8px 10px',
      background: 'var(--ica-color-surface-alt)',
      borderBottom: '1px solid var(--ica-color-border-alt)',
      fontWeight: 700,
      whiteSpace: 'nowrap',
      width: c.width
    }
  }, c.title, c.locked && /*#__PURE__*/React.createElement(Icon, {
    name: "ica-lock",
    size: 11,
    color: "var(--ica-color-subtle)",
    style: {
      marginLeft: 4
    }
  })))), /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.field,
    style: {
      position: 'sticky',
      top: 33,
      zIndex: 1,
      padding: '4px 6px',
      background: '#fff',
      borderBottom: '1px solid var(--ica-color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22,
      border: '1px solid var(--ica-color-border)',
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      padding: '0 6px',
      color: 'var(--ica-color-subtle)',
      fontSize: 11
    }
  }, "\u25BD"))))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    onContextMenu: e => {
      e.preventDefault();
      onRowMenu && onRowMenu(e, r);
    },
    style: {
      cursor: 'context-menu',
      background: ri % 2 ? 'var(--ica-neutral-light-1, #fbfbfb)' : '#fff'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--ica-primary-opacity-hover)',
    onMouseLeave: e => e.currentTarget.style.background = ri % 2 ? '#fbfbfb' : '#fff'
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.field,
    style: {
      padding: '7px 10px',
      borderBottom: '1px solid var(--ica-color-border)',
      whiteSpace: 'nowrap',
      height: 36,
      boxSizing: 'border-box'
    }
  }, renderCell ? renderCell(c, r) : r[c.field])))))));
}

/* ---------- Practice Users ---------- */
const PU_COLS = [{
  field: 'email',
  title: 'Email Address',
  width: 240,
  locked: true
}, {
  field: 'firstName',
  title: 'First Name',
  width: 120,
  locked: true
}, {
  field: 'lastName',
  title: 'Last Name',
  width: 120,
  locked: true
}, {
  field: 'practiceId',
  title: 'Practice ID',
  width: 90
}, {
  field: 'practiceName',
  title: 'Practice',
  width: 170
}, {
  field: 'role',
  title: 'Role',
  width: 120
}, {
  field: 'planType',
  title: 'Subscription',
  width: 130
}, {
  field: 'accountStatus',
  title: 'Account Status',
  width: 130
}, {
  field: 'mfaEnabled',
  title: 'MFA',
  width: 70,
  bool: true
}, {
  field: 'isActivePractice',
  title: 'Practice Active',
  width: 110,
  bool: true
}];
const PU_ROWS = [{
  email: 'l.okafor@brightpath.com',
  firstName: 'Lena',
  lastName: 'Okafor',
  practiceId: '10241',
  practiceName: 'Bright Path Behavioral',
  role: 'Provider',
  planType: 'Group',
  accountStatus: 'Active',
  mfaEnabled: true,
  isActivePractice: true
}, {
  email: 'm.santos@harborcw.org',
  firstName: 'Miguel',
  lastName: 'Santos',
  practiceId: '10388',
  practiceName: 'Harbor Counseling & Wellness',
  role: 'Owner',
  planType: 'Solo',
  accountStatus: 'Active',
  mfaEnabled: true,
  isActivePractice: true
}, {
  email: 'admin@cedarpsych.com',
  firstName: 'Dana',
  lastName: 'Whitmore',
  practiceId: '09912',
  practiceName: 'Cedar Psychiatry',
  role: 'Admin',
  planType: 'Group',
  accountStatus: 'Locked',
  mfaEnabled: false,
  isActivePractice: true
}, {
  email: 'j.reed@northstarmh.com',
  firstName: 'Jamie',
  lastName: 'Reed',
  practiceId: '10455',
  practiceName: 'Northstar Mental Health',
  role: 'Provider',
  planType: 'Trial',
  accountStatus: 'Pending',
  mfaEnabled: false,
  isActivePractice: true
}, {
  email: 'k.patel@evergreencc.com',
  firstName: 'Kavya',
  lastName: 'Patel',
  practiceId: '08820',
  practiceName: 'Evergreen Care Collective',
  role: 'Provider',
  planType: 'Group',
  accountStatus: 'Active',
  mfaEnabled: true,
  isActivePractice: false
}, {
  email: 't.nguyen@lakesidebh.com',
  firstName: 'Thanh',
  lastName: 'Nguyen',
  practiceId: '10502',
  practiceName: 'Lakeside Behavioral Health',
  role: 'Owner',
  planType: 'Solo',
  accountStatus: 'Active',
  mfaEnabled: true,
  isActivePractice: true
}, {
  email: 'r.delgado@summitpsy.com',
  firstName: 'Rosa',
  lastName: 'Delgado',
  practiceId: '10190',
  practiceName: 'Summit Psychology Group',
  role: 'Provider',
  planType: 'Group',
  accountStatus: 'Disabled',
  mfaEnabled: false,
  isActivePractice: true
}];
const MENU = ['Disable MFA Device', 'Extend Trial', 'Cancel Subscription', 'Renew Subscription', 'Activate Subscription', 'Disable Subscription', 'Activate User', 'Disable User', 'Activate Organization', 'Disable Organization', 'Merchant Info', 'Create Temporary User', 'Approve user for eRx set up', 'Practice Clearinghouse Information', 'Statement Vendor Credentials', 'User Eligibility Credentials', 'Configure Lab Practices', 'Manage User Rules', 'Manage Organization Rules', 'Sync with Zoho', 'Link to Zoho', 'Sales-Led Self-Subscribe', 'Kno2 Credentials'];
function StatusPill({
  v
}) {
  const map = {
    Active: 'success',
    Locked: 'warning',
    Pending: 'info',
    Disabled: 'error'
  };
  const t = map[v] || 'base';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '1px 8px',
      borderRadius: 9999,
      fontSize: 11,
      fontWeight: 700,
      background: `var(--ica-${t}-subtle)`,
      color: `var(--ica-${t}-on-surface, var(--ica-color-on-app-surface))`,
      border: `1px solid var(--ica-${t}-emphasis)`
    }
  }, v);
}
function PracticeUsers() {
  const [menu, setMenu] = React.useState(null); // {x,y,row}
  const [dialog, setDialog] = React.useState(null); // action string
  const [toast, setToast] = React.useState(null);
  React.useEffect(() => {
    const close = () => setMenu(null);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, []);
  const pick = action => {
    setMenu(null);
    if (action === 'Extend Trial') setDialog({
      action,
      row: menu.row
    });else {
      setToast(`${action} — ${menu.row.email}`);
      setTimeout(() => setToast(null), 3200);
    }
  };
  const renderCell = (c, r) => {
    if (c.bool) return /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: r[c.field],
      disabled: true
    });
    if (c.field === 'accountStatus') return /*#__PURE__*/React.createElement(StatusPill, {
      v: r[c.field]
    });
    return r[c.field];
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: 16,
      gap: 12,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['All Users', 'Active Practices', 'Trial Accounts', 'Locked Users'],
    value: "Active Practices",
    onChange: () => {},
    style: {
      width: 200
    }
  }), /*#__PURE__*/React.createElement(Button, {
    fillMode: "outline",
    themeColor: "secondary",
    size: "small",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "ica-undo",
      size: 12
    })
  }, "Refresh"), /*#__PURE__*/React.createElement(Button, {
    fillMode: "outline",
    themeColor: "secondary",
    size: "small"
  }, "Export to Excel"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 13,
      fontWeight: 700
    }
  }, "Total Users = 4,182")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ica-warning-on-surface)',
      background: 'var(--ica-warning-subtle)',
      border: '1px solid var(--ica-warning-emphasis)',
      borderRadius: 4,
      padding: '6px 10px'
    }
  }, "Please note: by default this list shows users for active practices only. To include deactivated practices, change the filter on the \"Practice Active\" column."), /*#__PURE__*/React.createElement(Grid, {
    columns: PU_COLS,
    rows: PU_ROWS,
    renderCell: renderCell,
    onRowMenu: (e, row) => setMenu({
      x: e.clientX,
      y: e.clientY,
      row
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ica-color-subtle)'
    }
  }, "Right-click a row for admin actions."), menu && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: Math.min(menu.x, window.innerWidth - 250),
      top: Math.min(menu.y, window.innerHeight - 300),
      zIndex: 200,
      background: '#fff',
      border: '1px solid var(--ica-color-border)',
      borderRadius: 8,
      boxShadow: 'var(--ica-shadow-card)',
      padding: 4,
      width: 240,
      maxHeight: 280,
      overflow: 'auto'
    },
    onClick: e => e.stopPropagation()
  }, MENU.map(m => /*#__PURE__*/React.createElement("div", {
    key: m,
    onClick: () => pick(m),
    style: {
      padding: '6px 10px',
      fontSize: 13,
      borderRadius: 6,
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--ica-primary-opacity-hover)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, m))), dialog && /*#__PURE__*/React.createElement(Dialog, {
    open: true,
    title: "Extend Trial",
    onClose: () => setDialog(null),
    width: 420,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      fillMode: "outline",
      themeColor: "secondary",
      onClick: () => setDialog(null)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      themeColor: "tertiary",
      onClick: () => {
        setDialog(null);
        setToast('Trial extended — ' + dialog.row.email);
        setTimeout(() => setToast(null), 3200);
      }
    }, "Save"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12,
      fontSize: 14
    }
  }, "Practice: ", /*#__PURE__*/React.createElement("b", null, dialog.row.practiceName), " (#", dialog.row.practiceId, ")"), /*#__PURE__*/React.createElement(FormField, {
    label: "New trial end date"
  }, /*#__PURE__*/React.createElement(DatePicker, {
    value: new Date(2026, 7, 15),
    onChange: () => {}
  }))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 20,
      bottom: 20,
      zIndex: 300
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    state: "success",
    title: "Action queued",
    onClose: () => setToast(null)
  }, toast)));
}

/* ---------- Feature Flags ---------- */
const FF_ROWS = [{
  name: 'ambient-scribe',
  scope: 'global',
  globalOn: true
}, {
  name: 'client-portal-booking',
  scope: 'tenant',
  globalOn: false
}, {
  name: 'erx-controlled-substances',
  scope: 'user',
  globalOn: false
}, {
  name: 'group-therapy-notes',
  scope: 'global',
  globalOn: false
}, {
  name: 'telehealth-group-calls',
  scope: 'tenant',
  globalOn: false
}, {
  name: 'sms-appointment-reminders',
  scope: 'global',
  globalOn: true
}, {
  name: 'zoho-billing-sync',
  scope: 'tenant',
  globalOn: false
}];
function FeatureFlags() {
  const [unlocked, setUnlocked] = React.useState(false);
  const [pw, setPw] = React.useState('');
  const [rows, setRows] = React.useState(FF_ROWS);
  const [assign, setAssign] = React.useState(null);
  if (!unlocked) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        maxWidth: 480
      }
    }, /*#__PURE__*/React.createElement(FormField, {
      label: "Enter password to access feature flags"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(TextInput, {
      value: pw,
      onChange: setPw,
      type: "password",
      placeholder: "Password"
    }), /*#__PURE__*/React.createElement(Button, {
      themeColor: "primary",
      onClick: () => setUnlocked(true)
    }, "Unlock"))));
  }
  const setScope = (i, scope) => setRows(rs => rs.map((r, k) => k === i ? {
    ...r,
    scope
  } : r));
  const setGlobalOn = (i, v) => setRows(rs => rs.map((r, k) => k === i ? {
    ...r,
    globalOn: v
  } : r));
  const cellRadio = (r, i, scope) => /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: 'scope' + i,
    checked: r.scope === scope,
    onChange: () => setScope(i, scope)
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      marginBottom: 12
    }
  }, "Feature Flags"), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--ica-color-border)',
      borderRadius: 4,
      overflow: 'auto',
      background: '#fff',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: 'collapse',
      width: '100%',
      fontSize: 13,
      fontFamily: 'var(--font-lato)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['Name', 'Global', 'Tenant', 'User'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: 'left',
      padding: '8px 12px',
      background: 'var(--ica-color-surface-alt)',
      borderBottom: '1px solid var(--ica-color-border-alt)',
      fontWeight: 700
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.name,
    style: {
      background: r.scope === 'global' && r.globalOn ? 'var(--ica-tertiary-opacity-hover)' : '#fff'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '9px 12px',
      borderBottom: '1px solid var(--ica-color-border)',
      fontFamily: 'monospace',
      fontSize: 12
    }
  }, r.name), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '9px 12px',
      borderBottom: '1px solid var(--ica-color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, cellRadio(r, i, 'global'), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    disabled: r.scope !== 'global',
    checked: r.globalOn,
    onChange: e => setGlobalOn(i, e.target.checked)
  }))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '9px 12px',
      borderBottom: '1px solid var(--ica-color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, cellRadio(r, i, 'tenant'), /*#__PURE__*/React.createElement(Button, {
    size: "small",
    fillMode: "outline",
    themeColor: "secondary",
    disabled: r.scope !== 'tenant',
    onClick: () => setAssign({
      ...r,
      kind: 'tenants'
    })
  }, "Edit"))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '9px 12px',
      borderBottom: '1px solid var(--ica-color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, cellRadio(r, i, 'user'), /*#__PURE__*/React.createElement(Button, {
    size: "small",
    fillMode: "outline",
    themeColor: "secondary",
    disabled: r.scope !== 'user',
    onClick: () => setAssign({
      ...r,
      kind: 'users'
    })
  }, "Edit")))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ica-color-subtle)',
      marginTop: 8
    }
  }, "Select a scope per flag. Green rows are globally enabled. \"Edit\" assigns specific tenants or users."), assign && /*#__PURE__*/React.createElement(AssignDialog, {
    flag: assign,
    onClose: () => setAssign(null)
  }));
}
function AssignDialog({
  flag,
  onClose
}) {
  const all = flag.kind === 'tenants' ? ['Bright Path Behavioral', 'Harbor Counseling & Wellness', 'Cedar Psychiatry', 'Northstar Mental Health', 'Evergreen Care Collective', 'Lakeside Behavioral Health'] : ['l.okafor@brightpath.com', 'm.santos@harborcw.org', 'admin@cedarpsych.com', 'j.reed@northstarmh.com'];
  const [q, setQ] = React.useState('');
  const [checked, setChecked] = React.useState({
    0: true
  });
  const list = all.filter(x => x.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement(Dialog, {
    open: true,
    title: `${flag.name}: assign to ${flag.kind}`,
    onClose: onClose,
    width: 440,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      fillMode: "outline",
      themeColor: "secondary",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      themeColor: "tertiary",
      onClick: onClose
    }, "Save"))
  }, /*#__PURE__*/React.createElement(TextInput, {
    value: q,
    onChange: setQ,
    placeholder: `Search ${flag.kind}`,
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "ica-zoom",
      size: 14,
      color: "var(--ica-color-subtle)"
    }),
    clearable: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      border: '1px solid var(--ica-color-border)',
      borderRadius: 4,
      maxHeight: 220,
      overflow: 'auto'
    }
  }, list.map((x, i) => /*#__PURE__*/React.createElement("label", {
    key: x,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 12px',
      borderBottom: '1px solid var(--ica-color-border)',
      cursor: 'pointer',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked[i],
    onChange: e => setChecked(c => ({
      ...c,
      [i]: e.target.checked
    }))
  }), x))));
}
Object.assign(window, {
  Login,
  PracticeUsers,
  FeatureFlags
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/support-portal/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/support-portal/shell.jsx
try { (() => {
/* Support Portal shell: dark navy top toolbar (Angular Material style, #082f43). */
const {
  TextInput,
  Button,
  Icon
} = window.ICANotesDesignSystem_94514a;
function TopBar({
  active,
  onNavigate,
  email = 'dana.ops@icanotes.com',
  environment = 'production',
  onLogout
}) {
  const tab = (id, label) => {
    const on = active === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => onNavigate(id),
      style: {
        background: on ? 'rgba(255,255,255,.12)' : 'transparent',
        border: 'none',
        color: '#fff',
        font: '700 14px/1 var(--font-lato)',
        textTransform: 'uppercase',
        letterSpacing: '.04em',
        padding: '0 16px',
        height: 40,
        borderRadius: 6,
        cursor: 'pointer'
      }
    }, label);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      flexShrink: 0,
      background: 'var(--ica-classic-blue, #082f43)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ICANotes_Logo_White.png",
    alt: "ICANotes",
    style: {
      height: 30,
      marginRight: 16
    }
  }), tab('practice-users', 'Practice Users'), tab('feature-flags', 'Feature Flags'), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .7
    }
  }, "Environment: ", /*#__PURE__*/React.createElement("b", {
    style: {
      opacity: 1
    }
  }, environment)), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .85
    }
  }, email), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    style: {
      background: 'transparent',
      border: '1px solid rgba(255,255,255,.4)',
      color: '#fff',
      font: '700 12px var(--font-lato)',
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      padding: '6px 12px',
      borderRadius: 6,
      cursor: 'pointer'
    }
  }, "Logout")));
}
Object.assign(window, {
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/support-portal/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ButtonGroup = __ds_scope.ButtonGroup;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ConfirmationDialog = __ds_scope.ConfirmationDialog;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.SideDialog = __ds_scope.SideDialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.DatePicker = __ds_scope.DatePicker;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.MultiSelect = __ds_scope.MultiSelect;

__ds_ns.NumericInput = __ds_scope.NumericInput;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TextArea = __ds_scope.TextArea;

__ds_ns.INPUT_CSS = __ds_scope.INPUT_CSS;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.FloatingActionsBar = __ds_scope.FloatingActionsBar;

__ds_ns.NoteWidget = __ds_scope.NoteWidget;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.PanelHeading = __ds_scope.PanelHeading;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Widget = __ds_scope.Widget;

})();
