const hero = document.querySelector(".hero");
const switcher = document.querySelector("[data-project-switch]");

if (hero && switcher) {
  const buttons = [...switcher.querySelectorAll("[data-project]")];
  const notes = [...hero.querySelectorAll(".feature-note")];
  switcher.hidden = false;

  const show = (project) => {
    hero.dataset.active = project;
    for (const option of buttons) {
      option.setAttribute("aria-pressed", String(option.dataset.project === project));
    }
    for (const note of notes) {
      const active = note.dataset.scene === project;
      note.toggleAttribute("aria-hidden", !active);
      note.inert = !active;
    }
  };

  for (const button of buttons) {
    button.addEventListener("click", () => show(button.dataset.project));
  }
  show(hero.dataset.active || "tokyo");
}
