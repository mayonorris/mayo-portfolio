// =========================
// animations.js (enhanced reveal system with stagger)
// Works for any element with class ".reveal"
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  // Prepare initial state
  targets.forEach((el, index) => {
    el.classList.add("reveal--init");
    // Add slight stagger delay for sequential reveals
    el.style.transitionDelay = `${index * 50}ms`;
  });

  // Enhanced intersection observer with better threshold
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Small delay to ensure smooth reveal
          requestAnimationFrame(() => {
            entry.target.classList.add("reveal--visible");
            entry.target.classList.remove("reveal--init");
          });
          io.unobserve(entry.target);
        }
      });
    },
    { 
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is visible
    }
  );

  targets.forEach((el) => io.observe(el));

  // Optional: Add parallax effect to hero sections
  const heroElements = document.querySelectorAll(".home-hero, .page-hero");
  
  if (heroElements.length > 0) {
    let ticking = false;
    
    const updateParallax = () => {
      const scrolled = window.pageYOffset;
      
      heroElements.forEach((hero) => {
        const rect = hero.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const yPos = scrolled * 0.3;
          hero.style.transform = `translateY(${yPos}px)`;
        }
      });
      
      ticking = false;
    };
    
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", requestTick, { passive: true });
  }

  // Add smooth entrance animation for cards on hover
  const cards = document.querySelectorAll(".project, .service-card, .value-card, .info-card");
  
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transition = "all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)";
    });
  });

  // Observe image loading for smooth fade-in
  const images = document.querySelectorAll("img");
  
  if (images.length > 0 && "IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.style.opacity = "0";
          img.style.transition = "opacity 0.4s ease";
          
          if (img.complete) {
            img.style.opacity = "1";
          } else {
            img.addEventListener("load", () => {
              img.style.opacity = "1";
            });
          }
          
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach((img) => imageObserver.observe(img));
  }

  // Add number counter animation for stats
  const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutQuad = progress * (2 - progress); // Easing function
      element.textContent = Math.floor(easeOutQuad * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Observe stats/numbers for animation
  const stats = document.querySelectorAll("[data-count]");
  
  if (stats.length > 0) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const endValue = parseInt(target.dataset.count, 10);
          animateValue(target, 0, endValue, 1500);
          statsObserver.unobserve(target);
        }
      });
    });
    
    stats.forEach((stat) => statsObserver.observe(stat));
  }
});