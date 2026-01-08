// =========================
// portfolio.js
// Filters + Search + Count
// No dependencies, no conflicts
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

    cards.forEach((card) => {
      const show = matchesFilter(card) && matchesQuery(card);
      card.hidden = !show;
      if (show) visible += 1;
    });

    if (countEl) countEl.textContent = String(visible);
    if (emptyEl) emptyEl.hidden = visible !== 0;
  };

  // Filter buttons
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      activeFilter = btn.dataset.filter || "all";
      apply();
    });
  });

  // Search input
  if (input) {
    input.addEventListener("input", () => {
      query = normalize(input.value);
      apply();
    });
  }

  // Initialize count
  apply();
});
