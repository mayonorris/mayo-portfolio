import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  labelledBy?: string;
};

export function Section({
  children,
  className = "",
  id,
  labelledBy,
}: SectionProps) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={["section", className].join(" ")}
      id={id}
    >
      {children}
    </section>
  );
}
