(() => {
  const name = "Michael Mansour";
  const tagline = "Software Developer | UCLA Mathematics Alum";
  const typewriterEl = document.getElementById("typewriter");
  const subtitleEl = document.getElementById("subtitle");
  const heroLinks = document.getElementById("hero-links");
  const avatar = document.getElementById("avatar");
  const nav = document.getElementById("nav");
  const main = document.getElementById("main-content");
  const footer = document.getElementById("footer");

  if (subtitleEl) subtitleEl.textContent = tagline;

  // Typewriter flow only runs on Home (the only page with #typewriter).
  if (!typewriterEl) return;

  let i = 0;
  const speed = 90;

  function type() {
    if (i < name.length) {
      typewriterEl.textContent += name.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      typewriterEl.classList.add("done");
      revealContent();
    }
  }

  function reveal(el, delay) {
    if (!el) return;
    setTimeout(() => {
      el.classList.remove("hidden");
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.style.pointerEvents = "auto";
    }, delay);
  }

  function revealContent() {
    setTimeout(() => {
      subtitleEl?.classList.add("visible");
      heroLinks?.classList.add("visible");
      avatar?.classList.add("visible");
    }, 300);

    reveal(nav, 600);
    reveal(main, 900);
    reveal(footer, 1100);
  }

  setTimeout(type, 500);
})();
