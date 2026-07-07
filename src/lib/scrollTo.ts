import { isMobileViewport } from "./viewport";

/**
 * Home-page anchor scrolling. Desktop lands on the full #order block,
 * centered; mobile lands on #order-actions (skipping the art photo above it)
 * minus a small peek of the photo so the transition doesn't feel abrupt.
 */
export function scrollToOrder() {
  if (isMobileViewport()) {
    const actions = document.getElementById("order-actions");
    const art = document.getElementById("order-art");
    if (!actions) return;
    const peek = art ? art.getBoundingClientRect().height * 0.25 : 0;
    const target = actions.getBoundingClientRect().top + window.scrollY - peek;
    window.scrollTo({ top: target, behavior: "smooth" });
  } else {
    const el = document.getElementById("order");
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY,
      behavior: "smooth",
    });
  }
}

export function scrollToProcess() {
  const el = document.getElementById("process");
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY,
    behavior: "smooth",
  });
}
