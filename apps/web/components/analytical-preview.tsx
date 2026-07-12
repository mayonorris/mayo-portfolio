import type { Dictionary } from "@/i18n/dictionaries";
import { Eyebrow } from "./eyebrow";
import { Surface } from "./surface";

type AnalyticalPreviewProps = {
  labels: Dictionary["home"]["preview"];
};

export function AnalyticalPreview({ labels }: AnalyticalPreviewProps) {
  return (
    <figure className="analytical-preview" aria-label={labels.ariaLabel}>
      <Surface className="analytical-preview__surface">
        <figcaption className="analytical-preview__header">
          <Eyebrow>{labels.label}</Eyebrow>
          <p>{labels.caption}</p>
        </figcaption>
        <div className="analytical-preview__canvas" aria-hidden="true">
          <div className="analytical-preview__axis analytical-preview__axis--x" />
          <div className="analytical-preview__axis analytical-preview__axis--y" />
          <div className="analytical-preview__line analytical-preview__line--one" />
          <div className="analytical-preview__line analytical-preview__line--two" />
          <div className="analytical-preview__node analytical-preview__node--one" />
          <div className="analytical-preview__node analytical-preview__node--two" />
          <div className="analytical-preview__node analytical-preview__node--three" />
        </div>
        <ul className="analytical-preview__layers" role="list">
          {labels.layers.map((layer, index) => (
            <li className={`analytical-preview__layer layer-${index + 1}`} key={layer}>
              <span aria-hidden="true" />
              {layer}
            </li>
          ))}
        </ul>
      </Surface>
    </figure>
  );
}
