import { useMemo, useState, type ReactNode } from "react";
import { Button, type ButtonSize, type ButtonVariant } from "@loomlogic/buttons";
import { StatusBadge } from "@loomlogic/data-display";
import { SignatureRule } from "@loomlogic/effects";
import { TextField } from "@loomlogic/forms";
import { ArrowRightIcon, CheckIcon, SparkIcon } from "@loomlogic/icons";
import { ExperimentalButton } from "@loomlogic/labs";
import { type MotionPresetName, motionStyle } from "@loomlogic/motion";
import { Tabs } from "@loomlogic/navigation";
import { OperationsDashboard } from "@loomlogic/pages";
import { ReviewQueue } from "@loomlogic/patterns";
import type { ThemeName } from "@loomlogic/tokens";
import { components, kits, packages, pages, patterns, type RegistryItem } from "../../../registry";
import { appConfig } from "./config";

type LabSection = "catalog" | "kits" | "patterns" | "pages";
type Device = "desktop" | "tablet" | "mobile";

const deviceWidths: Record<Device, number> = { desktop: 960, tablet: 720, mobile: 390 };
const lifecycleSteps = ["Experimental", "Shortlisted", "Candidate", "Approved"] as const;

function LabIcon({ name }: { name: "box" | "grid" | "layers" | "page" | "search" | "sun" | "moon" | "copy" | "code" | "monitor" | "tablet" | "phone" | "expand" | "play" }) {
  const paths: Record<typeof name, ReactNode> = {
    box: <><path d="m4 7 8-4 8 4-8 4-8-4Z" /><path d="m4 7 8 4 8-4v10l-8 4-8-4V7Z" /><path d="M12 11v10" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></>,
    page: <><path d="M6 2h8l4 4v16H6z" /><path d="M14 2v5h5" /><path d="M9 12h6M9 16h6" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m16.5 16.5 4 4" /></>,
    sun: <><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
    moon: <path d="M20 15.3A8 8 0 0 1 8.7 4 8.1 8.1 0 1 0 20 15.3Z" />,
    copy: <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></>,
    code: <><path d="m9 18-6-6 6-6M15 6l6 6-6 6" /></>,
    monitor: <><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 22h8M12 18v4" /></>,
    tablet: <><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M11 18h2" /></>,
    phone: <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>,
    expand: <><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" /></>,
    play: <path d="m8 5 11 7-11 7V5Z" />,
  };
  return <svg aria-hidden="true" className="lab-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6">{paths[name]}</svg>;
}

function IconButton({ active, children, label, onClick }: { active?: boolean; children: ReactNode; label: string; onClick: () => void }) {
  return <button aria-label={label} aria-pressed={active} className="icon-button" data-active={active} onClick={onClick} type="button">{children}</button>;
}

function SegmentedControl<Option extends string>({ label, onChange, options, value }: { label: string; onChange: (value: Option) => void; options: Array<{ icon?: ReactNode; label: string; value: Option }>; value: Option }) {
  return (
    <div className="segmented" aria-label={label} role="group">
      {options.map((option) => <button aria-label={option.label} aria-pressed={value === option.value} key={option.value} onClick={() => onChange(option.value)} type="button">{option.icon}<span>{option.label}</span></button>)}
    </div>
  );
}

function Toggle({ checked, label, onChange }: { checked: boolean; label: string; onChange: (checked: boolean) => void }) {
  return (
    <label className="toggle-row">
      <span>{label}</span>
      <button aria-checked={checked} className="switch" data-checked={checked} onClick={() => onChange(!checked)} role="switch" type="button"><span /></button>
    </label>
  );
}

function ComponentExample({
  disabled,
  item,
  kit,
  loading,
  motion,
  replayKey,
  size,
  speed,
  variant,
  withIcon,
}: {
  disabled: boolean;
  item: RegistryItem;
  kit: "core" | "dynamic";
  loading: boolean;
  motion: MotionPresetName;
  replayKey: number;
  size: ButtonSize;
  speed: number;
  variant: ButtonVariant;
  withIcon: boolean;
}) {
  const content = (() => {
    if (item.id === "text-field") return <div className="field-example"><TextField disabled={disabled} error={variant === "danger" ? "Enter a valid workspace name." : undefined} hint="Used in navigation and system messages." label="Workspace name" placeholder="LoomLogic Health" /></div>;
    if (item.id === "status-badge") return <div className="badge-stack">{lifecycleSteps.map((status) => <StatusBadge key={status} status={status} />)}</div>;
    if (item.id === "experimental-button") return <ExperimentalButton disabled={disabled} leadingIcon={withIcon ? <SparkIcon /> : undefined} loading={loading} size={size} variant={variant}>Run experiment</ExperimentalButton>;
    return <Button disabled={disabled} leadingIcon={withIcon ? <SparkIcon /> : undefined} loading={loading} size={size} trailingIcon={withIcon ? <ArrowRightIcon /> : undefined} variant={variant}>Create workflow</Button>;
  })();

  return <div className="component-stage__subject" data-kit={kit} data-motion={motion} key={replayKey} style={motionStyle(motion, speed)}>{content}</div>;
}

function PreviewCanvas(props: Parameters<typeof ComponentExample>[0] & { device: Device; label: string }) {
  return (
    <section className="preview-column">
      <div className="preview-label"><span>{props.label}</span><span>{deviceWidths[props.device]} px</span></div>
      <div className="device-boundary" style={{ maxWidth: deviceWidths[props.device] }}>
        <div className="component-stage"><ComponentExample {...props} /></div>
      </div>
    </section>
  );
}

function KitBrowser() {
  return (
    <div className="browser-view">
      <div className="view-intro"><SignatureRule /><span>Kit browser</span><h1>One foundation, distinct expressions.</h1><p>Every derived kit extends LL Core directly. No multi-level inheritance chains.</p></div>
      <div className="kit-grid">
        {kits.map((kit) => <article className="kit-card" key={kit.id}>
          <div className="kit-card__top"><span className="kit-type">{kit.type}</span><StatusBadge status={kit.lifecycle} /></div>
          <h2>{kit.name}</h2><p>{kit.description}</p>
          <div className="inheritance"><span>{kit.inheritsFrom ? "Extends" : "Foundation"}</span><strong>{kit.inheritsFrom ?? "No parent"}</strong></div>
          <div className="package-chips">{kit.packageNames.slice(0, 3).map((name) => <code key={name}>{name.replace("@loomlogic/", "")}</code>)}</div>
        </article>)}
      </div>
    </div>
  );
}

function PatternBrowser() {
  const item = patterns[0]!;
  return <div className="browser-view"><div className="view-intro"><SignatureRule /><span>Pattern browser</span><h1>{item.name}</h1><p>{item.description}</p></div><div className="showcase-frame"><ReviewQueue /></div><RegistryDetails item={item} /></div>;
}

function PageBrowser({ onOpen }: { onOpen: () => void }) {
  const item = pages[0]!;
  return <div className="browser-view"><div className="view-intro view-intro--with-action"><div><SignatureRule /><span>Page browser</span><h1>{item.name}</h1><p>{item.description}</p></div><Button leadingIcon={<LabIcon name="expand" />} onClick={onOpen} variant="secondary">Full-page preview</Button></div><div className="page-frame"><OperationsDashboard /></div><RegistryDetails item={item} /></div>;
}

function RegistryDetails({ item }: { item: RegistryItem }) {
  return <section className="registry-details"><div><span>Package lifecycle</span><StatusBadge status={item.lifecycle.status} /></div><div><span>Codex recommendation</span><strong>{item.codex.recommendation}</strong></div><p>{item.codex.note}</p></section>;
}

export function App() {
  const [theme, setTheme] = useState<ThemeName>("light");
  const [section, setSection] = useState<LabSection>("catalog");
  const [selectedId, setSelectedId] = useState("button");
  const [packageFilter, setPackageFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [device, setDevice] = useState<Device>("desktop");
  const [compare, setCompare] = useState(false);
  const [variant, setVariant] = useState<ButtonVariant>("primary");
  const [size, setSize] = useState<ButtonSize>("md");
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [withIcon, setWithIcon] = useState(true);
  const [motion, setMotion] = useState<MotionPresetName>("subtle");
  const [speed, setSpeed] = useState(1);
  const [replayKey, setReplayKey] = useState(0);
  const [toast, setToast] = useState("");
  const [fullPage, setFullPage] = useState(false);

  const visiblePackages = useMemo(() => packages.filter((item) => `${item.label} ${item.name}`.toLowerCase().includes(search.toLowerCase())), [search]);
  const filteredComponents = useMemo(() => components.filter((item) => packageFilter === "all" || item.packageName === packageFilter), [packageFilter]);
  const selectedItem = components.find((item) => item.id === selectedId) ?? filteredComponents[0] ?? components[0]!;

  const copyText = async (text: string, message: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToast(message);
      window.setTimeout(() => setToast(""), 1800);
    } catch {
      setToast("Clipboard permission was not available");
    }
  };

  const choosePackage = (packageName: string) => {
    setPackageFilter(packageName);
    setSection("catalog");
    const first = components.find((item) => item.packageName === packageName);
    if (first) setSelectedId(first.id);
  };

  const previewProps = { disabled, item: selectedItem, loading, motion, replayKey, size, speed, variant, withIcon };

  return (
    <div className="lab-shell" data-theme={theme}>
      <a className="skip-link" href="#lab-main">Skip to preview</a>
      <aside className="sidebar">
        <div className="brand"><span className="brand__name">LoomLogic</span><span className="brand__divider" /><span className="brand__lab">UI Lab <small>V1</small></span></div>
        <nav className="primary-nav" aria-label="Lab sections">
          {([
            ["catalog", "box", "Components"], ["kits", "grid", "Kits"], ["patterns", "layers", "Patterns"], ["pages", "page", "Pages"],
          ] as const).map(([value, icon, label]) => <button aria-label={label} data-active={section === value} key={value} onClick={() => setSection(value)} type="button"><LabIcon name={icon} /><span>{label}</span></button>)}
        </nav>
        <div className="sidebar__rule" />
        <div className="package-heading"><span>Packages</span><span>{packages.length}</span></div>
        <label className="package-search"><span className="sr-only">Search packages</span><LabIcon name="search" /><input onChange={(event) => setSearch(event.target.value)} placeholder="Filter packages" type="search" value={search} /></label>
        <div className="package-list">
          <button data-active={packageFilter === "all"} onClick={() => setPackageFilter("all")} type="button"><span>All packages</span><small>{components.length}</small></button>
          {visiblePackages.map((item) => <button data-active={packageFilter === item.name} key={item.name} onClick={() => choosePackage(item.name)} type="button"><span>{item.label}{item.experimental && <em>Lab</em>}</span><small>{item.itemCount}</small></button>)}
        </div>
        <div className="sidebar__footer"><span className="repo-dot" />Registry synced <small>Git source</small></div>
      </aside>

      <main className="workspace" id="lab-main">
        <header className="topbar">
          <Tabs items={[{ label: "Library", value: "catalog" }, { label: "Kits", value: "kits" }, { label: "Patterns", value: "patterns" }, { label: "Pages", value: "pages" }]} onChange={setSection} value={section} />
          <div className="topbar__actions">
            <span className="config-status"><CheckIcon />Experimental off</span>
            <IconButton active={theme === "light"} label="Use light theme" onClick={() => setTheme("light")}><LabIcon name="sun" /></IconButton>
            <IconButton active={theme === "dark"} label="Use dark theme" onClick={() => setTheme("dark")}><LabIcon name="moon" /></IconButton>
          </div>
        </header>

        {section === "catalog" && <div className="catalog-layout">
          <section className="preview-workspace">
            <header className="component-header">
              <div><span className="breadcrumb">{selectedItem.packageName} / {selectedItem.kind}</span><div className="title-row"><h1>{selectedItem.name}</h1><StatusBadge status={selectedItem.lifecycle.status} /></div><p>{selectedItem.description}</p></div>
              <div className="copy-actions"><Button onClick={() => void copyText(selectedItem.importExample, "Import copied")} size="sm" variant="secondary" leadingIcon={<LabIcon name="copy" />}>Copy import</Button><Button onClick={() => void copyText(selectedItem.codexPrompt, "Codex prompt copied")} size="sm" variant="secondary" leadingIcon={<LabIcon name="code" />}>Copy Codex prompt</Button></div>
            </header>

            <div className="component-picker" role="tablist" aria-label="Components">
              {filteredComponents.length ? filteredComponents.map((item) => <button aria-selected={selectedItem.id === item.id} data-active={selectedItem.id === item.id} key={item.id} onClick={() => setSelectedId(item.id)} role="tab" type="button">{item.name}<StatusBadge status={item.lifecycle.status} /></button>) : <span>No registered component previews in this package yet.</span>}
            </div>

            <div className="preview-toolbar">
              <SegmentedControl label="Preview device" onChange={setDevice} options={[{ icon: <LabIcon name="monitor" />, label: "Desktop", value: "desktop" }, { icon: <LabIcon name="tablet" />, label: "Tablet", value: "tablet" }, { icon: <LabIcon name="phone" />, label: "Mobile", value: "mobile" }]} value={device} />
              <div className="toolbar-divider" />
              <Toggle checked={compare} label="Compare" onChange={setCompare} />
            </div>

            <div className="preview-scroll">
              <div className="compare-grid" data-compare={compare}>
                <PreviewCanvas {...previewProps} device={device} kit="core" label="LL Core" />
                {compare && <PreviewCanvas {...previewProps} device={device} kit="dynamic" label="LL Dynamic" />}
              </div>
            </div>

            <footer className="preview-footer"><span>Default app config</span><code>{appConfig.uiKit}</code><span className="footer-separator" /><span>Motion</span><code>{appConfig.motionKit}</code><span className="footer-separator" /><span>Icons</span><code>{appConfig.iconKit}</code></footer>
          </section>

          <aside className="inspector" aria-label="Preview controls">
            <div className="inspector__heading"><span>Properties</span><code>ButtonProps</code></div>
            <section className="control-section"><h2>Appearance</h2><label className="control-label">Variant<select onChange={(event) => setVariant(event.target.value as ButtonVariant)} value={variant}><option value="primary">Primary</option><option value="secondary">Secondary</option><option value="quiet">Quiet</option><option value="danger">Danger</option></select></label><label className="control-label">Size<select onChange={(event) => setSize(event.target.value as ButtonSize)} value={size}><option value="sm">Small</option><option value="md">Medium</option><option value="lg">Large</option></select></label></section>
            <section className="control-section"><h2>State</h2><Toggle checked={withIcon} label="Show icons" onChange={setWithIcon} /><Toggle checked={loading} label="Loading" onChange={setLoading} /><Toggle checked={disabled} label="Disabled" onChange={setDisabled} /></section>
            <section className="control-section"><div className="control-section__title"><h2>Motion</h2><button aria-label="Replay motion" onClick={() => setReplayKey((key) => key + 1)} type="button"><LabIcon name="play" />Replay</button></div><label className="control-label">Preset<select onChange={(event) => setMotion(event.target.value as MotionPresetName)} value={motion}><option value="none">None</option><option value="subtle">Subtle</option><option value="dynamic">Dynamic</option></select></label><label className="range-label"><span>Speed</span><output>{speed.toFixed(1)}×</output><input max="2" min="0.5" onChange={(event) => setSpeed(Number(event.target.value))} step="0.1" type="range" value={speed} /></label></section>
            <section className="control-section lifecycle-panel"><h2>Lifecycle</h2><div className="lifecycle-rail">{lifecycleSteps.map((status) => <div data-current={selectedItem.lifecycle.status === status} key={status}><span /><small>{status}</small></div>)}</div><p><strong>Package approval:</strong> {selectedItem.lifecycle.packageApproved ? "Approved" : "Pending"}</p><p><strong>Codex skill:</strong> {selectedItem.codex.promotedToSkill ? "Promoted" : "Separate review"}</p></section>
          </aside>
        </div>}

        {section === "kits" && <KitBrowser />}
        {section === "patterns" && <PatternBrowser />}
        {section === "pages" && <PageBrowser onOpen={() => setFullPage(true)} />}
      </main>

      {toast && <div aria-live="polite" className="toast"><CheckIcon />{toast}</div>}
      {fullPage && <div className="full-page-preview" data-theme={theme}><div className="full-page-preview__bar"><span>Operations dashboard · full-page preview</span><Button onClick={() => setFullPage(false)} size="sm" variant="secondary">Close preview</Button></div><OperationsDashboard /></div>}
    </div>
  );
}
