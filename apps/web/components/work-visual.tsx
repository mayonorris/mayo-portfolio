import type { WorkVisualVariant } from "@/content/work";

type WorkVisualProps = {
  variant: WorkVisualVariant;
};

function SystemsVisual() {
  return (
    <svg className="work-visual__svg" viewBox="0 0 420 220">
      <rect className="work-visual__frame" height="150" rx="8" width="260" x="44" y="34" />
      <path className="work-visual__line" d="M64 62 H284" />
      <rect className="work-visual__panel work-visual__panel--accent" height="72" rx="6" width="82" x="64" y="86" />
      <rect className="work-visual__panel" height="30" rx="5" width="116" x="164" y="86" />
      <rect className="work-visual__panel" height="30" rx="5" width="116" x="164" y="128" />
      <path className="work-visual__connector" d="M304 82 C336 82 340 112 368 112" />
      <path className="work-visual__connector" d="M304 142 C336 142 340 112 368 112" />
      <circle className="work-visual__dot work-visual__dot--ink" cx="368" cy="112" r="12" />
    </svg>
  );
}

function ResearchVisual() {
  return (
    <svg className="work-visual__svg" viewBox="0 0 420 220">
      <circle className="work-visual__dot work-visual__dot--ink" cx="210" cy="46" r="13" />
      <path className="work-visual__connector" d="M210 60 V88 M138 88 H282" />
      <circle className="work-visual__dot" cx="138" cy="104" r="11" />
      <circle className="work-visual__dot" cx="282" cy="104" r="11" />
      <path className="work-visual__connector" d="M138 116 V142 M102 142 H174 M282 116 V142 M246 142 H318" />
      <rect className="work-visual__sample" height="30" rx="6" width="52" x="76" y="156" />
      <rect className="work-visual__sample work-visual__sample--accent" height="30" rx="6" width="52" x="148" y="156" />
      <rect className="work-visual__sample" height="30" rx="6" width="52" x="220" y="156" />
      <rect className="work-visual__sample work-visual__sample--accent" height="30" rx="6" width="52" x="292" y="156" />
    </svg>
  );
}

function SignalVisual() {
  return (
    <svg className="work-visual__svg" viewBox="0 0 420 220">
      <path className="work-visual__axis" d="M54 178 H366 M54 46 V178" />
      <path className="work-visual__raw" d="M64 150 C92 94 118 166 146 116 C172 72 194 152 222 100 C250 50 278 138 306 84 C334 38 350 120 366 78" />
      <path className="work-visual__adjusted" d="M64 152 C116 136 146 122 184 112 C230 100 276 88 318 74 C340 66 354 60 366 56" />
      <circle className="work-visual__dot work-visual__dot--accent" cx="318" cy="74" r="7" />
    </svg>
  );
}

function FinanceVisual() {
  return (
    <svg className="work-visual__svg" viewBox="0 0 420 220">
      <ellipse className="work-visual__cluster" cx="146" cy="132" rx="76" ry="42" />
      <ellipse className="work-visual__cluster work-visual__cluster--accent" cx="268" cy="92" rx="80" ry="48" />
      <path className="work-visual__axis" d="M56 178 H362 M56 42 V178" />
      <g className="work-visual__scatter">
        <circle cx="104" cy="142" r="5" />
        <circle cx="128" cy="120" r="5" />
        <circle cx="158" cy="152" r="5" />
        <circle cx="184" cy="130" r="5" />
        <circle cx="226" cy="92" r="5" />
        <circle cx="252" cy="72" r="5" />
        <circle cx="286" cy="104" r="5" />
        <circle cx="322" cy="84" r="5" />
      </g>
      <path className="work-visual__divider" d="M94 170 C154 126 208 102 336 58" />
    </svg>
  );
}

export function WorkVisual({ variant }: WorkVisualProps) {
  return (
    <div className={`work-visual work-visual--${variant}`} aria-hidden="true">
      {variant === "systems" ? <SystemsVisual /> : null}
      {variant === "research" ? <ResearchVisual /> : null}
      {variant === "signal" ? <SignalVisual /> : null}
      {variant === "finance" ? <FinanceVisual /> : null}
    </div>
  );
}
