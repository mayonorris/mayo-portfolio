// =========================
// main.js (enhanced multi-page)
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Footer year
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Active nav link for multi-page
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  $$(".nav__links a").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === current) {
      a.classList.add("is-active");
      a.setAttribute("aria-current", "page");
    }
  });

  // Header scroll effect
  const header = $(".site-header");
  let lastScroll = 0;

  const handleHeaderScroll = () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
    
    lastScroll = currentScroll;
  };

  // Mobile menu (CSS-driven with enhanced interactions)
  const toggleBtn = $(".nav__toggle");

  const closeMenu = () => {
    if (!toggleBtn || !header) return;
    toggleBtn.setAttribute("aria-expanded", "false");
    header.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  const openMenu = () => {
    if (!toggleBtn || !header) return;
    toggleBtn.setAttribute("aria-expanded", "true");
    header.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  if (toggleBtn && header) {
    toggleBtn.addEventListener("click", () => {
      const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
      expanded ? closeMenu() : openMenu();
    });

    // Close if clicking outside header
    document.addEventListener("click", (e) => {
      const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
      if (expanded && !header.contains(e.target)) closeMenu();
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // Close when clicking a nav item (mobile)
    $$(".nav__links a").forEach((a) => a.addEventListener("click", closeMenu));

    // Close on resize to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 720) closeMenu();
    });
  }

  // Progress bar + Back to top
  const progressBar = $(".progress-bar");
  const toTopBtn = $(".to-top");

  const updateUI = () => {
    // Progress bar
    if (progressBar) {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBar.style.width = `${pct}%`;
    }

    // Back to top button
    if (toTopBtn) {
      if (window.scrollY > 300) {
        toTopBtn.classList.add("show");
      } else {
        toTopBtn.classList.remove("show");
      }
    }

    // Header scroll effect
    handleHeaderScroll();
  };

  if (toTopBtn) {
    toTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Throttle scroll events for better performance
  let scrollTimeout;
  window.addEventListener("scroll", () => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
      updateUI();
      scrollTimeout = null;
    }, 10);
  }, { passive: true });

  updateUI();

  // Smooth scroll for same-page hashes (only when element exists)
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;

      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      const headerH = header?.offsetHeight ?? 0;
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerH - 10;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  // Enhanced keyboard navigation
  document.addEventListener("keydown", (e) => {
    // Ctrl/Cmd + K for search focus
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      const searchInput = $("#portfolioSearch");
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
  });

  // Add loading class removal after page loads
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });
});