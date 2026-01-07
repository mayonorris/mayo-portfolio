// =========================
// animations.js (generic reveal system)
// Works for any element with class ".reveal"
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  // Prepare initial state (but keep pages safe: reveal alone doesn't hide)
  targets.forEach((el) => el.classList.add("reveal--init"));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          entry.target.classList.remove("reveal--init");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((el) => io.observe(el));
});
