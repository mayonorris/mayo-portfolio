import Link from "next/link";
import type { ReactNode } from "react";

type LinkButtonProps = {
  ariaLabel?: string;
  children: ReactNode;
  href: string;
  isExternal?: boolean;
  rel?: string;
  target?: string;
  variant?: "primary" | "secondary";
};

export function LinkButton({
  ariaLabel,
  children,
  href,
  isExternal = false,
  rel,
  target,
  variant = "primary",
}: LinkButtonProps) {
  const className = `link-button link-button--${variant}${isExternal ? " link-button--external" : ""}`;

  if (isExternal) {
    return (
      <a
        aria-label={ariaLabel}
        className={className}
        href={href}
        rel={rel ?? "noopener noreferrer"}
        target={target ?? "_blank"}
      >
        {children}
      </a>
    );
  }

  return (
    <Link aria-label={ariaLabel} className={className} href={href}>
      {children}
    </Link>
  );
}