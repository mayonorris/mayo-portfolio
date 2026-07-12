"use client";

import { useId, useState } from "react";
import type { HomeContent } from "@/content/home";

type MethodDemoProps = {
  content: HomeContent["method"];
};

const pointY = [164, 132, 112, 78, 48];

export function MethodDemo({ content }: MethodDemoProps) {
  const sliderId = useId();
  const [stageIndex, setStageIndex] = useState(0);
  const stage = content.stages[stageIndex];
  const maxIndex = content.stages.length - 1;
  const progress = Math.round((stageIndex / maxIndex) * 100);
  const activeX = 64 + stageIndex * 76;

  return (
    <figure
      className="method-demo surface"
      aria-labelledby={`${sliderId}-title`}
      data-stage={stageIndex}
    >
      <div className="method-demo__header">
        <p className="eyebrow" id={`${sliderId}-title`}>
          {content.title}
        </p>
        <p>{content.note}</p>
      </div>

      <div className="method-demo__canvas" aria-hidden="true">
        <svg viewBox="0 0 420 220" role="img">
          <path className="method-demo__grid-line" d="M40 40 H380" />
          <path className="method-demo__grid-line" d="M40 90 H380" />
          <path className="method-demo__grid-line" d="M40 140 H380" />
          <path className="method-demo__grid-line" d="M40 190 H380" />
          <path className="method-demo__axis" d="M48 186 H386 M48 36 V186" />
          <rect
            className="method-demo__stage-band"
            height="150"
            rx="8"
            width="46"
            x={activeX - 23}
            y="36"
          />
          <path className="method-demo__signal" d="M64 164 C118 152 132 116 180 120 C230 124 238 70 284 80 C326 88 338 56 368 48" />
          <path className="method-demo__model" d="M64 176 C128 156 172 136 218 108 C272 76 322 58 368 44" />
          <path
            className="method-demo__active-line"
            d={`M${activeX} 42 V184`}
          />
          <g className="method-demo__points">
            {content.stages.map((item, index) => {
              const x = 64 + index * 76;
              const y = pointY[index];

              return (
                <circle
                  className={index <= stageIndex ? "is-active" : undefined}
                  cx={x}
                  cy={y}
                  key={item.label}
                  r={index === stageIndex ? 8 : 5}
                />
              );
            })}
          </g>
        </svg>
      </div>

      <div className="method-demo__readout">
        <div>
          <span>{content.currentStageLabel}</span>
          <strong>{stage.label}</strong>
        </div>
        <div>
          <span>{content.progressLabel}</span>
          <strong>{progress}%</strong>
        </div>
      </div>
      <p className="method-demo__readiness">
        <span>{content.readinessLabel}</span>
        {stage.readiness}
      </p>

      <label className="sr-only" htmlFor={sliderId}>
        {content.sliderLabel}
      </label>
      <input
        aria-valuetext={stage.label}
        className="method-demo__slider"
        id={sliderId}
        max={maxIndex}
        min={0}
        onChange={(event) => setStageIndex(Number(event.target.value))}
        step={1}
        type="range"
        value={stageIndex}
      />
      <ol className="method-demo__stages" role="list">
        {content.stages.map((item, index) => (
          <li data-active={index === stageIndex} key={item.label}>
            {item.label}
          </li>
        ))}
      </ol>
    </figure>
  );
}
