import type { ReactNode } from "react";

type SurfaceProps = {
  children: ReactNode;
  className?: string;
};

export function Surface({ children, className = "" }: SurfaceProps) {
  return <div className={["surface", className].join(" ")}>{children}</div>;
}
