import Link from "next/link";
import type { ReactNode } from "react";

type LinkButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function LinkButton({
  children,
  href,
  variant = "primary",
}: LinkButtonProps) {
  return (
    <Link className={`link-button link-button--${variant}`} href={href}>
      {children}
    </Link>
  );
}
