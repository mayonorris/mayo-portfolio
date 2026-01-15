// =========================
// portfolio.js (enhanced with smooth animations)
// Filters + Search + Count + Smooth transitions
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("portfolioGrid");
  if (!grid) return; 

  const cards = Array.from(grid.querySelectorAll(".project"));
  const buttons = Array.from(document.querySelectorAll(".filter-btn"));
  const input = document.getElementById("portfolioSearch");
  const countEl = document.getElementById("portfolioCount");
  const emptyEl = document.getElementById("portfolioEmpty");

  let activeFilter = "all";
  let query = "";

  const normalize = (s) => (s || "").toLowerCase().trim();

  const matchesFilter = (card) => {
    if (activeFilter === "all") return true;
    const cats = normalize(card.dataset.category).split(/\s+/);
    return cats.includes(activeFilter);
  };

  const matchesQuery = (card) => {
    if (!query) return true;
    const haystack = [
      card.dataset.title,
      card.dataset.tags,
      card.textContent
    ].map(normalize).join(" ");
    return haystack.includes(query);
  };

  const apply = () => {
    let visible = 0;

    // First, fade out all cards
    cards.forEach((card) => {
      card.style.transition = "opacity 0.2s ease, transform 0.2s ease";
      card.style.opacity = "0";
      card.style.transform = "scale(0.95)";
    });

    // After fade out, update visibility and fade in
    setTimeout(() => {
      cards.forEach((card, index) => {
        const show = matchesFilter(card) && matchesQuery(card);
        
        if (show) {
          card.hidden = false;
          // Stagger the fade in
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, index * 30);
          visible += 1;
        } else {
          card.hidden = true;
          card.style.opacity = "0";
        }
      });

      // Update count with smooth animation
      if (countEl) {
        const currentCount = parseInt(countEl.textContent) || 0;
        if (currentCount !== visible) {
          animateCount(countEl, currentCount, visible, 300);
        }
      }

      // Show/hide empty state with fade
      if (emptyEl) {
        if (visible === 0) {
          emptyEl.hidden = false;
          setTimeout(() => {
            emptyEl.style.opacity = "1";
          }, 10);
        } else {
          emptyEl.style.opacity = "0";
          setTimeout(() => {
            emptyEl.hidden = true;
          }, 200);
        }
      }
    }, 200);
  };

  // Smooth number counter animation
  const animateCount = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      element.textContent = String(current);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = String(end);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Filter buttons with smooth transition
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Don't re-filter if already active
      if (btn.classList.contains("is-active")) return;

      buttons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      activeFilter = btn.dataset.filter || "all";
      
      // Add slight delay for better UX
      requestAnimationFrame(() => {
        apply();
      });
    });
  });

  // Search input with debouncing
  if (input) {
    let searchTimeout;
    
    input.addEventListener("input", () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        query = normalize(input.value);
        apply();
      }, 200); // Debounce for 200ms
    });

    // Clear search on Escape
    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        input.value = "";
        query = "";
        apply();
        input.blur();
      }
    });
  }

  // Initialize with smooth entrance
  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "scale(0.95)";
  });

  setTimeout(() => {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
      }, index * 50);
    });
  }, 100);

  // Initialize count
  apply();

  // Add URL hash support for filters
  const hash = window.location.hash.slice(1);
  if (hash && buttons.some(btn => btn.dataset.filter === hash)) {
    const targetBtn = buttons.find(btn => btn.dataset.filter === hash);
    if (targetBtn) {
      buttons.forEach((b) => b.classList.remove("is-active"));
      targetBtn.classList.add("is-active");
      activeFilter = hash;
      apply();
    }
  }

  // Update URL hash when filter changes
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      if (filter !== "all") {
        window.history.replaceState(null, "", `#${filter}`);
      } else {
        window.history.replaceState(null, "", window.location.pathname);
      }
    });
  });

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    // Number keys 1-5 for quick filter switching
    if (e.key >= "1" && e.key <= "5") {
      const index = parseInt(e.key) - 1;
      if (buttons[index]) {
        buttons[index].click();
      }
    }
  });
});