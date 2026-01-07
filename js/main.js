// =========================
// main.js (Upgraded)
// =========================

// Active nav link based on page (multi-page)
const path = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav__links a").forEach((a) => {
  const href = a.getAttribute("href");
  if (href === path) a.classList.add("is-active");
});


document.addEventListener("DOMContentLoaded", () => {
  // ---------- Helpers ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // ---------- Footer year ----------
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Mobile nav (CSS-driven) ----------
  const header = $(".site-header");
  const toggleBtn = $(".nav__toggle");
  const navLinksWrap = $(".nav__links");
  const navCtaWrap = $(".nav__cta");

  const closeMenu = () => {
    if (!toggleBtn || !header) return;
    toggleBtn.setAttribute("aria-expanded", "false");
    header.classList.remove("is-open");
  };

  const openMenu = () => {
    if (!toggleBtn || !header) return;
    toggleBtn.setAttribute("aria-expanded", "true");
    header.classList.add("is-open");
  };

  if (toggleBtn && header) {
    toggleBtn.addEventListener("click", () => {
      const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
      expanded ? closeMenu() : openMenu();
    });

    // Close when clicking a nav link
    if (navLinksWrap) {
      $$("a", navLinksWrap).forEach((a) => a.addEventListener("click", closeMenu));
    }

    // Close on outside click
    document.addEventListener("click", (e) => {
      const clickedInside = header.contains(e.target);
      const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
      if (!clickedInside && expanded) closeMenu();
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // Close when resizing to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 720) closeMenu();
    });
  }

  // ---------- Smooth scroll with sticky header offset ----------
  // Ensures section headings don't hide under the sticky navbar
  const headerOffset = () => {
    const h = header?.offsetHeight ?? 0;
    return h + 10; // small breathing space
  };

  const smoothScrollTo = (targetId) => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset();
    window.scrollTo({ top, behavior: "smooth" });
  };

  // Intercept internal anchor links (#section)
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const id = href.slice(1);
      if (!document.getElementById(id)) return;
      e.preventDefault();
      smoothScrollTo(id);
    });
  });

  // ---------- Scroll progress bar ----------
  const progressBar = $(".progress-bar");
  const updateProgress = () => {
    if (!progressBar) return;
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = `${pct}%`;
  };

  // ---------- Back to top button ----------
  const toTopBtn = $(".to-top");
  const updateToTop = () => {
    if (!toTopBtn) return;
    if (window.scrollY > 600) toTopBtn.classList.add("show");
    else toTopBtn.classList.remove("show");
  };

  if (toTopBtn) {
    toTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ---------- Active nav link highlighting (ScrollSpy) ----------
  // Highlights nav link based on the section currently in view
  const navLinks = $$(".nav__links a");
  const sectionIds = navLinks
    .map((a) => a.getAttribute("href"))
    .filter((h) => h && h.startsWith("#") && h.length > 1)
    .map((h) => h.slice(1));

  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const setActiveLink = (id) => {
    navLinks.forEach((a) => {
      const match = a.getAttribute("href") === `#${id}`;
      a.classList.toggle("is-active", match);
    });
  };

  if (sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        // Choose the most visible intersecting entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveLink(visible.target.id);
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6],
        rootMargin: `-${headerOffset()}px 0px -60% 0px`,
      }
    );

    sections.forEach((sec) => spy.observe(sec));
  }

  // Add CSS class for active link style (optional, but recommended)
  // You can style ".nav__links a.is-active" in CSS.

  // ---------- Skills chips: tooltip follows cursor on desktop ----------
  const tooltip = $(".chip-tooltip");
  const chips = $$(".chip");
  if (tooltip && chips.length) {
    const defaultText = "Hover or tap a skill chip to see how I use it in real projects.";
    tooltip.textContent = defaultText;

    // Desktop: show details on hover
    chips.forEach((chip) => {
      const detail = chip.getAttribute("data-detail") || defaultText;

      chip.addEventListener("mouseenter", () => (tooltip.textContent = detail));
      chip.addEventListener("mouseleave", () => (tooltip.textContent = defaultText));

      // Mobile: tap to lock/unlock
      chip.addEventListener("click", () => {
        tooltip.textContent = tooltip.textContent === detail ? defaultText : detail;
      });
    });
  }

  // ---------- Contact form: lightweight UX ----------
  const form = $(".contact__form");
  if (form) {
    const showToast = (message) => {
      // Simple toast without dependencies
      let toast = $(".toast");
      if (!toast) {
        toast = document.createElement("div");
        toast.className = "toast";
        document.body.appendChild(toast);
      }
      toast.textContent = message;
      toast.classList.add("show");
      clearTimeout(showToast._t);
      showToast._t = setTimeout(() => toast.classList.remove("show"), 2600);
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector('input[name="name"]')?.value.trim();
      const email = form.querySelector('input[name="email"]')?.value.trim();
      const msg = form.querySelector('textarea[name="message"]')?.value.trim();

      if (!name || !email || !msg) {
        showToast("Please fill in all fields.");
        return;
      }

      // Fake success for now (until backend/Formspree)
      form.reset();
      showToast("Message prepared ✅ (connect a backend to send it).");
    });
  }

  // ---------- Scroll updates ----------
  const onScroll = () => {
    updateProgress();
    updateToTop();
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
