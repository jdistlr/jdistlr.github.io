// Grammar specimen: every value on this page is read from the live tokens,
// never typed in twice. Re-reads on resize (fluid sizes) and on colour-scheme
// changes (dark mode remaps the roles).
(() => {
  const root = document.documentElement;
  const token = (name) => getComputedStyle(root).getPropertyValue(name).trim();
  const dark = window.matchMedia("(prefers-color-scheme: dark)");
  const px = (value) => String(Math.round(parseFloat(value) * 10) / 10) + "px";

  function typeScale() {
    document.querySelectorAll(".specimen-row[data-size]").forEach((row) => {
      const name = row.dataset.size;
      const sample = row.querySelector(".specimen-sample");
      sample.style.fontSize = "var(" + name + ")";

      const declared = row.querySelector(".specimen-declared");
      if (declared) declared.textContent = token(name);
      row.querySelector(".specimen-px").textContent = px(getComputedStyle(sample).fontSize);
    });
  }

  function colors() {
    document.querySelectorAll(".specimen-swatch[data-color]").forEach((swatch) => {
      const name = swatch.dataset.color;
      swatch.querySelector("i").style.background = "var(" + name + ")";
      let value = swatch.querySelector(".specimen-value");
      if (!value) {
        value = document.createElement("span");
        value.className = "specimen-value";
        swatch.querySelector("figcaption").append(value);
      }
      value.textContent = token(name);

      // Show which primitive the role points at in the active scheme.
      const primitive = swatch.querySelector("[data-primitive]");
      if (primitive) {
        primitive.dataset.light ??= primitive.textContent;
        primitive.textContent = dark.matches ? primitive.dataset.dark : primitive.dataset.light;
      }
    });
  }

  function space() {
    document.querySelectorAll(".space-row[data-space]").forEach((row) => {
      const bar = row.querySelector("i");
      bar.style.width = "var(" + row.dataset.space + ")";
      row.querySelector(".specimen-px").textContent = px(getComputedStyle(bar).width);
    });
  }

  function motion() {
    document.querySelectorAll(".motion-list [data-token]").forEach((item) => {
      item.querySelector("dd").textContent = token(item.dataset.token);
    });
  }

  function extrusion() {
    document.querySelectorAll(".extrusion-item[data-token]").forEach((item) => {
      item.querySelector("figcaption span").textContent =
        token(item.dataset.token) + " · ratio " + token("--extrude-ratio");
    });
  }

  function render() {
    extrusion();
    typeScale();
    colors();
    space();
    motion();
  }

  const demo = document.querySelector(".motion-demo");
  demo?.addEventListener("click", () => {
    const on = demo.getAttribute("aria-pressed") !== "true";
    demo.setAttribute("aria-pressed", String(on));
  });

  let frame = 0;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(render);
  });
  dark.addEventListener?.("change", render);

  if (document.fonts?.ready) document.fonts.ready.then(render);
  render();
})();
