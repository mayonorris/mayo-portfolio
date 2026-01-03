// =========================
// animations.js
// Subtle reveal-on-scroll animations
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  // Elements to animate in
  const targets = document.querySelectorAll(`
    .hero__content, .hero__visual,
    .trust-card,
    .about__text, .about__facts,
    .project-card,
    .skills-group,
    .timeline-item,
    .contact__content, .contact__form
  `);

  // Add initial state class
  targets.forEach((el) => el.classList.add("reveal"));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((el) => io.observe(el));
});
