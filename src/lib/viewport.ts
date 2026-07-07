export const MOBILE_BREAKPOINT = 760;

/** On-demand check (no resize listener needed) — call inside event handlers. */
export function isMobileViewport() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`).matches
  );
}
