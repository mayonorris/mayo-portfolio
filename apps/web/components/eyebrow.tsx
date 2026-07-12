import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return <p className={["eyebrow", className].join(" ")}>{children}</p>;
}
