// =========================
// main.js
// =========================

document.addEventListener("DOMContentLoaded", () => {
  // 1) Footer year auto-update
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2) Mobile nav toggle
  const toggleBtn = document.querySelector(".nav__toggle");
  const navLinks = document.querySelector(".nav__links");
  const navCta = document.querySelector(".nav__cta");

  if (toggleBtn && navLinks && navCta) {
    // Create a mobile menu container to show/hide on small screens
    // We'll toggle a class on <header> and rely on CSS later if needed.
    const header = document.querySelector(".site-header");

    const setExpanded = (isExpanded) => {
      toggleBtn.setAttribute("aria-expanded", String(isExpanded));
      if (header) header.classList.toggle("is-open", isExpanded);

      // Simple inline toggling for now (works immediately without extra CSS)
      navLinks.style.display = isExpanded ? "flex" : "";
      navCta.style.display = isExpanded ? "flex" : "";

      // Make it look decent in mobile when opened
      if (isExpanded) {
        navLinks.style.flexDirection = "column";
        navLinks.style.gap = "0.75rem";
        navLinks.style.padding = "1rem 0";

        navCta.style.flexDirection = "column";
        navCta.style.gap = "0.75rem";
        navCta.style.paddingBottom = "1rem";
      } else {
        // Reset to CSS defaults
        navLinks.style.flexDirection = "";
        navLinks.style.gap = "";
        navLinks.style.padding = "";

        navCta.style.flexDirection = "";
        navCta.style.gap = "";
        navCta.style.paddingBottom = "";
      }
    };

    // initial state
    setExpanded(false);

    toggleBtn.addEventListener("click", () => {
      const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
      setExpanded(!expanded);
    });

    // Close menu when clicking a nav link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setExpanded(false));
    });

    // Close menu if user resizes to desktop width
    window.addEventListener("resize", () => {
      if (window.innerWidth > 720) setExpanded(false);
    });
  }

  // 3) Skills chips tooltip
  const tooltip = document.querySelector(".chip-tooltip");
  const chips = document.querySelectorAll(".chip");

  if (tooltip && chips.length > 0) {
    const defaultText = "Hover on a skill chip to see how I use it in real projects.";
    tooltip.textContent = defaultText;

    chips.forEach((chip) => {
      chip.addEventListener("mouseenter", () => {
        const detail = chip.getAttribute("data-detail");
        tooltip.textContent = detail ? detail : defaultText;
      });

      chip.addEventListener("mouseleave", () => {
        tooltip.textContent = defaultText;
      });

      // Mobile-friendly: tap to toggle
      chip.addEventListener("click", () => {
        const detail = chip.getAttribute("data-detail");
        if (!detail) return;

        // If already showing this detail, reset
        if (tooltip.textContent === detail) {
          tooltip.textContent = defaultText;
        } else {
          tooltip.textContent = detail;
        }
      });
    });
  }
});
