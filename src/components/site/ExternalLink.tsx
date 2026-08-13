import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { forwardRef } from "react";

/**
 * Anchor that always opens in a new tab, with a window.open fallback for
 * embedded/sandboxed contexts (like the editor preview) where plain
 * target="_blank" navigation can be blocked.
 */
export const ExternalLink = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement>
>(({ href, onClick, ...props }, ref) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || !href) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    const opened = window.open(href, "_blank", "noopener,noreferrer");
    if (!opened) window.top!.location.href = href;
  };

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      {...props}
    />
  );
});
ExternalLink.displayName = "ExternalLink";
