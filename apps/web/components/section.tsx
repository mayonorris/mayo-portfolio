import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  labelledBy?: string;
};

export function Section({ children, className = "", labelledBy }: SectionProps) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={["section", className].join(" ")}
    >
      {children}
    </section>
  );
}
