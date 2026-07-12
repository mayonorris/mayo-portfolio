import type { WorkVisualVariant } from "@/content/home";

type WorkVisualProps = {
  variant: WorkVisualVariant;
};

export function WorkVisual({ variant }: WorkVisualProps) {
  return (
    <div className={`work-visual work-visual--${variant}`} aria-hidden="true">
      <span className="work-visual__axis work-visual__axis--x" />
      <span className="work-visual__axis work-visual__axis--y" />
      <span className="work-visual__line work-visual__line--one" />
      <span className="work-visual__line work-visual__line--two" />
      <span className="work-visual__node work-visual__node--one" />
      <span className="work-visual__node work-visual__node--two" />
      <span className="work-visual__node work-visual__node--three" />
    </div>
  );
}
