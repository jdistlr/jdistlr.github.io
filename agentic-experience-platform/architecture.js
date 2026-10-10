(() => {
  const section = document.getElementById("sparkletLife");
  if (!section) return;

  const stage = section.querySelector(".sparklet-stage");
  const runtime = document.getElementById("sparkletRuntime");
  const sourceSpark = document.getElementById("sparkletSourceSpark");
  const targetSpark = document.getElementById("sparkletTargetSpark");
  const livePanel = document.getElementById("sparkletLive");
  const flight = document.getElementById("sparkletFlight");
  const lights = document.getElementById("sparkletLights");
  const lightsLabel = document.getElementById("sparkletLightsLabel");
  const whisper = document.getElementById("sparkletNightWhisper");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!stage || !runtime || !sourceSpark || !targetSpark || !livePanel || !flight || !lights || !lightsLabel) return;

  const svgNs = "http://www.w3.org/2000/svg";
  const connectLayer = document.createElementNS(svgNs, "svg");
  const connectTrack = document.createElementNS(svgNs, "path");
  const connectEnergy = document.createElementNS(svgNs, "path");
  const connectSnap = document.createElementNS(svgNs, "path");
  const capture = document.createElement("span");
  const panelFlare = document.createElement("span");

  connectLayer.classList.add("sparklet-connect-layer");
  connectLayer.setAttribute("aria-hidden", "true");
  connectLayer.setAttribute("preserveAspectRatio", "none");
  connectLayer.hidden = true;

  connectTrack.classList.add("sparklet-connect-track");
  connectEnergy.classList.add("sparklet-connect-energy");
  connectSnap.classList.add("sparklet-connect-snap");
  connectLayer.append(connectTrack, connectEnergy, connectSnap);
  runtime.prepend(connectLayer);

  capture.classList.add("sparklet-connect-capture");
  capture.setAttribute("aria-hidden", "true");
  capture.hidden = true;
  runtime.append(capture);

  panelFlare.classList.add("sparklet-panel-flare");
  panelFlare.setAttribute("aria-hidden", "true");
  panelFlare.hidden = true;

  for (const edgeName of ["top", "right", "bottom", "left"]) {
    const edge = document.createElement("i");
    edge.dataset.edge = edgeName;
    panelFlare.append(edge);
  }

  livePanel.append(panelFlare);
  const panelEdges = [...panelFlare.children];

  let hasPlayed = false;
  let isPlaying = false;
  let whisperTimer = 0;
  let switchTimer = 0;
  let replayTimer = 0;
  let chargeTimer = 0;
  let snapTimer = 0;
  let settleTimer = 0;
  let panelTimer = 0;
  let resizeFrame = 0;

  stage.classList.add("sparklet-motion-ready");

  const connectElements = [connectTrack, connectEnergy, connectSnap];

  const cancelConnectAnimations = () => {
    flight.getAnimations().forEach((animation) => animation.cancel());
    capture.getAnimations().forEach((animation) => animation.cancel());
    panelEdges.forEach((edge) => {
      edge.getAnimations().forEach((animation) => animation.cancel());
    });
    connectElements.forEach((element) => {
      element.getAnimations().forEach((animation) => animation.cancel());
    });

    window.clearTimeout(chargeTimer);
    window.clearTimeout(snapTimer);
    window.clearTimeout(settleTimer);
    window.clearTimeout(panelTimer);
  };

  const clearMotionState = () => {
    stage.classList.remove(
      "sparklet-energizing",
      "sparklet-seeking",
      "sparklet-capturing",
      "sparklet-connected",
      "sparklet-arrived",
    );
  };

  const hideConnection = () => {
    connectLayer.hidden = true;
    capture.hidden = true;
    panelFlare.hidden = true;
    connectSnap.removeAttribute("d");
    connectElements.forEach((element) => element.removeAttribute("style"));
  };

  const getConnectionGeometry = () => {
    const runtimeRect = runtime.getBoundingClientRect();
    const sourceRect = sourceSpark.getBoundingClientRect();
    const targetRect = targetSpark.getBoundingClientRect();

    const start = {
      x: sourceRect.left - runtimeRect.left + sourceRect.width / 2,
      y: sourceRect.top - runtimeRect.top + sourceRect.height / 2,
    };
    const end = {
      x: targetRect.left - runtimeRect.left + targetRect.width / 2,
      y: targetRect.top - runtimeRect.top + targetRect.height / 2,
    };

    const deltaX = end.x - start.x;
    const deltaY = end.y - start.y;
    const mostlyHorizontal = Math.abs(deltaX) >= Math.abs(deltaY);
    const distance = Math.max(1, Math.hypot(deltaX, deltaY));
    const bend = Math.min(82, Math.max(30, distance * 0.18));

    let c1;
    let c2;

    if (mostlyHorizontal) {
      const direction = deltaX >= 0 ? 1 : -1;
      const lift = Math.sign(deltaY || -1) * -bend;

      c1 = {
        x: start.x + deltaX * 0.34,
        y: start.y + lift,
      };
      c2 = {
        x: start.x + deltaX * 0.72,
        y: end.y + lift * 0.72,
      };

      if (Math.abs(deltaY) > distance * 0.46) {
        c1.x = start.x + direction * bend;
        c2.x = end.x - direction * bend * 0.7;
      }
    } else {
      const side = deltaX >= 0 ? 1 : -1;
      c1 = {
        x: start.x + side * bend,
        y: start.y + deltaY * 0.34,
      };
      c2 = {
        x: end.x + side * bend * 0.72,
        y: start.y + deltaY * 0.74,
      };
    }

    const forward = [
      `M ${start.x.toFixed(1)} ${start.y.toFixed(1)}`,
      `C ${c1.x.toFixed(1)} ${c1.y.toFixed(1)}`,
      `${c2.x.toFixed(1)} ${c2.y.toFixed(1)}`,
      `${end.x.toFixed(1)} ${end.y.toFixed(1)}`,
    ].join(" ");

    const reverse = [
      `M ${end.x.toFixed(1)} ${end.y.toFixed(1)}`,
      `C ${c2.x.toFixed(1)} ${c2.y.toFixed(1)}`,
      `${c1.x.toFixed(1)} ${c1.y.toFixed(1)}`,
      `${start.x.toFixed(1)} ${start.y.toFixed(1)}`,
    ].join(" ");

    return { runtimeRect, start, end, forward, reverse };
  };

  const renderConnectionGeometry = () => {
    const geometry = getConnectionGeometry();

    connectLayer.setAttribute(
      "viewBox",
      `0 0 ${geometry.runtimeRect.width} ${geometry.runtimeRect.height}`,
    );
    connectTrack.setAttribute("d", geometry.forward);
    connectEnergy.setAttribute("d", geometry.reverse);

    capture.style.left = `${geometry.end.x}px`;
    capture.style.top = `${geometry.end.y}px`;

    return geometry;
  };

  const setSettledConnection = () => {
    const trackLength = Math.max(1, connectTrack.getTotalLength());

    connectTrack.style.strokeDasharray = `${trackLength}`;
    connectTrack.style.strokeDashoffset = "0";
    connectTrack.style.opacity = document.body.classList.contains("sparkery-lights-out") ? ".96" : ".72";

    connectEnergy.style.strokeDasharray = `${trackLength}`;
    connectEnergy.style.strokeDashoffset = "0";
    connectEnergy.style.opacity = document.body.classList.contains("sparkery-lights-out") ? ".14" : ".08";

    connectLayer.hidden = false;
  };

  const settleSparklet = () => {
    isPlaying = false;
    sourceSpark.disabled = false;
    stage.classList.remove("sparklet-energizing", "sparklet-seeking", "sparklet-capturing");
    stage.classList.add("sparklet-connected", "sparklet-arrived");
    flight.hidden = true;
    flight.classList.remove("is-flying");
    capture.hidden = true;
    setSettledConnection();
  };

  const buildFlightKeyframes = (path, pathLength) => {
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const searchAmplitude = isMobile ? 3.2 : 4.8;
    const steps = 34;
    const frames = [];

    for (let index = 0; index <= steps; index += 1) {
      const t = index / steps;
      const distance = pathLength * t;
      const point = path.getPointAtLength(distance);
      let x = point.x;
      let y = point.y;

      if (t >= 0.8 && t < 1) {
        const local = (t - 0.8) / 0.2;
        const before = path.getPointAtLength(Math.max(0, distance - 2));
        const after = path.getPointAtLength(Math.min(pathLength, distance + 2));
        const tangentX = after.x - before.x;
        const tangentY = after.y - before.y;
        const tangentLength = Math.max(1, Math.hypot(tangentX, tangentY));
        const normalX = -tangentY / tangentLength;
        const normalY = tangentX / tangentLength;
        const envelope = Math.sin(Math.PI * local);
        const seek = Math.sin(local * Math.PI * 5.2) * searchAmplitude * envelope;

        x += normalX * seek;
        y += normalY * seek;
      }

      const anticipation = t < 0.8
        ? Math.sin(Math.PI * Math.min(1, t / 0.8))
        : 1 - (t - 0.8) * 0.48;
      const scale = 0.72 + anticipation * 0.27;

      frames.push({
        transform: `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) translate(-50%, -50%) scale(${scale.toFixed(3)})`,
        opacity: index === 0 ? 0 : 1,
        offset: t,
      });
    }

    return frames;
  };

  const flashPreContactSnap = (trackLength) => {
    if (!trackLength || connectLayer.hidden) return;

    const near = connectTrack.getPointAtLength(trackLength * 0.86);
    const almost = connectTrack.getPointAtLength(trackLength * 0.95);
    const end = connectTrack.getPointAtLength(trackLength);
    const before = connectTrack.getPointAtLength(Math.max(0, trackLength - 5));

    const tangentX = end.x - before.x;
    const tangentY = end.y - before.y;
    const tangentLength = Math.max(1, Math.hypot(tangentX, tangentY));
    const tangent = {
      x: tangentX / tangentLength,
      y: tangentY / tangentLength,
    };
    const normal = {
      x: -tangent.y,
      y: tangent.x,
    };

    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const jump = isMobile ? 5 : 7;
    const overshoot = {
      x: end.x + tangent.x * jump + normal.x * jump * 0.62,
      y: end.y + tangent.y * jump + normal.y * jump * 0.62,
    };
    const kink = {
      x: almost.x - tangent.x * jump * 0.22 - normal.x * jump * 0.5,
      y: almost.y - tangent.y * jump * 0.22 - normal.y * jump * 0.5,
    };

    connectSnap.setAttribute(
      "d",
      [
        `M ${near.x.toFixed(1)} ${near.y.toFixed(1)}`,
        `C ${almost.x.toFixed(1)} ${almost.y.toFixed(1)}`,
        `${overshoot.x.toFixed(1)} ${overshoot.y.toFixed(1)}`,
        `${kink.x.toFixed(1)} ${kink.y.toFixed(1)}`,
        `S ${end.x.toFixed(1)} ${end.y.toFixed(1)}`,
        `${end.x.toFixed(1)} ${end.y.toFixed(1)}`,
      ].join(" "),
    );

    const snapLength = Math.max(1, connectSnap.getTotalLength());
    connectSnap.style.strokeDasharray = `${snapLength}`;
    connectSnap.style.strokeDashoffset = `${snapLength}`;
    connectSnap.style.opacity = "0";

    connectSnap.animate(
      [
        { strokeDashoffset: snapLength, opacity: 0, offset: 0 },
        { strokeDashoffset: snapLength * .42, opacity: .95, offset: .36 },
        { strokeDashoffset: 0, opacity: .82, offset: .7 },
        { strokeDashoffset: 0, opacity: 0, offset: 1 },
      ],
      {
        duration: 210,
        easing: "cubic-bezier(.16,.82,.2,1)",
        fill: "forwards",
      },
    );
  };

  const playPanelEdgeFlare = () => {
    panelFlare.hidden = false;

    const horizontalFrames = [
      { opacity: 0, transform: "translateX(-42%) scaleX(.18)" },
      { opacity: .95, transform: "translateX(4%) scaleX(.88)", offset: .32 },
      { opacity: .68, transform: "translateX(54%) scaleX(.72)", offset: .68 },
      { opacity: 0, transform: "translateX(92%) scaleX(.18)" },
    ];

    const verticalFrames = [
      { opacity: 0, transform: "translateY(-42%) scaleY(.18)" },
      { opacity: .9, transform: "translateY(4%) scaleY(.86)", offset: .32 },
      { opacity: .58, transform: "translateY(52%) scaleY(.68)", offset: .68 },
      { opacity: 0, transform: "translateY(92%) scaleY(.18)" },
    ];

    panelEdges.forEach((edge, index) => {
      const horizontal = edge.dataset.edge === "top" || edge.dataset.edge === "bottom";
      edge.animate(
        horizontal ? horizontalFrames : verticalFrames,
        {
          duration: horizontal ? 500 : 460,
          delay: index * 58,
          easing: "cubic-bezier(.18,.76,.18,1)",
          fill: "forwards",
        },
      );
    });

    window.clearTimeout(panelTimer);
    panelTimer = window.setTimeout(() => {
      panelFlare.hidden = true;
    }, 780);
  };

  const captureConnection = (trackLength) => {
    stage.classList.remove("sparklet-seeking");
    stage.classList.add("sparklet-capturing");
    flight.hidden = true;
    flight.classList.remove("is-flying");

    capture.hidden = false;
    playPanelEdgeFlare();
    capture.animate(
      [
        { opacity: 0, transform: "translate(-50%, -50%) scale(.42)", offset: 0 },
        { opacity: 1, transform: "translate(-50%, -50%) scale(.82)", offset: .16 },
        { opacity: .72, transform: "translate(-50%, -50%) scale(1.08)", offset: .42 },
        { opacity: 0, transform: "translate(-50%, -50%) scale(1.9)", offset: 1 },
      ],
      {
        duration: 520,
        easing: "cubic-bezier(.18,.78,.18,1)",
        fill: "forwards",
      },
    );

    connectEnergy.style.strokeDasharray = `${trackLength}`;
    connectEnergy.style.strokeDashoffset = `${trackLength}`;
    connectEnergy.style.opacity = "0";

    const lightsOut = document.body.classList.contains("sparkery-lights-out");
    const energy = connectEnergy.animate(
      [
        { strokeDashoffset: trackLength, opacity: 0, offset: 0 },
        { strokeDashoffset: trackLength * 0.72, opacity: lightsOut ? .7 : .38, offset: .2 },
        { strokeDashoffset: 0, opacity: lightsOut ? 1 : .7, offset: .74 },
        { strokeDashoffset: 0, opacity: lightsOut ? .18 : .1, offset: 1 },
      ],
      {
        duration: 620,
        easing: "cubic-bezier(.16,.76,.16,1)",
        fill: "forwards",
      },
    );

    energy.addEventListener("finish", () => {
      settleSparklet();
    }, { once: true });

    settleTimer = window.setTimeout(() => {
      if (isPlaying) settleSparklet();
    }, 760);
  };

  const playSpark = ({ force = false } = {}) => {
    if ((hasPlayed && !force) || isPlaying) return;

    hasPlayed = true;
    isPlaying = true;
    sourceSpark.disabled = true;

    cancelConnectAnimations();
    hideConnection();
    clearMotionState();
    stage.classList.add("sparklet-energizing", "sparklet-seeking");

    if (reducedMotion.matches) {
      stage.classList.remove("sparklet-energizing", "sparklet-seeking");
      stage.classList.add("sparklet-connected", "sparklet-arrived");
      sourceSpark.disabled = false;
      isPlaying = false;
      return;
    }

    renderConnectionGeometry();
    connectLayer.hidden = false;

    const trackLength = Math.max(1, connectTrack.getTotalLength());
    connectTrack.style.strokeDasharray = `${trackLength}`;
    connectTrack.style.strokeDashoffset = `${trackLength}`;
    connectTrack.style.opacity = "0";
    connectEnergy.style.opacity = "0";

    chargeTimer = window.setTimeout(() => {
      const lightsOut = document.body.classList.contains("sparkery-lights-out");
      const trackOpacity = lightsOut ? .78 : .52;

      const trackAnimation = connectTrack.animate(
        [
          { strokeDashoffset: trackLength, opacity: 0, offset: 0 },
          { strokeDashoffset: trackLength * .72, opacity: trackOpacity * .72, offset: .2 },
          { strokeDashoffset: trackLength * .17, opacity: trackOpacity, offset: .74 },
          { strokeDashoffset: 0, opacity: trackOpacity, offset: 1 },
        ],
        {
          duration: 980,
          easing: "cubic-bezier(.18,.74,.18,1)",
          fill: "forwards",
        },
      );

      flight.hidden = false;
      flight.classList.add("is-flying");
      const flightAnimation = flight.animate(
        buildFlightKeyframes(connectTrack, trackLength),
        {
          duration: 980,
          easing: "cubic-bezier(.18,.74,.18,1)",
          fill: "forwards",
        },
      );

      snapTimer = window.setTimeout(() => {
        flashPreContactSnap(trackLength);
      }, 790);

      flightAnimation.addEventListener("finish", () => {
        connectTrack.style.strokeDasharray = `${trackLength}`;
        connectTrack.style.strokeDashoffset = "0";
        connectTrack.style.opacity = `${trackOpacity}`;
        trackAnimation.cancel();
        captureConnection(trackLength);
      }, { once: true });

      flightAnimation.addEventListener("cancel", () => {
        isPlaying = false;
        sourceSpark.disabled = false;
        flight.hidden = true;
        flight.classList.remove("is-flying");
        clearMotionState();
      }, { once: true });
    }, 170);
  };

  // Without IntersectionObserver the demo stays idle until the visitor starts it.
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        playSpark();
        observer.disconnect();
      },
      { threshold: 0.34 },
    );

    observer.observe(section);
  }

  sourceSpark.addEventListener("click", () => {
    playSpark({ force: true });
  });

  const refreshSettledConnection = () => {
    if (
      reducedMotion.matches ||
      isPlaying ||
      !stage.classList.contains("sparklet-connected")
    ) {
      return;
    }

    window.cancelAnimationFrame(resizeFrame);
    resizeFrame = window.requestAnimationFrame(() => {
      renderConnectionGeometry();
      setSettledConnection();
    });
  };

  window.addEventListener("resize", refreshSettledConnection);

  const setLightsOut = (enabled) => {
    const body = document.body;

    window.clearTimeout(whisperTimer);
    window.clearTimeout(switchTimer);
    window.clearTimeout(replayTimer);

    lights.setAttribute("aria-pressed", String(enabled));
    lights.setAttribute("aria-label", enabled ? "Turn Sparkery lights back on" : "Turn Sparkery lights out");
    lightsLabel.textContent = enabled ? "off" : "on";
    window.sparkeryI18n?.apply();

    body.classList.add("sparkery-switching");

    if (enabled) {
      body.classList.add("sparkery-lights-out");

      if (whisper) {
        stage.classList.add("sparklet-whisper-visible");
        whisperTimer = window.setTimeout(() => {
          stage.classList.remove("sparklet-whisper-visible");
        }, 2200);
      }

      replayTimer = window.setTimeout(
        () => playSpark({ force: true }),
        reducedMotion.matches ? 0 : 320,
      );
    } else {
      body.classList.remove("sparkery-lights-out");
      stage.classList.remove("sparklet-whisper-visible");
      refreshSettledConnection();
    }

    switchTimer = window.setTimeout(() => {
      body.classList.remove("sparkery-switching");
    }, reducedMotion.matches ? 0 : 280);
  };

  lights.addEventListener("click", () => {
    setLightsOut(!document.body.classList.contains("sparkery-lights-out"));
  });

  window.addEventListener("pagehide", () => {
    cancelConnectAnimations();
    window.cancelAnimationFrame(resizeFrame);
    document.body.classList.remove("sparkery-switching", "sparkery-lights-out");
  });
})();

// Mobile keeps the linear architecture as the default while exposing the signature spatial stack on demand.
(() => {
  const figure = document.querySelector(".architecture-figure");
  const linear = document.getElementById("mobileArchitectureLinear");
  const spatial = document.getElementById("mobileArchitectureSpatial");
  const spatialHint = document.getElementById("mobileSpatialHint");
  const scroll = document.getElementById("architectureScroll");
  if (!figure || !linear || !spatial || !spatialHint || !scroll) return;

  const mobile = matchMedia("(max-width: 900px)");

  const centerSpatialStack = () => {
    const stackCenterRatio = 530 / 1280;
    const target = scroll.scrollWidth * stackCenterRatio - scroll.clientWidth / 2;
    scroll.scrollLeft = Math.max(0, target);
  };

  const setMode = (mode, { center = true } = {}) => {
    const isSpatial = mode === "spatial" && mobile.matches;
    figure.classList.toggle("mobile-spatial-view", isSpatial);
    linear.setAttribute("aria-pressed", String(!isSpatial));
    spatial.setAttribute("aria-pressed", String(isSpatial));
    spatialHint.hidden = !isSpatial;

    if (isSpatial && center) {
      requestAnimationFrame(centerSpatialStack);
      figure.dispatchEvent(new CustomEvent("stackspatialopen"));
    }
  };

  linear.addEventListener("click", () => setMode("linear"));
  spatial.addEventListener("click", () => setMode("spatial"));

  mobile.addEventListener("change", event => {
    if (!event.matches) setMode("linear", { center: false });
  });

  setMode("linear", { center: false });
})();

// Optional inspection of the responsibility stack. Static output stays expanded.
(() => {
  const controls = document.getElementById("stackControls");
  const assemble = document.getElementById("stackAssemble");
  const expand = document.getElementById("stackExpand");
  const figure = controls?.closest(".architecture-figure");
  if (!figure || !assemble || !expand) return;
  const desktop = matchMedia("(min-width: 901px)");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const setExpanded = (expanded) => {
    figure.classList.toggle("stack-is-assembled", !expanded);
    expand.setAttribute("aria-pressed", String(expanded));
    assemble.setAttribute("aria-pressed", String(!expanded));
    figure.querySelectorAll(".stack-label, .stack-context").forEach(node => node.setAttribute("aria-hidden", String(!expanded)));
    figure.querySelector(".stack-assembled-label")?.setAttribute("aria-hidden", String(expanded));
  };
  const sync = () => {
    controls.hidden = !desktop.matches || reduced.matches;
    if (controls.hidden) setExpanded(true);
  };
  assemble.addEventListener("click", () => setExpanded(false));
  expand.addEventListener("click", () => {
    setExpanded(true);
    figure.dispatchEvent(new CustomEvent("stackexpanded"));
  });
  controls.addEventListener("keydown", event => {
    if (event.key === "Escape") setExpanded(true);
  });
  desktop.addEventListener("change", sync);
  reduced.addEventListener("change", sync);
  setExpanded(true);
  sync();
})();


// One restrained Sparklet trace gives the spatial stack a living state without becoming ambient animation.
(() => {
  const figure = document.querySelector(".architecture-figure");
  const route = document.getElementById("stackSparkletJourney");
  const traveler = figure?.querySelector(".stack-sparklet-traveler");
  if (!figure || !route || !traveler) return;

  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  let frame = 0;
  let played = false;

  const settle = () => {
    traveler.style.opacity = "0";
    figure.classList.add("stack-sparklet-arrived");
  };

  const cancel = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    traveler.style.opacity = "0";
  };

  const play = ({ force = false } = {}) => {
    if (figure.classList.contains("stack-is-assembled")) return;
    if (played && !force) return;

    played = true;
    cancel();
    figure.classList.remove("stack-sparklet-arrived");

    if (reduced.matches) {
      settle();
      return;
    }

    const length = route.getTotalLength();
    const duration = 1560;
    const stops = [0, .25, .5, .75, 1];
    let started = 0;

    const tick = (time) => {
      if (!started) started = time;
      const raw = Math.min(1, (time - started) / duration);
      const eased = 1 - Math.pow(1 - raw, 3);
      const point = route.getPointAtLength(length * eased);
      const stopPulse = Math.max(...stops.map(stop => Math.exp(-Math.pow((eased - stop) / .028, 2))));
      const preContact = raw > .82 && raw < .94 ? 1 + Math.sin((raw - .82) / .12 * Math.PI) * .28 : 1;
      const scale = (1 + stopPulse * .16) * preContact;
      const fade = raw < .08 ? raw / .08 : raw > .94 ? (1 - raw) / .06 : 1;

      traveler.setAttribute("transform", `translate(${point.x} ${point.y}) scale(${scale})`);
      traveler.style.opacity = String(Math.max(0, Math.min(1, fade)));

      if (raw < 1) {
        frame = requestAnimationFrame(tick);
        return;
      }

      settle();
    };

    frame = requestAnimationFrame(tick);
  };

  figure.addEventListener("stackspatialopen", () => play({ force: true }));
  figure.addEventListener("stackexpanded", () => play({ force: true }));

  // Without IntersectionObserver, show the settled end state instead of failing.
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      play();
      observer.disconnect();
    }, { threshold: .42 });
    observer.observe(figure);
  } else {
    settle();
  }

  reduced.addEventListener("change", () => {
    cancel();
    if (reduced.matches) settle();
  });

  window.addEventListener("pagehide", cancel);
})();
