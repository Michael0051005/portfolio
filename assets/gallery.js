const stage = document.querySelector("#hero-stage");
const switcher = document.querySelector("[data-project-switch]");

if (stage && switcher) {
  const buttons = [...switcher.querySelectorAll("[data-project]")];
  switcher.hidden = false;

  for (const button of buttons) {
    button.addEventListener("click", () => {
      stage.dataset.active = button.dataset.project;
      for (const option of buttons) {
        option.setAttribute("aria-pressed", String(option === button));
      }
    });
  }
}
