document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-link");
  const sections = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();
      const targetTab = tab.getAttribute("data-tab");

      sections.forEach((section) => {
        section.classList.add("hidden");
      });

      document.getElementById(targetTab).classList.remove("hidden");
    });
  });
});
