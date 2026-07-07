type Activity = {
  id: string;
  title: string;
  summary: string;
  body: string;
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll<HTMLElement>("[data-cube-field]").forEach((field) => {
  if (prefersReducedMotion) return;

  const cubes = [...field.querySelectorAll<HTMLElement>(".cube")];
  let resetTimer: number | undefined;

  const clearCubes = () => {
    window.clearTimeout(resetTimer);
    cubes.forEach((cube) => {
      cube.classList.remove("is-active", "is-pushed");
      cube.style.setProperty("--cube-x", "0");
      cube.style.setProperty("--cube-y", "0");
      cube.style.setProperty("--push-x", "0px");
      cube.style.setProperty("--push-y", "0px");
    });
  };

  const activateCube = (activeCube: HTMLElement, autoReset = false) => {
    window.clearTimeout(resetTimer);

    const activeRect = activeCube.getBoundingClientRect();
    const activeCenterX = activeRect.left + activeRect.width / 2;
    const activeCenterY = activeRect.top + activeRect.height / 2;
    const pushDistance = window.matchMedia("(max-width: 560px)").matches ? 14 : 18;

    cubes.forEach((cube) => {
      cube.classList.toggle("is-active", cube === activeCube);
      cube.classList.toggle("is-pushed", cube !== activeCube);

      if (cube === activeCube) return;

      const rect = cube.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = centerX - activeCenterX;
      const deltaY = centerY - activeCenterY;
      const length = Math.hypot(deltaX, deltaY) || 1;

      cube.style.setProperty("--push-x", `${((deltaX / length) * pushDistance).toFixed(1)}px`);
      cube.style.setProperty("--push-y", `${((deltaY / length) * pushDistance).toFixed(1)}px`);
    });

    if (autoReset) {
      resetTimer = window.setTimeout(clearCubes, 1400);
    }
  };

  cubes.forEach((cube) => {
    cube.addEventListener("pointerenter", () => {
      activateCube(cube);
    });

    cube.addEventListener("pointerdown", () => {
      activateCube(cube, true);
    });

    cube.addEventListener("pointermove", (event) => {
      const rect = cube.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      cube.style.setProperty("--cube-x", x.toFixed(3));
      cube.style.setProperty("--cube-y", y.toFixed(3));
    });

    cube.addEventListener("pointerleave", () => {
      cube.style.setProperty("--cube-x", "0");
      cube.style.setProperty("--cube-y", "0");
    });
  });

  field.addEventListener("pointerleave", clearCubes);
});

document.querySelectorAll<HTMLElement>("[data-activity-tabs]").forEach((root) => {
  const dataElement = root.querySelector<HTMLScriptElement>("[data-activity-data]");
  const tabs = [...root.querySelectorAll<HTMLButtonElement>("[data-activity-id]")];
  const title = root.querySelector<HTMLElement>("[data-activity-title]");
  const summary = root.querySelector<HTMLElement>("[data-activity-summary]");
  const body = root.querySelector<HTMLElement>("[data-activity-body]");
  const content = root.querySelector<HTMLElement>(".activity-content");

  if (!dataElement || !title || !summary || !body || !content) return;

  const activities = JSON.parse(dataElement.textContent || "[]") as Activity[];

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const next = activities.find((activity) => activity.id === tab.dataset.activityId);
      if (!next) return;

      tabs.forEach((item) => item.setAttribute("aria-selected", String(item === tab)));
      content.classList.add("is-switching");

      window.setTimeout(() => {
        summary.textContent = next.summary;
        title.textContent = next.title;
        body.textContent = next.body;
        content.classList.remove("is-switching");
      }, 120);
    });
  });
});
