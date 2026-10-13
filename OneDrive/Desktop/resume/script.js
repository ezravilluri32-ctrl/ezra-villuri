/* =========================================================
   Ezra Villuri — Portfolio interactions
   Motion is progressive, purposeful, and respects system settings.
   ========================================================= */

(() => {
  const root = document.documentElement;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  const setMenuState = (isOpen) => {
    if (!menuToggle || !navLinks) return;
    navLinks.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  };

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      setMenuState(!navLinks.classList.contains("open"));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMenuState(false);
    });

    document.addEventListener("click", (event) => {
      if (!navLinks.classList.contains("open")) return;
      if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        setMenuState(false);
      }
    });
  }

  const navbar = document.querySelector(".navbar");
  const progressBar = document.querySelector(".scroll-progress span");
  let scrollFrame;

  const updateScrollUI = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? Math.min(window.scrollY / scrollableHeight, 1) : 0;

    if (progressBar) progressBar.style.transform = "scaleX(" + progress + ")";
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 28);
    scrollFrame = undefined;
  };

  const requestScrollUpdate = () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(updateScrollUI);
  };

  window.addEventListener("scroll", requestScrollUpdate, { passive: true });
  window.addEventListener("resize", requestScrollUpdate, { passive: true });
  updateScrollUI();

  const navAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const sections = document.querySelectorAll("section[id]");

  const setActiveLink = (id) => {
    navAnchors.forEach((anchor) => {
      const isActive = anchor.getAttribute("href") === "#" + id;
      anchor.classList.toggle("active", isActive);
      if (isActive) {
        anchor.setAttribute("aria-current", "page");
      } else {
        anchor.removeAttribute("aria-current");
      }
    });
  };

  if ("IntersectionObserver" in window && sections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const id = anchor.getAttribute("href");
      const target = id ? document.querySelector(id) : null;
      if (!target) return;

      event.preventDefault();
      setMenuState(false);
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  });

  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    const revealTargets = [];

    const addRevealGroup = (selector, delay = 0, stagger = 80, fadeOnly = false) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        element.classList.add("reveal");
        if (fadeOnly) element.classList.add("reveal--fade");
        element.dataset.revealDelay = String(delay + index * stagger);
        revealTargets.push(element);
      });
    };

    addRevealGroup(
      ".hero .eyebrow, .hero h1, .hero .hero-text, .hero .hero-actions, .hero .quick-stats",
      0,
      85
    );
    addRevealGroup(".hero-card", 190, 0, true);
    addRevealGroup(".section-heading", 0, 0);
    addRevealGroup(".about-copy, .competency-box", 55, 105);
    addRevealGroup(".skills-grid .skill-card", 25, 75);
    addRevealGroup(".soft-skills", 70, 0);
    addRevealGroup(".timeline-item", 25, 85);
    addRevealGroup(".project-card", 25, 110);
    addRevealGroup(".education-card", 25, 85);
    addRevealGroup(".declaration-section", 0, 0);
    addRevealGroup(".contact-content, .contact-card", 25, 120);

    root.classList.add("motion-ready");

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          observer.unobserve(entry.target);
          const delay = Number(entry.target.dataset.revealDelay || 0);
          window.setTimeout(() => {
            entry.target.classList.add("revealed");
            // Restore each component's own hover transition after its entrance.
            window.setTimeout(() => entry.target.classList.remove("reveal", "reveal--fade"), 700);
          }, delay);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealTargets.forEach((target) => revealObserver.observe(target));

    const skillsSection = document.querySelector("#skills");
    const meterObserver = new IntersectionObserver(
      (entries, observer) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        document.querySelectorAll(".meter").forEach((meter) => meter.classList.add("is-filled"));
        observer.disconnect();
      },
      { threshold: 0.28 }
    );

    if (skillsSection) meterObserver.observe(skillsSection);
  }

  const heroCard = document.querySelector(".hero-card");
  const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;

  if (heroCard && supportsFinePointer && !prefersReducedMotion) {
    let tiltFrame;
    let tiltX = 0;
    let tiltY = 0;

    const paintTilt = () => {
      heroCard.style.setProperty("--tilt-x", tiltX + "deg");
      heroCard.style.setProperty("--tilt-y", tiltY + "deg");
      tiltFrame = undefined;
    };

    const requestTilt = () => {
      if (!tiltFrame) tiltFrame = window.requestAnimationFrame(paintTilt);
    };

    heroCard.addEventListener("pointermove", (event) => {
      const bounds = heroCard.getBoundingClientRect();
      const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
      const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

      tiltX = -vertical * 3;
      tiltY = horizontal * 3;
      requestTilt();
    });

    heroCard.addEventListener("pointerleave", () => {
      tiltX = 0;
      tiltY = 0;
      requestTilt();
    });
  }
})();
