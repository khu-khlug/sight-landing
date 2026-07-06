type Activity = {
  id: string;
  title: string;
  summary: string;
  body: string;
};

type Interest = {
  label: string;
  description: string;
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll<HTMLElement>("[data-cube-field]").forEach((field) => {
  if (prefersReducedMotion) return;

  field.addEventListener("pointermove", (event) => {
    const rect = field.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    field.style.setProperty("--pointer-x", x.toFixed(3));
    field.style.setProperty("--pointer-y", y.toFixed(3));
  });

  field.addEventListener("pointerleave", () => {
    field.style.setProperty("--pointer-x", "0");
    field.style.setProperty("--pointer-y", "0");
  });
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

document.querySelectorAll<HTMLElement>("[data-interest-picker]").forEach((root) => {
  const dataElement = root.querySelector<HTMLScriptElement>("[data-interest-data]");
  const buttons = [...root.querySelectorAll<HTMLButtonElement>("[data-interest-label]")];
  const description = root.querySelector<HTMLElement>("[data-interest-description]");

  if (!dataElement || !description) return;

  const interests = JSON.parse(dataElement.textContent || "[]") as Interest[];

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const next = interests.find((interest) => interest.label === button.dataset.interestLabel);
      if (!next) return;

      buttons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      description.classList.add("is-switching");

      window.setTimeout(() => {
        description.textContent = next.description;
        description.classList.remove("is-switching");
      }, 120);
    });
  });
});
