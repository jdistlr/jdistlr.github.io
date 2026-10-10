(() => {
  const state = {
    scenes: [],
    index: 0,
    startedAt: Date.now(),
    presenter: new URLSearchParams(location.search).get("presenter") === "1",
    channel: null,
  };

  const byId = (id) => document.getElementById(id);
  const els = {
    frame: byId("labStageFrame"),
    mount: byId("labMount"),
    title: byId("labTitle"),
    deckTitle: byId("labDeckTitle"),
    count: byId("labCount"),
    progress: byId("labProgress"),
    prev: byId("labPrev"),
    next: byId("labNext"),
    overview: byId("labOverview"),
    notes: byId("labNotes"),
    presenter: byId("labPresenter"),
    fullscreen: byId("labFullscreen"),
    overlay: byId("labOverlay"),
    overlayClose: byId("labOverlayClose"),
    grid: byId("labGrid"),
    noteDrawer: byId("labNoteDrawer"),
    noteDrawerText: byId("labNoteDrawerText"),
    notesText: byId("labNotesText"),
    nextTitle: byId("labNextTitle"),
    timer: byId("labTimer"),
    error: byId("labError"),
  };

  if (state.presenter) {
    document.body.classList.add("lab-presenter-window");
  }

  if ("BroadcastChannel" in window) {
    state.channel = new BroadcastChannel("aep-presentation-runtime-spike");
    state.channel.addEventListener("message", (event) => {
      if (event.data && event.data.type === "scene" && Number.isInteger(event.data.index)) {
        show(event.data.index, false);
      }
    });
  }

  const pad = (value) => String(value).padStart(2, "0");

  function sceneTitle(scene) {
    return scene.dataset.storyTitle
      || scene.querySelector("h1,h2,h3")?.textContent?.trim()
      || "Scene";
  }

  function sceneKicker(scene) {
    return scene.querySelector(".eyebrow")?.textContent?.trim()
      || "Concept Experience";
  }

  function sceneNote(scene) {
    return scene.dataset.presenterNote
      || scene.querySelector(".section-heading > p, .hero-lead, .panel-thesis strong, p")?.textContent?.trim()
      || "No speaker notes metadata on this scene yet.";
  }

  function normalizeClone(scene) {
    const clone = scene.cloneNode(true);
    clone.removeAttribute("id");
    clone.querySelectorAll("[id]").forEach((node) => node.removeAttribute("id"));
    clone.querySelectorAll("a,button,input,select,textarea").forEach((node) => {
      node.setAttribute("tabindex", "-1");
    });
    return clone;
  }

  function fitScene() {
    const scene = els.mount.firstElementChild;
    if (!scene) return;

    scene.style.transform = "";
    scene.style.width = "100%";

    requestAnimationFrame(() => {
      const contentHeight = scene.scrollHeight;
      const scale = Math.min(1, 900 / Math.max(contentHeight, 1));

      if (scale < 0.995) {
        scene.style.width = String(100 / scale) + "%";
        scene.style.transform = "scale(" + scale + ")";
      }
    });
  }

  function scaleStage() {
    const toolbar = document.querySelector(".lab-toolbar")?.offsetHeight || 58;
    const footer = document.querySelector(".lab-footer")?.offsetHeight || 62;
    const side = state.presenter ? 300 : 0;
    const availableW = Math.max(240, window.innerWidth - side - 28);
    const availableH = Math.max(180, window.innerHeight - toolbar - footer - 28);
    const scale = Math.min(availableW / 1600, availableH / 900);

    els.frame.style.transform = "scale(" + scale + ")";
    els.frame.style.margin =
      String((900 * scale - 900) / 2) + "px " +
      String((1600 * scale - 1600) / 2) + "px";
  }

  function renderGrid() {
    els.grid.replaceChildren(
      ...state.scenes.map((scene, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.setAttribute("aria-current", String(index === state.index));

        const number = document.createElement("span");
        number.textContent = pad(index + 1);

        const title = document.createElement("strong");
        title.textContent = sceneTitle(scene);

        const kicker = document.createElement("small");
        kicker.textContent = sceneKicker(scene);

        button.append(number, title, kicker);
        button.addEventListener("click", () => {
          show(index);
          setOverlay(false);
        });

        return button;
      })
    );
  }

  function updateMeta() {
    const current = state.scenes[state.index];
    const upcoming = state.scenes[state.index + 1];

    els.count.textContent = pad(state.index + 1) + " / " + pad(state.scenes.length);
    els.title.textContent = sceneTitle(current);
    els.progress.style.width = String(((state.index + 1) / state.scenes.length) * 100) + "%";
    els.prev.disabled = state.index === 0;
    els.next.disabled = state.index === state.scenes.length - 1;
    els.nextTitle.textContent = upcoming ? sceneTitle(upcoming) : "End of deck";

    const note = sceneNote(current);
    els.notesText.textContent = note;
    els.noteDrawerText.textContent = note;

    history.replaceState(null, "", "#" + String(state.index + 1));
  }

  function show(index, broadcast = true) {
    if (!state.scenes.length) return;

    state.index = Math.max(0, Math.min(index, state.scenes.length - 1));
    const clone = normalizeClone(state.scenes[state.index]);

    document.body.classList.remove("lab-transition");
    els.mount.replaceChildren(clone);
    void document.body.offsetWidth;
    document.body.classList.add("lab-transition");

    updateMeta();
    if (!els.overlay.hidden) renderGrid();
    fitScene();

    if (broadcast && state.channel) {
      state.channel.postMessage({ type: "scene", index: state.index });
    }
  }

  let overlayReturnFocus = null;

  function setOverlay(open) {
    if (open === !els.overlay.hidden) return;
    els.overlay.hidden = !open;

    if (open) {
      overlayReturnFocus = document.activeElement;
      renderGrid();
      const current = els.grid.querySelector('[aria-current="true"]') || els.overlayClose;
      current?.focus();
    } else if (overlayReturnFocus instanceof HTMLElement && overlayReturnFocus.isConnected) {
      overlayReturnFocus.focus();
      overlayReturnFocus = null;
    }
  }

  function toggleNotes() {
    els.noteDrawer.hidden = !els.noteDrawer.hidden;
  }

  async function toggleFullscreen() {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (_) {
      // Fullscreen is enhancement only.
    }
  }

  function openPresenter() {
    const url = new URL(location.href);
    url.searchParams.set("presenter", "1");
    url.hash = "#" + String(state.index + 1);
    window.open(url, "aep-presenter");
  }

  function updateTimer() {
    const elapsed = Math.max(0, Date.now() - state.startedAt);
    const totalSeconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    els.timer.textContent = pad(minutes) + ":" + pad(seconds);
  }

  function resetTimer() {
    state.startedAt = Date.now();
    updateTimer();
  }

  async function load() {
    try {
      const response = await fetch("./index.html", { cache: "no-store" });
      if (!response.ok) {
        throw new Error("Could not load source experience (" + response.status + ").");
      }

      const source = await response.text();
      const doc = new DOMParser().parseFromString(source, "text/html");
      state.scenes = Array.from(doc.querySelectorAll("main [data-story]"));

      if (!state.scenes.length) {
        throw new Error("No [data-story] scenes found in index.html.");
      }

      const sourceTitle = doc.querySelector("title")?.textContent
        ?.replace(" — Concept Experience", "")
        ?.trim();

      if (sourceTitle) {
        els.deckTitle.textContent = sourceTitle;
      }

      const hashIndex = Number.parseInt(location.hash.replace("#", ""), 10) - 1;
      show(Number.isInteger(hashIndex) && hashIndex >= 0 ? hashIndex : 0, false);
      scaleStage();
    } catch (error) {
      els.error.hidden = false;
      els.error.textContent =
        error.message +
        " This experimental exposure must be served over HTTP(S); direct file:// loading cannot fetch the source experience.";
    }
  }

  els.prev.addEventListener("click", () => show(state.index - 1));
  els.next.addEventListener("click", () => show(state.index + 1));
  els.overview.addEventListener("click", () => setOverlay(true));
  els.overlayClose.addEventListener("click", () => setOverlay(false));
  els.notes.addEventListener("click", toggleNotes);
  els.presenter.addEventListener("click", openPresenter);
  els.fullscreen.addEventListener("click", toggleFullscreen);
  els.timer.addEventListener("click", resetTimer);

  document.addEventListener("keydown", (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey || event.isComposing) return;

    if (event.key === "Escape") {
      if (!els.overlay.hidden) setOverlay(false);
      if (!els.noteDrawer.hidden) els.noteDrawer.hidden = true;
      return;
    }

    const target = event.target instanceof HTMLElement ? event.target : null;

    // Text entry keeps every key.
    if (target && (target.closest("input, select, textarea") || target.isContentEditable)) return;

    // Focused buttons and links keep Space/Enter for activation; arrows still navigate.
    if (target?.closest("button, a[href], summary") && [" ", "Enter"].includes(event.key)) return;

    if (event.key.toLowerCase() === "g") {
      setOverlay(els.overlay.hidden);
      return;
    }

    // While the overview is open, keys belong to it: no navigation behind the overlay.
    if (!els.overlay.hidden) return;

    if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
      event.preventDefault();
      show(state.index + 1);
      return;
    }

    if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
      event.preventDefault();
      show(state.index - 1);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      show(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      show(state.scenes.length - 1);
      return;
    }

    const key = event.key.toLowerCase();
    if (key === "n") toggleNotes();
    if (key === "f") toggleFullscreen();
    if (key === "p") openPresenter();
  });

  let touchStartX = null;

  document.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0]?.clientX ?? null;
  }, { passive: true });

  document.addEventListener("touchend", (event) => {
    if (touchStartX == null) return;
    if (!els.overlay.hidden) {
      touchStartX = null;
      return;
    }

    const end = event.changedTouches[0]?.clientX ?? touchStartX;
    const delta = end - touchStartX;
    touchStartX = null;

    if (Math.abs(delta) < 55) return;
    show(state.index + (delta < 0 ? 1 : -1));
  }, { passive: true });

  window.addEventListener("resize", scaleStage);
  window.setInterval(updateTimer, 1000);

  updateTimer();
  load();
})();
