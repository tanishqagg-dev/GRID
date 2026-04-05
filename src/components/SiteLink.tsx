"use client";
import Link from "next/link";

type SiteLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  onClick?: (e?: React.MouseEvent) => void;
};

export default function SiteLink({
  href,
  className,
  children,
  external,
  target,
  rel,
  onClick,
  ...rest
}: SiteLinkProps) {
  const isExternal = external || href.startsWith("http");

  if (isExternal) {
    return (
      <a
        className={className}
        href={href}
        onClick={(e) => onClick && onClick(e)}
        rel={rel ?? "noreferrer"}
        target={target ?? "_blank"}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}
