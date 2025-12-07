document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks   = document.getElementById("navLinks");

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "A" || target.closest("a")) {
      navLinks.classList.remove("open");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
      navLinks.classList.remove("open");
    }
  });

  document.addEventListener("click", (event) => {
    const isClickInsideNav  = navLinks.contains(event.target);
    const isClickOnToggle   = menuToggle.contains(event.target);

    if (!isClickInsideNav && !isClickOnToggle) {
      navLinks.classList.remove("open");
    }
  });
});
