(() => {
  const body = document.body;
  const depthToggle = document.getElementById("depthToggle");
  const depthLabel = document.getElementById("depthLabel");
  const presentationToggle = document.getElementById("presentationToggle");
  const storySections = Array.from(document.querySelectorAll("[data-story]"));
  const storyCount = document.getElementById("storyCount");
  const storyTitle = document.getElementById("storyTitle");
  const storyProgress = document.getElementById("storyProgress");
  const storyPrev = document.getElementById("storyPrev");
  const storyNext = document.getElementById("storyNext");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const localize = () => window.sparkeryI18n?.apply();

  let currentStory = 0;

  function updateStoryIndicator() {
    if (!storySections.length) return;
    const section = storySections[currentStory];
    const count = String(currentStory + 1).padStart(2, "0");
    const total = String(storySections.length).padStart(2, "0");
    if (storyCount) storyCount.textContent = `${count} / ${total}`;
    if (storyTitle) storyTitle.textContent = section.dataset.storyTitle || "Chapter";
    if (storyProgress) storyProgress.style.width = `${((currentStory + 1) / storySections.length) * 100}%`;
    if (storyPrev) storyPrev.disabled = currentStory === 0;
    if (storyNext) storyNext.disabled = currentStory === storySections.length - 1;

    storySections.forEach((item, index) => {
      item.classList.toggle("story-current", index === currentStory);
    });

    localize();
  }

  function nearestStoryIndex() {
    const center = window.scrollY + window.innerHeight * 0.42;
    let bestIndex = 0;
    let bestDistance = Number.POSITIVE_INFINITY;

    storySections.forEach((section, index) => {
      const box = section.getBoundingClientRect();
      const top = window.scrollY + box.top;
      const middle = top + box.height / 2;
      const distance = Math.abs(middle - center);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    });

    return bestIndex;
  }

  function showStory(index, shouldScroll = true) {
    if (!storySections.length) return;
    currentStory = Math.max(0, Math.min(index, storySections.length - 1));
    updateStoryIndicator();

    if (shouldScroll) {
      storySections[currentStory].scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  }

  function toggleDepth() {
    const enabled = !body.classList.contains("nerd");
    body.classList.toggle("nerd", enabled);
    body.dataset.depth = enabled ? "nerd" : "executive";
    depthToggle?.setAttribute("aria-pressed", String(enabled));
    if (depthLabel) depthLabel.textContent = enabled ? "Nerd" : "Executive";
    localize();

    if (enabled) {
      window.requestAnimationFrame(() => {
        const targets = Array.from(document.querySelectorAll(".nerd-only"))
          .filter((node) => window.getComputedStyle(node).display !== "none");

        if (!targets.length) return;

        const viewportCenter = window.innerHeight / 2;
        const target = targets.reduce((best, node) => {
          const rect = node.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const distance = Math.abs(center - viewportCenter);
          return !best || distance < best.distance ? { node, distance } : best;
        }, null)?.node;

        target?.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "center",
        });
      });
    }
  }

  function togglePresentation() {
    const enabled = !body.classList.contains("presentation");

    if (enabled) {
      currentStory = nearestStoryIndex();
    }

    body.classList.toggle("presentation", enabled);
    presentationToggle?.setAttribute("aria-pressed", String(enabled));
    if (presentationToggle) presentationToggle.textContent = enabled ? "Exit" : "Story";
    localize();

    if (enabled) {
      showStory(currentStory, true);
    } else {
      storySections.forEach((section) => section.classList.remove("story-current"));
    }
  }

  function initializeReveals() {
    const groups = Array.from(document.querySelectorAll(".reveal-sequence"));
    const singles = Array.from(document.querySelectorAll("[data-reveal]"))
      .filter((node) => !node.closest(".reveal-sequence"));

    if (reducedMotion || !("IntersectionObserver" in window)) {
      [...groups, ...singles].forEach((node) => node.classList.add("is-visible"));
      groups.forEach((group) => {
        group.querySelectorAll("[data-reveal]").forEach((node) => node.classList.add("is-visible"));
      });
      return;
    }

    const revealGroup = (group) => {
      group.classList.add("is-visible");
      group.querySelectorAll("[data-reveal]").forEach((node, index) => {
        window.setTimeout(() => node.classList.add("is-visible"), index * 85);
      });
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target.classList.contains("reveal-sequence")) {
            revealGroup(entry.target);
          } else {
            entry.target.classList.add("is-visible");
          }

          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.18 }
    );

    groups.forEach((node) => observer.observe(node));
    singles.forEach((node) => observer.observe(node));
  }

  depthToggle?.addEventListener("click", toggleDepth);
  presentationToggle?.addEventListener("click", togglePresentation);
  storyPrev?.addEventListener("click", () => showStory(currentStory - 1));
  storyNext?.addEventListener("click", () => showStory(currentStory + 1));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && body.classList.contains("presentation")) {
      togglePresentation();
      return;
    }

    // Leave browser and OS shortcuts (Cmd/Ctrl+P, Ctrl+N, Alt+…) alone.
    if (event.metaKey || event.ctrlKey || event.altKey || event.isComposing) return;

    const target = event.target;
    if (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement ||
      target instanceof HTMLButtonElement ||
      (target instanceof HTMLElement && target.isContentEditable)
    ) {
      return;
    }

    const key = event.key.toLowerCase();

    if (key === "n") {
      toggleDepth();
      return;
    }

    if (key === "p") {
      togglePresentation();
      return;
    }

    if (!body.classList.contains("presentation")) return;

    if (["ArrowRight", "ArrowDown", "PageDown"].includes(event.key)) {
      event.preventDefault();
      showStory(currentStory + 1);
    }

    if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
      event.preventDefault();
      showStory(currentStory - 1);
    }
  });

  updateStoryIndicator();
  initializeReveals();

})();
