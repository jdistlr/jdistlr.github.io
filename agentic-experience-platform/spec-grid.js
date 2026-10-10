// Spec grid: press G to overlay the layout grid the pages are built on.
// The content edges come from the same tokens the page shells use (--max,
// --gutter), so they cannot drift from the real layout; the 12 columns and
// the 8px baseline are the editorial reference inside those edges.
// Purely visual; no state is stored and nothing depends on it.
(() => {
  const root = document.documentElement;
  let overlay = null;

  function build() {
    overlay = document.createElement("div");
    overlay.className = "spec-grid";
    overlay.setAttribute("aria-hidden", "true");

    const columns = document.createElement("div");
    columns.className = "spec-grid-columns";
    for (let i = 0; i < 12; i += 1) columns.append(document.createElement("i"));

    const tag = document.createElement("span");
    tag.className = "spec-grid-tag";

    overlay.append(columns, tag);
    document.body.append(overlay);
  }

  function describe() {
    const styles = getComputedStyle(root);
    const max = styles.getPropertyValue("--max").trim();
    const gutter = styles.getPropertyValue("--gutter").trim();
    overlay.querySelector(".spec-grid-tag").textContent =
      "12 col · --max " + max + " · --gutter " + gutter + " · G to hide";
  }

  function toggle() {
    if (!overlay) build();
    const on = !root.classList.contains("spec-grid-on");
    root.classList.toggle("spec-grid-on", on);
    if (on) describe();
  }

  document.addEventListener("keydown", (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey || event.isComposing) return;
    const target = event.target instanceof HTMLElement ? event.target : null;
    if (target && (target.closest("input, select, textarea") || target.isContentEditable)) return;
    if (event.key.toLowerCase() !== "g") return;
    toggle();
  });

  window.addEventListener("resize", () => {
    if (overlay && root.classList.contains("spec-grid-on")) describe();
  });

  // Let links such as "?grid" open a page with the overlay already on.
  if (new URLSearchParams(location.search).has("grid")) {
    if (document.body) toggle();
    else document.addEventListener("DOMContentLoaded", toggle, { once: true });
  }
})();
